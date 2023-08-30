<script setup lang="ts">
import DefualtHome from '@/components/DefualtHome.vue';
import UserHome from '@/components/UserHome.vue';
import DashboardAdmin from '@/components/DashboardAdmin.vue';
import DashboardUser from '../components/DashboardUser.vue'
import { Autenticate } from "../stores/counter";
import SubAdminDashboard from '@/components/SubAdminDashboard.vue';
import { onMounted, ref } from 'vue';

const Autent = Autenticate()
const token = ref(localStorage.getItem("TOKEN"))
const WhoAmI = ref({username : '' , accessLevel : ''})

onMounted(async () =>{
    const Who = await fetch('http://localhost:3000/whoAmI', { headers: { 'Authorization': token.value! } })
    if (Who.status == 401) {
        localStorage.clear()
        // window.location.reload()
    } else {
        WhoAmI.value = await Who.json();
        
    }
})
// localStorage.clear()
</script>

<template>
    <!-- <DefualtHome v-if="Autent.token == ''"/>
    <div v-else>
      
    </div> -->
    <!-- <SubAdminDashboard /> -->
    <div v-if="token == undefined">
        <DefualtHome/>
    </div>
    <div v-else>
        <div v-if="WhoAmI.accessLevel == 'User'">
            <DashboardUser/>
        </div>
        <div v-if="WhoAmI.accessLevel == 'SubAdmin'">
            <SubAdminDashboard/>
        </div>
        <div v-if="WhoAmI.accessLevel == 'Admin'">
            <DashboardAdmin/>
        </div>
    </div>
    <!-- <DashboardUser /> -->
    
</template>

<style scoped>

  


</style>
