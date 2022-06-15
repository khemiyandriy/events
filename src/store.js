import { createStore } from 'vuex'
import event from './modules/event.js'

const store = createStore({
    modules: {
      event
    }
})

export default store;