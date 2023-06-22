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
        <tr v-for="recipes in recipes" :key="recipes.id">
          <td>{{ recipes.id }}</td>
          <td>{{ recipes.name }}</td>
          <td>{{ recipes.minutes }}</td>
          <td>{{ recipes.tags }}</td>
          <td>{{ recipes.nutrition }}</td>
          <td>{{ recipes.steps }}</td>
          <td>{{ recipes.description }}</td>
          <td>{{ recipes.ingredients }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const recipes = ref([]);

const fetchRepices = () => {
  axios.get('http://localhost:5000/gericht')
    .then(response => {
      recipes.value = response.data;
    })
    .catch(error => {
      console.error(error);
    });
};

onMounted(fetchRepices);
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
