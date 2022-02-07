<template>
  <div v-if="post" class="post">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <button class="delete" @click="deletepost">Delete</button>
  </div>
  <div v-else>
      <Loading></Loading>
  </div>

</template>

<script>
import Loading from '../components/Loading'
import getPost from "../composables/getPost"
import {useRoute} from 'vue-router'
import {useRouter} from 'vue-router'

import db from '../firebase/config'
import {deleteDoc, doc } from '@firebase/firestore'

export default {
  components: { Loading },
    props:['id'],  //this.$route.params.id
    setup(props){

      let route = useRoute();
      let router = useRouter()


        let {post,error,load}=getPost(route.params.id);
        load();

        let deletepost = async()=>{
            let id = props.id;

            let docRef = doc(db, "posts", id);
            await deleteDoc(docRef)

            router.push('/')


        }

        return {post,error,deletepost}
    }
}
</script>

<style>
.post{
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
}

.post h2{
    cursor: pointer;
    font-size: 26px;
    color: indigo;
    margin-bottom: 10px;
    max-width: 400px;
}


a{
    text-decoration: none;
}

.tag{
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background-color: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
}
.delete{
    cursor: pointer;
}

</style>