import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import './cartTotal.css'

const CartTotal = () => {

    const {cart} = useContext(CartContext)

    let total = 0
    cart.forEach ((product) => {total += product.item_price*product.item_quantity})

    let iva = total*(21/100)
    let imp_pais = total*(30/100)
    let imp_servdigitales = total*(8/100)

    return (

        <>
            <div className="total_sector">
                <h2>Subtotal: $ {total.toFixed(2)}</h2>
                <h3>IVA (21%): $ {iva.toFixed(2)}</h3>
                <h3>Imp. País (35%): {imp_pais.toFixed(2)}</h3>
                <h3>Imp. Servicios Digitales (8%): {imp_servdigitales.toFixed(2)}</h3>

                <h1 className="total">TOTAL: $ {total+iva+imp_pais+imp_servdigitales}</h1>
            </div>
        </>
    )

}

export default CartTotal