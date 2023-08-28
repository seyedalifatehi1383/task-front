<template>
  <div class="modal-bg" @click="closeModal"></div>
  <div class="modalContainer">
    <div class="close-button" @click="closeModal">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em"
        viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </svg>
    </div>

    <h1>Your signing up has been successfully completed.</h1>
    <p>If you would like to login, you can <RouterLink to="/Login">click here</RouterLink>.</p>
  </div>
</template>

<script setup lang="ts">
// import { ref, defineEmits } from 'vue';

const emit = defineEmits(['close-modal']);

function closeModal() {
  emit('close-modal'); // Emit the 'close-modal' event to the parent component
}
</script>

<style scoped>
/* Styles for the modal */
.modalContainer {
  /* position: relative; */
  /* left: 30%; */
  /* margin: 10% 35%; */
  /* width: 25%; */
  border: 2px solid rgb(171, 88, 238);
  background-color: white;
  border-radius: 10px;
  max-width: 500px;
  text-align: center;
  z-index: 4;
  align-self: center;
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}

.modal-bg {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.close-button {
  color: rgb(171, 88, 238);
  top: 0;
  right: 0;
}

.close-button {
  color: rgb(171, 88, 238);
}
</style>
