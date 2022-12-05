import ItemCount from './ItemCount';
import '../App.css'

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("Agregaste " + qty + " productos al carrito.");
    }

    return (
        <>
        {
            item && item.image
            ? 
            <div className="detailContainer">
                <div className="wrapperDetail">
                    <div className="imgContainer">
                        <img className="imageDetail" src={item.image[0]} />
                    </div>
                    <div className="infoContainer">
                        <p className="titleDetail">{item.name}</p>
                        <p className="desc">{item.description}</p>
                        <p className="price">$ {item.cost}</p>
                        <p className="desc">{item.stock} unidades en stock</p>
                    </div>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </div>
            </div>
            : <p className="charging">Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;