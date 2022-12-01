import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

const App = () => {
    let name = "Detto"
    return(
        <>
            <Navbar />
           <ItemListContainer mensaje="Hola ItemListContainer"/>
        </>
    )
}

export default App;