import React, { useContext, useState } from 'react';
import { Button, Spin, Checkbox, Form, Input } from 'antd';
import './cartForm.css'
import { CartContext } from '../../context/cartContext';
import { addDoc, collection } from "firebase/firestore"
import { db } from '../../../firebase/client';
import {useNavigate} from 'react-router-dom'

const CartForm = () => {

    const {cart, cart_qty, setCart, setCartQty, order, setOrder} = useContext(CartContext)
    const navigate = useNavigate ()

    const onFinish = (values) => {

        let total2 = 0
        cart.forEach ((product) => {total2 += product.item_price*product.item_quantity})
    
        let my_order = {
            buyer: {name: values.buyer_name, phone: values.buyer_phone, email: values.buyer_email},
            items: cart,
            total: total2}

        setOrder(my_order)

        navigate ('/order_confirmation')
    }

    return (

        <>
            <Form layout='vertical' name="basic" labelAlign="right" labelCol={{span: 16}} wrapperCol={{span: 16}} style={{maxWidth: 600}} initialValues={{remember: true}} onFinish={onFinish} autoComplete="off">
                <Form.Item label="Nombre Completo" name="buyer_name" rules={[{required: true, message: 'Nombre completo requerido!'}]}>
                    <Input className="input_form" placeholder='Nombre y apellido'/>
                </Form.Item>

                <Form.Item label="Teléfono/Celular" name="buyer_phone" rules={[{required: true, message: 'Número de teléfono o celular requerido!'}]}>
                    <Input className="input_form" placeholder='Teléfono' />
                </Form.Item>

                <Form.Item label="Email" name="buyer_email" rules={[{required: true, message: 'Email requerido!'}, {type: 'email', message: 'Formato de correo inválido'}]}>
                    <Input className="input_form" placeholder='ejemplo@thegamershop.com' />
                </Form.Item>
                
                <h1 className='payment_methods_title'>Métodos de pago aceptados:</h1>

                <div className="row align-items-center">
                    <div className="col-4">
                        <img style={{height: '50px'}} src='/public/images/payment_methods/mercado_pago.png'></img>
                    </div>

                    <div className="col-4">
                        <img style={{height: '140px'}} src='/public/images/payment_methods/visa.png'></img>
                    </div>

                    <div className="col-4">
                        <img style={{height: '80px'}} src='/public/images/payment_methods/mastercard.png'></img>
                    </div>
                </div>


                <Form.Item name="buyer_email_notifications" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                    <Checkbox>Deseo recibir ofertas de juegos y accesorios</Checkbox>
                </Form.Item>
            
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">Confirmar pedido y proceder al pago</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default CartForm











  
