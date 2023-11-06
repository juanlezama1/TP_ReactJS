import { Card } from 'antd';
const { Meta } = Card;
import './gamesList.css'

const GamesList = ({my_games}) => {
    
    return (
        <div className='row'>
        {my_games.map(game => (
            <Card
              key={game.id}
              hoverable
              cover={<img alt={game.id} src={game.background_image} />}
              className='col-3'
            >
              {game.metacritic == null ? (
                <Meta title={game.name} description={`Puntaje Metacritic: (Sin Calificar)`} />
              ) : (
                <Meta title={game.name} description={`Puntaje Metacritic: ${game.metacritic}/100`} />
              )}
              <p className='more_info'>Más Info/Comprar</p>
            </Card>
        ))}
        </div>
    )
}

export default GamesList


