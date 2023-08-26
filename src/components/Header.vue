<script setup lang="ts">

</script>

<template>
<div class="Header">
    <h2>Task Manager</h2>
    
    <RouterLink to="/SignUp">
        <button style="left: 85%;">signup</button>
    </RouterLink>

    <RouterLink to="/Login">
        <button style="left: 90%;">login</button>
    </RouterLink>
</div>

</template>

<style scoped>
    .Header{
        /* border: 2px solid #7e92eb; */
        background: linear-gradient(109.6deg, rgb(128, 144, 233) 17.4%, rgb(171, 88, 238) 52.4%, rgb(255, 129, 246) 91%);
        /* box-shadow: 1px 1px 5px 1px black; */
        border-radius: 10px;
        display: flex;
        margin: 10px;
        padding: 10px;
        border: 2px ;
        position: relative;
        /* left: 0; */
        /* right: 0; */
    }

    .Header h2{
        color: white;
        
    }

    .Header button{
        height: 50px;
        margin: 10px;
        float: right;
        position: absolute;
        /* align-self: right: inherit;; */
        /* left: 80%; */
        border: none;
        border-radius: 5px;
        width: 64px;
        background-color: rgb(248, 159, 248);
    }

</style>