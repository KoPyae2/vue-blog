<template>
  <div class="cloud">
      <div v-if="error">
      {{error}}
        </div>
        <div v-if="posts.length" class="layout">
            <div>
                <PostList :posts="filterposts"></PostList>
            </div>
            <div>
                <TagCloud :posts="posts"></TagCloud>
            </div>
        </div>
        <div v-else>
        
        </div>
  </div>
</template>

<script>
import TagCloud from '../composables/TagCloud'
import PostList from '../components/PostList'
import { computed } from '@vue/runtime-core';

import getPosts from '../composables/getPosts'
export default {
  components: {
    TagCloud, PostList },
    props:['tag'],
    setup(props){
        let {posts,error,load} = getPosts();
        load();

        let filterposts = computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag)
            })
        })

        return{posts,error,filterposts}
    }
}
</script>

<style>
.cloud{
    max-width: 1200px;
    margin: 0 auto;
}
</style>