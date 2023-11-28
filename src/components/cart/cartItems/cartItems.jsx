import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import CartGames from "./cartGames/cartGames"
import CartPeripherals from "./cartPeripherals/cartPeripherals"

const CartItems = () => {

    const {cart, cart_qty, setCart, setCartQty} = useContext(CartContext)

    return (

        <>
            <CartGames />
            <CartPeripherals />
        </>
    )
}

export default CartItems