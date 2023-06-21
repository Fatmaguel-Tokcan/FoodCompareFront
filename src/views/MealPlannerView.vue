<template>
    <div>
      <h1>Ernährungsplaner für die Woche</h1>
      <p>Wählen Sie Ihre Gerichte für jeden Tag der Woche:</p>
  
      <div v-for="(day, index) in days" :key="index">
        <h3>{{ day }}</h3>
        <select v-model="selectedMeals[index]">
          <option v-for="meal in meals" :key="meal.id" :value="meal.id">{{ meal.name }}</option>
        </select>
      </div>
  
      <button @click="generateMealPlan">Ernährungsplan generieren</button>
  
      <div v-if="mealPlanGenerated">
        <h2>Generierter Ernährungsplan</h2>
        <ul>
          <li v-for="(meal, index) in selectedMeals" :key="index">
            {{ days[index] }}: {{ getMealName(meal) }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        days: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
        meals: [
          { id: 1, name: 'Gericht 1' },
          { id: 2, name: 'Gericht 2' },
          { id: 3, name: 'Gericht 3' },
          // Weitere Gerichte hier hinzufügen
        ],
        selectedMeals: [],
        mealPlanGenerated: false
      };
    },
    methods: {
      generateMealPlan() {
        if (this.selectedMeals.length === this.days.length) {
          this.mealPlanGenerated = true;
        } else {
          this.mealPlanGenerated = false;
          // Hier kannst du weitere Logik zum Generieren des Ernährungsplans hinzufügen
        }
      },
      getMealName(mealId) {
        const selectedMeal = this.meals.find(meal => meal.id === mealId);
        return selectedMeal ? selectedMeal.name : '';
      }
    }
  };
  </script>
  
  <style>
  /* Dein CSS-Styling hier */
  </style>
  