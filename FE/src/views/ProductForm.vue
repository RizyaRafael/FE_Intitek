<script setup>
import { reactive } from 'vue';

const form = reactive({
    SKU: '',
    Quantity: 0,
    Location: "",
    Status: ""
})

const createHandle = async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.access_token
            },
            body: JSON.stringify(form)
        })
        const data = await response.json()
        console.log(form)
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <form @submit.prevent="createHandle">
        <div>
            <label for="email">SKU</label>
            <input type="text" id="SKU" name="SKU" v-model="form.SKU">
        </div>
        <div>
            <label for="email">Stock</label>
            <input type="number" id="Quantity" name="Quantity" v-model="form.Quantity">
        </div>
        <div>
            <label for="email">Location</label>
            <input type="text" id="Location" name="Location" v-model="form.Location">
        </div>
        <div>
            <label for="email">Status</label>
            <input type="text" id="Status" name="Status" v-model="form.Status">
        </div>
        <button>Create</button>
    </form>
</template>