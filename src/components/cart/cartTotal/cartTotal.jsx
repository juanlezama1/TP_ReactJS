import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import './cartTotal.css'

const CartTotal = () => {

    const {cart} = useContext(CartContext)

    let total = 0
    cart.forEach ((product) => {total += product.item_price*product.item_quantity})
    let total2 = total.toLocaleString()
    let iva = total*(21/100).toFixed(2)
    // let imp_pais = total.

    return (

        <>
            <div className="total_sector">
                <h2>Subtotal: $ {total2}</h2>
                <h3>IVA (21%): {iva}</h3>
                <h3>Imp. País (35%): {}</h3>
            </div>
        </>
    )

}

export default CartTotal