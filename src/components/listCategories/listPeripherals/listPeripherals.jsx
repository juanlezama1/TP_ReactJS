import ListSinglePeripheral from "../listSinglePeripheral/listSinglePeripheral"

const ListPeripherals = () => {

    return ( 
        
        <div className='row m-4'>
            <ListSinglePeripheral name={'Headphones'} image={'headphones.jpg'}/>
            <ListSinglePeripheral name={'Teclados'} image={'keyboards.avif'}/>
            <ListSinglePeripheral name={'Mouses'} image={'mouses.jpeg'}/>
        </div>
    )
}

export default ListPeripherals