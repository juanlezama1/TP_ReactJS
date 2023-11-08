import ListSingleGenre from "../listSingleGenre/listSingleGenre"

const ListGenres = () => {

    return (

        <div className='row m-4'>
            <ListSingleGenre genre={'Acción'} image={'action.webp'}/>
            <ListSingleGenre genre={'Aventuras'} image={'adventure.avif'}/>
            <ListSingleGenre genre={'Indies'} image={'indie.jpg'}/>
            <ListSingleGenre genre={'RPG'} image={'rpg.png'}/>
            <ListSingleGenre genre={'Estrategia'} image={'strategy.jpg'}/>
            <ListSingleGenre genre={'Shooters'} image={'shooters.jpg'}/>
            <ListSingleGenre genre={'Simuladores'} image={'simulators.webp'}/>
            <ListSingleGenre genre={'Puzzle'} image={'puzzle.jpeg'}/>
            <ListSingleGenre genre={'Arcade'} image={'arcade.jpeg'}/>
            <ListSingleGenre genre={'Multiplayer'} image={'multiplayer.webp'}/>
            <ListSingleGenre genre={'Deportes'} image={'sports.webp'}/>
            <ListSingleGenre genre={'Educativos'} image={'educational.jpg'}/>
        </div>
    )
}

export default ListGenres

