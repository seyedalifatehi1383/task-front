<script setup lang="ts">
import { onMounted, ref } from 'vue';
    let tasks = ref([{title : '' , desc : '' , isfinish :false , more :false}])
    onMounted(async () =>{
        const restualt = await fetch('http://localhost:3000/myTasks' ,{headers : {'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0NmNiN2Q3LWYwZmQtNGUyMS04NDgwLWJjZWNkZDJiYzA5NSIsIm5hbWUiOiJzb21lb25lIiwiZW1haWwiOiJzb21lb25lQGdtYWlsLmNvbSIsImlhdCI6MTY5MzExNzAyMCwiZXhwIjoxNjkzMTM4NjIwfQ.BHxDtm8qvlx2tPnAfJK6Vd0yT8SFkf5KzYhI243CN3g'}})
        tasks.value = await restualt.json()
    })
    
</script>

<template>

    <div class="bacgroand">
        <div class="taskPanel" v-for="task in tasks">
            <h1>titiel : {{ task.title }}</h1>
            <div class="status">

                <div style="color: green;" v-if="task.isfinish">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
                    </svg>
                    <!-- <h1>Finished</h1> -->
                </div>

                <div style="color: red;" v-else >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
                    <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                    </svg>
                    <!-- <h1>Unfinished</h1> -->
                </div>

            </div>

            <p v-if="task.more">{{ task.desc }}</p>
            
            <div class="more" @click="task.more = !task.more">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </div>
        </div>
    </div>

</template>


<style>
    .taskPanel{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(256px, 2fr));
        justify-items: center;
        background: linear-gradient(109.6deg, rgb(128, 144, 233 , 0.7) 17.4%, rgb(171, 88, 238 ,0.7) 52.4%, rgb(255, 129, 246 , 0.7) 91%);
        margin: 10px;
        border-radius: 10px;
        padding: 10px;
        color: white;
        /* position: relative; */
    }

    .taskPanel h1 {
        margin: 10px 15px;
    }

    .status{
        text-align: center;
        width: fit-content;
        /* position: absolute;
        right: 0px; */
    }



</style>