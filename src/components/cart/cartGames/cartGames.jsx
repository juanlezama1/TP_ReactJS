import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const CartGames = () => {

    const {cart, cart_qty, setCart, setCartQty} = useContext(CartContext)

    console.log(cart)
    return (

        <>
            <div className="col-12">
                <h2>Juegos seleccionados:</h2>
                <img src={cart[0].item_image} alt="" />
            </div>
        </>
    )
}

export default CartGames