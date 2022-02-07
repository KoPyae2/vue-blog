<template>
  <h1>realtime </h1>
  <div v-for="post in posts" :key="post.id">
      <div>
          <h1>{{post.title}}</h1>
          <p>{{post.body}}</p>
          <hr/>
      </div>
  </div>
</template>

<script>
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import db from '../firebase/config'
import { ref } from '@vue/reactivity'
export default {
    setup(){
         let colref = collection(db,'posts')

         let q = query(colref, orderBy("created_at","desc"));

         let posts = ref([])

         onSnapshot(q,colref,(snap)=>{
             posts.value = snap.docs.map(doc=>{
                //  console.log(doc.data())
                 return {id:doc.id,...doc.data()}
             })
         })
         return{posts}
    }
}
</script>

<style>

</style>