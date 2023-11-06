import { Avatar, Badge, Space } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';

const CartWidget = () => {

    return (

  <Space size="middle">
    <Badge count={0} showZero>
        <a href="#">
            <Avatar className="header_navbar_item" size="large" icon={<ShoppingCartOutlined />} />
        </a>
    </Badge>
  </Space>
);

}

export default CartWidget