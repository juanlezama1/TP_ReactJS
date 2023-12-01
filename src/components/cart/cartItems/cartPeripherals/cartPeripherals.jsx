import React, { useContext, useState } from 'react';
import './cartPeripherals.css'
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { CartContext } from '../../../context/cartContext';

const CartPeripherals = () => { 

    const [messageApi8, contextHolder8] = message.useMessage();
    const {cart, cart_qty, setCart, setCartQty} = useContext(CartContext)

    let peripherals_cart = cart.filter((item) => item.item_type == "peripheral")

    if (peripherals_cart.length > 0)

    {
        return (
            <>
                {contextHolder8}
                <h2 className="items_title2 text-center">Tus Accesorios:</h2>

                {peripherals_cart.map((peripheral, peripheral_index) => (
                    <div key={peripheral_index} className='row peripheral_item'>
                        <div className="col-3 d-flex align-items-center">
                            <img className='peripheral_cart_image' src={peripheral.item_image} alt="peripheral_image" />
                        </div>

                        <div className="col-8">
                                <div className='d-flex flex-column align-items-start justify-content-between'>
                                    <h3 className='col-12 game_title'>{peripheral.item_name}</h3>
                                    <p className='col-12 price'>$ {peripheral.item_price} x {peripheral.item_quantity}</p>
                                </div>
                        </div>

                        <div className="col-1 d-flex align-items-center delete_peripheral_icon_div">
                            <Link><img onClick={() => {
 
                                messageApi8.open({
                                    type: 'success',
                                    content: '¡Accesorio borrado del carrito!',
                                })

                                let new_cart_quantity = cart_qty - peripheral.item_quantity
                                let new_cart = cart.filter((peripheral2) => peripheral2.item_name != peripheral.item_name)

                                setCartQty(new_cart_quantity)
                                setCart(new_cart)

                                }} className='delete_peripheral_icon' src={'/public/images/general_images/delete_game_icon.png'} alt="delete_icon" /></Link>
                        </div>
                    </div>))
                }
            </> 
        )
    }
}

export default CartPeripherals