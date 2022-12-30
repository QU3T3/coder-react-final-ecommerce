import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './components/NavBar/NavBar.css'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer'

import './App.css'
import '../src/containers/ItemListContainer/ItemListContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContextProvider } from './context/CartContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <CartContextProvider>
        <NavBar />
        <Routes >
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:id' element={<ItemListContainer/>}></Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<CartContainer/>}></Route>
          <Route path='*' element={<Navigate to='/'/>}></Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
