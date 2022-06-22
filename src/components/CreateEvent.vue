<template>
  <form @submit.prevent="submit" class="form">
    <input 
    type="text" 
    placeholder="title" 
    v-model="title" 
    class="form__item">
    
    <input 
    type="date" 
    placeholder="date" 
    v-model="date" 
    class="form__item">
    
    <input 
    type="time" 
    placeholder="time" 
    v-model="time" 
    class="form__item">
    
    <input 
    type="text" 
    placeholder="location" 
    v-model="location" 
    class="form__item">
    
    <input 
    type="text" 
    placeholder="description" 
    v-model="description" 
    class="form__item">
    
    <input 
    type="text" 
    placeholder="organizer" 
    v-model="organizer" 
    class="form__item">
    
    <input 
    type="text" 
    placeholder="category" 
    v-model="category" 
    class="form__item">

    <input 
    type="text" 
    placeholder="attendees1 atendis2 attendis3 ..." 
    v-model="attendees" 
    class="form__item">

  <button 
  type="submit" 
  class="form__button">Create event
  </button>
  </form>
</template>

<script>
import {mapActions} from 'vuex';
export default{
  data(){
    return{
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      organizer: '',
      category: '',
      attendees: '',
    }
  },
    methods: {
      ...mapActions(['CREATE_EVENT']),
      submit(){
        let newArray = [];
        this.attendees.replace(/\s+/g, ' ').trim().split(' ').map(element => {
            newArray.push({ id: Date.now() + Math.round(Math.random()*1000), name: element})
          });
        this.CREATE_EVENT({
          id: Date.now(),
          title: this.title,
          date: this.date,
          time: this.time,
          location: this.location,
          description: this.description,
          organizer: this.organizer,
          category: this.category,
          attendees: newArray
        })
        this.title = this.date = this.time = this.location = this.description = this.organizer = this.category = this.attendees = ""
      }
    }
}
</script>

<style scoped>
.form{
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  width: 300px;
}
.form__item{
margin: 10px;
}
.form__button{
  width: 100px;
  height: 50px;
  margin: 0 auto;
  background: rgb(5, 79, 54);
  color: #fff;
}
</style>

