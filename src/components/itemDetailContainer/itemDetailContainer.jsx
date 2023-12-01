import { useNavigate, useParams } from "react-router-dom"
import React, { useContext, useEffect, useState } from 'react'
import { Descriptions, Select, Space, Table, Tag, Button, message, Popconfirm, App } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import "./ItemDetailContainer.css"
import { CartContext } from "../context/cartContext";

const apiKey = '702be93892c341a5aa64499ef9026d16';
let buying_columns

const ItemDetailContainer = () => {

  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate ()
  const {setCartQty, setCart, cart_qty, cart} = useContext(CartContext)

  const add_tocart = (my_game) => {

    if (my_game.quantity > 0)

    {
      setCartQty(parseInt(cart_qty) + parseInt(my_game.quantity))

      let cart2 = cart
      let game_contained = false

      for (let index = 0; index < cart2.length; index++)

      {
        if (cart2[index].item_name === my_game.name)

        {
          cart2[index].item_quantity += parseInt(my_game.quantity),
          setCart(cart2)
          game_contained = true
          break
        }
      }

      !game_contained && cart2.push({item_id: game_id, item_quantity: parseInt(my_game.quantity), item_price: my_game.price, item_image: game.background_image, item_name: my_game.name, item_type: "game"})

      setCart(cart2)

      messageApi.open({
        type: 'success',
        content: '¡Juego agregado al carrito con éxito!',
        key: 1
      })
    }

    else
    
    {
      messageApi.open({
        type: 'error',
        content: '¡La cantidad especificada es inválida!',
        key: 1
      })
    }

    setTimeout(messageApi.destroy, 1500);
  };
  
  const buy_confirm = (my_game) => {

    if (my_game.quantity > 0)

    {
      messageApi.open({
        type: 'loading',
        content: 'Procesando compra...',
        duration: 0,
      });

    setCartQty(my_game.quantity)
    setCart([{item_id: game_id, item_quantity: parseInt(my_game.quantity), item_price: my_game.price, item_image: game.background_image, item_name: my_game.name, item_type: "game"}])
    
    setTimeout(() => {navigate('/cart')}, 2000);

  }

    else

    {
      messageApi.open({
        type: 'error',
        content: '¡La cantidad especificada es inválida!',
      })
    }

    setTimeout(messageApi.destroy, 2000);
  };
  
  let buying_data = []
  
    const {game_id} = useParams ()
    const [game, setGame] = useState (null)

    useEffect (() => {
    
    fetch (`https://api.rawg.io/api/games/${game_id}?key=${apiKey}`)
        .then (api_answer => api_answer.json())
        .then (api_answer_json => {
            setGame(api_answer_json)
        })
        .catch (api_error => console.log(`Error!: ${api_error}`))
    
    }, [])

    let titulo, imagen1, imagen2, fecha_lanzamiento, descripcion, puntaje_metacritic, desarrolladores, plataformas, genero, buying_sector

    if (game) {

        game.background_image? imagen1 = <div><Image preview={{mask: 'Click para ampliar imagen 1 del juego'}} height={400} src={game.background_image} /></div> : imagen1 =  <Image width={200} height={200} src="error" fallback="data:image/png;base64,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" />
        game.background_image_additional ? imagen2 = <div><Image preview={{mask: 'Click para ampliar imagen 2 del juego'}} height={400} src={game.background_image_additional} /></div>: imagen2 = <Image width={200} height={200} src="error" fallback="data:image/png;base64,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" />
        game.name ? titulo = <b>{game.name}</b> : titulo = '(Información no disponible)'
        game.released ? fecha_lanzamiento = game.released : fecha_lanzamiento = '(Información no disponible)'
        game.metacritic ? puntaje_metacritic = `${game.metacritic}/100` : puntaje_metacritic = '(Información no disponible)'
        game.developers.length > 0? desarrolladores = game.developers.map(desarrollador => desarrollador.name).join(' - '): desarrolladores = '(Información no disponible)'
        
        game.platforms.length > 0? 
        (
          plataformas = game.platforms.map(plataforma => plataforma.platform.name).join(' - '),
          
          game.platforms.forEach(platform => {

            let game_type
            let price
            let digital_platforms = ['playstation5', 'xbox-series-x', 'pc', 'ios']
            digital_platforms.includes(platform.platform.slug) ? game_type = 'JUEGO DIGITAL' : game_type = 'JUEGO FÍSICO'

            price = Math.floor(Math.floor(Math.random() * 6000) + 4000)

            let new_platform = {name: game.name + ' - Versión ' + platform.platform.name, platform: platform.platform.name, game_type: game_type, price: price, quantity: 0}
            buying_data.push(new_platform)
          }),

          buying_sector = <><Table columns={buying_columns} dataSource={buying_data} pagination={false} /></>
        )
        
        : 
        (plataformas = '(Información no disponible)')

        game.genres.length > 0? genero = game.genres.map(genero => genero.name).join(' - '): genero= '(Información no disponible)'
        game.description? descripcion = <div dangerouslySetInnerHTML={{__html: game.description}}></div> : descripcion = '(Información no disponible)'
    } else {
        titulo = genero = descripcion =  imagen1 = imagen2 = desarrolladores = plataformas = fecha_lanzamiento = puntaje_metacritic = <div className="spinner-border" role="status"></div>,
        buying_sector = <div className="text-center"><div className="spinner-border" role="status"></div></div>
    }

    const items = [
        {
          key: '1',
          label: 'Título original:',
          children: titulo
        },
        {
          key: '2',
          label: 'Fecha de lanzamiento:',
          children: fecha_lanzamiento,
        },
        {
          key: '3',
          label: 'Puntaje Metacritic:',
          children: puntaje_metacritic,
        },
        {
          key: '4',
          label: 'Desarrollador/es:',
          children: desarrolladores,
        },
        {
          key: '5',
          label: 'Disponible en plataformas',
          children: plataformas,
        },
        {
          key: '6',
          label: 'Categoría/s',
          children: genero,
        },
        {
          key: '7',
          label: 'Descripción (inglés)',
          children: descripcion
        },
    ]

    buying_columns = [
      {
        title: 'Nombre completo',
        dataIndex: 'name',
        key: 'name',
      },
    
      {
        title: 'Plataforma',
        dataIndex: 'platform',
        key: 'platform',
      },
    
      {
        title: 'Tipo de juego',
        dataIndex: 'game_type',
        key: 'game_type',
        render: (game_type) => {
          let color
          game_type == 'JUEGO FÍSICO' ? color = 'blue' : color = 'red' 

          return(
          <Tag color={color}>
            {game_type}
          </Tag>)
        }
      },
    
      {
        title: 'Precio',
        dataIndex: 'price',
        key: 'price',
        render: (precio) => <p>$ {precio} + IVA</p>
      },
    
      {
        title: 'Cantidad',
        dataIndex: 'quantity',
        key: 'quantity',

        render: (_, record) => 

          (
    
          <Select defaultValue= '0' style={{width: 70, textAlign: "center"}}

          options={[

            {
              value: '1',
              label: '1',
            },
    
            {
              value: '2',
              label: '2',
            },
    
            {
              value: '3',
              label: '3',
            }
          ]}

          onChange = {(value) => {
            record.quantity = value;
          }}

          />
      )},

      {
        title: 'Tipo de compra',
        key: 'buying_type',
        render: (_, record) => (
          <Space size={55}>
            <a onClick={() => add_tocart(record)}><u>Añadir al carrito</u>&nbsp;<svg height= '25px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#1C274C" strokeWidth="1.5"/><path opacity="0.5" d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#1C274C" strokeWidth="1.5"/><path d="M2.26121 3.09184L2.50997 2.38429H2.50997L2.26121 3.09184ZM2.24876 2.29246C1.85799 2.15507 1.42984 2.36048 1.29246 2.75124C1.15507 3.14201 1.36048 3.57016 1.75124 3.70754L2.24876 2.29246ZM4.58584 4.32298L5.20507 3.89983V3.89983L4.58584 4.32298ZM5.88772 14.5862L5.34345 15.1022H5.34345L5.88772 14.5862ZM20.6578 9.88275L21.3923 10.0342L21.3933 10.0296L20.6578 9.88275ZM20.158 12.3075L20.8926 12.4589L20.158 12.3075ZM20.7345 6.69708L20.1401 7.15439L20.7345 6.69708ZM19.1336 15.0504L18.6598 14.469L19.1336 15.0504ZM5.70808 9.76V7.03836H4.20808V9.76H5.70808ZM2.50997 2.38429L2.24876 2.29246L1.75124 3.70754L2.01245 3.79938L2.50997 2.38429ZM10.9375 16.25H16.2404V14.75H10.9375V16.25ZM5.70808 7.03836C5.70808 6.3312 5.7091 5.7411 5.65719 5.26157C5.60346 4.76519 5.48705 4.31247 5.20507 3.89983L3.96661 4.74613C4.05687 4.87822 4.12657 5.05964 4.1659 5.42299C4.20706 5.8032 4.20808 6.29841 4.20808 7.03836H5.70808ZM2.01245 3.79938C2.68006 4.0341 3.11881 4.18965 3.44166 4.34806C3.74488 4.49684 3.87855 4.61727 3.96661 4.74613L5.20507 3.89983C4.92089 3.48397 4.54304 3.21763 4.10241 3.00143C3.68139 2.79485 3.14395 2.60719 2.50997 2.38429L2.01245 3.79938ZM4.20808 9.76C4.20808 11.2125 4.22171 12.2599 4.35876 13.0601C4.50508 13.9144 4.79722 14.5261 5.34345 15.1022L6.43198 14.0702C6.11182 13.7325 5.93913 13.4018 5.83723 12.8069C5.72607 12.1578 5.70808 11.249 5.70808 9.76H4.20808ZM10.9375 14.75C9.52069 14.75 8.53763 14.7482 7.79696 14.6432C7.08215 14.5418 6.70452 14.3576 6.43198 14.0702L5.34345 15.1022C5.93731 15.7286 6.69012 16.0013 7.58636 16.1283C8.45674 16.2518 9.56535 16.25 10.9375 16.25V14.75ZM4.95808 6.87H17.0888V5.37H4.95808V6.87ZM19.9232 9.73135L19.4235 12.1561L20.8926 12.4589L21.3923 10.0342L19.9232 9.73135ZM17.0888 6.87C17.9452 6.87 18.6989 6.871 19.2937 6.93749C19.5893 6.97053 19.8105 7.01643 19.9659 7.07105C20.1273 7.12776 20.153 7.17127 20.1401 7.15439L21.329 6.23978C21.094 5.93436 20.7636 5.76145 20.4632 5.65587C20.1567 5.54818 19.8101 5.48587 19.4604 5.44678C18.7646 5.369 17.9174 5.37 17.0888 5.37V6.87ZM21.3933 10.0296C21.5625 9.18167 21.7062 8.47024 21.7414 7.90038C21.7775 7.31418 21.7108 6.73617 21.329 6.23978L20.1401 7.15439C20.2021 7.23508 20.2706 7.38037 20.2442 7.80797C20.2168 8.25191 20.1002 8.84478 19.9223 9.73595L21.3933 10.0296ZM16.2404 16.25C17.0021 16.25 17.6413 16.2513 18.1566 16.1882C18.6923 16.1227 19.1809 15.9794 19.6074 15.6318L18.6598 14.469C18.5346 14.571 18.3571 14.6525 17.9744 14.6994C17.5712 14.7487 17.0397 14.75 16.2404 14.75V16.25ZM19.4235 12.1561C19.2621 12.9389 19.1535 13.4593 19.0238 13.8442C18.9007 14.2095 18.785 14.367 18.6598 14.469L19.6074 15.6318C20.0339 15.2842 20.2729 14.8346 20.4453 14.3232C20.6111 13.8312 20.7388 13.2049 20.8926 12.4589L19.4235 12.1561Z" fill="#1C274C"/><path opacity="0.5" d="M13 13V11M13 11V9M13 11H15M13 11H11" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/></svg></a>
            <Popconfirm title="Confirmar compra" description="¿Desea desechar carrito actual y proceder a la compra del juego?" onConfirm={() => buy_confirm(record)} okText="Confirmo" cancelText="Cancelar" icon={<ShoppingCartOutlined style={{color: 'blue',}}/>}> 
              <a><u>Comprar YA!</u>&nbsp;<svg height="30px" viewBox="0 0 512 512" id="Layer_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g><path className="st0" d="M499.2,275.1c-1.9-3.4-6.1-4.6-9.5-2.8L452,293.1c0,0,0,0,0,0l-14.8,8.2L280,387.7   c-10.5,5.8-23.7,1.9-29.4-8.5c-2.8-5.1-3.4-10.9-1.8-16.5c1.6-5.6,5.3-10.2,10.4-12.9c0,0,0,0,0,0l193-106.1c0,0,0,0,0,0l16.8-9.2   c3.4-1.9,4.6-6.1,2.8-9.5c-1.9-3.4-6.1-4.6-9.5-2.8l-8.5,4.7l-24.6-114.9c-1.2-6.2-5.2-11.4-11-14.1c-5.8-2.7-12.3-2.5-17.9,0.6   L157.1,232l-33.9-34.8c-2.2-2.3-5.6-2.8-8.4-1.3l-41.4,22.8c-3.4,1.9-4.6,6.1-2.8,9.5c1.9,3.4,6.1,4.6,9.5,2.8l36.8-20.2l33.8,34.8   l0,0l94.4,97.1c-4.6,4.3-8,9.8-9.8,16.1c-2.7,9.2-1.6,18.8,3,27.1c6.5,11.8,18.7,18.5,31.3,18.5c5.8,0,11.7-1.4,17.1-4.4l11.6-6.4   c0.6,1.8,1.4,3.6,2.3,5.3c4.3,7.8,11.4,13.5,19.9,15.9c3.1,0.9,6.2,1.3,9.3,1.3c5.5,0,11-1.4,16-4.1c7.8-4.3,13.5-11.3,15.9-19.9   c2.5-8.5,1.5-17.5-2.8-25.3c-0.9-1.7-2-3.3-3.2-4.8l54.1-29.7c0.6,1.8,1.4,3.6,2.3,5.3c4.3,7.8,11.4,13.5,19.9,15.9   c3.1,0.9,6.2,1.3,9.3,1.3c5.5,0,11-1.4,16-4.1c7.8-4.3,13.5-11.3,15.9-19.9c2.5-8.5,1.5-17.5-2.8-25.3c-0.9-1.7-2-3.3-3.2-4.8   l29.2-16C499.9,282.7,501.1,278.5,499.2,275.1z M394.7,138.2c3.8-0.8,7.5,1.6,8.3,5.4l16.3,75.9c0.8,3.8-1.6,7.5-5.4,8.3   c-0.5,0.1-1,0.2-1.5,0.2c-3.2,0-6.1-2.2-6.8-5.5l-16.3-75.9C388.5,142.7,390.9,139,394.7,138.2z"/><path className="st1" d="M99.4,266.5c0-3.9-3.1-7-7-7H18.9c-3.9,0-7,3.1-7,7s3.1,7,7,7h73.5C96.3,273.5,99.4,270.4,99.4,266.5z"/><path className="st1" d="M91.6,363.7c0,3.9,3.1,7,7,7h90.7c3.9,0,7-3.1,7-7s-3.1-7-7-7H98.6C94.7,356.7,91.6,359.8,91.6,363.7z"/><path className="st1" d="M39.6,323.5c0,3.9,3.1,7,7,7h122.7c3.9,0,7-3.1,7-7s-3.1-7-7-7H46.6C42.7,316.5,39.6,319.6,39.6,323.5z"/><path className="st1" d="M155.8,299.4c3.9,0,7-3.1,7-7s-3.1-7-7-7h-32.9c-3.9,0-7,3.1-7,7s3.1,7,7,7H155.8z"/><path className="st1" d="M211.9,328h-15.3c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.3c3.9,0,7-3.1,7-7S215.8,328,211.9,328z"/><path className="st1" d="M211.9,388h-58c-3.9,0-7,3.1-7,7s3.1,7,7,7h58c3.9,0,7-3.1,7-7S215.8,388,211.9,388z"/><path className="st1" d="M116.3,388H72.6c-3.9,0-7,3.1-7,7s3.1,7,7,7h43.7c3.9,0,7-3.1,7-7S120.1,388,116.3,388z"/><path className="st1" d="M51.2,353.5h-23c-3.9,0-7,3.1-7,7s3.1,7,7,7h23c3.9,0,7-3.1,7-7S55.1,353.5,51.2,353.5z"/><path className="st1" d="M72.6,299.4c3.9,0,7-3.1,7-7s-3.1-7-7-7H60.9c-3.9,0-7,3.1-7,7s3.1,7,7,7H72.6z"/></g></svg></a>
            </Popconfirm>
          </Space>
        ),
      },
    ];

    return (

    <>

    {contextHolder}

    <div className="d-flex justify-content-around">
      <div>{imagen1}</div>
      <div>{imagen2}</div>
    </div>
    <Descriptions bordered items={items} />

    <h1 className="prueba">¡COMPRALO YA!</h1>

    {buying_sector}
    </>
    
    )
}
    
export default ItemDetailContainer