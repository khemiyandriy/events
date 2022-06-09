<template>
<div class="app">
  <div class="nav">
  <button class="nav__link" @click="$router.push({name: 'main'})">Main</button>
  <button class="nav__link" @click="$router.push({name: 'events'})">Events</button>
  <button class="nav__link" @click="$router.push({name: 'create'})">Create Events</button>
  </div>
    


 <h1>App router</h1>
 <router-view></router-view>
</div>

</template>

<script>

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
