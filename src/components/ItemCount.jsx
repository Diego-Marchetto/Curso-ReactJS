import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import '../App.css'

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <div className="productAmountContainer">
            <div className="responsiveCount">
            <Button variant="text" onClick={increment}><Add /></Button>
            <div className="productAmount">{count}</div>
            <Button variant="text" onClick={decrement}><Remove /></Button>
            </div>
            {
                stock
                ? <button className="cartButton buttonDetailCount" onClick={() => onAdd(count)}>Agregar al carrito</button>
                : <button className="cartButton buttonDetailCount" variant="contained" disabled>Agregar al Carrito</button>
            }
        </div>
    );
}

export default ItemCount;