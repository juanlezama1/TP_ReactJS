const GoogleMap = () => {

    return (
        <div className="footer_div_dondeestamos col-lg-5">
            <div className="footer_div_dondeestamos_info">
                <h2 className="footer_title text-center">¿Dónde estamos?</h2>
                <p className="footer_dondeestamos_info text-center">Manuel Arce 1085<br/>
                Liniers<br/
                >C.A.B.A.
                </p>
            </div>

            <iframe className="footer_map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13128.506633173733!2d-58.5278305!3d-34.6515041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22e2b325a8db1bdb%3A0xf40d0877a29431fa!2sThe%20Gamer%20Shop!5e0!3m2!1ses-419!2sar!4v1699224237778!5m2!1ses-419!2sar" width="600" height="450" style={{border: '0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default GoogleMap