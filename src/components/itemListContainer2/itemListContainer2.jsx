import { useEffect, useState } from "react"
import {db} from "../../firebase/client"
import { collection, getDocs } from "firebase/firestore"
import LoadingSpinner2 from "./loadingSpinner2/loadingSpinner2"
import ProductsList from "./productsList/productsList"

const ItemListContainer2 = () => {

    const my_products = collection(db, "products")
    const [products_list, setProductsList] = useState ([])
    const [loading, setLoading] = useState (true)

    useEffect(() => {

        getDocs(my_products)
        .then (snapshot => setProductsList(snapshot.docs.map(document => ({id: document.id, ...document.data()}))))
        .catch (error => console.error(error))
        .finally(() => setLoading(false))
    }, [])

    return (

        loading? <LoadingSpinner2 /> : <ProductsList products={products_list} />
    )
}

export default ItemListContainer2