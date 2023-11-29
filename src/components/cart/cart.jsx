import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import CartEmpty from "./cartEmpty/cartEmpty"
import CartTotal from "./cartTotal/cartTotal"
import CartItems from "./cartItems/cartItems"
import CartForm from "./cartForm/cartForm"
import './cart.css'

const Cart = () => {

    const {cart, cart_qty, setCart, setCartQty} = useContext(CartContext)

    return (

        <>
           {cart_qty > 0 ? (
           
           <>
            <div className="row my_cart">
                <div className="col-6">
                    <CartForm />
                </div>

                <div className="col-6">
                    <CartItems />
                    <CartTotal />
                </div>
           </div>
        </>) 
        
        : (<CartEmpty />)}
        
        </>
    )
}

export default Cart