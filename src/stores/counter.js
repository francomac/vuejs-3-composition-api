import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 1,
    title: 'My Counter Title'
  }),
  actions: {
    increaseCounter(amount) {
      this.count += amount
    },
    decreaseCounter(amount) {
      this.count -= amount
    }
  }
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
