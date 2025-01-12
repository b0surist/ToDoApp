<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <router-view />
</template>

<style scoped>
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f7fa;
    color: #333;
}

.navbar {
    background-color: #4CAF50;
    padding: 15px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-link {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.3s;
}

.nav-link:hover {
    background-color: #45a049;
    transform: scale(1.05);
}

.router-link-active {
    font-weight: bold;
}

router-view {
    padding: 20px;
    max-width: 1200px;
    margin: 20px auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
