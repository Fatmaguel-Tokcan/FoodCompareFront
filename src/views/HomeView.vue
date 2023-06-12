<template>
  <div class="home">
    <img>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/FoodCompare.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<template>
  <div>
    <input v-model="food1" type="text" placeholder="Lebensmittel 1">
    <input v-model="food2" type="text" placeholder="Lebensmittel 2">
    <button @click="compareFoods">Vergleichen</button>
    <div v-if="comparisonResult">
      <p>{{ food1 }} vs. {{ food2 }}</p>
      <p>{{ comparisonResult }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      food1: '',
      food2: '',
      comparisonResult: ''
    };
  },
  methods: {
    compareFoods() {
      if (this.food1 && this.food2) {
        // Hier kannst du deine Vergleichsfunktion implementieren
        // Beispiel: Vergleich von Längen der Lebensmittelnamen
        if (this.food1.length > this.food2.length) {
          this.comparisonResult = `${this.food1} ist länger als ${this.food2}`;
        } else if (this.food1.length < this.food2.length) {
          this.comparisonResult = `${this.food2} ist länger als ${this.food1}`;
        } else {
          this.comparisonResult = 'Beide Lebensmittel haben die gleiche Länge';
        }
      }
    }
  }
};
</script>

