<script setup>
import { reactive } from 'vue';

const form = reactive({
    email: '',
    password: ''
})

const handleRegister = async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <form @submit.prevent="handleRegister">
        <div>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" v-model="form.email">
        </div>
        <div>
            <label for="email">Password</label>
            <input type="password" id="password" name="password" v-model="form.password">
        </div>
        <button>Register</button>
    </form>
</template>