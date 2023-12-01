import './cartEmpty.css'

const CartEmpty = () => {

    return (
        <div className="row background">

            <div className="col-7 text-center">
                <img style={{height: '500px'}} src="/public/images/backgrounds/noproducts.png" alt="no_products" />
            </div>

            <h1 className="col-5 d-flex align-items-center texto_gamer">
                NINGUN <br/>PRODUCTO <br/>SELECCIONADO!
            </h1>
        </div>
    )
}

export default CartEmpty