<template>
    <div v-if="event" class="form">
      <h2>{{event.title}}</h2>
    <div
      v-for="(value, key, index) in event"
      :key="index"
    >   
    
      <div class="form__item" v-if="key !== 'attendees'">

      <label 
      :for="key">{{key}}
      </label>

      <input 
      type="text" 
      id="key" 
      v-model="event[key]">

      </div> 

      <ul v-else >
        <p>Attendees</p>
        <li class="form__item"
          v-for="(attendee, index) in value"
          :key="index"
        >
        <label 
        :for="key">{{attendee.id}}
        </label>

        <input 
        type="text" 
        id="key" 
        v-model="attendee.name">

        </li>
      </ul>
        

    </div>
  </div>
</template>

<script>
export default{
    props: ['id', 'events'],
    computed: {
    event() {return this.events[this.id-1]
    }
    },

}

</script>

<style scoped>
li{
  list-style: none;
}
ul{
  padding-left: 0;
}
.form{
  border: 2px solid black;
  width: fit-content;
  margin: 10px auto;
  padding: 10px;
  background: linear-gradient(rgba(9,121,39,.8) 0%, rgba(0,212,255,.8) 100%);
}
.form__item{
  display: flex;
  justify-content: space-between; 
  margin: 5px;
  font-size: 14px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

</style>
