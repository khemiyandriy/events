<template>
  <div>
    <h1>Events</h1>
    <ul class="event_list">
     
      <li  
      v-for="event in paginetedEvents" 
      :key = "event.id"
      >
        <router-link :to="{ name: 'eventPage', params: {id: event.id}}">
          <div class="event">
            <button class="event__button" :id='event.id' @click = deleteEvent(event.id)>X</button>
            <p class="event__text">{{event.id}}. {{ event.title }}</p>
            <p class="event__text">{{ event.date }}</p>
            <p class="event__text">{{ event.time }}</p>
            </div>
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
import {mapGetters, mapActions} from 'vuex'
export default{
  data() {
    return{
      eventsPerPage: 3,
      pageNumber: 1
    }
  },
 props: ['events'],
  computed: {pages(){
    return Math.ceil(this.getEvents.length / this.eventsPerPage)
  },
  paginetedEvents(){
    let from = (this.pageNumber - 1) * this.eventsPerPage;
    let to = from + this.eventsPerPage;
    return this.getEvents.slice(from, to)
  },
  ...mapGetters(['getEvents'])},
  ...mapActions(['GET_EVENTS_FOR_PAGE']),

  methods: {
    deleteEvent(id){
      this.$store.dispatch('DELETE_EVENTS', id)
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
    a{
       text-decoration: none;
    }
    .event_list{
      display: flex;
      justify-content: space-around;
    }
  .event{
    border: 1px solid black;
    background: #fff;
    width: 300px;
    padding: 20px;
    position: relative;
    border-radius: 30px 0 30px 0;
    box-shadow:10px 10px 25px #333333;
  }
  .event:hover{
    background: rgb(185, 250, 223);
  }
  .event__button{
    position: absolute;
    right: 20px;
    top: 20px;
    background: rgb(249, 134, 134);
  }
  .event__text{
    color: black;
  }

    .events_pagination{
      display: flex;
      justify-content: center;
    }
    .page{
      margin: 10px;
      padding: 10px;
      border: 2px solid black;
      font-size: 16px;
      background: beige;
      border-radius: 10px;
    }
    .page:hover{
      background:rgb(94, 172, 94);
    }
    .active{
      background:darkseagreen;
    }
</style>

