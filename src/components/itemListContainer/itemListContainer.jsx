import React, { useEffect, useState } from 'react';
import GamesList from '../gamesList/gamesList';
import LoadingSpinner from './loadingSpinner/loadingSpinner';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';
import NotFound from '../notFound/notFound';
 
const apiKey = '702be93892c341a5aa64499ef9026d16';
const page_size = 12
let page_number = Math.floor(Math.random() * 35) + 1
let API_URL_NEXT

const ItemListContainer = () => {

    const {category_type, category_keyword} = useParams () //Toma el valor undefined si no llega, y el category_type/category_keyword en caso contrario
    const [API_URL, setAPI_URL] = useState('')
    const [games_list, setGamesList] = useState ([])
    const [loading, setLoading] = useState (true)

    useEffect ( () => {

        // Si no están definidas las categorías, que muestre 12 juegos random

        if(!category_type && !category_keyword) {
            setAPI_URL(`https://api.rawg.io/api/games?key=${apiKey}&page_size=${page_size}&page=${page_number}`)
        }

        // Caso contrario, que muestre 12 juegos correspondiente a esa búsqueda/categoría específica

        else {
            switch (category_type)

            {
                case "search":
                    setAPI_URL(`https://api.rawg.io/api/games?key=${apiKey}&page_size=${page_size}&search=${category_keyword}`)
                    break;

                case "platform":
                    setAPI_URL(`https://api.rawg.io/api/games?key=${apiKey}&page_size=${page_size}&platforms=${category_keyword}`)
                    break;

                case "genre":
                    setAPI_URL(`https://api.rawg.io/api/games?key=${apiKey}&page_size=${page_size}&genres=${category_keyword}`)
                    break;

                default:
                    return <NotFound />
            }}}, [])
    
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
            <LoadingSpinner />
    )   
}

export default ItemListContainer