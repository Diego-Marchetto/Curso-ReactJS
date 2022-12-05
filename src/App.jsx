import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import Footer from "./Footer";

const App = () => {

    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            </Routes>
        <Footer />
        </BrowserRouter>
    )
}

export default App;