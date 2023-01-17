import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, getDoc, collection, doc, query, orderBy, updateDoc, deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBkmpcYttWTPssPiFwsQVQzULAdE7MvF9g",
    authDomain: "proyectofinalrearte.firebaseapp.com",
    projectId: "proyectofinalrearte",
    storageBucket: "proyectofinalrearte.appspot.com",
    messagingSenderId: "680601278413",
    appId: "1:680601278413:web:d87533f2be625abc045684"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore()

const populateDatabase = async () => {
    const promise = await fetch('./json/products.json')
    const products = await promise.json()

    products.forEach(async (prod) => {
        await addDoc(collection(db, "products"), 
            { 
                id: prod.id,
                categoryId: prod.categoryId,
                serie: prod.serie,
                title: prod.title,
                author: prod.author,
                price: prod.price,
                stock: prod.stock,
                releaseDate: prod.releaseDate,
                description: prod.description,
                img: prod.img
            }
        )
    })
}

const getProducts = async() => {
    const q = query(collection(db, "products"), orderBy("title", "asc"));
    const products = await getDocs(q);
    const items = products.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

const getProduct =  async (id) => {
    const product = await getDoc(doc(db, "products", id))
    const item = {...product.data(), id: product.id}
    return item
}

const updateProduct = async (id, data) => {
    const est = await updateDoc(doc(db,"products", id), data)
    return est
}

const deleteProduct = async(id) =>{
    const est = await deleteDoc(doc(db, "products", id))
    return est
}

const createOrder = async (client, total, date ) => {
    const order = await addDoc(collection(db, "orders"),{
        name: client.name,
        lastName: client.lastName,
        mail: client.mail,
        phone: client.phone,
        province: client.province,
        city: client.city,
        street: client.street,
        stnumber: client.stnumber,
        date: date,
        total: total
    })

    return order
}

const getOrder =  async (id) => {
    const order = await getDoc(doc(db, "orders", id))
    const item = {...order.data(), id: order.id}
    return item
}

export { populateDatabase, getProducts, getProduct, updateProduct, deleteProduct, createOrder, getOrder }