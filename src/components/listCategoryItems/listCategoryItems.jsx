import { useParams } from "react-router-dom"
import NotFound from "../notFound/notFound"
import ListConsoles from "../listCategories/listConsoles/listConsoles"
import ListGenres from "../listCategories/listGenres/listGenres"

const ListCategoryItems = () => {

    const {category_type} = useParams ()

    return (
        category_type == 'consoles'? <ListConsoles/>: category_type == 'genres'? <ListGenres />: <NotFound />
    )
}

export default ListCategoryItems