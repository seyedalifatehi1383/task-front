<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { Autenticate } from "../stores/counter";
const Autent = Autenticate()
let tasks = ref([])

onMounted(async () => {
     const restualt = await fetch('http://localhost:3000/myTasks' , {headers : {'Authorization' : 'Bearer ' + Autent.token }});
     if (restualt.status == 200) {
        tasks = await restualt.json()
     } else {
        console.log(restualt);
        
     }
    
     
  });
</script>

<template>
<div class="Back">
    <div class="panel" v-for="task in tasks">
        <h1>titile :{{ task.title }}</h1>
        <p> description :{{ task.des }}</p>
        
    </div>
</div>

</template>

<style scoped>
 .panel{
    background: linear-gradient(109.6deg, rgb(128, 144, 233) 17.4%, rgb(171, 88, 238) 52.4%, rgb(255, 129, 246) 91%);
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
 }
</style>