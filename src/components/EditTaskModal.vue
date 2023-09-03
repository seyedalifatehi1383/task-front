<template>
    <div class="modal-bg" @click="closeModal"></div>
    <div class="modalContent">
        <h1> Edit User Task </h1>
        <input type="text" id="Title" name="Title" placeholder="Title" required  v-model="title">

        <br><br>

        <textarea name="description" id="description" cols="30" rows="10" placeholder="Description" required v-model="desc"></textarea>
        <!-- <input type="text" id="Description" name="Description" placeholder="Description" required> -->

        <br><br>

        <button style="cursor: pointer;"  @click="editTask()"> Edit task </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const token = localStorage.getItem("TOKEN")
const emit = defineEmits(['close-task-modal']);
const prop = defineProps(['title','desc' , 'taskId' , 'userId'])
let title = ref(prop.title)
let desc = ref(prop.desc)
function closeModal() {
    emit('close-task-modal'); // Emit the 'close-modal' event to the parent component
}

function addTask(userId : string) {
    
}

async function editTask() {
    const resualt = await fetch('http://localhost:3000/AdminOrSubAdmin/'+prop.userId+'/tasks/' + prop.taskId , {
        headers : {"Content-Type": "application/json" , 'Authorization': token!},
        method : "PATCH",
        body : JSON.stringify({title : title.value , desc : desc.value})
    })
    
    if (resualt.status !== 200) {
        alert(resualt.status)
    }else{
        closeModal()
    }
    
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
    position: absolute;
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

textarea {
    border-radius: 5px;
    height: 50px;
    width: 70%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid black;
    resize: vertical;   
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