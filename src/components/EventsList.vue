<template>
  <div>
    <h1>Events</h1>
    <ul>
     
      <li  
      v-for="event in events" 
      :key = "event.id"
      >
        <router-link :to="{ name: 'eventPage', params: {id: event.id}}">
          {{ event.id }}. Event: {{ event.title }}. Date: {{ event.date }}. Time: {{ event.time }}. 
        </router-link> 
      </li>

    </ul>
    <router-view :events="events" />
  </div>
</template>

<script>
export default{
  
  data() {
    return {
      events: []
    };
  },
  mounted() {
  this.fetchEvents();
  },
  methods: {
    fetchEvents() {
      fetch('./db.json')
      .then(response => response.json())
      .then(json => this.events = json.events)
    }
  },
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

