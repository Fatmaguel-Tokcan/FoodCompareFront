<template>
  <div>
    <h1>Lebensmittel-Nährwerte-Vergleich</h1>
    <div>
      <label for="food1">Lebensmittel 1:</label>
      <input type="text" id="food1" v-model="food1" />
    </div>
    <div>
      <label for="food2">Lebensmittel 2:</label>
      <input type="text" id="food2" v-model="food2" />
    </div>
    <button @click="compareFoods">Vergleichen</button>
    <div v-if="result">
      <h2>Ergebnis:</h2>
      <p>Lebensmittel 1: {{ result.food1 }}</p>
      <p>Lebensmittel 2: {{ result.food2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      food1: '',
      food2: '',
      result: null
    };
  },
  methods: {
    compareFoods() {
  // Hier den API-Aufruf an das Backend implementieren, um die Nährwerte zu vergleichen
  // Verwende dazu z.B. die 'fetch' Funktion von JavaScript oder eine andere geeignete Bibliothek
}
}
};
</script>
