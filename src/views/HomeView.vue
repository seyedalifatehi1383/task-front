<script setup lang="ts">
import DefualtHome from '@/components/DefualtHome.vue';
import UserHome from '@/components/UserHome.vue';
import { Autenticate } from "../stores/counter";

const Autent = Autenticate()

</script>

<template>
    <DefualtHome v-if="Autent.getchatch == null"/>
    <div v-else>
      <UserHome/>
    </div>
</template>

<style scoped>

  


</style>
