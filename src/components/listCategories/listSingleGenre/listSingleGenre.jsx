import { Card } from "antd"
import { Meta } from "antd/es/list/Item"
import { Link } from "react-router-dom"
import './listSingleGenre.css'

const ListSingleGenre = ({genre, image}) => {

    return (
        <Link to={'/'} className='Card col-3 text-center text-decoration-none'>
            <Card hoverable cover={<img className='console_image' alt={genre} src={`/public/images/${image}`} />}>
                <Meta title={genre} />
                <p className='more_info text-decoration-underline'>Ver juegos de {genre}!</p>
            </Card>
        </Link>
    )
}

export default ListSingleGenre
