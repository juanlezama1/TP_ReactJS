import React, { useState } from 'react';
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import './peripheralBuy.css'
import { Button } from 'antd';

const PeripheralBuy = ({stock}) => {

    const {setCartQty, setCart, cart_qty, cart} = useContext(CartContext)
    const [units, setUnits] = useState(1)

    return (

        <>
            <h1 className="text-center buying_sector">¡OBTENLO AHORA!</h1>
            <div className="row">
                <div className="col-6 buttons_sector d-flex align-items-center justify-content-end">
                    <Button onClick={() => 
                        (units > 1) && setUnits(units-1)} className="boton" type="primary" shape="circle" size='large'>
                        -
                    </Button>

                    <p className='m-0'><b>{units} UNIDADES</b></p>

                    <Button onClick={() => 
                        (units <stock) && setUnits(units+1)} className="boton" type="primary" shape="circle" size='large'>
                        +
                    </Button>
                </div>

                <div className="col-6 d-flex flex-column confirmation_sector">
                    <Button className="confirmation_button" type="primary" size='large'>
                        AÑADIR AL CARRITO
                    </Button>

                    <Button className="confirmation_button" type="primary" size='large'>
                        COMPRAR YA
                    </Button>
                </div>
            </div>
        </>
    )
}

export default PeripheralBuy
















