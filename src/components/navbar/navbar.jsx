import CartWidget from "../CartWidget/CartWidget"
import './navbar.css'

const Navbar = () => {
    return (
    <>
    <header className="row">
    <div className="header_index col-12">
    <a classNameName="header_image_link" href="index.html"><img className="header_image rounded" src="./images/footer_logo.png" alt="logo_naturally"/></a> 
    <nav className="header_navbar">
        <ul className="header_navbar_list">
            <li><a className="header_navbar_item" href="./pages/menu.html">MENÚ COMPLETO</a></li>
            <li><a className="header_navbar_item" href="./pages/build_your_salad.html">ARMÁ TU ENSALADA</a></li>
            <li><a className="header_navbar_item" href="./pages/about_us.html">¿QUIÉNES SOMOS?</a></li>
            <li><a className="header_navbar_item" href="./pages/contact.html">CONTACTO</a></li>
        </ul>
    </nav>
    </div>
    </header>
    <CartWidget />
    </>
    )
}

export default Navbar






