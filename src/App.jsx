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

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path = "/" element = {<ItemListContainer />}/>
        <Route exact path = "/category" element = {<ListCategories />} />
        <Route exact path = "/category/:category_type" element = {<ListCategoryItems />}/>
        <Route exact path = "/item/:game_id" element = {<ItemDetailContainer />}/>
        <Route exact path = "/construction" element={<UnderConstruction />} />
        <Route exact path = "*" element = {<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
