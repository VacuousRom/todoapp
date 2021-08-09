<template>
  <div class="home">
    <h2>About</h2>
    <p class="text">This is a To Do List app, with which you can create a list of tasks, browse them and remove them. Use the navigation bar {{navbarPlacement}} to go to the list view, where you can see the existing tasks, or to add a new task.</p>
    <p class="text">The app uses data from JSONPlaceholder, which is why most of the preexisting entries is dummy text with lorem ipsum. The app is also responsive and can be used both on mobile and desktops.</p>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      
    }
  },
  computed: {
    navbarPlacement() {
      if (this.$store.state.windowWidth >=1000) {
        return 'to the right'
      } else {
        return 'at the bottom'
      }
    }
  }
}
</script>
<style scoped>

  .home {
    padding: .5rem 1rem;
  }
  .home h2 {
    margin-bottom: 1rem;
  }

  
</style>