<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/bmi">BMI</router-link></li>
        <li><router-link to="/recipes">Recipes</router-link></li>
        <li><router-link to="/meal-planner">Meal Planner</router-link></li> 
        <li><router-link to="/shopping-list">Shopping List</router-link></li> 
      </ul>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<style>
nav {
  background-color: #f0f0f0;
  padding: 10px;
  width: 10%; /* Hier wird die Breite auf 10% festgelegt */
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: block;
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #333;
  padding: 5px;
}

a:hover {
  background-color: darkgray; /* Ändere die Hintergrundfarbe auf dunkelgrau bei Hover */
}

a.router-link-active {
  font-weight: bold;
}
</style>

<script setup>
</script>
