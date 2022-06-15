import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        isLoading: false,
        events: []
      }
    },
    mutations: {
      SET_LOADING_STATUS(state){
        state.isLoading = !state.isLoading
      },
      SET_EVENTS(state, events){
        state.events = events
        console.log(state.events)
      },
      DELETE_EVENTS(state, id){
        const targetEventIndex = state.events.findIndex((el) => el.id == id)
        state.events.splice(targetEventIndex, 1)
      },
      CREATE_EVENT(state, newEvent){
        state.events.push(newEvent)
        console.log(newEvent)
      }
    },
    getters: {
      getEvents(state) {
        return state.events
      },
      getEventById (state) {
        return id => {
            return state.events.find(event => event.id === id)
        }

    }
    },
    actions: {
        fetchEvents(context) {
            context.commit('SET_LOADING_STATUS')
            fetch('./db.json')
            .then(response => response.json())
            .then(json => context.commit('SET_EVENTS', json.events))
            console.log(this.state.events)
        }
    }
  })
  

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')

