  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getFirestore, addDoc, collection, getDocs, doc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyBO5d9SwmtP5nPkSKma7ImUXdRinolJjgQ",
    authDomain: "todo-app-3f1b8.firebaseapp.com",
    projectId: "todo-app-3f1b8",
    storageBucket: "todo-app-3f1b8.appspot.com",
    messagingSenderId: "849937852775",
    appId: "1:849937852775:web:c6b77edb6add0027fea7c2"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {
    app,
    addDoc,
    collection,
    db,
    getDocs,
    doc,
    deleteDoc,

  }