import { Card } from "antd"
import { Meta } from "antd/es/list/Item"
import { Link } from "react-router-dom"
import './listSingleConsole.css'

const ListSingleConsole = ({name, image, developer, console_keyword}) => {

    return (
        <Link to={`/games/platform/${console_keyword}`} className='Card col-3 text-center text-decoration-none'>
            <Card hoverable cover={<img className='console_image' alt={name} src={`/public/images/consoles/${image}`} />}>
                <Meta title={name} description={developer} />
                <p className='more_info text-decoration-underline'>Ver juegos de {name}!</p>
            </Card>
        </Link>
    )
}

export default ListSingleConsole





