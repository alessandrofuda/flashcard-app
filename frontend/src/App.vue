<template>
  <div id="app">
    <main class="page-container">

      <router-link class="my-5" to="/login">Login</router-link>

      <header class="page-header">
        <div class="top-message">
          <span class="text">
            Vue.js project
          </span>
        </div>
        <!-- end of top message -->
        <h1 class="title">Flashcard App</h1>

        <Search @searchTrigger="searchCards"></Search>

      </header>
      <AddNewCard @addCardTrigger="addCard"></AddNewCard>
      <p class="likecounter">You have liked {{ likes }} cards so far</p>
      <ul class="cards-box">
        <Card
          v-for="card in filteredData"
          :key="card.id"
          :card="card"
          @likeTrigger="recalculateLikes"
          @deleteTrigger="deleteCard"
        ></Card>
      </ul>
      <!-- end of cards box -->
    </main>
  </div>
</template>

<script>
import Search from "./components/Search";
import AddNewCard from "./components/AddNewCard";
import Card from "./components/Card";

const uuidv4 = require("uuid/v4");
const colors = ["-orange", "-red", "-purple", "-blue", "-green"];

let cards = [
  {
    id: uuidv4(),
    front: "Who would I like to work with?",
    back: "10Clouds! 😎",
    flipped: false,
    liked: true,
    color: `${colors[Math.floor(Math.random() * colors.length)]}`
  },
  {
    id: uuidv4(),
    front:
      'Job interviewer: "And where would you see yourself in five years’ time Mr. Jeffries?"',
    back:
      'Mr. Jeffries: "Personally I believe my biggest weakness is in listening."',
    flipped: false,
    liked: false,
    color: `${colors[Math.floor(Math.random() * colors.length)]}`
  },
  {
    id: uuidv4(),
    front: "When do I have recruitment interview?",
    back: "Tomorrow",
    flipped: false,
    liked: false,
    color: `${colors[Math.floor(Math.random() * colors.length)]}`
  },
  {
    id: uuidv4(),
    front: "What is my main goal? 💻",
    back: "Learn something new and awesome! 🔥",
    flipped: false,
    liked: true,
    color: `${colors[Math.floor(Math.random() * colors.length)]}`
  },
  {
    id: uuidv4(),
    front: "Am I ready?",
    back: "Hell no!",
    flipped: false,
    liked: false,
    color: `${colors[Math.floor(Math.random() * colors.length)]}`
  },
  {
    id: uuidv4(),
    front: "What is a closure? 😊",
    back:
      "A closure is an inner function that has access to the outer (enclosing) function's variables",
    flipped: false,
    liked: false,
    color: `${colors[Math.floor(Math.random() * colors.length)]}`
  },
  {
    id: uuidv4(),
    front: "Booyah!",
    back: "Used when someone is extremely overjoyed",
    flipped: false,
    liked: false,
    color: `${colors[Math.floor(Math.random() * colors.length)]}`
  },
  {
    id: uuidv4(),
    front: "Who designed this app? ✏️",
    back: "Such a modest boy...",
    flipped: false,
    liked: false,
    color: `${colors[Math.floor(Math.random() * colors.length)]}`
  }
];

export default {
  name: "app",
  data() {
    return {
      cards: cards,
      searchWord: "",
      likes: cards.filter(card => card.liked).length
    };
  },
  methods: {
    searchCards(keyword) {
      this.searchWord = keyword;
    },
    recalculateLikes(value) {
      value ? this.likes++ : this.likes--;
    },
    deleteCard(id) {
      this.cards = this.cards.filter(card => {
        if (card.id === id && card.liked) {
          this.likes--;
        }
        return card.id !== id;
      });
    },
    addCard(data) {
      this.cards.unshift(data);
    }
  },
  computed: {
    filteredData() {
      return this.cards.filter(card => {
        return card.front
          .toLowerCase()
          .includes(this.searchWord.trim().toLowerCase());
      });
    }
  },
  components: {
    Search,
    AddNewCard,
    Card
  }
};
</script>

<style lang="sass">
@import 'src/assets/sass/main.sass'

.page-container
  margin-left: auto
  margin-right: auto
  max-width: 1120px
  padding-top: 1.5rem
  padding-left: 1rem
  padding-right: 1rem
  overflow: hidden

.top-message
  font-size: 0.8571rem
  text-align: left
  color: $muted
  .text
    display: flex
    align-items: center
  .icon
    width: 20px
    fill: #ff4242
    margin-right: 9px

.page-header
  padding-bottom: 40px
  border-bottom: 1px dashed #dedede
  .title
    font-size: 2.286rem
    font-weight: $bold
    text-align: center
    margin-top: 3.5rem
    margin-bottom: 3rem

.likecounter
  font-size: 1.143rem
  font-weight: $bold

.cards-box
  margin-top: 1rem
  margin-left: -1.5rem
  margin-right: -1.5rem
  display: flex
  flex-wrap: wrap
  justify-content: center
</style>
