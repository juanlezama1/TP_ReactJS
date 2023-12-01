import React, { useContext, useState } from 'react';
import './cartGames.css'
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { CartContext } from '../../../context/cartContext';

const CartGames = () => {

    const [messageApi3, contextHolder3] = message.useMessage();
    const {cart, cart_qty, setCart, setCartQty} = useContext(CartContext)

    let games_cart = cart.filter((item) => item.item_type == "game")

    if (games_cart.length > 0)

    {
        return (
            <>
                {contextHolder3}
                <h2 className="items_title text-center">Tus Videojuegos:</h2>
 
                {games_cart.map((game, game_index) => (
                    <div key={game_index} className='row game_item'>
                        <div className="col-3 d-flex align-items-center">
                            <img className='game_cart_image' src={game.item_image} alt="game_image" />
                        </div>

                        <div className="col-8">
                                <div className='d-flex flex-column align-items-start justify-content-between'>
                                    <h3 className='game_title col-12'>{game.item_name}</h3>
                                    <p className='col-12 price'>$ {game.item_price} x {game.item_quantity}</p>
                                </div>
                        </div>

                        <div className="col-1 d-flex align-items-center delete_game_icon_div">
                            <Link><img onClick={() => {
 
                                messageApi3.open({
                                    type: 'success',
                                    content: '¡Juego borrado del carrito!',
                                })

                                let new_cart_quantity = cart_qty - game.item_quantity
                                let new_cart = cart.filter((game2) => game2.item_name != game.item_name)

                                setCartQty(new_cart_quantity)
                                setCart(new_cart)

                                }} className='delete_game_icon' src={'/public/images/general_images/delete_game_icon.png'} alt="delete_icon" /></Link>
                        </div>
                    </div>))
                }
            </> 
        )
    }
}

export default CartGames