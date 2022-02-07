<template>
  <div class="home">
    <!-- <h1>{{personOne.name}} - {{personOne.age}}</h1>

    <button @click="changeOne">Change one</button>

    <h2>Person Two</h2>
    <h1>{{personTwo.name}} - {{personTwo.age}}</h1>
    <button @click="changeTwo">Change two</button> -->

    <!-- _____________________________________________________ -->

    <!-- <h1>User One - {{userOne}}</h1>
    <button @click="changeOne">Change One</button>
    <h1>User Two - {{userTwo}}</h1>
    <button @click="changeTwo">Change Two</button> -->

    <!-- _____________________________________________________ -->

    <!-- <input type="text" v-model="search">
    <p>sear item - {{search}}</p>
    <div v-for="name in filterednames" :key="name">
      {{name}}
    </div> -->

 <!-- _____________________________________________________ -->
      <div v-if="error">
        {{error}}
      </div>
      <div v-if="posts.length>0" class="layout">
        <div>
          <PostList :posts="posts"></PostList>
        </div>
        <div>
          <TagCloud :posts="posts"></TagCloud>
        </div>
      </div>
      <div v-else>
        <Loading></Loading>
      </div>


    

  </div>
</template>

<script>
import TagCloud from '../composables/TagCloud'
import Loading from '../components/Loading'
import PostList from '../components/PostList'
// import { reactive, ref } from '@vue/reactivity'


import getPosts from "../composables/getPosts"


export default {
  components: {
    TagCloud,
    Loading, PostList },
  setup(){
    // let personOne = ref({
    //   name:"kyaw kyaw",
    //   age:30
    // });

    // let personTwo = reactive({
    //   name:"maung maung",
    //   age:30
    // });

    // let changeOne =()=>{
    //   personOne.value.name = "zaw zaw"
    // }

    // let changeTwo = ()=>{
    //   personTwo.name = "change mgmg"
    // }

    // return {personOne,personTwo,changeOne,changeTwo}

    // _____________________________________________________

    // let userOne = ref("ppk");
    // let userTwo = ref("wma");

    // let changeOne = ()=>{
    //   userOne.value = "change  ppk"
    // }

    // let changeTwo = ()=>{
    //   userTwo= "change  wma"  //is not work because of ppremative vale like a string can't use reactive
    // }

    // return{userOne,userTwo,changeOne,changeTwo}

    // ____________________________________________

    // let names = ref(["aung aung","kyaw kyaw","maung maung","su su"]);
    // let search = ref("")

    // let filterednames = computed(()=>{
    //   return names.value.filter(name=>{
    //     return name.includes(search.value)
    //   })
    // })

    // return {names,search,filterednames}

    // ____________________________________________


    let {posts,error,load} = getPosts();

    load();

    return {posts,error}


    // destruing
    // let {name,age}={
    //   name:"pyae phyo kyaw",
    //   age:19
    // }


  }
}
</script>

<style >
.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout{
  display: grid;
  grid-template-columns:3fr 1fr ;
  gap: 20px;
}
</style>
