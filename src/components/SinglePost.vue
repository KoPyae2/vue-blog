<template>
    <div class="post">
        <router-link :to="{name:'Detail',params:{id:post.id}}">
        <h2>{{post.title}}</h2> 
        </router-link>
        <p>{{cutpostbody}}</p>
        <div v-for="tag in post.tags" :key="tag" class="tag">
            <router-link :to="{name:'Tag',params:{tag:tag}}">{{tag}}</router-link>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props:['post'],
    setup(props){
        let cutpostbody = computed(()=>{
            return props.post.body.substring(0,100) + "...";
        });

        return {cutpostbody}
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



</style>