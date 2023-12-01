import { Card } from 'antd';
const { Meta } = Card;
import './productsList.css'
import { Link } from 'react-router-dom';

const ProductsList = ({products}) => {
    
    return (
      <div className='row m-1'>
            {products.map(product => (
              <Link key={product.id} className='col-3 text-center text-decoration-none' to={`/peripherals/item/${product.id}`}>
                <div className='Card'>
                  <Card key={product.id} hoverable cover={<img className='product_image' alt={product.title} src={product.image} />}>
                    <Meta title={product.title} description={`Precio: $${product.price}`} />
                    <p className='more_info text-decoration-underline'>Más Info/Comprar</p>
                  </Card>
                </div>
              </Link>
            ))}
      </div>
    )
}

export default ProductsList
