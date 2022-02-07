import { ref } from "vue";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import db from '../firebase/config'


let getPosts =()=>{
    let posts = ref([]);
    let error = ref("")

    let load = async()=>{
      try{

        
        let colref = collection(db,'posts')

        let q = query(colref, orderBy("created_at","desc"));
  

        let res = await getDocs(q,colref)
      
        posts.value = res.docs.map(doc=>{
          return {...doc.data(), id:doc.id}
        })

      }catch(err){
        error.value = err.message
      }
    }


    return {posts,error,load}
}

export default getPosts;