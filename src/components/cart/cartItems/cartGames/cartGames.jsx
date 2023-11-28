import React, { useState } from 'react';
import './cartGames.css'
import { Link } from 'react-router-dom';

const CartGames = ({cart_games}) => {

    const [games_tobuy, setGames_tobuy] = useState (cart_games)

    return (

        <>
            {games_tobuy.length > 0 && <h2 className="items_title text-center">Tus Videojuegos:</h2>}

            {games_tobuy.map((game, game_index) => (
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
                        <img onClick={() => {
                            let games_tubuy2 = [...games_tobuy]
                            games_tubuy2.splice(game_index, 1)
                            setGames_tobuy(games_tubuy2)}} className='delete_game_icon' src={'/public/images/delete_game_icon.png'} alt="delete_icon" />
                    </div>
                </div>))
            }
        </>
    )
}

export default CartGames











