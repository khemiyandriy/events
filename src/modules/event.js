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
        console.log(state.events)
      },
      /* DELETE_EVENTS(state, id){
        const targetEventIndex = state.events.findIndex((el) => el.id === id)
        state.events.splice(targetEventIndex, 1)
      }, */
      /* CREATE_EVENT(state, newEvent){
        axios.post('http://localhost:3030/events', {
          body: newEvent,
         });
        }, */
/* 

        state.events.push(newEvent)
        console.log(newEvent) 
      }*/},
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
          console.log(newEvent);
          axios.post('http://localhost:3000/events/', newEvent)
          .catch(error => {console.log(error)})
          .then((response) => {
          if (response.status === 201) {context.dispatch('GET_EVENTS_FROM_API')}})
        },
        
          DELETE_EVENTS(context, id){/* 
            const targetEventIndex = context.events.findIndex((el) => el.id === id) */
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
        }
      
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
 
 