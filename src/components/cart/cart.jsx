import { useContext } from "react"
import { CartContext } from "../context/cartContext"

const Cart = () => {

    const {cart_qty, cart} = useContext(CartContext)

    return (
        <p>Hola desde el Cart! Tu carrito se compone de: {cart.map(elemento => <li>Ítem: {elemento.title}Cantidad: {elemento.qty}Precio: {elemento.price}</li>)}</p>
    )

}

export default Cart