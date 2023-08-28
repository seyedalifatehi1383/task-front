<template>
    <div class="modal-bg"></div>
    <div class="modalContent">
        <label for=""> title </label>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
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
</style>