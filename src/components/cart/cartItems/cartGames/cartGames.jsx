import React from 'react';
import './cartGames.css'

const CartGames = ({cart_games}) => {
    
    return (

        <>
            {cart_games.length > 0 && <h2 className="items_title text-center">Tus Videojuegos:</h2>}

            {cart_games.map((game) => (
                <div className='row game_item'>
                    <div className="col-3 d-flex align-items-center">
                        <img className='game_cart_image' src={game.game_image} alt="game_image" />
                    </div>

                   <div className="col-8">
                        <div className='d-flex flex-column align-items-start justify-content-between'>
                            <h3 className='col-12'>{game.game_name}</h3>
                            <p className='col-12'>$ {game.game_price} x {game.game_quantity}</p>
                        </div>
                    </div>

                    <div className="col-1 d-flex align-items-center delete_game_icon_div">
                        <img className='delete_game_icon' src={'/public/images/delete_game_icon.png'} alt="delete_icon" />
                    </div>
                </div>))
            }
        </>
    )
}

export default CartGames











