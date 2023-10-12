<template>
  <div>
    <form @submit.prevent="add">
      <div>
        <label>question</label>
        <input v-model="item.question" />
      </div>
      <div>
        <label>answer</label>
        <input v-model="item.answer" />
      </div>
      <button class="btn btn-primary" type="submit">submit</button>
    </form>
    <div v-for="(item, index) of items" :key="item.id" class="card">
      <b class="card-title">question</b>
      <p>{{ item.question }}</p>
      <b>answer</b>
      <p class="card-text">{{ item.answer }}</p>
      <button class="btn btn-link text-danger " @click="deleteItem(index)">delete</button>
    </div>
  </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "App",
  data() {
    return {
      item: {
        question: "",
        answer: "",
      },
      items: [],
    };
  },
  methods: {
    add() {
      this.items.push({
        id: uuidv4(),
        ...this.item,
      });
      this.item = {};
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>
