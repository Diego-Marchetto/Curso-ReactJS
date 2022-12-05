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
            <Button variant="text" onClick={increment}><Add /></Button>
            <div className="productAmount">{count}</div>
            <Button variant="text" onClick={decrement}><Remove /></Button>
            {
                stock
                ? <Button className="buttonColor" variant="contained" color="primary" onClick={() => onAdd(count)}>Agregar al carrito</Button>
                : <Button variant="contained" disabled>Agregar al Carrito</Button>
            }
        </div>
    );
}

export default ItemCount;