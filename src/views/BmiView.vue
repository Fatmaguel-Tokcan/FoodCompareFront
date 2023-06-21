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
      <p>Ihr BMI ist: {{ bmi.toFixed(2) }}</p>
    </div>
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
    }
  }
};
</script>

<style scoped>
.bmi {
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  margin-bottom: 10px;
}

button {
  display: block;
  margin-top: 10px;
}

.result {
  margin-top: 20px;
  background-color: #f0f0f0;
  padding: 10px;
}
</style>
