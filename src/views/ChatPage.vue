<script setup lang="ts">
import { onMounted, ref } from 'vue';
const chats = ref([{name : '' , title : '' , text: '' , group : ''}])
onMounted(async () =>{
    const restualt = await fetch('http://localhost:3000/chats', { headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0NmNiN2Q3LWYwZmQtNGUyMS04NDgwLWJjZWNkZDJiYzA5NSIsIm5hbWUiOiJzb21lb25lIiwiZW1haWwiOiJzb21lb25lQGdtYWlsLmNvbSIsImlhdCI6MTY5MzExNzAyMCwiZXhwIjoxNjkzMTM4NjIwfQ.BHxDtm8qvlx2tPnAfJK6Vd0yT8SFkf5KzYhI243CN3g' } })
    chats.value = await restualt.json()
})
</script>

<template>
    <div class="background">
        <!-- <h1>{{ chats }}</h1> -->
    </div>
    <div class="writeMessage">
        <input type="">
        <button>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
            </svg> -->
            SEND MESSAGE
        </button>
    </div>
</template>

<style scoped>
    .background{
        margin: 10px;
        border: 5px double rgb(171, 88, 238, 0.7);
    }

    .writeMessage{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(1300px, 2fr));

        margin: 10px;
        position: relative;
        /* background-color: aqua; */
        padding: 10px;
    }

    .writeMessage input{
        width: 1500px;
        height: 42px;
        margin-right: 20px;
        border-radius: 10px;
        /* background-color: rgb(161, 161, 161 , 0.5); */
        border: 2px solid  rgb(255, 129, 246, 0.7);
        /* color: white; */
        font-size: larger;
    }

    .writeMessage button{
        background: linear-gradient(109.6deg, rgb(128, 144, 233, 0.7) 17.4%, rgb(171, 88, 238, 0.7) 52.4%, rgb(255, 129, 246, 0.7) 91%);
        border: none;        
        border-radius: 15px;
        width: 128px;
        align-items: center;
        padding: 5px;
    }
</style>