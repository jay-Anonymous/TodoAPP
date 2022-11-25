import { createApp } from "vue";

import App from "./App.vue";
import NewTodo from "./components/todo-app/NewTodo.vue";
import TodoItem from "./components/todo-app/TodoItem.vue";
import TodoList from "./components/todo-app/TodoList.vue";
import TodoSort from "./components/todo-app/TodoSort.vue";
import TodoNav from "./components/todo-app/TodoNav.vue";
import BaseAlert from "./components/UI/BaseAlert.vue";

import "./assets/main.scss";

const app = createApp(App);

app.component("base-alert", BaseAlert);
app.component("new-todo", NewTodo);
app.component("todo-nav", TodoNav);
app.component("todo-sort", TodoSort);
app.component("todo-item", TodoItem);
app.component("todo-list", TodoList);

app.mount("#app");
