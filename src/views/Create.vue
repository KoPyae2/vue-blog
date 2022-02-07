<template>
  <form @submit.prevent="addPost">
      <label for="">Title</label>
      <input type="text" required v-model="title">
      
      <label for="">Body</label>
      <textarea required v-model="body"></textarea>

      <label for="">Tags(hit enter to add a teg)</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">

      <div class="pill">
          <div v-for="tag in tags" :key="tag" class="tag">
            {{tag}}
          </div>
      </div>
      <button>Add Post</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'  //this.$router

import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import db from '../firebase/config'
export default {
    setup(){
        let router = useRouter();  
        
        let title = ref('');
        let body = ref('');
        let tag = ref('');
        let tags = ref([])

        let handleKeydown = ()=>{
            if(!tags.value.includes(tag.value) && tag.value !== ""){
                tags.value.push(tag.value);
            }

            tag.value = ""
        }

        let addPost =async()=>{

            let colref = collection(db,'posts')

            await addDoc(colref,{
                title:title.value,
                body:body.value,
                tags:tags.value,
                created_at:serverTimestamp()
            })

            // redirect user to home page
            router.push('/');

        }

    return {title,body,tag,tags,handleKeydown,addPost}
    }
}
</script>

<style>

form{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

label{
    font-weight: bold;
    text-align: left;
    margin-top: 30px ;
    margin-bottom: 5px;
}

input,textarea{
    padding: 5px 0;
    border: none;
    border-bottom: 2px solid indigo;
}

input:focus{
    outline: 0;
}

button{
    width: 100px;
    padding: 10px 8px;
    background:indigo;
    color: #fff;
    border: 0;
    border-radius: 5px;

    margin-top: 20px;
}
.pill{
    display: flex;
    
}

.tag{
    margin: 10px 10px 0 0;
    color: #444;
    background-color: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
}

</style>