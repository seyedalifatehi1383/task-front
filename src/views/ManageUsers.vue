<template>
    <div class="manage-container">
        <div class="taskPanel" v-for="(user, mainIndex) in users" :key="user.id">
            <div class="seeLess">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-person-fill"
                    viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>

                <h1>{{ user.username }}</h1>

                <div class="addTask" title="add task for user">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                        class="bi bi-file-earmark-plus-fill" viewBox="0 0 16 16" @click="showAddTaskModal = true">
                        <path
                            d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z" />
                    </svg>
                </div>

                <div class="showUserTasks">
                    <svg title="user tasks list" style="cursor: pointer;" @click="user.showTasks = !user.showTasks"
                        xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                        class="bi bi-list-task" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
                        <path
                            d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                        <path fill-rule="evenodd"
                            d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
                    </svg>
                </div>
            </div>
            
            <div class="seeTasks" v-if="user.showTasks" style="margin: 15px;">
                <ul v-for="(tasks, taskIndex) in allTasks[mainIndex]" :key="tasks.id">
                    <li>
                        
                        <span> {{ tasks.title }} </span>
                        <span @click="tasks.showDetails = !tasks.showDetails" class="taskTitle"
                            style="margin-left: 5px; margin-bottom: -5px;" title="show/hide description">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                class="bi bi-three-dots" viewBox="0 0 16 8">
                                <path
                                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                            </svg>
                        </span>

                        <span style="float: right;" title="delete task">
                            <svg @click="showDeleteTaskModal = true" style="cursor: pointer;"
                                xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path title="delete task"
                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg>
                        </span>

                        <span style="float: right;" title="edit task">
                            <svg @click="editMessage(tasks.title,tasks.desc , tasks.id ,user.id)" style="margin-right: 10px; cursor: pointer;"
                                xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                        </span>
                    </li>
                    
                    <blockquote v-if="tasks.showDetails"> {{ tasks.desc }} </blockquote>
                    
                    <DeleteAlertModal v-if="showDeleteTaskModal" @delete-task="deleteTask(user.id, tasks.id)" @closeDeleteModal="closeDeleteModal()" />
                    <EditTaskModal v-if="showEditTaskModal" @close-task-modal="closeTaskModal" :title="messageEditClick.title" :desc="messageEditClick.desc" :task-id="messageEditClick.taskId" :user-id="messageEditClick.userId"/>

                </ul>
            </div>
        </div>
    </div>

    <AddTaskModal v-if="showAddTaskModal" @close-modal="closeModal" @add-task="addTask" />
</template>

<script setup lang="ts">
import AddTaskModal from '@/components/AddTaskModal.vue';
import EditTaskModal from '@/components/EditTaskModal.vue';
import DeleteAlertModal from '@/components/DeleteAlertModal.vue';
import { onMounted, ref } from 'vue';

const token = localStorage.getItem("TOKEN")
let showAddTaskModal = ref(false)
let showEditTaskModal = ref(false)
let showDeleteTaskModal = ref(false)
let messageEditClick = {
    title : '',
    desc : '',
    taskId : 0,
    userId : ''
}
let users = ref([{ id: '', username: '', email: '', showTasks: false }])
onMounted(async () => {
    const resaultUsers = await fetch('http://localhost:3000/showUsers', { headers: { 'Authorization': token! } })
    users.value = await resaultUsers.json()

    for (let i = 0; i < users.value.length; i++) {
        const userId = users.value[i].id;
        callGetTasks(userId, i);
    }
})

let allTasks = ref([[{ id: 0, title: '', desc: '', isfinish: false, showDetails: false }]])
async function getTasks(userId: string, index: number) {
    const resaultTasks = await fetch('http://localhost:3000/subAdmin/' + userId + '/task', { headers: { 'Authorization': token! } })
    allTasks.value[index] = await resaultTasks.json()
}

async function deleteTask(userId: string, taskId: number) {
    await fetch('http://localhost:3000/Admin/' + userId + '/task/' + taskId, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': token!
        },
        method: "DELETE"
    })

    for (let index = 0; index < users.value.length; index++) {
        getTasks(users.value[index].id , index)
        
    }    

    showDeleteTaskModal.value = false
    // window.location.reload()
}


async function addTask(userId: string, mainIndex: number, taskIndex: number) {
    let tasks = allTasks.value[mainIndex]


    await fetch('http://localhost:3000/AdminOrSubAdmin/' + userId + '/task', {
        headers: {
            "Content-Type": "application/json",
            'Authorization': token!
        },
        method: "POST",
        body: JSON.stringify({ title: tasks[taskIndex].title, desc: tasks[taskIndex].desc })
    })
}

function callGetTasks(userId: string, index: number) {
    getTasks(userId, index);
}

function closeModal() {
    showAddTaskModal.value = !showAddTaskModal.value
}

function closeTaskModal() {
    showEditTaskModal.value = !showEditTaskModal.value
    for (let index = 0; index < users.value.length; index++) {
        getTasks(users.value[index].id , index)
        
    }  
}

function closeDeleteModal() {
    showDeleteTaskModal.value = !showDeleteTaskModal.value
}


function editMessage(title : string , desc : string , taskId : number , userId : string ) {
    showEditTaskModal.value = true
    messageEditClick.title = title,
    messageEditClick.desc = desc,
    messageEditClick.taskId = taskId,
    messageEditClick.userId = userId
}
</script>

<style scoped>
.taskPanel {
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

/* .status {
    text-align: center;
    width: fit-content;
    /* position: absolute;
        right: 0px;
} */

.taskTitle {
    cursor: pointer;
}

.seeTasks li {
    font-size: 25px;
}

.seeTasks details summary span {
    /* font-size: 25px; */
    cursor: pointer;
}

.seeTasks blockquote {
    font-size: 20px;
}

.addTask svg {
    cursor: pointer;
}
</style>