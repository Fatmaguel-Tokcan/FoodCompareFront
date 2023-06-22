<template>
  <div>
    <h1>Meal Planner</h1>
    <p>Wähle deine Mahlzeiten für die Woche aus:</p>

    <div class="meal-selection">
      <div v-for="day in days" :key="day">
        <h2>{{ day }}</h2>
        <div class="meal-options">
          <div v-for="meal in meals" :key="meal.id">
            <input type="checkbox" :id="`meal-${day}-${meal.id}`" v-model="selectedMeals[day]" :value="meal" />
            <label :for="`meal-${day}-${meal.id}`">{{ meal.name }}</label>
          </div>
        </div>
      </div>
    </div>

    <button class="button" @click="generateShoppingList">Einkaufsliste generieren</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
      meals: [
        {
          id: 1,
          name: 'Gericht 1',
          ingredients: [
            { name: 'Zutat A', quantity: 2 },
            { name: 'Zutat B', quantity: 1 },
          ],
        },
        {
          id: 2,
          name: 'Gericht 2',
          ingredients: [
            { name: 'Zutat B', quantity: 3 },
            { name: 'Zutat C', quantity: 2 },
          ],
        },
        {
          id: 3,
          name: 'Gericht 3',
          ingredients: [
            { name: 'Zutat A', quantity: 1 },
            { name: 'Zutat C', quantity: 1 },
          ],
        },
      ],
      selectedMeals: {},
    };
  },
  methods: {
    generateShoppingList() {
      const selectedMeals = this.getSelectedMeals();
      const shoppingList = [];

      // Schleife über die ausgewählten Gerichte
      for (const day in selectedMeals) {
        const meals = selectedMeals[day];
        for (const meal of meals) {
          // Schleife über die Zutaten des ausgewählten Gerichts
          for (const ingredient of meal.ingredients) {
            // Überprüfe, ob die Zutat bereits in der Einkaufsliste vorhanden ist
            const existingItem = shoppingList.find((item) => item.name === ingredient.name);
            if (existingItem) {
              // Wenn die Zutat bereits vorhanden ist, erhöhe die Menge
              existingItem.quantity += ingredient.quantity;
            } else {
              // Wenn die Zutat noch nicht in der Einkaufsliste ist, füge sie hinzu
              shoppingList.push({ name: ingredient.name, quantity: ingredient.quantity });
            }
          }
        }
      }

      // Hier hast du die generierte Einkaufsliste
      console.log(shoppingList);
      // Du kannst die Liste nun weiterverarbeiten, z.B. sie anzeigen oder speichern
    },

    getSelectedMeals() {
      const selectedMeals = {};
      for (const day of this.days) {
        selectedMeals[day] = [];
        if (Array.isArray(this.selectedMeals[day])) {
          // Überprüfe, ob es sich um ein Array handelt
          for (const meal of this.meals) {
            if (this.selectedMeals[day].includes(meal)) {
              selectedMeals[day].push(meal);
            }
          }
        }
      }
      return selectedMeals;
    },
  },
};
</script>

<style>
.meal-selection {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.meal-options {
  display: flex;
  flex-wrap: wrap;
}

.button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
