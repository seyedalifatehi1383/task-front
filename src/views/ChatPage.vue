<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Autenticate } from "../stores/counter";
const Autent = Autenticate()
const Messages = ref([{name : '' , title : '' , text: '' , group : ''}])
const WhoAmI = ref({username : ''})
onMounted(async () =>{
    const restualt = await fetch('http://localhost:3000/chats', { headers: { 'Authorization': Autent.token } })
    Messages.value = await restualt.json()

    const Who = await fetch('http://localhost:3000/whoAmI', { headers: { 'Authorization': Autent.token } })
    WhoAmI.value = await Who.json();
})
</script>

<template>
    <div class="background">
        <div class="MessageAll" v-for="Message in Messages">
            <div class="MessageOther" v-if="WhoAmI.username !== Message.name">
                <div class="name">
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                    {{ Message.name }}
                </p>
            </div>

            <div class="title">
                <p >title : {{ Message.title }}</p>
            </div>

            <div class="text">
                <p>Text :{{ Message.text }}</p>
            </div>

            <div class="group">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16">
                <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
                </svg>
                {{ Message.group }}
            </div>
            </div>

            <div class="MessageMe" v-else>
                <div class="name">
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                    {{ Message.name }}
                </p>
            </div>

            <div class="title">
                <p >title : {{ Message.title }}</p>
            </div>

            <div class="text">
                <p>Text :{{ Message.text }}</p>
            </div>

            <div class="group">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16">
                <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
                </svg>
                {{ Message.group }}
            </div>
            
            </div>
                
        </div>

        
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
    .MessageOther{
        margin: 10px ;
        border-radius: 10px;
        /* background-color: rgb(128, 144, 233, 0.7); */
        background-color: #B200ED;
        padding: 3px 15px;
        width: 350px;
        color: white;
        /* float: right; */
    }

    .MessageMe{
        margin: 10px ;
        border-radius: 10px;
        /* background-color: rgb(128, 144, 233, 0.7); */
        background-color: rgb(255, 129, 246, 0.7);
        padding: 3px 15px;
        width: 350px;
        color: white;
        
        direction: rtl;
        
    }

    .writeMessage input{
        /* margin: 0px 10px; */
        /* min-width: 500px; */
        width: 1500px;
    }

    .writeMessage button{
        /* max-width: 128px; */
        /* min-width: 100px; */
    }

    .writeMessage{
        margin: 10px;
        display: flex;
        /* grid-template-columns: repeat(auto-fit, minmax(256px, 1fr)); */
    
    }

    .background{
        
        overflow-y: scroll;
        /* position: absolute;*/
        height: 512px; 
        /* overflow-x: hidden; */
        
    }

    
</style>