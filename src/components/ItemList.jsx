import Item from "./Item";
import '../App.css'

const ItemList = ({ items }) => {
    return (
        <div className="productsContainer">
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />)
            : <p className="charging">Cargando...</p>
        }
        </div>
    );
}

export default ItemList;