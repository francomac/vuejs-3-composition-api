<template>
  <div class="home">
    <h3>{{ counterData.title }}</h3>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <div class="edit">
      <h4>Edit Counter Title:</h4>
      <input v-model="counterData.title" type="text" />
    </div>
    <div class="footer">
      <p>{{ disclaimer }}</p>
    </div>
  </div>
</template>

<script setup>
// import { ref, reactive } from 'vue'
import { reactive } from 'vue'

// const counter = ref(0)
// const counterTitle = ref('just a Counter')

const counterData = reactive({
  count: 0,
  title: 'the Counter'
})

const disclaimer = 'this is a non-reactive value'

const increaseCounter = (amount, e) => {
  console.log(e)
  counterData.count += amount
}

const decreaseCounter = (amount) => {
  counterData.count -= amount
}
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
.edit,
.footer {
  margin-top: 60px;
}
</style>
