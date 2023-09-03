<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Autenticate } from "../stores/counter";
import Messagemodal from '../components/EditMessage.vue'

const Autent = Autenticate()
const Messages = ref([{name : '' , title : '' , text: '' , group : '' , id:0}])
const WhoAmI = ref({username : '' , accessLevel : ''})
let Text = ref('')
let Title = ref('')
let Group = ref('')
let sendresualt = ref('')
const token = localStorage.getItem("TOKEN")
let editDefualt = ref({title : '' , text : '' , group :'' ,id:0})
let checkClickEdit = false
onMounted(async () =>{
    const restualt = await fetch('http://localhost:3000/chats', { headers: { 'Authorization': token! } })
    Messages.value = await restualt.json()

    const Who = await fetch('http://localhost:3000/whoAmI', { headers: { 'Authorization': token! } })
    WhoAmI.value = await Who.json();
    
})

window.setInterval(async () => {
    const restualt = await fetch('http://localhost:3000/chats', { headers: { 'Authorization': token! } })
    Messages.value = await restualt.json()
            
},100);

async function SENDMessage() {
    const sendMessage = await fetch('http://localhost:3000/new-users/chats', { 
        method : 'POST',
        headers: { "Content-Type": "application/json" , 'Authorization': token! },
        body : JSON.stringify({title : Title.value , text : Text.value , group : Group.value})
    })
    console.log(sendMessage);
    Text.value = ''
    Title.value = ''
    Group.value = ''
}

async function DeleteMessageAdmin(id:number) {
    const deleteResualt = await fetch('http://localhost:3000/chats/Admin/'+id, { 
        method : 'DELETE',
        headers: { "Content-Type": "application/json" , 'Authorization': token! },
        })
    if (deleteResualt.status !== 200) {
        alert('Message dont deleted the error code is :' + deleteResualt.status)
    }
}

async function DeleteMessage(id : number) {
    const deleteResualt = await fetch('http://localhost:3000/new-users/chats/'+id, { 
        method : 'DELETE',
        headers: { "Content-Type": "application/json" , 'Authorization': token! },
        })
    if (deleteResualt.status !== 200) {
        alert('Message dont deleted the error code is :' + deleteResualt.status)
    }
    
}

function EditMessage(title : string , text : string ,group : string, id : number) {
    checkClickEdit = true
    editDefualt.value.title = title
    editDefualt.value.text = text
    editDefualt.value.group = group
    editDefualt.value.id = id
    
}


</script>

<template>
    <Messagemodal @close-modal="checkClickEdit = false" v-if="checkClickEdit" :group="editDefualt.group" :title="editDefualt.title" :text="editDefualt.text" :id="editDefualt.id" />
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

            <div @click="DeleteMessageAdmin(Message.id)" class="deleteMessage" v-if="WhoAmI.accessLevel == 'Admin'">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </div>
            </div>

            

                <div class="MessageMe" v-else>
                <div class="name">
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                    {{ Message.name }}
                    ({{ WhoAmI.accessLevel }})
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
            
            <div class="edit-Delete-Message">


                <svg @click="EditMessage(Message.title , Message.text , Message.group , Message.id)" style="margin-left: 10px; cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>

                <svg @click="DeleteMessage(Message.id)" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
                

            </div>

            </div>

            </div>
                
        

        
    </div>
    <div class="writeMessage">
        <input type="text" placeholder="TITLE" v-model="Title">
        <input type="text" placeholder="TEXT" v-model="Text">
        <input type="text" placeholder="GROUP" v-model="Group">

        <button @click="SENDMessage" >SEND MESSAGE</button>
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
        /* margin-left: 80%; */
        position: relative;
        left: 79%;
        direction: ltr;
        
    }

    .writeMessage input{
        margin: 10px;
        /* min-width: 500px; */
        height: 32px;
        border: 2px solid ;
        border-image: linear-gradient(109.6deg, rgb(128, 144, 233) 17.4%, rgb(171, 88, 238) 52.4%, rgb(255, 129, 246) 91%) 1;

    }

    .writeMessage button{
        /* max-width: 128px; */
        /* min-width: 100px; */
        margin: 10px;
        background: none;
        border: 2px solid;
        /* max-width: 256px; */
        /* border-image: linear-gradient(109.6deg, rgb(128, 144, 233) 17.4%, rgb(171, 88, 238) 52.4%, rgb(255, 129, 246) 91%) 1; */
        background: linear-gradient(109.6deg, rgb(128, 144, 233) 17.4%, rgb(171, 88, 238) 52.4%, rgb(255, 129, 246) 91%);
        color: #ffffff;
    }

    .writeMessage{
        /* margin: 10px; */
        display: grid;
        /* position: fixed; */
        grid-template-columns: repeat(auto-fit, minmax(256px, 2fr));
    
    }

    .background{
    
        overflow-y: scroll;
        /* position: absolute;*/
        height: 780px; 
        /* overflow-x: hidden; */
        width: 100%;
        
    }


    .edit-Delete-Message{
        display: none;
        
    }

    .MessageMe:hover{
        .edit-Delete-Message{
            display: flex;
            margin: 10px 0px;
        }
    }

    ::-webkit-scrollbar {
     width: 20px;
    }

    
</style>