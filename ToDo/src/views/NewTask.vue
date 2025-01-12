<template>
  <div class="container">
    <h2>Feladat hozzáadása</h2><br>
    <div>
      <label for="nev">Név</label>
      <input type="text" name="nev" id="nev" v-model="newtitle" class="form-control" >
    </div>
    <div>
      <label for="description">Leírás</label>
      <input type="text" name="description" id="description" v-model="newdescription" class="form-control" >
    </div>
    <div>
      <label for="deadline">Határidő</label>
      <input type="date" name="deadline" id="deadline" v-model="newdeadline" class="form-control">
    </div>
    <div>
      <button class="btn btn-primary m-3" v-on:click="feladatStore.feladatHozzaadas(ujfeladat), vissza()">Hozzáadás</button>
    </div>
  </div>
</template>
<script setup>
import { useFeladatStore } from '@/stores/feladatok';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const newtitle = ref('')
const newdescription = ref('')
const newdeadline = ref('')

const feladatStore = useFeladatStore()
var ID = feladatStore.feladatok.length
if(feladatStore.feladatok.length == 0) {
  ID = 1
}

var ujfeladat = {
  id: ID,
  title: newtitle,
  description: newdescription,
  isFinished: false,
  deadline: newdeadline
}

const vissza = () => { router.push('/') }
</script>
<style scoped>

body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f7fa;
    color: #333;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input[type="text"], input[type="date"] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
}

input[type="text"]:focus, input[type="date"]:focus {
    border-color: #4CAF50;
    outline: none;
}

button {
    width: 100%;
    padding: 12px;
    background-color: #4CAF50;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}

@media (max-width: 576px) {
    .container {
        padding: 15px;
    }
    
    button {
        font-size: 1rem;
    }
}
</style>
