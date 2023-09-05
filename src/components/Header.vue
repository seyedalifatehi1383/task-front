<script setup lang="ts">
import { onMounted, ref, vModelCheckbox } from 'vue';
import { Autenticate } from "../stores/counter";
import Login from '../views/Login.vue'
const Autent = Autenticate()
const token = ref(localStorage.getItem("TOKEN"))
const WhoAmI = ref({username : '' , accessLevel : ''})
import { useRouter } from 'vue-router'
const route = useRouter()
onMounted(async () =>{
    const Who = await fetch('http://localhost:3000/whoAmI', { headers: { 'Authorization': token.value! } })
    if (Who.status == 401) {
        localStorage.clear()
    } else {
        WhoAmI.value = await Who.json();
        
    }
})

function Logout() {
    localStorage.clear()
    token.value = localStorage.getItem("TOKEN")
    // window.location.reload()
    route.push('/Login')
}

async function DeleteAccount() {
    const resualt =  await fetch('http://localhost:3000/deleteAccount' , {
        headers : { 'Authorization': token.value! } ,
        method : "DELETE"
    })

    if (resualt.status !== 200) {
        alert('Error ' + resualt.status)
    } else {
        localStorage.clear()
        token.value = localStorage.getItem("TOKEN")
        route.push('/')
        location.reload()
    }
}
</script>

<template>
<div class="Header">
    <RouterLink to="/" style="text-decoration: none;">
        <h2 >Task Manager</h2>
    </RouterLink>
    
    <div v-if="token == undefined" class="BTNS">
        <RouterLink to="/SignUp">
            <button >signup</button>
        </RouterLink>
        
        <RouterLink to="/Login">
            <button >login</button>
        </RouterLink>
        
    </div>
    <div v-else class="BTNS">
        <button  @click="Logout()">Logout</button>
        <button style="background-color: red; width: 128px; color: white;" @click="DeleteAccount()">DELETE ACCOUNT</button>
    </div>
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
        position: relative;
        align-self: right;
        /* left: 80%; */
        border: none;
        border-radius: 5px;
        width: 64px;
        background-color: rgb(248, 159, 248);
    }

    .BTNS{
        position: relative;
        width: 90%;
        height: 50%;
        align-self: center;
    }

    .Header button:hover{
        scale: 110%;
        cursor: pointer;
        transition: 0.2s;

    }

    @keyframes example {
    from {border: 0px solid white;}
    to {border: 5px solid white;}
    } 

    .Header h2:hover{
        scale: 110%;
        cursor: pointer;
        transition: 0.2s;
        margin: 20px 5px;
        
    }

      
    

</style>