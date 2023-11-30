import { Children, createContext, useState } from "react"

export const CartContext = createContext()

const CartComponentContext = ({children}) => {

const [cart_qty, setCartQty] = useState (0)
const [cart, setCart] = useState ([])
const [order, setOrder] = useState (null)
 
    return (
        <CartContext.Provider value={{cart_qty, cart, order, setCartQty, setCart, setOrder}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartComponentContext