import React, { useEffect, useState } from 'react';
import GamesList from '../gamesList/gamesList';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';
import NotFound from '../notFound/notFound';
import LoadingSpinner2 from '../itemListContainer2/loadingSpinner2/loadingSpinner2';
 
const apiKey = '702be93892c341a5aa64499ef9026d16';
const page_size = 12
let page_number = Math.floor(Math.random() * 35) + 1
let API_URL_NEXT
let platform_id

const ItemListContainer = () => {

    const {category_type, category_keyword} = useParams () //Toma el valor undefined si no llega, y el category_type/category_keyword en caso contrario
    const [API_URL, setAPI_URL] = useState('')
    const [games_list, setGamesList] = useState ([])
    const [loading, setLoading] = useState (true)

    let loading_text

    switch (category_keyword)

    {
        // Categoría género:

        case "action":
            loading_text = "CARGANDO JUEGOS DE ACCIÓN"
            break;
        
        case 'adventure':
            loading_text = "CARGANDO JUEGOS DE AVENTURA"
            break;

        case 'indie':
            loading_text = "CARGANDO JUEGOS INDIE"
            break;

        case 'role-playing-games-rpg':
            loading_text = "CARGANDO JUEGOS RPG"
            break;
        
        case 'strategy':
            loading_text = "CARGANDO JUEGOS DE ESTRATEGIA"
            break;

        case 'shooter':
            loading_text = "CARGANDO JUEGOS SHOOTER"
            break;

        case 'simulation':
            loading_text = "CARGANDO JUEGOS DE SIMULACIÓN"
            break;

        case 'puzzle':
            loading_text = "CARGANDO JUEGOS DE PUZZLE"
            break;

        case 'arcade':
            loading_text = "CARGANDO JUEGOS ARCADE"
            break;

        case 'massively-multiplayer':
            loading_text = "CARGANDO JUEGOS MULTIPLAYER"
            break;

        case 'sports':
            loading_text = "CARGANDO JUEGOS DE DEPORTE"
            break;

        case 'educational':
            loading_text = "CARGANDO JUEGOS EDUCATIVOS"
            break;

        // Categoría consolas:
        
        case 'pc':
            loading_text = "CARGANDO JUEGOS DE PC"
            platform_id = 4
            break;

        case 'playstation5':
            loading_text = "CARGANDO JUEGOS DE PLAYSTATION 5"
            platform_id = 187
            break;
            
        case 'xbox-series-x':
            loading_text = "CARGANDO JUEGOS DE XBOX SERIES X/S"
            platform_id = 186
            break;

        case 'nintendo-switch':
            loading_text = "CARGANDO JUEGOS DE SWITCH"
            platform_id = 7
            break;

        case 'playstation4':
            loading_text = "CARGANDO JUEGOS DE PLAYSTATION 4"
            platform_id = 18
            break;

        case 'xbox-one':
            loading_text = "CARGANDO JUEGOS DE XBOX-ONE"
            platform_id = 1
            break;

        case 'ios':
            loading_text = "CARGANDO JUEGOS DE ANDROID/iOS"
            platform_id = 3
            break;

        case 'psp':
            loading_text = "CARGANDO JUEGOS DE PSP"
            platform_id = 17
            break;

        case 'playstation3':
            loading_text = "CARGANDO JUEGOS DE PLAYSTATION 3"
            platform_id = 16
            break;

        case 'xbox360':
            loading_text = "CARGANDO JUEGOS DE XBOX-360"
            platform_id = 14
            break;

        case 'wii':
            loading_text = "CARGANDO JUEGOS DE Wii"
            platform_id = 11
            break;

        case 'nintendo-3ds':
            loading_text = "CARGANDO JUEGOS DE NINTENDO 3DS"
            platform_id = 8
            break;
        
        default:
            loading_text = "CARGANDO JUEGOS"
            break;
    }

    useEffect ( () => {

        // Si no están definidas las categorías, que muestre 12 juegos random

        if(!category_type && !category_keyword) {
            setGamesList([])
            setAPI_URL(`https://api.rawg.io/api/games?key=${apiKey}&page_size=${page_size}&page=${page_number}`)
        }

        // Caso contrario, que muestre 12 juegos correspondiente a esa búsqueda/categoría específica

        else {
            switch (category_type)

            {
                case "search":
                    setGamesList([])
                    setAPI_URL(`https://api.rawg.io/api/games?key=${apiKey}&page_size=${page_size}&search=${category_keyword}`)
                    break;

                case "platform":
                    setGamesList([])
                    setAPI_URL(`https://api.rawg.io/api/games?key=${apiKey}&page_size=${page_size}&platforms=${platform_id}`)
                    break;

                case "genre":
                    setGamesList([])
                    setAPI_URL(`https://api.rawg.io/api/games?key=${apiKey}&page_size=${page_size}&genres=${category_keyword}`)
                    break;

                default:
                    return <NotFound />
            }}}, [category_type, category_keyword])
    
    useEffect( () => {


    if (API_URL)

    {
        fetch (API_URL)
        .then (api_answer => api_answer.json())
        .then (api_answer_json => {
            API_URL_NEXT = api_answer_json.next,
            setGamesList(games_list.concat(api_answer_json.results))
        })
        .catch (api_error => console.log(`Error!: ${api_error}`))
        .finally (() => setLoading(false))
    }}, [API_URL])

    return (
        
        games_list.length > 0 && !loading? 

        (
            <>
            <GamesList my_games = {games_list} /> 
            <div className='row m-4'>
                <div className='col-12 text-center m-4'>
                    <Button onClick={() => {
                        setLoading(true)
                        setAPI_URL(API_URL_NEXT)
                    }}><b>VER MÁS JUEGOS!</b></Button>
                </div>
            </div>
            </>
        ):  
            <LoadingSpinner2 text={loading_text} />
    )   
}

export default ItemListContainer