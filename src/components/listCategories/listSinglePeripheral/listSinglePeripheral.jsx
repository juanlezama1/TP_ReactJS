import { Card } from "antd"
import { Meta } from "antd/es/list/Item"
import { Link } from "react-router-dom"
import './listSinglePeripheral.css'

const ListSinglePeripheral = ({name, image, category_id}) => {

    return (
        <Link to={'/peripherals/categories/' + category_id} className='Card col-3 text-center text-decoration-none'>
            <Card hoverable cover={<img className='peripheral_image' alt={name} src={`/public/images/filters/${image}`} />}>
                <Meta title={name} />
                <p className='more_info text-decoration-underline'>Ver {name} disponibles!</p>
            </Card>
        </Link>
    )
}

export default ListSinglePeripheral