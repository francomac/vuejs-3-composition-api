import { reactive, computed, watch, onMounted, nextTick } from 'vue'

// having this object our of useConter obj, will turn this obj a
// global obj that will be available for the whole app. otherwise,
// this obj state will reset after every page change or after a redirect.
const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

export function useCounter() {
  watch(
    () => counterData.count,
    (newCount) => {
      if (newCount === 20) {
        alert('Way to go! You made it to 20!!')
      }
    }
  )

  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return 'even'
    return 'odd'
  })

  const increaseCounter = async (amount, e) => {
    counterData.count += amount
    await nextTick()
    console.log('do something when counter has updated in the dom')
  }

  const decreaseCounter = (amount) => {
    counterData.count -= amount
  }

  onMounted(() => {
    console.log('Do stuff related to Counter')
  })

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }
}
