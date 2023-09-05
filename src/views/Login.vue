<script setup lang="ts">
import { ref } from 'vue';
import { Autenticate } from "../stores/counter";
import { useRouter } from 'vue-router'
const route = useRouter()
const Autent = Autenticate()
    let password = ref('')
    let email = ref('')
    let responsebody : any
    async function login() {
      const response = await fetch('http://localhost:3000/users/login',{headers : {"Content-Type": "application/json" } ,
         method :"POST" ,
         body : JSON.stringify({ email : email.value , password:password.value }) })
        if (response.status ==200) {
            responsebody = await response.json()
            localStorage.setItem("TOKEN" , 'Bearer '+responsebody.token)
            route.push('/')
            
            
        } else if(response.status ==404){
            const errorMessage = await response.json()            
            alert(errorMessage.error.message)
            
        }
        
        
    }
    
</script>

<template>
    <div class="backgroand">
        <div class="loginForm">
        <h1>Login</h1>
        <br>
        <br>
        <br>
        <input type="text" placeholder="email" v-model="email">
        <br>
        <input type="text" placeholder="password" v-model="password">
        <br>
        <button @click="login">Login</button>
        
    </div>
    </div>

</template>

<style scoped>

    .backgroand{
        /* display: flex; */
        display: flex;
        justify-content: center;
    }

    .loginForm{
        position: relative;
        /* left: 30%; */
        border: 2px solid rgb(171, 88, 238);
        border-radius: 10px;
        max-width: 800px;
        width: 500px;
        min-width: 100px;
        /* width: 1000px; */
        text-align: center;
        /* margin: 10% 35%; */
        margin: 10px;
        height: 400px;
        
    
    }

    .loginForm input{
        border-top: none;
        border-left: none;
        border-right: none;
        margin: 20px 10px;
        width: 80%;
    }

    .loginForm button{
        border: none;
        border-radius: 5px;
        background: linear-gradient(109.6deg, rgb(128, 144, 233) 17.4%, rgb(171, 88, 238) 52.4%, rgb(255, 129, 246) 91%);
        height: 32px;
        margin: 40px 10px;
        width: 80%;
        color: white;
    }
</style>