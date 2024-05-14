import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from './firebase';

const itemsCollection = collection(db, "items");

export const createItem = async (item) => {
    await addDoc(itemsCollection, item);
};

export const getItems = async () => {
    const snapshot = await getDocs(itemsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateItem = async (id, updates) => {
    const itemDoc = doc(db, "items", id);
    await updateDoc(itemDoc, updates);
};

export const deleteItem = async (id) => {
    const itemDoc = doc(db, "items", id);
    await deleteDoc(itemDoc);
}