<template>
<div class="app">
  <div class="nav">
  <button class="nav__link" @click="$router.push({name: 'main'})">Main</button>
  <button class="nav__link" @click="$router.push({name: 'events'})">Events</button>
  <button class="nav__link" @click="$router.push({name: 'create'})">Create Events</button>
  </div>
    


 <h1>App router</h1>
 <LoaderSpiner v-if="isLoading"/>
 <router-view></router-view>
</div>

</template>

<script>/* 
import axios from "axios" */
import {mapActions, mapMutations, mapGetters} from 'vuex';
import LoaderSpiner from "@/components/LoaderSpiner"

export default{
  name: 'app',

  mounted() {
    this.GET_EVENTS_FROM_API()
    /* axios
          .get('http://localhost:3000/events')
          .then(response => this.SET_EVENTS(response.data))
          .catch(error => {console.log(error)})
          .finally(() => this.SET_LOADING_STATUS()) */
  },

  computed: {
      isLoading() {
        return this.getLoading()
      }
  },

  methods: {
    ...mapMutations(['SET_LOADING_STATUS', 'SET_EVENTS']),
    ...mapGetters(['getLoading']),
    ...mapActions(['GET_EVENTS_FROM_API'])
  },

  components: {LoaderSpiner}
  }
</script>

<style>
.nav{
  display: flex;
  justify-content: space-around;
}
.nav__link{
  height: 40px;
  width: 33%;
  background: linear-gradient(#eba740, #ba6b18);
  color: white;
  font-size: 24px;
  border-radius: 10px;
  border: none;
}
body{
  background: #f1dcc5;
  text-align: center;
}
</style>
