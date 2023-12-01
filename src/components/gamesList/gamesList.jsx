import { Card } from 'antd';
const { Meta } = Card;
import './gamesList.css'
import { Link } from 'react-router-dom';

const GamesList = ({my_games}) => {
    
    return (
      <div className='row m-1'>
            {my_games.map(game => (
            <Link key={game.id} className='col-3 text-center text-decoration-none' to={`/games/item/${game.id}`}>
            <div className='Card'><Card
              key={game.id}
              hoverable
              cover={<img className='game_image' alt={game.id} src={game.background_image} />}
            >
              {game.metacritic == null ? (
                <Meta title={game.name} description={`Puntaje Metacritic: (Sin Calificar)`} />
              ) : (
                <Meta title={game.name} description={`Puntaje Metacritic: ${game.metacritic}/100`} />
              )}
              <p className='more_info text-decoration-underline'>Más Info/Comprar</p>
            </Card></div>
            </Link>
        ))}
      </div>
    )
}

export default GamesList


