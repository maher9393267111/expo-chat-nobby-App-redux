import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

//web app's Firebase configuration
const firebaseConfig = {
  // apiKey: 'AIzaSyC0xv47F6wk-Z80_j1fNWRmoSi-L4amoCA',
  // authDomain: 'nobby-chat.firebaseapp.com',
  // projectId: 'nobby-chat',
  // storageBucket: 'nobby-chat.appspot.com',
  // messagingSenderId: '477542365419',
  // appId: '1:477542365419:web:4fa6b661a619e3c7c8a6ae',

  apiKey: "AIzaSyA1aPqjHTrPxoFlVxF-lLiAI3cy2i3SR5k",
  authDomain: "maher-vue.firebaseapp.com",
  databaseURL: "https://maher-vue-default-rtdb.firebaseio.com",
  projectId: "maher-vue",
  storageBucket: "maher-vue.appspot.com",
  messagingSenderId: "694861415607",
  appId: "1:694861415607:web:269a6d6a8d2d4b755c7932"



};

//Initialize firebase, auth, database and storage
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
