const CartGames = () => {

    const {cart, cart_qty, setCart, setCartQty} = useContext(CartContext)

    return (

        <>
            <div className="col-12">
                <h2>Juegos seleccionados:</h2>
            </div>
        </>
    )
}

export default CartGames