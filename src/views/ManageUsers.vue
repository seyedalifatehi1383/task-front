<template>
    <div class="manage-container">
        <div class="taskPanel" v-for="(user, mainIndex) in users" :key="user.id">
            <div class="seeLess">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-person-fill"
                    viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>

                <h1>{{ user.username }}</h1>

                <!-- <div class="status">

                </div> -->

                <div class="addTask" title="add task for user">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                        class="bi bi-file-earmark-plus-fill" viewBox="0 0 16 16">
                        <path
                            d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z" />
                    </svg>
                </div>

                <div class="showUserTasks" @click="user.showTasks = !user.showTasks" title="user tasks list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
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
                <details v-for="tasks in allTasks[mainIndex]">
                    <summary @click:right="console.log('rast click')"> {{ tasks.title }} </summary>
                    <blockquote> {{ tasks.desc }} </blockquote>
                </details>
                <!-- <li> {{ tasks.title }} </li> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const token = localStorage.getItem("TOKEN")
let users = ref([{ id: '', username: '', email: '', showTasks: false }])
onMounted(async () => {
    const resaultUsers = await fetch('http://localhost:3000/showUsers', { headers: { 'Authorization': token! } })
    users.value = await resaultUsers.json()

    for (let i = 0; i < users.value.length; i++) {
        const userId = users.value[i].id;
        callGetTasks(userId, i);
    }
})

let allTasks = ref([[{ title: '', desc: '', isfinish: false }]])
async function getTasks(userId: string, index: number) {
    const resaultTasks = await fetch('http://localhost:3000/subAdmin/' + userId + '/task', { headers: { 'Authorization': token! } })
    allTasks.value[index] = await resaultTasks.json()
}

function callGetTasks(userId: string, index: number) {
    getTasks(userId, index);
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

.showUserTasks svg {
    cursor: pointer;
}

.seeTasks details summary {
    font-size: 25px;
    cursor: pointer;
}

.seeTasks details blockquote {
    font-size: 20px;
}

.addTask svg {
    cursor: pointer;
}
</style>