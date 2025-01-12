<template>
  <div class="tasks-container">
    <h2 class="heading">Feladatok</h2>
    <div class="card-grid">
      <div v-for="feladat in feladatStore.feladatok" :key="feladat.id" class="task-card">
        <div class="card-content">
          <h5 class="task-title">{{ feladat.title }}</h5>
          <p class="task-desc">Leírás: {{ feladat.desc }}</p>
          <p class="task-status">Állapot: <span :class="feladat.isFinished ? 'status-complete' : 'status-pending'">
            {{ feladat.isFinished ? "Kész" : "Nincs kész" }}</span>
          </p>
          <p class="task-deadline">Határidő: {{ feladat.deadline }}</p>
          <div class="button-container">
            <button class="btn btn-edit" @click="modosit(feladat.id)">
              <i class="fas fa-pencil-alt"></i> 
            </button>
            <button class="btn btn-complete" @click="feladatStore.feladatKesz(feladat)">
              <i class="fas fa-check"></i> 
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="add-task">
      <button @click="ujfeladat" class="add-task-btn">
        <i class="fas fa-plus"></i> 
      </button>
    </div>
  </div>

</template>
<script setup>
import { useFeladatStore } from '@/stores/feladatok';
import { useRouter } from 'vue-router';

const router = useRouter()
const feladatStore = useFeladatStore()
const modosit = (id) => { router.push('/edittask/' + id) }
const ujfeladat = () => { router.push('/newtask') }
</script>
<style scoped>

body {
    font-family: 'Roboto', sans-serif;
    background-color: #f8f9fa;
    color: #333;
    margin: 0;
    padding: 0;
}

.tasks-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.heading {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: #4e73df;
}

.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;
}

.task-card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
}

.task-card:hover {
    transform: translateY(-5px);
}

.card-content {
    padding: 20px;
}

.task-title {
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 10px;
}

.task-desc, .task-status, .task-deadline {
    font-size: 1rem;
    color: #555;
    margin-bottom: 8px;
}

.task-status span {
    font-weight: bold;
}

.status-complete {
    color: #28a745;
}

.status-pending {
    color: #ffc107;
}

.button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.btn {
    width: 48%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-edit {
    background-color: #007bff;
    color: white;
}

.btn-edit:hover {
    background-color: #0056b3;
}

.btn-complete {
    background-color: #28a745;
    color: white;
}

.btn-complete:hover {
    background-color: #218838;
}

.add-task {
    margin-top: 30px;
    display: flex;
    justify-content: center;
}

.add-task-btn {
    font-size: 2rem;
    padding: 15px;
    background-color: #4e73df;
    color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

.add-task-btn:hover {
    transform: scale(1.1);
    background-color: #2e59d9;
}

</style>