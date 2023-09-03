<template>
    <div class="dashboard-container">

        <div class="panel">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-list-task"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
                <path
                    d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                <path fill-rule="evenodd"
                    d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
            </svg>

            <h2> All tasks </h2>
            <p> you can see all tasks that added for you </p>

            <RouterLink to="/AllTask">
                <button class="see-button"> see </button>
            </RouterLink>
        </div>

        <div class="panel">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-check-all"
                viewBox="0 0 16 16">
                <path
                    d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
            </svg>

            <h2> Finished tasks </h2>
            <p> you can see your finished tasks here </p>

            <RouterLink to="/FinishedTask">
                <button class="see-button"> see </button>
            </RouterLink>
        </div>

        <div class="panel">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-hourglass-split"
                viewBox="0 0 16 16">
                <path
                    d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
            </svg>

            <h2> Unfinished tasks </h2>
            <p> you can see your unfinished tasks here </p>

            <RouterLink to="/UnfinishedTask">
                <button class="see-button"> see </button>
            </RouterLink>
        </div>

        <div class="panel">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-gear-fill"
                viewBox="0 0 16 16">
                <path
                    d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>

            <h2> Manage users tasks </h2>
            <p> you can manage users tasks here </p>

            <RouterLink to="/ManageUsers">
                <button class="see-button"> see </button>
            </RouterLink>
        </div>

        <div class="panel">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-chat-text-fill"
                viewBox="0 0 16 16">
                <path
                    d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
            </svg>
            <h2> Global chat </h2>
            <p> you can see global chat here </p>

            <RouterLink to="/ChatPage">
                <button class="see-button"> see </button>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.dashboard-container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-template-rows: auto;
}

.panel {
    background: linear-gradient(109.6deg, rgb(128, 144, 233, 0.7) 17.4%, rgb(171, 88, 238, 0.7) 52.4%, rgb(255, 129, 246, 0.7) 91%);
    margin: 10px;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    min-width: 256px;
    height: 256px;
    color: white;
    /* position: relative; */
}

.panel:hover {
    background-color: rgb(22, 22, 22);
    transition: 0.8s;
}

.see-button {
    margin: 15px 0 15px 0;
    border: none;
    min-width: 120px;
    height: 32px;
    border-radius: 10px;
    background-color: white;
    /* position: absolute; */
    /* margin-bottom: 5px; */
    /* left: 50%; */
    /* top: 230px; */
    /* left: 32px; */
    /* align-items: center; */
}

.panel button:hover {
    scale: 120%;
    transition: 0.8s;
    cursor: pointer;
}</style>