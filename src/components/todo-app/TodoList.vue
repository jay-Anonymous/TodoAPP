<template>
     <ul>
        <li v-if="showElem" class="todo-item">{{ showDescription }}</li>
        <todo-item v-for="task in sortTasks" 
        :key="task.id"
        :id="task.id"
        :title="task.title"
        :is-completed="task.isCompleted"
        :is-urgent="task.isUrgent">
        </todo-item>
    </ul>
</template>

<script>
export default {
    props:{
        tasks:{
            type: Array
        }, 
        selectedSort:{
            type: String,
            requierd: true
        },
    },
    computed:{
        sortTasks(){
            if(this.selectedSort === 'all'){
                return this.tasks
            } else if(this.selectedSort === 'active'){
                return this.tasks.filter(task=> !task.isCompleted)
            } else {
                return this.tasks.filter(task=> task.isCompleted)
            }
        },
        showDescription(){
            if(this.selectedSort === 'active'){
                return 'You have complete all the tasks.'
            } else return 'You haven\'t complete any tasks yet.'
        },
        showElem(){
            return this.sortTasks.length === 0 && this.tasks.length !== 0
        }
    }
}
</script>

<style scoped>
li{
    justify-content: center;
}
</style>