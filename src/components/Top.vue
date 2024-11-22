<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="todoName"
      @keyup.enter="addTodo"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "Top",
  props: ["addTodoList"],
  data() {
    return {
      todoName: "",
    };
  },
  methods: {
    addTodo() {
      if (!this.todoName.trim()) {
        alert("任务名称不能为空");
        return;
      }
      const todo = {
        id: nanoid(),
        name: this.todoName,
        ok: false,
        isEdit: false,
      };
      this.addTodoList(todo);
      this.todoName = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
