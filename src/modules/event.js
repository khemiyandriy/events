import axios from "axios"
  
  export default{
    state () {
      return {
        isLoading: true,
        events: []
      }
    },
    mutations: {
      SET_LOADING_STATUS(state){
        state.isLoading = false
      },
      SET_EVENTS(state, events){
        state.events = events
      },
      },
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
          GET_EVENTS_FROM_API(context){
          axios.get('http://localhost:3000/events/')
          .then((response) => context.commit('SET_EVENTS', response.data))
          .catch(error => {console.log(error)})
          .finally(() => context.commit('SET_LOADING_STATUS'))
        },

          CREATE_EVENT(context, newEvent){
          axios.post('http://localhost:3000/events/', newEvent)
          .catch(error => {console.log(error)})
          .then((response) => {
          if (response.status === 201) {context.dispatch('GET_EVENTS_FROM_API')}})
        },
        
          DELETE_EVENTS(context, id){
            axios.delete('http://localhost:3000/events/' + id)
            .catch(error => {console.log(error)})
            .then((response) => {
            if (response.status === 200) {context.dispatch('GET_EVENTS_FROM_API')}})
        },

        UPDATE_EVENT(context, event){
          axios.put('http://localhost:3000/events/' + event.id, event)
          .catch(error => {console.log(error)})
          .then((response) => {
            if (response.status === 200) {context.dispatch('GET_EVENTS_FROM_API')}})
        },

      
    }
  }
 
 