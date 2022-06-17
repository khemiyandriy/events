/* import axios from "axios" */
  
  export default{
    state () {
      return {
        isLoading: true,
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
        const targetEventIndex = state.events.findIndex((el) => el.id === id)
        state.events.splice(targetEventIndex, 1)
      },
      CREATE_EVENT(state, newEvent){
        state.events.push(newEvent)
        console.log(newEvent)
      }},
    getters: {
      getEvents(state) {
        return state.events
      },
      getLoading(state){
        return state.isLoading
      },
      getEventById (state) {
        return id => {
            return state.events.find(event => event.id === id)
        }

    }
    },
    actions: {
        /* fetchEvents(mutations) {
          axios
          .get('http://localhost:3000/events')
          .then(response => mutations.SET_EVENTS(response.data))
          .catch(error => {console.log(error)})
          .finally(() => mutations.SET_LOADING_STATUS())
        } */
    }/* ,
    namespaced: true */
  }
 
 