import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer'
import CartContextProvider from "./components/CartContext";
import './App.css'
import Footer from "./Footer";
import Cart from "./components/Cart";

const App = () => {

    return(
        <CartContextProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        <Footer />
        </BrowserRouter>
        </CartContextProvider>
    )
}

export default App;