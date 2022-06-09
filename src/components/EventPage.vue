<template>
  <div>
    <div>
        <p>{{thisEvent}}</p>
        <!-- <p v-bind='thisEvent'>{{thisEvent}}</p> --> 

        <p v-for="item in thisEvent" :key="item.id">{{thisEvent.id}}</p>

        <p v-for="value in thisEvent" :key="value">{{value}}</p>
        <!-- <li v-model="thisEvent">{{thisEvent.id}}</li> -->
        <ul>
          <li v-for="detail in thisEvent" v-bind:key="detail">{{ detail }}</li>
        </ul>

    </div>
  </div>
</template>

<script>
export default{
    props: ['id'],
  data() {
    return {/* 
    event: null, */
    events: [],
    qwe: {}
    }},
  mounted() {
  fetch('./db.json')
  .then(response => response.json())
  .then(json => {
    setTimeout(()=>{
    this.events = json.events;
    }, 100)})
   /*  .then(() => {this.qwe = this.events[this.id-1]; console.log(this.qwe)}) */
  },
  computed: {
    thisEvent() {return this.events[this.id-1]
    }
    },
/* methods: {
  ShowEvent() {return ShowEvent = this.events[this.id-1]}
} */

}

</script>

<style scoped>

</style>
