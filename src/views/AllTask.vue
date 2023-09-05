<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Autenticate } from "../stores/counter";
import FinishModal from '@/components/FinishModal.vue';
import DeleteAlertModal from '@/components/DeleteAlertModal.vue';
const Autent = Autenticate()
const token = ref(localStorage.getItem("TOKEN"))
let tasks = ref([{ title: '', desc: '', isfinish: false, more: false , id : 0}])
let taskId = ref(0)
let showFinishModal = ref(false)
let whoAmI = ref({accessLevel : '' , id :''})
let showDeleteModal = ref(false)
let Deleteproperty = ref({
    taskId : 0,
    userId : ''
})
onMounted(async () => {
    const restualt = await fetch('http://localhost:3000/myTasks', { headers: { 'Authorization': token.value!  } })
    tasks.value = await restualt.json()
    const whoresualt = await fetch('http://localhost:3000/whoAmI', { headers: { 'Authorization': token.value!  } })
    whoAmI.value =await whoresualt.json()
})

function GetTaskId(taskid:number) {
    showFinishModal.value = true
    taskId.value = taskid
}

async function CloseAndRefech(){
    showFinishModal.value = false
    const restualt = await fetch('http://localhost:3000/myTasks', { headers: { 'Authorization': token.value!  } })
    tasks.value = await restualt.json()
}

function setDeleteProperty(taskid : number , userid : string) {
    showDeleteModal.value = !showDeleteModal.value,
    Deleteproperty.value.taskId = taskid,
    Deleteproperty.value.userId = userid
}

async function DeleteTask() {
    const resualt = await fetch('http://localhost:3000//Admin/'+Deleteproperty.value.userId+'/task/'+Deleteproperty.value.taskId , {
        headers: { 'Authorization': token.value! },
        method : "DELETE",
    })
    if (resualt.status !==200) {
        alert('Error' + resualt.status)
    } else {
        CloseAndRefech()
    }
    showDeleteModal.value = !showDeleteModal.value
}

function CloseDeleteModal() {
    showDeleteModal.value = !showDeleteModal.value
}

</script>

<template>
    <div class="bacgroand">
        <div class="taskPanel" v-for="task in tasks">
            <div class="seeLess">
                <h1>titiel : {{ task.title }}</h1>
                <div class="status">

                    <div style="color: green;" v-if="task.isfinish" title="this task is  finished  !!">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                            class="bi bi-check-all" viewBox="0 0 16 16">
                            <path
                                d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                        </svg>
                        <!-- <h1>Finished</h1> -->
                    </div>

                    <div style="color: red; cursor: pointer;" v-else title="this task is not finished yet !!" @click="GetTaskId(task.id)" >
                        <svg  xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            class="bi bi-hourglass-split" viewBox="0 0 16 16">
                            <path
                                d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                        </svg >
                        <!-- <h1>Unfinished</h1> -->
                    </div>

                </div>

                <div class="more" @click="task.more = !task.more">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                        class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path
                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </div>

                <div style="color: red; margin: 10px; cursor: pointer;" v-if="whoAmI.accessLevel == 'Admin'" @click="setDeleteProperty(task.id , whoAmI.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </div>

            </div>
            <div class="seeMore">
                <p v-if="task.more" style="margin: 15px;">Description : {{ task.desc }}</p>

            </div>
        </div>
    </div>

    <FinishModal :taskId="taskId" v-if="showFinishModal" @closeFinishModal="CloseAndRefech"/>
    <DeleteAlertModal v-if="showDeleteModal" @delete-task="DeleteTask()"  @close-delete-modal="CloseDeleteModal()"/>
</template>


<style>
.taskPanel{
    background: linear-gradient(109.6deg, rgb(128, 144, 233, 0.7) 17.4%, rgb(171, 88, 238, 0.7) 52.4%, rgb(255, 129, 246, 0.7) 91%);
    justify-items: center;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
    color: white;
}
.seeLess {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 2fr));
    
    /* position: relative; */
}

.seeLess h1 {
    margin: 10px 15px;
}

.status {
    text-align: center;
    width: fit-content;
    /* position: absolute;
        right: 0px; */
}
</style>