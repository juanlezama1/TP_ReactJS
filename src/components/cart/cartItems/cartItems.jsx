import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import CartGames from "./cartGames/cartGames"
import CartPeripherals from "./cartPeripherals/cartPeripherals"

const CartItems = () => {

    const {cart, cart_qty, setCart, setCartQty} = useContext(CartContext)

    let games_cart = []
    let peripherals_cart = []

    cart.forEach((cart_item) => {
        cart_item.item_type === "game" ? games_cart.push({game_name: cart_item.item_name, game_image: cart_item.item_image, game_price: cart_item.item_price, game_quantity: cart_item.item_quantity}) : peripherals_cart.push({peripheral_name: cart_item.item_name, peripheral_image: cart_item.item_image, peripheral_price: cart_item.item_price, peripheral_quantity: cart_item.item_quantity})
    })

    return (

        <>
            <CartGames cart_games = {games_cart}/>
            <CartPeripherals cart_peripherals = {peripherals_cart}/>
        </>
    )
}

export default CartItems


{/* <div className="row">
<div className="col-12">
    <h1 className="text-center">Resumen del pedido:</h1>
</div>
</div> */}