<!-- html -->
<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Top :addTodoList="addTodoList" />
        <List :todoList="todoList" />
        <Tail
          :todoList="todoList"
          :changeAllOk="changeAllOk"
          :deleteAllOk="deleteAllOk"
        />
      </div>
    </div>
  </div>
</template>

<!-- js -->
<script>
import List from "./components/List.vue";
import Tail from "./components/Tail.vue";
import Top from "./components/Top.vue";
import emitter from "./utils/emitter";

export default {
  components: {
    Top,
    Tail,
    List,
  },
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };
  },
  methods: {
    addTodoList(todo) {
      this.todoList.unshift(todo);
    },
    changeChecked(id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) todo.ok = !todo.ok;
      });
    },
    deleteTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    deleteAllOk() {
      this.todoList = this.todoList.filter((todo) => !todo.ok);
    },
    changeAllOk(ok) {
      this.todoList.forEach((todo) => (todo.ok = ok));
    },
    updateTodo(newTodo) {
      this.todoList.forEach((todo) => {
        if (todo.id === newTodo.id) todo.name = newTodo.name;
      });
    },
  },
  watch: {
    todoList: {
      deep: true,
      handler(val) {
        localStorage.setItem("todoList", JSON.stringify(val));
      },
    },
  },
  mounted() {
    emitter.on("changeChecked", this.changeChecked);
    emitter.on("deleteTodo", this.deleteTodo);
    emitter.on("updateTodo", this.updateTodo);
  },
  beforeUnmount() {
    emitter.off("changeChecked", this.changeChecked);
    emitter.off("deleteTodo", this.deleteTodo);
    emitter.off("updateTodo", this.updateTodo);
  },
};
</script>

<!-- css -->
<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border-color: skyblue;
  margin-right: 5px;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
