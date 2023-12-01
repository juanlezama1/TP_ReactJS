import { Link } from "react-router-dom"
import './footer.css'
import Rights from "./rights/rights"
import Whatsapp from "./whatsapp/whatsapp"
import GoogleMap from "./googleMap/googleMap"
import RRSS from "./rrss/rrss"
import Info from "./info/info"

const Footer = () => {

    return (

        <>
        <footer className="footer row">

            <div className="footer_div_image col-lg-2 d-flex flex-wrap align-items-center">
                <img className = "footer_image img-fluid" src="/public/images/general_images/navbar-image.png" alt="logo_thegamershop"/>
            </div>

            <Info />
            <RRSS />
            <GoogleMap />

        </footer>

        <Rights />
        <Whatsapp />
        </>
    )
}

export default Footer