import { Children, createContext, useState } from "react"

export const CartContext = createContext()

const CartComponentContext = ({children}) => {

const [cart_qty, setCartQty] = useState (0)
const [cart, setCart] = useState ([{title: 'lampara', qty: 3, price: 9000}])

// El objeto cart tiene que tener el primer key como 'buyer' y adentro se compone de otro objeto con name/phone/email
// El segundo key son items donde está el arreglo de objetos agregados, evitar que se repitan. 
// El tercer ítem es el total monetario, asiq hay que ir recorriendo y multiplicando. 

    return (
        <CartContext.Provider value={{cart_qty, cart, setCartQty, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartComponentContext