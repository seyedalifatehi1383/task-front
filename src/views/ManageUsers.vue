<template>
    <div class="manage-container">
        <div class="taskPanel" v-for="user in users">
            <div class="seeLess">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-person-fill"
                    viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>

                <h1>{{ user.username }}</h1>

                <div class="status">

                </div>

                <div class="more" @click="user.showTasks = !user.showTasks">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                        class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path
                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </div>
            </div>
            <div class="seeMore">
                <p v-if="user.showTasks" style="margin: 15px;">Description : {{ user.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

let users = ref([{ id: '', username: '', email: '', showTasks: false }])

onMounted(async () => {
    const resualtUsers = await fetch('http://localhost:3000/showUsers', { headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjY2FlNTVhLTdkNzktNDRlYy1hZjI4LTIyYjU2MjdlM2EwOSIsIm5hbWUiOiJzYWZhdGVoaSIsImVtYWlsIjoiYWZhdGVoaTA3QGdtYWlsLmNvbSIsImlhdCI6MTY5MzEyOTA0MiwiZXhwIjoxNjkzMTUwNjQyfQ.v_QIWAPGWK5FfrDvt_KjrcO6z_oCFVrLW6ha31Wl8DA' } })
    users.value = await resualtUsers.json()
})

let tasks = ref([{ title: '', desc: '', isfinish: false }])
async function getTasks(userId: string) {
    const resualt = await fetch('http://localhost:3000/', { headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjY2FlNTVhLTdkNzktNDRlYy1hZjI4LTIyYjU2MjdlM2EwOSIsIm5hbWUiOiJzYWZhdGVoaSIsImVtYWlsIjoiYWZhdGVoaTA3QGdtYWlsLmNvbSIsImlhdCI6MTY5MzEyOTA0MiwiZXhwIjoxNjkzMTUwNjQyfQ.v_QIWAPGWK5FfrDvt_KjrcO6z_oCFVrLW6ha31Wl8DA' } })
    tasks.value = await resualt.json()
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

.status {
    text-align: center;
    width: fit-content;
    /* position: absolute;
        right: 0px; */
}
</style>