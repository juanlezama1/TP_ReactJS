import React, { useEffect, useState } from 'react';
import GamesList from '../gamesList/gamesList';
import LoadingSpinner from './loadingSpinner/loadingSpinner';
import { Button } from 'antd';
 
const apiKey = '702be93892c341a5aa64499ef9026d16';
const endpoint = '/games'
const page_size = 12

const ItemListContainer = ({searched_word, genre, platform}) => {

    // (searched_word ||genre || platform) ? 
    
    // (
    //     const [page_number, setPageNumber] = useState (1)
    //     let API_URL = `https://api.rawg.io/api${endpoint}?key=${apiKey}&page=${page_number}&page_size=${page_size}`
    // ) :

    // (
    const [page_number, setPageNumber] = useState (Math.floor(Math.random() * 35) + 1)
    const [games_list, setGamesList] = useState ([])
    const [loading, setLoading] = useState (true)

    // )

    let API_URL = `https://api.rawg.io/api${endpoint}?key=${apiKey}&page=${page_number}&page_size=${page_size}`

    useEffect ( () => {

        fetch (API_URL)
            .then (api_answer => api_answer.json())
            .then (api_answer_json => setGamesList(games_list.concat(api_answer_json.results)))
            .catch (api_error => console.log(`Error!: ${api_error}`))
            .finally (() => setLoading(false))
        }, [page_number])
    
        return (
            
            games_list.length > 0 && !loading? 
            (
                <>
                <GamesList my_games = {games_list} /> 
                <div className='row m-4'>
                    <div className='col-12 text-center m-4'>
                        <Button onClick={() => {
                            setLoading(true)
                            setPageNumber(page_number+1)
                        }}><b>VER MÁS JUEGOS!</b></Button>
                    </div>
                </div>
                </>
            ):  
                <LoadingSpinner />
    )
}

ItemListContainer.defaultProps = {
    searched_word: '',
    genre: '',
    platform: ''
}

export default ItemListContainer



