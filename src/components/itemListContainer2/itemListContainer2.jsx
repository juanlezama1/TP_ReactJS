import { useEffect, useState } from "react"
import {db} from "../../firebase/client"
import { collection, getDocs, query, where } from "firebase/firestore"
import LoadingSpinner2 from "./loadingSpinner2/loadingSpinner2"
import ProductsList from "./productsList/productsList"
import { useParams } from "react-router-dom"

const ItemListContainer2 = () => {

    const {category_id} = useParams () //Toma el valor undefined si no llega, y el category_id en caso contrario
    const all_products = collection(db, "products")
    let my_products
    let loading_text = "CARGANDO PRODUCTOS"

    category_id ? 
    
    (
        my_products = query(all_products, where("categoryID", "==", category_id)),
        loading_text = "CARGANDO " + category_id.toUpperCase())
    : (my_products = all_products)

    const [products_list, setProductsList] = useState ([])
    const [loading, setLoading] = useState (true)

    useEffect(() => {

        getDocs(my_products)
        .then (snapshot => setProductsList(snapshot.docs.map(document => ({id: document.id, ...document.data()}))))
        .catch (error => console.error(error))
        .finally(() => setLoading(false))
    }, [category_id])

    return (

        loading? <LoadingSpinner2 text={loading_text} /> : <ProductsList products={products_list} />
    )
}

export default ItemListContainer2