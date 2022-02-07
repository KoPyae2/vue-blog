import { initializeApp } from "firebase/app";
import { 
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  } from "firebase/firestore";


  const firebaseConfig = {
    apiKey: "AIzaSyBpJ0lsCGJat-a9Wkx2WLxU5NAmt_WIR_c",
    authDomain: "vue-blog-system-53894.firebaseapp.com",
    projectId: "vue-blog-system-53894",
    storageBucket: "vue-blog-system-53894.appspot.com",
    messagingSenderId: "505258635013",
    appId: "1:505258635013:web:eb0075d82b48ab0b6ad16c"
  };

initializeApp(firebaseConfig)
  const db = getFirestore();






  // const colref = collection(db, 'posts')

  // getDocs(colref)
  // .then((res)=>{
  //   let posts = []

  //   res.docs.forEach(doc=>{
  //     posts.push({...doc.data(), id:doc.id})

  //     console.log(posts)
  //   })
  // })
  // .catch(err=>{
  //   console.log(err.message)
  // })


  // export  {db,colref};


export default db



 