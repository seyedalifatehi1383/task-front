<script setup lang="ts">
import { onMounted, ref } from 'vue';
let tasks = ref([{ title: '', desc: '', isfinish: false, more: false }])
onMounted(async () => {
    const restualt = await fetch('http://localhost:3000/new-users/myNotFinished', { headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0NmNiN2Q3LWYwZmQtNGUyMS04NDgwLWJjZWNkZDJiYzA5NSIsIm5hbWUiOiJzb21lb25lIiwiZW1haWwiOiJzb21lb25lQGdtYWlsLmNvbSIsImlhdCI6MTY5MzExNzAyMCwiZXhwIjoxNjkzMTM4NjIwfQ.BHxDtm8qvlx2tPnAfJK6Vd0yT8SFkf5KzYhI243CN3g' } })
    tasks.value = await restualt.json()
})

</script>

<template>
    <div class="bacgroand">
        <div class="taskPanel" v-for="task in tasks">
            <div class="seeLess">
                <h1>titiel : {{ task.title }}</h1>
                <div class="status">
                    <div style="color: green;" title="this task is  finished  !!">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                            class="bi bi-check-all" viewBox="0 0 16 16">
                            <path
                                d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                        </svg>
                    </div>

                </div>

                <div class="more" @click="task.more = !task.more">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                        class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path
                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </div>
            </div>
            <div class="seeMore">
                <p v-if="task.more" style="margin: 15px;">Description : {{ task.desc }}</p>

            </div>
        </div>
    </div>
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