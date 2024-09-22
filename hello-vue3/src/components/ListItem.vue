<template>
  <li>
    <label>
      <!-- v-model = "todo.ok" 也能解决, 不过违背了 props 可读的概念, 不推荐 -->
      <input
        type="checkbox"
        :checked="todo.ok"
        @change="handlerChangeChecked"
      />
      <span v-show="!todo.isEdit">{{ todo.name }}</span>
      <input
        type="text"
        ref="inputName"
        :value="todo.name"
        v-show="todo.isEdit"
        @blur="handlerBlur($event)"
      />
    </label>
    <button class="btn btn-danger" @click="handlerDelete">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="handlerEdit">
      编辑
    </button>
  </li>
</template>

<script>
import emitter from "@/utils/emitter";

export default {
  name: "ListItem",
  props: ["todo"],
  methods: {
    handlerChangeChecked() {
      // this.changeChecked(this.todo.id);
      emitter.emit("changeChecked", this.todo.id);
    },
    handlerDelete() {
      if (confirm("确定删除 " + this.todo.name + " 吗?"))
        // this.deleteTodo(this.todo.id)
        emitter.emit("deleteTodo", this.todo.id);
    },
    handlerEdit() {
      this.todo.isEdit = true;
      // 获得焦点
      this.$nextTick(function () {
        this.$refs.inputName.focus();
      });
    },
    handlerBlur(e) {
      emitter.emit("updateTodo", { id: this.todo.id, name: e.target.value });
      this.todo.isEdit = false;
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  display: none;
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
