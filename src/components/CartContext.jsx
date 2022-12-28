import { doc, collection, setDoc } from 'firebase/firestore'
import { serverTimestamp } from 'firebase/firestore';
import { createContext, useState } from 'react';
export const CartContext = createContext();
import { db } from '../utils/firebaseConfig';

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const formatter = new Intl.NumberFormat('en-US', { //Money
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      })

    const addItem = (item, qty) => {
        let noClon = cartList.find(product => product.idItem === item.id);
        if ( noClon === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.image[0],
                    nameItem: item.name,
                    costItem: item.cost,
                    qtyItem: qty
                }
            ]);
        } else {
            noClon.qtyItem += qty;
            setCartList([...cartList]);
        }
    }

    const deleteItem = (id) => {
        const newArray = cartList.filter(item => item.idItem !== id)
        setCartList(newArray);
    }

    const deleteAll = () => {
        setCartList([]);
    }

    const finallyBuy = () => {
        const order = {
            buyer: {
                name: 'Diego Marchetto',
                email: 'diego@coderhouse.com',
                phone: '123456789'
            },
            date: serverTimestamp(),
            items: cartList.map(item => ({
                id: item.idItem,
                title: item.nameItem,
                price: item.costItem,
                qty: item.qtyItem
            })),
            total: finallyPrice()
        }

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order);
            return newOrderRef;
          }

          createOrderInFirestore()
            .catch(err => console.log(err))

        setCartList([]);
        Swal.fire({
            title: 'Procesado',
            text: 'Muchas gracias por tu compra',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })

    }

    const cartQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    const totalCostItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const finallyPrice = () => {
        let priceForItem = cartList.map(item => totalCostItem(item.idItem));
        return priceForItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    return(
        <CartContext.Provider value={{cartList, addItem, deleteItem, deleteAll, cartQty, formatter, totalCostItem, finallyPrice, finallyBuy}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;