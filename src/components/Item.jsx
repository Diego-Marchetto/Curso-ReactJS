import { AddShoppingCart, More } from '@material-ui/icons';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import '../App.css';

const Item = ({ id, title, stock, price, pictureUrl }) => {
    const { formatter } = useContext(CartContext)

    return (
        <div className="productContainer">
            <img src={pictureUrl} />
            <p className="nameProduct">{title}</p>
            <div className="info">
                <div className="icon">
                    <strong>{formatter.format(price)}</strong>
                </div>
                <div className="icon">
                    <AddShoppingCart />{stock} unid.
                </div>
                <div className="info" style={{cursor: "pointer"}}>
                    <Link to={`/item/${id}`}><More />Detalles</Link>
                </div>
            </div>
        </div>
    );
}

export default Item;