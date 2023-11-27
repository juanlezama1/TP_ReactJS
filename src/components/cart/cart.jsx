import { useContext } from "react"
import { CartContext } from "../context/cartContext"

const Cart = () => {

    const {cart, cart_qty, setCart, setCartQty} = useContext(CartContext)

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1>Resumen del pedido:</h1>
                </div>
            </div>
        </>
    )
}

export default Cart