<template>
  <div class="app">
    <h1 class="app__title">To Do List App</h1>
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
    <div class="nav">
      <router-link to="/" @click.native="selectMode('mainActive')"><i class="fas fa-home icon-hover"  :class="{'active': mainActive}"></i><span class="icon-hover"  v-if="screenWidth" :class="{'active': mainActive}">Home</span></router-link>
      <router-link to="/list" @click.native="selectMode('listActive')"><i class="fas fa-clipboard-list icon-hover"  :class="{'active': listActive}"></i><span class="icon-hover" v-if="screenWidth" :class="{'active': listActive}">List</span></router-link>
      <router-link to="/add" @click.native="selectMode('addTaskActive')"><i class="fas fa-plus-square icon-hover"  :class="{'active': addTaskActive}"></i><span class="icon-hover" v-if="screenWidth" :class="{'active': addTaskActive}">Add Task</span></router-link>

    </div>
    
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      windowInnerWidth: window.innerWidth,
      mainActive: true,
      addTaskActive: false,
      listActive: false,
    }
  },
  methods: {
    ...mapActions(['fetchTodos']),
    getWindowWidth() {
      this.windowInnerWidth = window.innerWidth;
      this.$store.state.windowWidth = window.innerWidth;
    },
    selectMode(mode) {
      this.mainActive = false;
      this.addTaskActive = false;
      this.listActive = false;
      this[mode] = true;
    },
  },
  computed: {
    screenWidth() {
      if (this.windowInnerWidth >=1000) {
        return true;
      } else {
        return false;
      }
    },
    
  },
  created(){
    window.addEventListener('resize', this.getWindowWidth)
    this.$store.state.windowWidth = window.innerWidth;       
    this.fetchTodos();
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  -webkit-tap-highlight-color: transparent;
}

a {
  text-decoration: none;
  color: #BEBDC5;
}

ul {
  list-style: none;
}

p {
  line-height: 1.8rem;
  font-weight: 300;
}

.text {
  text-align: justify;
}
.app {
  position: relative;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  background: #FFF9EB;
}

.app__title {
  align-self: center;
  text-align: center;
}

.nav {
  align-items: center;
  align-self: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

}

.active {
  color: #FCB660;
}
/* media queries */

@media (min-width: 1000px) {
  .app {
    grid-template-columns: 2fr 6fr;
    grid-template-rows: 1fr 5fr ;

    
  }
  .nav {
      grid-column: 1/2;
      grid-row: 1/3;
      flex-direction: column;
      align-items: flex-start;
      display: grid;
      align-content: flex-start;
      height: 100%;
      padding-top: 4rem;
      grid-gap: 2rem;
    }

    .nav i{
      margin-right: 1rem;
    }
}

@media (min-width: 1920px) {
  body {
    background: #FFF9EB;
  }
  .app {
    width: 80%;
    margin: 0 auto;
  }
}

/* transitions */

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-leave-to, .fade-enter {
  opacity: 0;
  
}

/*scroll */
*::-webkit-scrollbar {
  width: .3rem;
}
 

 
*::-webkit-scrollbar-thumb {
  background-color: #FCB660;
  border-radius: 5px;
}
</style>
