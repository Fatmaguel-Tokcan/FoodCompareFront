<template>
  <div class="container">
    <h1>Willkommen auf unserer Ernährungswebseite!</h1>
    <p>Hier kannst du deinen BMI berechnen, einen Essensplan für die Woche erstellen und eine Einkaufsliste generieren.</p>

    <button class="button" @click="calculateBMI">BMI berechnen</button>
    <button class="button" @click="navigateToGerichte">Gerichte</button>
    <button class="button" @click="navigateToMealPlanner">Meal Planer</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function calculateBMI() {
  // Hier kannst du die Logik zur BMI-Berechnung implementieren
  // Zum Beispiel: router.push('/bmi-calculator');
  router.push('/bmi-calculator'); // Beispiel-Navigation zum BMI-Calculator
}

function navigateToGerichte() {
  // Hier kannst du die Logik zum Navigieren zur Gerichte-Seite implementieren
  // Zum Beispiel: router.push('/meals');
  router.push('/gerichte'); // Beispiel-Navigation zur Gerichte-Seite
}

function navigateToMealPlanner() {
  // Hier kannst du die Logik zum Navigieren zur Meal Planner-Seite implementieren
  // Zum Beispiel: router.push('/meal-planner');
  router.push('/meal-planner'); // Beispiel-Navigation zur Meal Planner-Seite
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
