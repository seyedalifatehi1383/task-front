<script setup lang="ts">
import DefualtHome from '@/components/DefualtHome.vue';
import UserHome from '@/components/UserHome.vue';
import DashboardUser from '../components/DashboardUser.vue'
import { Autenticate } from "../stores/counter";
import SubAdminDashboard from '@/components/SubAdminDashboard.vue';

const Autent = Autenticate()

</script>

<template>
    <!-- <DefualtHome v-if="Autent.token == ''"/>
    <div v-else>
      
    </div> -->
    <SubAdminDashboard />
    <!-- <DashboardUser /> -->
    
</template>

<style scoped>

  


</style>
