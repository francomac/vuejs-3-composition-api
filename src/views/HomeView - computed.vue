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

    <p>this counter is {{ oddOrEven }}</p>

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
import { reactive, computed } from 'vue'

const counterData = reactive({
  count: 0,
  title: 'the Counter'
})

const oddOrEven = computed(() => {
  return counterData.count % 2 === 0 ? 'even' : 'odd'
})

const disclaimer = 'this is a non-reactive value'

const increaseCounter = (amount, e) => {
  counterData.count += amount
}

const decreaseCounter = (amount) => {
  counterData.count -= amount
}
</script>

<!--
<script>
export default {
  data() {
    return {
      counterData: {
        count: 0
      }
    }
  },
  computed: {
    myCompProp() {
      return 'any result'
    }
  }
}
</script>
-->

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
