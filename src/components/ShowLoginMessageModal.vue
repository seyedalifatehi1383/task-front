<script setup lang="ts">
import { ref } from 'vue';

// Define a reactive variable to control the modal visibility
let showModal = ref(false);

// Function to toggle the modal visibility
const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>

<template>
  <div>
    <!-- Modal content -->
    <div v-if="showModal" class="modal">
        <div class="modal-content">
            <!-- Modal content -->
            <h2>You have been successfully signed in</h2>
            <p>If you would like to login, you can click here.</p>
          
            <!-- Modal close button -->
            <button class="close" @click="toggleModal"> Close </button>
        </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles for the modal */
.modal {
  /* Modal styles */
}

.modal-content {
  /* Modal content styles */
}

.close {
  /* Close button styles */
}
</style>
