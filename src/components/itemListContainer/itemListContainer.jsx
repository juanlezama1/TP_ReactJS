import React, { useEffect, useState } from 'react';
import GamesList from '../gamesList/gamesList';
import LoadingSpinner from './loadingSpinner/loadingSpinner';
import { Button } from 'antd';
 
const apiKey = '702be93892c341a5aa64499ef9026d16';
const endpoint = '/games'
const page_size = 16
let loading = true

const ItemListContainer = () => {

    const [page_number, setPageNumber] = useState (Math.floor(Math.random() * 35) + 1)
    const [games_list, setGamesList] = useState ([]) 

    let API_URL = `https://api.rawg.io/api${endpoint}?key=${apiKey}&page=${page_number}&page_size=${page_size}`

    useEffect ( () => {

        fetch (API_URL)
            .then (api_answer => api_answer.json())
            .then (api_answer_json => {
                setGamesList(games_list.concat(api_answer_json.results))
                loading = false})
            .catch (api_error => console.log(`Error!: ${api_error}`))
        }, [page_number])
    
        return (
            
            games_list.length > 0 && loading==false? 
            (
                <>
                <GamesList my_games = {games_list} /> 
                <Button onClick={() => {
                    loading = true
                    setPageNumber(page_number+1)
                    }}>VER MÁS JUEGOS!</Button>
                </>
            ):  
                <LoadingSpinner />
        )
}

export default ItemListContainer



