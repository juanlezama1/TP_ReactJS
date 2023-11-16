import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/navbar'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ListCategories from './components/listCategories/listCategories';
import NotFound from './components/notFound/notFound';
import Footer from './components/footer/footer';
import ListCategoryItems from './components/listCategoryItems/listCategoryItems'
import UnderConstruction from './components/underConstruction/underConstruction';
import './App.css'
import CartComponentContext from './components/context/cartContext';
import Cart from './components/cart/cart';
import ItemListContainer2 from './components/itemListContainer2/itemListContainer2';
import PeripheralDetailContainer from './components/peripheralDetailContainer/peripheralDetailContainer';

function App() {

  return (

    <CartComponentContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path = "/" element = {<ItemListContainer />}/>
          <Route exact path = "/peripherals" element = {<ItemListContainer2 />} />
          <Route exact path = "/peripherals/item/:item_id" element = {<PeripheralDetailContainer />}/>
          <Route exact path = "/category" element = {<ListCategories />} />
          <Route exact path = "/category/:category_type" element = {<ListCategoryItems />}/>
          <Route exact path = "/item/:game_id" element = {<ItemDetailContainer />}/>
          <Route exact path = "/construction" element={<UnderConstruction />} />
          <Route exact path = "*" element = {<NotFound />} />
          <Route exact path = "/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartComponentContext>
  )
}

export default App
