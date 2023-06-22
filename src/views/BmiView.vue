<template>
  <div class="bmi">
    <h1>BMI-Rechner</h1>
    <div class="input-container">
      <label for="weight">Gewicht (in Kilogramm):</label>
      <input type="number" id="weight" v-model="weight">
    </div>
    <div class="input-container">
      <label for="height">Größe (in Metern):</label>
      <input type="number" id="height" v-model="height">
    </div>
    <button @click="calculateBMI">BMI berechnen</button>
    <div v-if="bmi !== null" class="result">
      <p>Ihr BMI ist --> {{ bmi.toFixed(2) }}</p>
      <p>Sie sind {{ getWeightCategory(bmi) }}</p>
    </div>
    <table v-if="bmi !== null" class="weight-categories">
      <thead>
        <tr>
          <th>BMI-Bereich</th>
          <th>Gewichtskategorie</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&lt; 18.5</td>
          <td>Untergewicht</td>
        </tr>
        <tr>
          <td>18.5 - 24.9</td>
          <td>Normalgewicht</td>
        </tr>
        <tr>
          <td>25.0 - 29.9</td>
          <td>Übergewicht</td>
        </tr>
        <tr>
          <td>&gt;= 30.0</td>
          <td>Adipositas</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weight: null,
      height: null,
      bmi: null
    };
  },
  methods: {
    calculateBMI() {
      if (this.weight && this.height) {
        const weightInKg = parseFloat(this.weight);
        const heightInM = parseFloat(this.height);
        
        if (!isNaN(weightInKg) && !isNaN(heightInM) && heightInM > 0) {
          const bmi = weightInKg / (heightInM ** 2);
          this.bmi = bmi;
        } else {
          this.bmi = null;
        }
      } else {
        this.bmi = null;
      }
    },
    getWeightCategory(bmi) {
      if (bmi < 18.5) {
        return "Untergewichtig.";
      } else if (bmi >= 18.5 && bmi < 25) {
        return "Normalgewichtig.";
      } else if (bmi >= 25 && bmi < 30) {
        return "Übergewichtig.";
      } else {
        return "sehr Übergewichtig.";
      }
    }
  }
};
</script>

<style scoped>
/* Der restliche CSS-Code bleibt unverändert */
.weight-categories {
  margin-top: 20px;
  border-collapse: collapse;
}

.weight-categories th,
.weight-categories td {
  padding: 8px;
  border: 1px solid #ddd;
}

.weight-categories th {
  background-color: #f0f0f0;
}
</style>
