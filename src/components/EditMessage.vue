<template>
    <div class="modal-bg" @click="closeModal"></div>
    <div class="modalContent">
        <h1> Edit Message </h1>
        <p>{{ title }} , {{ text }} , {{ group }}</p>
        <label style="color: white;" for="text">Title</label>
        <br>
        <input type="text" id="Title" name="Title" v-model="newMessage.title"  required>

        <br><br>
        <label style="color: white;" for="text">Text</label>
        <br>
        <input type="text" id="Text" name="Text" v-model="newMessage.text" required>

        <br><br>
        <label style="color: white;" for="text">Group</label>
        <br>
        <input type="Group" id="Group" name="Group" v-model="newMessage.group" required>

        <br><br>

        <button @click="EditMessage()"> Edit Message </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const token = localStorage.getItem("TOKEN")
const emit = defineEmits(['close-modal']);
let prop = defineProps(['title' , 'text' , 'group' , 'id'])
let newMessage = ref({title : prop.title ,text : prop.text , group : prop.group})
function closeModal() {
    emit('close-modal'); // Emit the 'close-modal' event to the parent component
}

async function EditMessage() {
    // In this fetch edit message and if have error alert error code 
    const deleteResualt = await fetch('http://localhost:3000/new-users/chats/'+prop.id, { 
        method : 'PATCH',
        headers: { "Content-Type": "application/json" , 'Authorization': token! },
        body : JSON.stringify({title : newMessage.value.title , text : newMessage.value.text , group : newMessage.value.group})
        })
    if (deleteResualt.status !== 200) {
        alert('Message dont deleted the error code is :' + deleteResualt.status)
    }
    //this emit close edit panel after edit message
    emit('close-modal');
    
}


</script>

<style scoped>
.modalContent {
    /* position: relative; */
    /* left: 30%; */
    /* margin: 10% 35%; */
    /* border: 2px solid rgb(171, 88, 238); */
    width: 50%;
    background: linear-gradient(109.6deg, rgb(128, 144, 233) 17.4%, rgb(171, 88, 238) 52.4%, rgb(255, 129, 246) 91%);
    box-shadow: 1px 1px 7px 1px rgb(64, 62, 62);
    border-radius: 10px;
    max-width: 500px;
    text-align: center;
    z-index: 4;
    align-self: center;
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 10px;
    /* min-width: 200px; */
    /* max-width: 500px; */
    /* opacity: 0.7; */
}

h1 {
    color: white;
}

.modal-bg {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}

input {
    border-radius: 5px;
    height: 30px;
    width: 70%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid black;
}

button {
    border-radius: 10px;
    background-color: white;
    border: none;
    color: rgb(171, 88, 238);
    width: 40%;
    height: 30px;
}
</style>