import { Avatar, Badge, Space } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const CartWidget = () => {

  const {cart_qty} = useContext(CartContext)

  return (

  <Space size="middle">
    <Badge count={cart_qty} showZero>
        <a href="#">
          <Avatar className="header_navbar_item" size="large" icon={<ShoppingCartOutlined />} />
        </a>
    </Badge>
  </Space>
);

}

export default CartWidget