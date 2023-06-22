<template>
  <div class="container">
    <h1>Willkommen auf unserer Ernährungswebseite!</h1>
    <p>Hier kannst du deinen BMI berechnen, einen Essensplan für die Woche erstellen und eine Einkaufsliste generieren.</p>

    <button class="button" @click="navigateToBMI">BMI berechnen</button>
    <button class="button" @click="navigateToRecipes">Recipes</button>
    <button class="button" @click="navigateToMealPlanner">Meal Planner</button>
    <button class="button" @click="navigateToShoppingList">Shopping List</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    function navigateToBMI() {
      router.push('/bmi');
    }

    function navigateToRecipes() {
      router.push('/gerichte');
    }

    function navigateToMealPlanner() {
      router.push('/meal-planner');
    }

    function navigateToShoppingList() {
      router.push('/shopping-list');
    }

    return {
      navigateToBMI,
      navigateToRecipes,
      navigateToMealPlanner,
      navigateToShoppingList
    };
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
}

.button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
