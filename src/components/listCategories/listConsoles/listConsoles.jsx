import ListSingleConsole from "../listSingleConsole/listSingleConsole"

const ListConsoles = () => {
    
    return ( 
        
        <div className='row m-4'>
            <ListSingleConsole name={'Playstation 5'} image={'ps5.jpg'} developer={"Sony Interactive Entertainment"} console_keyword={'playstation5'}/>
            <ListSingleConsole name={'Xbox Series X/S'} image={'xbox_x_s.jpg'} developer={"Microsoft Corporation"} console_keyword={'xbox-series-x'}/>
            <ListSingleConsole name={'PC'} image={'pc.jpg'} developer={"Windows OS/Linux OS"} console_keyword={'pc'}/>
            <ListSingleConsole name={'Nintendo Switch'} image={'switch.jpg'} developer={"Nintendo Company, Ltd"} console_keyword={'nintendo-switch'}/>
            <ListSingleConsole name={'Playstation 4'} image={'ps4.jpg'} developer={"Sony Interactive Entertainment"} console_keyword={'playstation4'}/>
            <ListSingleConsole name={'Xbox One'} image={'xbox_one.webp'} developer={"Microsoft Corporation"} console_keyword={'xbox-one'}/>
            <ListSingleConsole name={'Android - iOS'} image={'android_ios.webp'} developer={"Google Inc. - Apple Inc."} console_keyword={'ios'}/>
            <ListSingleConsole name={'PSP'} image={'psp.png'} developer={"Sony Interactive Entertainment"} console_keyword={'psp'}/>
            <ListSingleConsole name={'Playstation 3'} image={'ps3.jpg'} developer={"Sony Interactive Entertainment"} console_keyword={'playstation3'}/>
            <ListSingleConsole name={'Xbox 360'} image={'xbox_360.jpg'} developer={"Microsoft Corporation"} console_keyword={'xbox360'}/>
            <ListSingleConsole name={'Nintendo 3DS'} image={'3ds.webp'} developer={"Nintendo Company, Ltd"} console_keyword={'nintendo-3ds'}/>
            <ListSingleConsole name={'Nintendo Wii'} image={'wii.png'} developer={"Nintendo Company, Ltd"} console_keyword={'wii'}/>
        </div>

    )
}

export default ListConsoles