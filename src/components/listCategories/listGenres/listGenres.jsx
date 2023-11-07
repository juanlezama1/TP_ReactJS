import ListSingleGenre from "../listSingleGenre/listSingleGenre"

const ListGenres = () => {

    return (

        <div className='row m-4'>
            <ListSingleGenre genre={'Playstation 5'} image={'ps5.jpg'}/>
            <ListSingleGenre genre={'Xbox Series X/S'} image={'xbox_x_s.jpg'}/>
            <ListSingleGenre genre={'PC'} image={'pc.jpg'} developer={"Windows OS/Linux OS"}/>
            <ListSingleGenre genre={'Nintendo Switch'} image={'switch.jpg'}/>
            <ListSingleGenre genre={'Playstation 4'} image={'ps4.jpg'}/>
            <ListSingleGenre genre={'Xbox One'} image={'xbox_one.webp'}/>
            <ListSingleGenre genre={'Android - iOS'} image={'android_ios.webp'}/>
            <ListSingleGenre genre={'PSP'} image={'psp.png'}/>
            <ListSingleGenre genre={'Playstation 3'} image={'ps3.jpg'}/>
            <ListSingleGenre genre={'Xbox 360'} image={'xbox_360.jpg'}/>
            <ListSingleGenre genre={'Nintendo 3DS'} image={'3ds.webp'}/>
            <ListSingleGenre genre={'Nintendo Wii'} image={'wii.png'}/>
        </div>
    )
}

export default ListGenres

