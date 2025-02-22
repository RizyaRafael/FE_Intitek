<script setup>
import { onMounted, ref } from 'vue';

const products = ref([])

onMounted(async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/product', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.access_token
            },
        })
        const data = await response.json()
        products.value = data
        console.log(data)
    } catch (error) {
        console.log(error)
    }
})

const deletebutton = async (ID) => {
    try {
        const response = await fetch('http://127.0.0.1:3000/product/' + ID, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.access_token
            },
        })
        const data = await response.json()
        products.value = products.value.filter(product => product.ID != ID)
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>SKU</th>
                <th>Location</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in products" :key="index">
                <td>{{ product.SKU }}</td>
                <td>{{ product.Location }}</td>
                <td>{{ product.Quantity }}</td>
                <td>{{ product.Status }}</td>
                <td>
                    <button>update</button>
                    <button type="button" @click="deletebutton(product.ID)">delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>