
 const state = { 
      isLoading: false,
      events: []
  };

  const mutations =  {
    SET_LOADING_STATUS(state){
      state.isLoading = !state.isLoading
    },
    SET_EVENTS(state, events){
      state.events = events
    },
    DELETE_EVENTS(state, index){
      state.events.splice(index, 1)
    },
    FIND_INDEX(state, id){
      return state.events.findIndex((el) => {
        return el.id == id});
    },
    CREATE_EVENT(state, newEvent){
      state.events.push(newEvent)
      console.log(newEvent, state.events)
    }
  }; 

  const  getters = {
    getEvents(state) {
      return state.events
    },
    getIndex(state, id){
      return state.events.findIndex((el) => {
        return el.id == id});
    }
  }; 

 const actions = {
      fetchEvents(context) {
          context.commit('SET_LOADING_STATUS')
          fetch('./db.json')
          .then(response => response.json())
          .then(json => context.commit('SET_EVENTS', json.events))
          console.log(this.state.events)
      }
  }
  
export default{
    state,
    mutations,
    getters,
    actions,
    namespaced: true
}