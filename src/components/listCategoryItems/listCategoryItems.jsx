import { useParams } from "react-router-dom"
import NotFound from "../notFound/notFound"
import ListConsoles from "../listCategories/listConsoles/listConsoles"
import ListGenres from "../listCategories/listGenres/listGenres"
import ListPeripherals from "../listCategories/listPeripherals/listPeripherals"

const ListCategoryItems = () => {

    const {category_type} = useParams ()

    switch (category_type)

    {
        case "consoles":
            return (<ListConsoles/>)

        case "genres":
            return (<ListGenres/>)

        case "peripherals":
            return (<ListPeripherals/>)
        
        default:
            return (<NotFound />)
    }
}

export default ListCategoryItems