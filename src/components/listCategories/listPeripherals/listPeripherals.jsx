import ListSinglePeripheral from "../listSinglePeripheral/listSinglePeripheral"

const ListPeripherals = () => {

    return ( 
        
        <div className='row m-4'>
            <ListSinglePeripheral name={'Headphones'} image={'headphones.jpg'} category_id={"headphones"}/>
            <ListSinglePeripheral name={'Teclados'} image={'keyboards.avif'} category_id={"keyboards"}/>
            <ListSinglePeripheral name={'Mouses'} image={'mouses.jpeg'} category_id={"mouses"}/>
        </div>
    )
}

export default ListPeripherals