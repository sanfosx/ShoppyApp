


import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firebase/FirebaseConfig.js';

//2 referenciamos a la db de firestore
const productsCollection = collection(db, "Products");
//3 funcion para mostrar todos los documentos

export const getProducts = async () => {
    const data = await getDocs(productsCollection);
    
    if (data) {

        
        return (data);
    }

};


const FirebaseMethods = async () => {


    return (
        <><h1>alfo</h1></>
    )


}
export default FirebaseMethods

