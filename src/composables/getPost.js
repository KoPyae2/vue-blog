import { ref } from "vue";

import { doc, getDoc } from "firebase/firestore";
  import db from '../firebase/config'

let getPosts =(id)=>{


    let post = ref(null)
    let error = ref("")
    let load=async()=>{
        try{
            let docrfe = doc(db,'posts',id)

            let docsnap =await getDoc(docrfe)

            post.value = {id:doc.id,...docsnap.data()}
        }catch(err){
            return error.value = err.message;
        }
    }

    return {post,error,load};
}

export default getPosts;