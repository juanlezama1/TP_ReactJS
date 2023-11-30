// IMPORTO COMPONENTES NECESARIO //

import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ListCategories from './components/listCategories/listCategories';
import NotFound from './components/notFound/notFound';
import Footer from './components/footer/footer';
import ListCategoryItems from './components/listCategoryItems/listCategoryItems'
import UnderConstruction from './components/underConstruction/underConstruction';
import CartComponentContext from './components/context/cartContext';
import Cart from './components/cart/cart';
import ItemListContainer2 from './components/itemListContainer2/itemListContainer2';
import PeripheralDetailContainer from './components/peripheralDetailContainer/peripheralDetailContainer';
import Navbar from './components/navbar/navbar';
import Final_Result from './components/finalResult/finalResult';


// IMPORTO ESTILOS

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

    <CartComponentContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path = "/" element = {<ItemListContainer />}/>
          <Route exact path = "/categories" element = {<ListCategories />} />
          <Route exact path = "/categories/:category_type" element = {<ListCategoryItems />}/>

          <Route exact path = "/peripherals" element = {<ItemListContainer2 />} />
          <Route exact path = "/peripherals/categories/:category_id" element = {<ItemListContainer2 />} />
          <Route exact path = "/peripherals/item/:item_id" element = {<PeripheralDetailContainer />}/>
          
          <Route exact path = "/games/:category_type/:category_keyword" element = {<ItemListContainer />}/>
          <Route exact path = "/games/item/:game_id" element = {<ItemDetailContainer />}/>
  
          <Route exact path = "/cart" element={<Cart />} />
          <Route exact path = "/order_confirmation" element = { <Final_Result />} />

          <Route exact path = "/construction" element={<UnderConstruction />} />
          <Route exact path = "*" element = {<NotFound />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </CartComponentContext>
  )
}

export default App