<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';

defineProps({
    customText: String,
});

const renderForm = ref(0);

const formState = reactive({
    name: '',
    surname: '',
    email: '',
    age: 0,
});

function updateFormState(event) {
    formState[event.target.name] = event.target.value;
}

onMounted(() => {
    console.log('Form Mounted');
});

onUnmounted(() => {
    console.log('Form Unmounted');
});
</script>

<template>
    <button @click="renderForm === 2 ? (renderForm = 0) : ++renderForm">
        Change render options + {{ customText }}
    </button>
    <form v-if="renderForm === 0" class="form-container">
        <input
            id="name"
            type="text"
            name="name"
            v-model="formState.name"
            @input="(event) => updateFormState(event)"
            placeholder="Write the name..."
        />
        <input
            id="surname"
            type="text"
            name="surname"
            v-model="formState.surname"
            @input="(event) => updateFormState(event)"
            placeholder="Write the surname..."
        />
        <input
            id="email"
            type="text"
            name="email"
            v-model="formState.email"
            @input="(event) => updateFormState(event)"
            placeholder="Write the email..."
        />
        <input
            id="age"
            type="number"
            name="age"
            v-model="formState.age"
            @input="(event) => updateFormState(event)"
            placeholder="Write the age..."
        />
    </form>
    <div v-else-if="renderForm === 1">
        <h1>Print the state in real time!</h1>
        <div v-for="(value, key, index) in formState" :key="index">
            <p>{{ key }}: {{ value }}</p>
        </div>
    </div>
    <div v-else>
        <h1>In this render mode nothins is displaying!</h1>
    </div>
</template>

<style>
button {
    padding: 15px 35px;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 700;
    background-color: blueviolet;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

button:hover {
    background-color: white;
    color: black;
}
.form-container {
    widows: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
input {
    padding: 12px 40px 12px 15px;
    border-radius: 10px;
    border: none;
    font-size: 18px;
}
p {
    font-size: 20px;
    font-weight: 500;
}
</style>
