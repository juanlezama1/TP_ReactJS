import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import CartGames from "./cartGames/cartGames"
import CartPeripherals from "./cartPeripherals/cartPeripherals"
import CartEmpty from "./cartEmpty/cartEmpty"
import CartTotal from "./cartTotal/cartTotal"
import CartForm from "./cartForm/cartForm"

const Cart = () => {

    const {cart, cart_qty, setCart, setCartQty} = useContext(CartContext)

    return (

        <>
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Resumen del pedido:</h1>
                </div>
            </div>

           {cart_qty > 0 ? (
           <>
            <CartGames />
            <CartPeripherals />
            <CartTotal />
            <CartForm />
            </>) : (<CartEmpty />)}
        
        </>
    )
}

export default Cart