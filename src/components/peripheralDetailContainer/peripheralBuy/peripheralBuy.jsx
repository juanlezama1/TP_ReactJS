import React, { useState } from 'react';
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import './peripheralBuy.css'
import { Button, message } from 'antd';

const PeripheralBuy = ({id, stock, image, title, price}) => {

    const {setCartQty, setCart, cart_qty, cart} = useContext(CartContext)
    const [units, setUnits] = useState(1)
    const [messageApi5, contextHolder5] = message.useMessage();

    const add_tocart = () => {

        let cart2 = [...cart]
        let peripheral_contained = false
    
        for (let index = 0; index < cart2.length; index++)
    
        {
          if (cart2[index].item_name === title)  // Caso de que ya tengo el elemento en carrito
    
          {
    
            peripheral_contained = true
    
            if (cart2[index].item_quantity + units > stock)  // Caso de que el carrito + lo que querés comprar sea mayor a tu stock disponible
    
            {
                messageApi5.open({
                type: 'error',
                content: '¡La cantidad de ítems en carrito no puede superar el stock disponible!',
                })
    
                break
            }
    
            else
    
            {
                setCartQty(parseInt(cart_qty) + parseInt(units))
                cart2[index].item_quantity += parseInt(units),
                setCart(cart2)
    
                messageApi5.open({
                    type: 'success',
                    content: '¡Accesorio agregado al carrito con éxito!',
                  })
    
                break
            }
          }
        }
    
        if (!peripheral_contained)
    
        {
            cart2.push({item_id: id, item_image: image, item_name: title, item_price: price, item_quantity: parseInt(units), item_type: "peripheral"})
            setCartQty(parseInt(cart_qty) + parseInt(units))
            setCart(cart2)
    
            messageApi5.open({
                type: 'success',
                content: '¡Accesorio agregado al carrito con éxito!',
            })
        }
     
        setTimeout(messageApi.destroy, 1500);
    }

    return (

        <>
            {contextHolder5}
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
                    <Button onClick={add_tocart} className="confirmation_button" type="primary" size='large'>
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