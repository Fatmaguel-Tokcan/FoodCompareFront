<script >

export default  {

  data(){
    return {
      foods : []
    }
  },
  mounted() {
    this.getFoods()
  },
  methods : {

    getFoods(){
      fetch("http://127.0.0.1:5000/api/foods", { method : "GET"})
          .then(res => res.json())
          .then((response) => {
            this.foods = response
            console.log(response)
          })

    }

  }

}

</script>

<template>

  <h2> List of Mac Donald Foods </h2>

  <br/>

  <table class="table table-striped" ID="foods">
    <thead>
    <tr>
      <th>Name Essen </th>
      <th>Kalorie </th>
        <th>Total Fat</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for=" food in foods" :key =food.item>
      <td scope="row">{{ food.item  }}</td>
      <td>{{ food.calories }}</td>
      <td>{{ food.total_fat}}</td>
    </tr>
    </tbody>
  </table>



</template>

<style scoped>
#foods {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#foods td, #foods th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align:start;
}

#foods tr:nth-child(even){background-color: #f2f2f2;}

#foods tr:hover {background-color: #ddd;}

#foods th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>