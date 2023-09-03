<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ChangeAccessModal from '../components/ChangeAccessModal.vue'
const token = localStorage.getItem("TOKEN")
const Users = ref([{username : '' , email : '' , accessLevel : '' , id:''}])
const subAdmin = ref([{username : '' , email : '' , accessLevel : '' , id:''}])
let showmodal = ref(false)
let clickPromote = {
    id : '',
    access : ''
}
onMounted(async ()=>{
    const resualt = await fetch('http://localhost:3000/showUsers',{headers : { 'Authorization': token! }})
    if (resualt.status == 200) {
        Users.value =await resualt.json()
    } else {
        alert('Error' + resualt.status)
    }

    const SubAdminresualt = await fetch('http://localhost:3000//showSubAdmin' , {
        headers : {'Authorization': token! },
    })

    if (SubAdminresualt.status == 200) {
        subAdmin.value = await SubAdminresualt.json()
    } else {
        alert('Error ' + SubAdminresualt.status)
    }

    
})



async function Refetch() {
    showmodal.value = false
    const resualt = await fetch('http://localhost:3000/showUsers',{headers : { "Authorization": token! }})
    if (resualt.status == 200) {
        Users.value =await resualt.json()
    } else {
        alert('Error' + resualt.status)
    }


    const SubAdminresualt = await fetch('http://localhost:3000//showSubAdmin' , {
        headers : {'Authorization': token! },
    })

    if (SubAdminresualt.status == 200) {
        subAdmin.value = await SubAdminresualt.json()
    } else {
        alert('Error ' + SubAdminresualt.status)
    }
}


function Showpanel(userId : string , access : string) {
    showmodal.value = !showmodal.value
    clickPromote.id = userId,
    clickPromote.access = access
}
</script>


<template>
    <div class="backgroand">
        <div class="panelUser" v-for="user in Users" :key="user.email">
            <div class="username">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-person-fill"
                    viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>

            <h1 >{{ user.username }}</h1>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z"/>
            </svg>

            <h2>{{ user.email }}</h2>

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-universal-access-circle" viewBox="0 0 16 16">
            <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143Zm-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z"/>
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Z"/>
            </svg>

            <h2>{{ user.accessLevel }}</h2>

            <button @click="Showpanel(user.id , user.accessLevel)">change to subAdmin</button>
        </div>

        <div class="panelUser" v-for="subadmin in subAdmin" :key="subadmin.email">
            <div class="username">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-person-fill"
                    viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>

            <h1 >{{ subadmin.username }}</h1>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z"/>
            </svg>

            <h2>{{ subadmin.email }}</h2>

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-universal-access-circle" viewBox="0 0 16 16">
            <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143Zm-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z"/>
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Z"/>
            </svg>

            <h2>{{ subadmin.accessLevel }}</h2>

            <button @click="Showpanel(subadmin.id , subadmin.accessLevel)">change to User</button>
        </div>
        <ChangeAccessModal v-if="showmodal" :id="clickPromote.id"  :access="clickPromote.access"  @close-Access-modal="Refetch()"/>
    </div>
</template>


<style scoped>

    .backgroand{
        display: grid;
        /* grid-template-columns: repeat(auto-fit , minmax(256px,1fr)); */
        grid-template-columns: repeat(auto-fit , minmax(128px,1fr));
        gap: 30px;
        margin: 10px;
        
    }

    .panelUser{
        background: linear-gradient(109.6deg, rgb(128, 144, 233, 0.7) 17.4%, rgb(171, 88, 238, 0.7) 52.4%, rgb(255, 129, 246, 0.7) 91%);
        text-align: center;
        max-width: 1024px;
        min-width: 128px;
        border-radius: 10px;
        padding: 10px;
        /* grid-column: 1/2; */
        
    }

    .panelUser button{
        /* width: 512px; */
        max-width: 512px;
        min-width: 128px;
        height: 32px;
        border: none;
        background-color:rgb(255, 129, 246, 0.7) ;
        color: white;
        border-radius: 10px;
    }


    .panelUser button:hover{
        scale: 105%;
        transition: 0.5;
    }
    

    

</style>