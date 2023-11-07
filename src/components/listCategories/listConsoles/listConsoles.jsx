import ListSingleConsole from "../listSingleConsole/listSingleConsole"

const ListConsoles = () => {
    
    return ( 
        
        <div className='row m-4'>
            <ListSingleConsole name={'Playstation 5'} image={'ps5.jpg'} developer={"Sony Interactive Entertainment"}/>
            <ListSingleConsole name={'Xbox Series X/S'} image={'xbox_x_s.jpg'} developer={"Microsoft Corporation"}/>
            <ListSingleConsole name={'PC'} image={'pc.jpg'} developer={"Windows OS/Linux OS"}/>
            <ListSingleConsole name={'Nintendo Switch'} image={'switch.jpg'} developer={"Nintendo Company, Ltd"}/>
            <ListSingleConsole name={'Playstation 4'} image={'ps4.jpg'} developer={"Sony Interactive Entertainment"}/>
            <ListSingleConsole name={'Xbox One'} image={'xbox_one.webp'} developer={"Microsoft Corporation"}/>
            <ListSingleConsole name={'Android - iOS'} image={'android_ios.webp'} developer={"Google Inc. - Apple Inc."}/>
            <ListSingleConsole name={'PSP'} image={'psp.png'} developer={"Sony Interactive Entertainment"}/>
            <ListSingleConsole name={'Playstation 3'} image={'ps3.jpg'} developer={"Sony Interactive Entertainment"}/>
            <ListSingleConsole name={'Xbox 360'} image={'xbox_360.jpg'} developer={"Microsoft Corporation"}/>
            <ListSingleConsole name={'Nintendo 3DS'} image={'3ds.webp'} developer={"Nintendo Company, Ltd"}/>
            <ListSingleConsole name={'Nintendo Wii'} image={'wii.png'} developer={"Nintendo Company, Ltd"}/>
        </div>

    )
}

export default ListConsoles