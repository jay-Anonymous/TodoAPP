<template>
     <main>
        <new-todo :add-new-task="addNewTask" :save-tasks="saveTasks"></new-todo>
        <todo-list :tasks="tasks" :selected-sort="selectedSort"></todo-list>
        <todo-nav 
          :display-desktop="displayDesktop"
          :clear-complete="clearComplete" 
          :task-left="tasks">
        </todo-nav>
        <div class="shadow-layout"></div>
      </main>
      <todo-sort v-if="displayMobile()" class="mobile"></todo-sort>
</template>

<script>
export default {
  props:['windowWidth'],
  data(){
    return {
      tasks: [],
      selectedSort : 'all',
    }
  },
  provide(){
    return {
      toggleUrgent: this.toggleUrgent,
      toggleComplete: this.toggleComplete,
      updateTask: this.updateTask,
      deleteTask: this.deleteTask,
      selectedSort: this.activateSort,
    }
  },
  methods:{
    addNewTask(task){
      const newTask = {
        id : new Date().getTime() + '',
        title: task,
        isCompleted : false,
        isUrgent: false,
      }
      this.tasks.unshift(newTask)
    },
    toggleComplete(taskID){
      const identifiedTask = this.tasks.find(task => task.id === taskID)
      identifiedTask.isCompleted = !identifiedTask.isCompleted
      this.saveAndShow()
    },
    toggleUrgent(taskID){
      const identifiedTask = this.tasks.find(task => task.id === taskID)
      identifiedTask.isUrgent = !identifiedTask.isUrgent
      this.sortUrgentTasks()
      this.saveAndShow()
    },
    updateTask(taskID, task){
       const identifiedTask = this.tasks.find(task => task.id === taskID)
       identifiedTask.title = task
       this.saveAndShow()
    },
    deleteTask(taskID){
      const tasks = JSON.parse(localStorage.getItem('tasks'))
      const identifiedTaskIndex = tasks.findIndex(task => task.id === taskID)
      tasks.splice(identifiedTaskIndex, 1)
      this.tasks = this.tasks.filter(task => task.id != taskID)
      this.saveAndShow()
    },
    sortUrgentTasks(){
      const urgentTasks = this.tasks.filter(task => task.isUrgent )

      if(urgentTasks.length){
        this.tasks.sort((a, b) => Number(b.id) - Number(a.id))
                  .sort((a, b) => Number(b.isUrgent) - Number(a.isUrgent))
      } else this.tasks.sort((a, b) => Number(b.id) - Number(a.id))
    },
    activateSort(e){
      this.selectedSort = e.target.value
    },
    clearComplete(){
      const completedTasksID = this.tasks.filter(task => task.isCompleted).map(task => task.id)
      for(const id of completedTasksID){
        this.deleteTask(id)
      }
    },
    displayDesktop(media = this.windowWidth){
      return this.tasks.length > 0 && media >= 600
    },
    displayMobile(media = this.windowWidth){
      return this.tasks.length > 0 && media < 600
    },
    saveTasks() {
      const parsed = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', parsed);
    },
    showTasks(){
      const tasks = localStorage.getItem('tasks');
      this.tasks = JSON.parse(tasks);
    },
    saveAndShow(){
      this.saveTasks()
      this.showTasks()
    }
  },
  mounted(){
    if(localStorage.tasks.length > 0){
      this.showTasks()
    }
  }
}
</script>