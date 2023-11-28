import React from 'react';
import './cartGames.css'

const CartGames = ({cart_games}) => {
    
    return (

        <>
            {cart_games.length > 0 && <h2 className="items_title text-center">Tus Videojuegos:</h2>}

            {cart_games.map((game) => (
                <div className='row'>
                    <div className="col-3">
                        <img src={game.game_image} style={{width: '100%'}} alt="game_image" />
                    </div>

                   <div className="col-8">
                        <div className='d-flex flex-column align-items-start justify-content-between'>
                            <h3 className='col-12'>{game.game_name}</h3>
                            <p className='col-12'>$ {game.game_price} x {game.game_quantity}</p>
                        </div>
                    </div>

                    <div className="col-1">
                        X
                    </div>
                </div>))
            }
        </>
    )
}

export default CartGames











