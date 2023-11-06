import { Card } from 'antd';
const { Meta } = Card;
import './gamesList.css'
import { Link } from 'react-router-dom';

const GamesList = ({my_games}) => {
    
    return (
      <div className='row'>
            {my_games.map(game => (
            <Link className='col-3 text-center text-decoration-none' to={`/item/${game.id}`}>
            <Card
              key={game.id}
              hoverable
              cover={<img alt={game.id} src={game.background_image} />}
            >
              {game.metacritic == null ? (
                <Meta title={game.name} description={`Puntaje Metacritic: (Sin Calificar)`} />
              ) : (
                <Meta title={game.name} description={`Puntaje Metacritic: ${game.metacritic}/100`} />
              )}
              <p className='more_info text-decoration-underline'>Más Info/Comprar</p>
            </Card>
            </Link>
        ))}
      </div>
    )
}

export default GamesList


