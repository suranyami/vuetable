import Vue from 'vue'
import Vuex from 'vuex'
import data from './data'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    postcodes: data
  },
  getters: {
    suburbsForPostCode: (state) => (postcode) => {
      return state.postcodes.filter(suburb => {
        console.log(suburb)
        suburb[0] === postcode
      })
    }
  }
})

console.log(store.getters.suburbsForPostCode('2000'))
