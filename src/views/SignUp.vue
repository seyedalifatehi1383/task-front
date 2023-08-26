
<template>
    <div class="signUpForm">
        <h1>SignUp</h1>
        <input type="text" placeholder="username" v-model="username">
        <br>
        <input type="text" placeholder="email" v-model="email">
        <br>
        <input type="text" placeholder="password" v-model="password">
        <br>
        <button @click="signup">SignUp</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ShowLoginMessageModal } from '../components/ShowLoginMessageModal.vue'

    let username = ref('')
    let password = ref('')
    let email = ref('')
    // let showModal : boolean = ref(false)
    // let responsebody : any

    async function signup() {
        const response = await fetch('http://localhost:3000/signup', {
            headers : {"Content-Type": "application/json" } ,
            method :"POST" ,
            body : JSON.stringify({
                username : username.value,
                email : email.value,
                password: password.value
            }) 
        })
        
        if (response.status == 200) {
            // responsebody = await response.json()
            console.log('successfully signed in!');
            ShowLoginMessageModal.toggleModal();
        } else {
            console.log(response);
        }
    }
</script>

<style scoped>
    .signUpForm{
        position: relative;
        /* left: 30%; */
        border: 2px solid rgb(171, 88, 238);
        border-radius: 10px;
        width: 25%;
        text-align: center;
        margin: 10% 35%;
    }

    .signUpForm input{
        border-top: none;
        border-left: none;
        border-right: none;
        margin: 10px;
    }

    .signUpForm button{
        border: none;
        width: 128px;
        border-radius: 5px;
        background: linear-gradient(109.6deg, rgb(128, 144, 233) 17.4%, rgb(171, 88, 238) 52.4%, rgb(255, 129, 246) 91%);
        height: 32px;
        margin: 10px;
        color: white;
    }
</style>