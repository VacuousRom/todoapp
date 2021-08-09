<template>
  <div class="list">
    <h2>Active Tasks</h2>
    <p class="text">This list presents all the tasks in the database. There is a lot of them because they are taken straight from jsonplaceholder, all 200 of them. You can add your own in the 'Add Task' tab. If you click on a task, you mark it either as completed, or not, and gives it a checkmark icon. Clicking on the trash bin icon removes the task from the list completle. It's gone then, and you can't have it back.</p>
    <div class="list__container">
      <ul class="list__container--items">
        
        <li class="list__container--item" v-for="(item, index) in $store.state.todos" :key="index" >
          <div class="list__container--main" @click="checkItem(item)">
            <p class="list__container--done" :class="{'checked': item.completed}" ><i class="fas fa-check"></i></p>
            <h3 class="list__container--title">{{item.title}}</h3>
            <p class="list__container--body" v-if="item.body">{{item.body}}</p>
            
          </div>
            
            <p class="list__container--end" @click="deleteItem(item)"><i class="fas fa-trash-alt"></i></p>
          </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions(['deleteToDo', 'fetchTodos']),

    checkItem(item){
      item.completed=!item.completed;
    },
    deleteItem(item){
      let id = item.id
      this.deleteToDo(id)
    }
  },
  created() {
    
      
    
  }
}
</script>

<style scoped>

.list h2, .text {
    padding: .5rem 1rem;
}

.list {
  overflow-y: auto;
  background: #FFF9EB;
}

.list__container--items {
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
}
.list__container--item {
  padding: .5rem;
  line-height: 1.8rem;
  background: #FCB660;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 5fr 0 1fr;
  
}

.list__container--main {
  display: grid;
  grid-auto-columns: 1fr 5fr;
  cursor: pointer;
  
}



.list__container--body, .list__container--title {
  grid-column: 2;
}

.list__container--end, .list__container--done {
  grid-column: 3;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
  cursor: pointer;
}

.list__container--done {
  grid-column: 1;
  grid-row: 1/3;
  opacity: 0;
  transition: all .5s ease-in-out;

}

.checked {
  opacity: 1;
}


</style>