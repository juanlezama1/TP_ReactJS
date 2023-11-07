import { Card } from "antd"
import { Meta } from "antd/es/list/Item"
import { Link } from "react-router-dom"

const ListSingleConsole = ({name, image, developer}) => {

    return (
        <Link to={'/'} className='Card col-3 text-center'>
            <Card hoverable cover={<img className='category_image' alt="consolas" src='/public/images/game-genres.png' />}>
                <Meta title="Juegos por género" description={`Acción, Aventura, RPG, Puzzle, etc.`} />
                <p className='more_info text-decoration-underline'>Ver juegos!</p>
            </Card>
        </Link>
    )
}

export default ListSingleConsole





