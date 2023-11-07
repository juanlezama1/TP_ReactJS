import './navbar.css'
import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Space } from 'antd';
import { Link } from "react-router-dom";
import CartWidget from './cartWidget/cartWidget';

const { Search } = Input;

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Navbar = () => {
    return (
    <>
    <header className="row navbar m-0 p-0">
    <div className="header_index col-12">
    <Link to={'/'}><img className="header_image rounded" src="/public/images/navbar-image.png" alt="logo_gamershop"/></Link>
    <nav className="header_navbar">
        <ul className="header_navbar_list">

        <Space direction="vertical">
            <Search
            placeholder="Buscar productos..."
            onSearch={onSearch}
            style={{
                width: 200,
            }}
            />
        </Space>

            <li><Link className="header_navbar_item" to={'/category'}>CATEGORÍAS</Link></li>
            <li><Link className="header_navbar_item" to={'/construction'}>LOG IN</Link></li>
            <li><Link to={'/construction'}><CartWidget /></Link></li>
        </ul>
    </nav>
    </div>
    </header>
    </>
    )
}

export default Navbar















