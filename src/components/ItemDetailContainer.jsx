import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import '../App.css'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig'


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        const firestoreFetchOne = async () => {
            const docRef = doc(db, "products", idItem);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
              return {
                  id: idItem,
                  ...docSnap.data()
              }
            } else {
              console.log("No such document!");
            }
        }
        firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;