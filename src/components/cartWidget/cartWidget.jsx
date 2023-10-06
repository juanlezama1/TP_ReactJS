import { Avatar, Badge, Space } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';



const CartWidget = () => {

    return (

  <Space size="middle">
    <Badge count={5}>
      <Avatar shape="none" size="large" icon={<ShoppingCartOutlined />} />
    </Badge>
    
  </Space>
);

        // <a className="header_navbar_item" href="./pages/about_us.html">CARRITO DE COMPRAS</a>
}

export default CartWidget