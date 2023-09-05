<template>
    <div class="backgrouand">
        <div class="signUpForm">
          <h1> Sign Up </h1>
          <input type="text" placeholder="username" v-model="username" />
          <br />
          <input type="text" placeholder="email" v-model="email" />
          <br />
          <input type="text" placeholder="password" v-model="password" />
          <br />
          <button @click="signup">Sign Up</button>
        </div>
    </div>

    <ShowSignUpMessageModal v-if="showSignUpModal" @close-modal="closeModal" />
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import ShowSignUpMessageModal from '../components/ShowSignUpMessageModal.vue';
  
  let username = ref('');
  let password = ref('');
  let email = ref('');
  let showSignUpModal = ref(false);
  
  async function signup() {
    const response = await fetch('http://localhost:3000/signup', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value
      })
    });
  
    if (response.status == 200) {
      console.log('successfully signed in!');
      showSignUpModal.value = true; // Set the showModal variable to true to show the modal
    } else if (response.status == 403) {
      alert('password cant be less 8 character or email is not valid')
    } else {
      console.log(response);
    }
  }
  
  function closeModal() {
    showSignUpModal.value = false; // Set the showModal variable to false to hide the modal
  }
  </script>

<style scoped>

    .backgrouand{
      display: flex;
      justify-content: center;
    }
    .signUpForm {
        position: relative;
        /* left: 30%; */
        border: 2px solid rgb(171, 88, 238);
        border-radius: 10px;
        max-width: 800px;
        width: 500px;
        min-width: 100px;
        text-align: center;
        margin: 10px;
        align-self: center;
        /* height: 400px; */
    }

    .signUpForm input {
      border-top: none;
        border-left: none;
        border-right: none;
        margin: 20px 10px;
        width: 80%;
    }

    .signUpForm button {
        border: none;
        border-radius: 5px;
        background: linear-gradient(109.6deg, rgb(128, 144, 233) 17.4%, rgb(171, 88, 238) 52.4%, rgb(255, 129, 246) 91%);
        height: 32px;
        margin: 40px 10px;
        width: 80%;
    }
</style>