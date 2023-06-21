<template>
  <div>
    <h1>Recipes</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Minutes</th>
          <th>Tags</th>
          <th>Nutrition</th>
          <th>Steps</th>
          <th>Description</th>
          <th>Ingredients</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="gericht in gerichte" :key="gericht.id">
          <td>{{ gericht.id }}</td>
          <td>{{ gericht.name }}</td>
          <td>{{ gericht.minutes }}</td>
          <td>{{ gericht.tags }}</td>
          <td>{{ gericht.nutrition }}</td>
          <td>{{ gericht.steps }}</td>
          <td>{{ gericht.description }}</td>
          <td>{{ gericht.ingredients }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const gerichte = ref([]);

const fetchGerichte = () => {
  axios.get('/gerichte')
    .then(response => {
      gerichte.value = response.data;
    })
    .catch(error => {
      console.error(error);
    });
};

onMounted(fetchGerichte);
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
}

th {
  background-color: #f0f0f0;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
