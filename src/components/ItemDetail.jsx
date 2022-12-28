import ItemCount from './ItemCount';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import '../App.css'

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const { addItem, formatter } = useContext(CartContext);

    const onAdd = (qty) => {
        setItemCount(qty);
        addItem(item, qty);
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
                        <p className="price">{formatter.format(item.cost)}</p>
                        <p className="desc">{item.stock} unidades en stock</p>
                    </div>
                    {
                    itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><button className="cartButton buttonDetail" variant="contained" color="secondary">Mostrar el Carrito</button></Link>
                    }
                </div>
            </div>
            : <p className="charging">Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;