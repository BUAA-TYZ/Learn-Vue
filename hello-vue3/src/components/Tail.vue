<template>
  <div class="todo-footer" v-show="todoList.length">
    <label>
      <input type="checkbox" v-model="checkAll" />
    </label>
    <span>
      <span>已完成 {{ todoOk }}</span> / 全部 {{ todoList.length }}
    </span>
    <button class="btn btn-danger" @click="handleDeleteAllOk">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "Tail",
  props: ["todoList", "changeAllOk", "deleteAllOk"],
  computed: {
    todoOk() {
      return this.todoList.reduce((pre, cur) => pre + (cur.ok ? 1 : 0), 0);
    },
    checkAll: {
      get() {
        return this.todoOk === this.todoList.length && this.todoList.length > 0;
      },
      set(val) {
        this.changeAllOk(val);
      },
    },
  },
  methods: {
    handleDeleteAllOk() {
      if (confirm("确认删除所有已完成的任务吗?")) this.deleteAllOk();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
