import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navbar from './components/Navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <body class="container-fluid">
      <Navbar />
      <ItemListContainer student="JUAN PABLO LEZAMA" subject="REACT JS" />
    </body>
  )
}

export default App
