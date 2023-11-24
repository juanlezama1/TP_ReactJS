import ListSingleGenre from "../listSingleGenre/listSingleGenre"

const ListGenres = () => {

    return (

        <div className='row m-4'>
            <ListSingleGenre genre_keyword={"action"} genre={'Acción'} image={'action.webp'}/>
            <ListSingleGenre genre_keyword={"adventure"} genre={'Aventuras'} image={'adventure.avif'}/>
            <ListSingleGenre genre_keyword={"indie"} genre={'Indies'} image={'indie.jpg'}/>
            <ListSingleGenre genre_keyword={"role-playing-games-rpg"} genre={'RPG'} image={'rpg.png'}/>
            <ListSingleGenre genre_keyword={"strategy"} genre={'Estrategia'} image={'strategy.jpg'}/>
            <ListSingleGenre genre_keyword={"shooter"} genre={'Shooters'} image={'shooters.jpg'}/>
            <ListSingleGenre genre_keyword={"simulation"} genre={'Simuladores'} image={'simulators.webp'}/>
            <ListSingleGenre genre_keyword={"puzzle"} genre={'Puzzle'} image={'puzzle.jpeg'}/>
            <ListSingleGenre genre_keyword={"arcade"} genre={'Arcade'} image={'arcade.jpeg'}/>
            <ListSingleGenre genre_keyword={"massively-multiplayer"} genre={'Multiplayer'} image={'multiplayer.webp'}/>
            <ListSingleGenre genre_keyword={"sports"} genre={'Deportes'} image={'sports.webp'}/>
            <ListSingleGenre genre_keyword={"educational"} genre={'Educativos'} image={'educational.jpg'}/>
        </div>
    )
}

export default ListGenres

