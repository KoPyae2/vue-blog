<template>
  <div class="tagcloud">
      <h3>Tag cloud</h3>
      <div v-for="tag in uniqueTags" :key="tag">
          <router-link :to="{name:'Tag',params:{tag:tag}}">{{tag}}</router-link>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    props:['posts'],
    setup(props){
        let tags = ref([])
        props.posts.forEach(post => {
            post.tags.forEach((tag)=>{
                tags.value.push(tag)
            })
        });

        let uniqueTags = tags.value.filter((tag,index,array)=>{
            return array.indexOf(tag) === index
        });


        return{uniqueTags}
    }
}
</script>

<style>
.tagcloud{
    padding: 10px;
}

.tagcloud h3{
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
}
.tagcloud div{
    display: inline-block;
    padding: 10px;
    margin: 5px 5px;
    border-radius: 10px;
    background-color: #eee;
}
.tagcloud a{
    color: #777;
    text-decoration: none;
}

.tagcloud a.router-link-active{
    color: indigo;
    font-weight: bold;
}
</style>