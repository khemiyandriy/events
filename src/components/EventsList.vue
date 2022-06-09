<template>
  <div>
    <h1>Events</h1>
    <ul>
     
      
      <li  v-for="event in events" :key = "event.id">
        <router-link :to="{ name: 'eventPage', params: {id: event.id}}">
          {{event.id}}. Event: {{event.title}}. Date: {{event.date}}. Time: {{event.time}}. 
        </router-link> 
      </li>
  

      

    </ul>
  </div>
</template>

<script>
export default{
  
  data() {
    return {
      events: []
    }},
  mounted() {
  fetch('./db.json')
  .then(response => response.json())
  .then(json => {
    setTimeout(()=>{
    this.events = json.events;
    }, 500)})
  },
  props: {
    event: {
      type: Object
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

