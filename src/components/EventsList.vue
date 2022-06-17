<template>
  <div>
    <h1>Events</h1>
    <ul>
     
      <li  
      v-for="event in paginetedEvents" 
      :key = "event.id"
      >
        <router-link :to="{ name: 'eventPage', params: {id: event.id}}">
          {{ event.id }}. Event: {{ event.title }}. Date: {{ event.date }}. Time: {{ event.time }}. 
          <button :id='event.id' @click = deleteEvent(event.id)>X</button>
        </router-link> 
        
      </li>

    </ul>

  <div class="events_pagination">
    <div class="page" 
          v-for = "page in pages"
          :key = "page"
          @click = pageClick(page)
          :class = "{'active': page === pageNumber}"
          >{{page}}
    </div>
  </div>

    <router-view :events="events" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default{
  data() {
    return{
      eventsPerPage: 3,
      pageNumber: 1
    }
  },

  computed: {pages(){
    return Math.ceil(this.getEvents.length / this.eventsPerPage)
  },
  paginetedEvents(){
    let from = (this.pageNumber - 1) * this.eventsPerPage;
    let to = from + this.eventsPerPage;
    return this.getEvents.slice(from, to)
  },
  ...mapGetters(['getEvents'])},

  methods: {
    deleteEvent(id){
      this.$store.commit('DELETE_EVENTS', id)
    },

    pageClick(page){
      this.pageNumber = page
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
    .events_pagination{
      margin: 10px 50px;
      display: flex;
    }
    .page{
      margin: 10px;
      padding: 10px;
      border: 2px solid black;
      font-size: 16px;
      background: beige;
      border-radius: 10px;
    }
    .active{
      background:darkseagreen;
    }
</style>

