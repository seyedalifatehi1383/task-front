<template>
<div class="modal-bg" @click="closeFinishModal"></div>
    <div class="modalContainer">
        <div class="close-button" @click="closeFinishModal">
            <svg style="color: rgb(171, 88, 238);" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path style="color: rgb(171, 88, 238);"
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
        </div>

        <p style="margin: 20px; font-size: 35px; color: rgb(171, 88, 238);"> Are you sure to Finish this task? </p>
        <button @click="FinishTask" style="margin-bottom: 10px; margin-right: 10px; margin-left: 10px;"> Yes </button>
        <button @click="closeFinishModal" style="margin-bottom: 10px; margin-left: 10px; margin-right: 10px;"> No </button>
        <!-- <h1>Your signing up has been successfully completed.</h1>
      <p>If you would like to login, you can <RouterLink to="/Login">click here</RouterLink>.</p> -->
    </div>

</template>


<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['close-finish-modal', 'finish-task']);
const prop = defineProps(['taskId'])
const token = localStorage.getItem("TOKEN")
function closeFinishModal() {
    emit('close-finish-modal'); // Emit the 'close-modal' event to the parent component
}

async function FinishTask() {
    const resualt = await fetch('http://localhost:3000//new-users/completeTask/' + prop.taskId , {
        headers : {
            "Content-Type": "application/json",
            'Authorization': token!
        },
        method : "PATCH",
        body : JSON.stringify({isfinish : true})
    })

    if (resualt.status !== 200) {
        alert('Error' + resualt.status)
    } else {
        closeFinishModal()
    }
}
</script>


<style scoped>

.modalContainer {
    /* position: relative; */
    /* left: 30%; */
    /* margin: 10% 35%; */
    /* width: 25%; */
    /* min-width: 100px; */
    border: 2px solid rgb(171, 88, 238);
    background-color: white;
    border-radius: 10px;
    max-width: 600px;
    text-align: center;
    z-index: 4;
    align-self: center;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
}

.modal-bg {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
}

.close-button svg {
    color: rgb(171, 88, 238);
}

.close-button {
    float: right;
    margin-top: 5px;
    margin-right: 7px;
    cursor: pointer;
}

button {
    color: white;
    border: none;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    background: linear-gradient(109.6deg, rgb(128, 144, 233) 17.4%, rgb(171, 88, 238) 52.4%, rgb(255, 129, 246) 91%);
}

button:hover {
    border-radius: 10px;
    background: white;
    border: 1px solid rgb(171, 88, 238);
    color: rgb(171, 88, 238);
    height: 30px;
    cursor: pointer;
}
</style>