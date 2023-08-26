<script setup lang="ts">
import { ref } from 'vue';
import { Autenticate } from "../stores/counter";
import { useRouter } from 'vue-router'
const route = useRouter()
const Autent = Autenticate()
    let username = ref('')
    let password = ref('')
    let email = ref('')
    let responsebody : any
    async function login() {
      const response = await fetch('http://localhost:3000/users/login',{headers : {"Content-Type": "application/json" } ,
         method :"POST" ,
         body : JSON.stringify({username : username.value , email : email.value , password:password.value }) })
        if (response.status ==200) {
            responsebody = await response.json()
            Autent.token = responsebody.token
            console.log(Autent.token);
            route.push('/')
            
            
        } else if(response.status ==404){
            alert('there is no such user')
            
        }
        
        
    }
    
</script>

<template>
    <div class="loginForm">
        <h1>Login</h1>
        <input type="text" placeholder="username" v-model="username">
        <br>
        <input type="text" placeholder="email" v-model="email">
        <br>
        <input type="text" placeholder="password" v-model="password">
        <br>
        <button @click="login">Login</button>
        
    </div>

</template>

<style scoped>
    .loginForm{
        position: relative;
        /* left: 30%; */
        border: 2px solid rgb(171, 88, 238);
        border-radius: 10px;
        width: 25%;
        text-align: center;
        margin: 10% 35%;
    }

    .loginForm input{
        border-top: none;
        border-left: none;
        border-right: none;
        margin: 10px;
    }

    .loginForm button{
        border: none;
        width: 128px;
        border-radius: 5px;
        background: linear-gradient(109.6deg, rgb(128, 144, 233) 17.4%, rgb(171, 88, 238) 52.4%, rgb(255, 129, 246) 91%);
        height: 32px;
        margin: 10px;
    }
</style>