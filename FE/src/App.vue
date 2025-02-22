<script setup>
import { computed } from 'vue';
import router from './router';

const logoutButton = () => {
  localStorage.removeItem('access_token')
  router.push('/login')
}

const isLoggedIn = computed(() => {
  return !!localStorage.getItem('access_token');
})
</script>

<template>
  <nav class="w-screen bg-[#413D7A] flex justify-between items-center h-20 text-white">
    <div class="pl-5 flex justify-start text-3xl gap-x-5 font-bold ">
      <router-link to="/">Home</router-link>
      <router-link to="/create">Create</router-link>
    </div>
    <div class="pr-5 flex justify-start text-3xl gap-x-5 font-bold">
      <template v-if="isLoggedIn">
        <button type="button" @click="logoutButton">Logout</button>
      </template>
      <template v-else>
        <router-link to="/register">Register</router-link>
        <router-link to="/login">Login</router-link>
      </template>
    </div>
  </nav>
  <router-view />
</template>
