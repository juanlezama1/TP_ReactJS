import { useContext, useEffect, useState } from 'react'
import './finalResult.css'
import { CartContext } from '../context/cartContext'
import { addDoc, collection, doc, getDoc } from "firebase/firestore"
import { db } from '../../firebase/client'
import FinalSpinner from './finalSpinner/finalSpinner'
import FinalDescription from './finalDescription/finalDescription'

let my_order_id

const Final_Result = () => {

    const {order, setOrder, setCart, setCartQty} = useContext(CartContext)
    const [loading, setLoading] = useState (true)

    useEffect(() => {

        if (order == null)
        
        {
            console.error ("ORDEN NO CARGADA")
            setLoading(false)
        }

        else

        {
            const ordenes_de_compra = collection (db, "buying_orders")

            addDoc(ordenes_de_compra, order)
            .then ((order_id) => {
                
                setCartQty(0)
                setCart([])
                setOrder(null)
                my_order_id = order_id
                setLoading(false)
            })
    
            .catch((error) => console.error(error))
        }
    }, [])

    return (

<>
            {loading ? <FinalSpinner /> : <FinalDescription order_id={my_order_id} />}
        </>
    )
}

export default Final_Result




        
