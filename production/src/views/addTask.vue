<template>
  <div class="add-task">
      <h2>Add a Task</h2>
      <p>Type the title of the task you want to add to the list and give it a description if needed. </p>
      <div class="add-task__container">
          <form action="" class="add-task__container--form">
              <input type="text" class="add-task__container--input" placeholder="Title" v-model="toDoTitle">
              <input type="text" class="add-task__container--input" placeholder="Description..." v-model="toDoBody">
              

              <input type="submit" class="add-task__container--submit" value="Submit" @click.prevent="addNewToDo">
          </form>
      </div>
      <transition name="fade" mode="out-in">
      <message :message="infoMessage" v-if="showMessage"></message>
      </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import message from '../components/infoComponent.vue'
import { setTimeout } from 'timers';

export default {
    components: {
        message,
    },
    data() {
        return {
            toDoTitle: '',
            toDoBody: '',
            infoMessage: '',
            showMessage: false,
            
        }
    },
    methods: {
        ...mapActions(['addToDo', 'fetchTodos']),
        addNewToDo() {
            if (this.toDoTitle != '') {
                let todo = {}
                todo.title = this.toDoTitle;
                todo.body = this.toDoBody;
                todo.id = this.$store.state.todos.length+1;
                this.addToDo(todo);
                this.clearInputs();
                this.displayMessage("A new task added.")
            }  else {
                this.displayMessage("Please enter a title before creating a new entry.")
            }
            
        },
        displayMessage(message) {
            this.infoMessage = message;
            this.showMessage = true;
            setTimeout(()=> {
                    this.showMessage = false;
                    
            },1000)                
        },
        clearInputs() {
            this.toDoTitle = '',
            this.toDoBody = '';
        }
    }
}
</script>

<style scoped>
.add-task {
    background: #FFF9EB;
    position: relative;
}

h2, p {
    padding: .5rem 1rem;
}

.add-task__container--form {
    display: grid;

}

.add-task__container--input {
    border: none;
    line-height: 2rem;
    outline: none;
    padding: .5rem;
    margin: .5rem 1rem;
    border-radius: 10px;
}

.add-task__container--submit {
    border: none;
    outline: none;
    background: #FCB660;
    padding: 1rem;
    margin: .5rem 1rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;

}


</style>