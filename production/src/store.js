import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: null,
    todos: [],
  },
  getters: {
    allToDos: state => state.todos
  },
  mutations: {
    removeToDo(state, id) {
      state.todos = state.todos.filter(todo => todo.id != id)
    },
  },
  
  actions: {
    //a function that calls the end point with fetch API and puts data from the response into vuex
    async fetchTodos() {
      fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => this.state.todos = json);
    },

    //a function that posts with fetch API to jsonplaceholder and add the new item from the response to vuex
    async addToDo({commit}, todo) {

      fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
          title: todo.title,
          body: todo.body,
          completed: false,
          userId: 1,
          id: todo.id
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => this.state.todos.unshift(json));
    },

    //a function that deletes the post by the callback id and then calls the mutation that filters to do list by id
    async deleteToDo({commit}, id) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}` , {
        method: 'DELETE',
      })
      commit('removeToDo', id)
      
    },
  }
})
