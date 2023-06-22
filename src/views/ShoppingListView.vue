<template>
    <div>
      <h1>Einkaufsliste</h1>
      <ul>
        <li v-for="item in shoppingList" :key="item.id">
          <input type="checkbox" v-model="item.checked" :id="`item-${item.id}`" />
          <label :for="`item-${item.id}`" :class="{ checked: item.checked }">{{ item.name }}</label>
        </li>
      </ul>
  
      <div class="add-item">
        <input type="text" v-model="newItemName" placeholder="Artikelname eingeben" />
        <button @click="addItem">Hinzufügen</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        shoppingList: [
          { id: 1, name: 'Milch', checked: false },
          { id: 2, name: 'Eier', checked: false },
          { id: 3, name: 'Brot', checked: true },
          // Weitere Einkaufsartikel hier
        ],
        newItemName: '',
      };
    },
    methods: {
      addItem() {
        if (this.newItemName) {
          const newItem = {
            id: this.shoppingList.length + 1,
            name: this.newItemName,
            checked: false,
          };
          this.shoppingList.push(newItem);
          this.newItemName = '';
        }
      },
    },
  };
  </script>
  
  <style>
  .checked {
    text-decoration: line-through;
  }
  
  .add-item {
    margin-top: 20px;
  }
  
  .add-item input {
    margin-right: 10px;
  }
  
  .add-item button {
    padding: 5px 10px;
  }
  </style>
  