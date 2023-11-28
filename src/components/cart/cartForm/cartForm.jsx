import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import './cartForm.css'

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

const CartForm = () => {

    return (

        <Form layout='vertical' name="basic" labelAlign="right" labelCol={{span: 16}} wrapperCol={{span: 16}} style={{maxWidth: 600}} initialValues={{remember: true}} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <Form.Item label="Nombre Completo" name="buyer_name" rules={[{required: true, message: 'Nombre completo requerido!'}]}>
                <Input placeholder='Nombre y apellido'/>
            </Form.Item>

            <Form.Item label="Teléfono/Celular" name="buyer_phone" rules={[{required: true, message: 'Número de teléfono o celular requerido!'}]}>
                <Input placeholder='Teléfono' />
            </Form.Item>

            <Form.Item label="Email" name="buyer_email" rules={[{required: true, message: 'Email requerido!'}, {type: 'email', message: 'Formato de correo inválido'}]}>
                <Input placeholder='ejemplo@thegamershop.com' />
            </Form.Item>
            
            <h1 className='payment_methods_title'>Métodos de pago aceptados:</h1>

            <div className="row align-items-center">
                <div className="col-4">
                    <img style={{height: '50px'}} src='/public/images/mercado_pago.png'></img>
                </div>

                <div className="col-4">
                    <img style={{height: '140px'}} src='/public/images/visa.png'></img>
                </div>

                <div className="col-4">
                    <img style={{height: '80px'}} src='/public/images/mastercard.png'></img>
                </div>
            </div>


            <Form.Item name="buyer_email_notifications" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                <Checkbox>Deseo recibir ofertas de juegos y accesorios</Checkbox>
            </Form.Item>
        
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">Confirmar pedido y proceder al pago</Button>
            </Form.Item>
        </Form>
    )
}

export default CartForm