<template>
  <div>
    <h1>Events</h1>
    <ul>
     
      <li  
      v-for="event in getEvents" 
      :key = "event.id"
      >
        <router-link :to="{ name: 'eventPage', params: {id: event.id}}">
          {{ event.id }}. Event: {{ event.title }}. Date: {{ event.date }}. Time: {{ event.time }}. 
          <button :id='event.id' @click = deleteEvent(event.id)>X</button>
        </router-link> 
        
      </li>

    </ul>
    <router-view :events="events" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default{
  computed: mapGetters(['getEvents']),
methods: {
    deleteEvent(id){
      this.$store.commit('DELETE_EVENTS', id)
    }

  }
  
  }
  

  

</script>

<style scoped>

  li{
    list-style: none;
    font-size: 18px;
    text-align: left;
    margin: 10px;
    }
</style>

