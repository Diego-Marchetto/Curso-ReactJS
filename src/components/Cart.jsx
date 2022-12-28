import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import '../App.css'

const Cart = () => {
    const { cartList, deleteItem, deleteAll, formatter, totalCostItem, finallyPrice, finallyBuy } = useContext(CartContext)
    return (
        <div className="maxCart">
            <p className="cartTitle">Mi carrito</p>
            <div className="topCart">
                <Link to='/'><button className="cartButton">Continuar comprando</button></Link>
                {
                    (cartList.length > 0)
                    ? <button button className="cartButton" onClick={deleteAll}>Borrar todos los productos</button>
                    : <p>Tu carrito esta vacio...</p>
                }
            </div>
            <div className="minCart">
                    {
                        cartList.length > 0 ? 
                        cartList.map(item => 
                        <div className="itemCart" key={item.idItem}>
                        <div className="detailItem">
                            <img className="imgItem" src={item.imgItem} />
                            <div className="specsItems">
                            <span>
                                <b>Producto:</b> {item.nameItem}
                            </span>
                            <button button className="cartButton" onClick={() => deleteItem(item.idItem)}>Borrar</button>
                            </div>
                        </div>
                        <div className="qtyItem">
                            <div className="ProductAmountContainer">
                            <p className="amountItem">{item.qtyItem} producto(s)</p>
                            <p className="priceItem">{formatter.format(item.costItem)} x Unid.</p>
                            </div>

                            <p className="totalCostItem">Total:{formatter.format(totalCostItem(item.idItem))}</p>
                        </div>
                        </div>
                        )
                        : <h1 className="cartTitle"></h1>
                    }
                    {
                        cartList.length > 0 &&
                        <div className="contFinally">
                            <p className="finallyTitle">Orden de compra</p>
                            <p className="titleTotal">Total</p>
                            <p className="finallyPrice">{formatter.format(finallyPrice())}</p>
                            <button className="finallyButton" onClick={() => finallyBuy()}>FINALIZAR COMPRA</button>
                        </div>
                    }

            </div>
        </div>
    );
}

export default Cart;