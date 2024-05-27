<script setup>
import { ref } from 'vue';

const countState = ref(0);

function onClick() {
    ++countState.value;
}
</script>

<template>
    <h1>My first Vue.js project</h1>
    <p>This a test to see how it works</p>
    <button @click="onClick">Typical Counter</button>
    <div class="counter-container">{{ countState }}</div>
    <a href="/contact">Link to form!</a>
</template>

<style>
#app {
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
}

.counter-container {
    font-size: 30px;
    color: white;
}

a {
    text-decoration: none;
    font-size: 20px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

a:hover {
    color: burlywood;
}
</style>
