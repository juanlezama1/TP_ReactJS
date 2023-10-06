import CartWidget from "../CartWidget/CartWidget"
import './navbar.css'

const Navbar = () => {
    return (
    <>
    <header className="row">
    <div className="header_index col-12">
    <a classNameName="header_image_link" href="index.html"><img className="header_image rounded" src="../public/images/navbar-image.png" alt="logo_gamershop"/></a> 
    <nav className="header_navbar">
        <ul className="header_navbar_list">
            <li><a className="header_navbar_item" href="./pages/about_us.html">LOG IN</a></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
    </div>
    </header>
    </>
    )
}

export default Navbar






