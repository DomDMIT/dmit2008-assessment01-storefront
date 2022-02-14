import { ref as databaseRef, set, get, remove } from 'firebase/database';
import { db, storage } from './libs/firebase/firebaseConfig.js';

function pageInit(){
    const key = sessionStorage.getItem('key');
    const path = `games/${key}`;
    const productRef = databaseRef(db, path)
    const productRemoveRef = productRef.remove();
    // ref with the key
    // remove(ref)
  }
  
  pageInit()