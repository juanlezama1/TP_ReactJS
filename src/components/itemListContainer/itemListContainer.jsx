import React, { useEffect, useState } from 'react';
import GamesList from '../gamesList/gamesList';
import LoadingSpinner from './loadingSpinner/loadingSpinner';
 
const apiKey = '702be93892c341a5aa64499ef9026d16';
const endpoint = '/games'
const page_size = 16


const ItemListContainer = () => {

    const [page_number, setPageNumber] = useState (Math.floor(Math.random() * 35) + 1)
    const [games_list, setGamesList] = useState ([]) 

    let API_URL = `https://api.rawg.io/api${endpoint}?key=${apiKey}&page=${page_number}&page_size=${page_size}`

    useEffect ( () => {

        fetch (API_URL)
            .then (api_answer => api_answer.json())
            .then (api_answer_json => setGamesList(api_answer_json.results))
            .catch (api_error => console.log(`Error!: ${api_error}`))
        
        }, [])
    
        return (
            games_list.length > 0? <GamesList my_games = {games_list} /> :  <LoadingSpinner />
        )
}

export default ItemListContainer



