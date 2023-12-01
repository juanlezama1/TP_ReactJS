import './navbar.css'
import React from 'react';
import { Badge, Input, Space } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import CartWidget from './cartWidget/cartWidget';

const { Search } = Input;

const Navbar = () => {

  const navigate = useNavigate ()

    return (
    <>
    <header className="row navbar m-0 p-0">
    <div className="header_index col-12">
    <Link to={'/'}><img className="header_image rounded" src="/public/images/general_images/navbar-image.png" alt="logo_gamershop"/></Link>
    <nav className="header_navbar">
        <ul className="header_navbar_list">

        <Space direction="vertical">
            <Search
            placeholder="Buscar juegos..."
            onSearch={(value) => {navigate(`/games/search/${value}`)}}
            style={{
                width: 200,
            }}
            />
        </Space>

            <li><Link className="header_navbar_item" to={'/peripherals'}><Badge offset={[-37, -14]} count={"¡NUEVO!"}>PERIFÉRICOS</Badge></Link></li>
            <li><Link className="header_navbar_item" to={'/categories'}>CATEGORÍAS</Link></li>
            <li><Link className="header_navbar_item" to={'/construction'}>LOG IN</Link></li>
            <li><Link to={'/cart'}><CartWidget /></Link></li>
        </ul>
    </nav>
    </div>
    </header>
    </>
    )
}

export default Navbar















