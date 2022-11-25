<template>
    <nav v-if="displayNav()">
        <p class="item-left">{{ showTaskLeft() }}</p>
        <todo-sort v-if="displayDesktop()"></todo-sort>
        <button @click="showAlert" class="clear-complete">Clear Completed</button>
        <base-alert v-if="triggeredAlert" :title="title" @close="confirmAlert">
            <template #default>
                    <p>{{ subtitle }}</p>
            </template>
            <template #actions @click="confirmAlert">
                <button v-if="hasCompletedTask" @click="confirmAlert">No</button>
                <button v-if="hasCompletedTask" @click="confirmDelete">Yes</button>       
            </template>
        </base-alert>
    </nav>
</template>

<script>
export default {
    props:{
        taskLeft:{
            type:[Array,Object],
        },
        displayDesktop:{ 
            type: Function 
        },
        clearComplete:{
            type: Function
        }
    },
    data(){
        return{
            triggeredAlert : false,
            title: '',
            subtitle: '',
            hasCompletedTask: false
        }
    },
    methods:{
        showTaskLeft(){
            let taskLeft = this.taskLeft.filter(task=> task.isCompleted === false).length
            return taskLeft > 1 ? 
            `${taskLeft} items left` :  
            `${taskLeft} item left`
        },
        displayNav(){
            return this.taskLeft.length > 0
        },
        showAlert(){
            const completedTask = this.taskLeft.filter(task => task.isCompleted)

            if(completedTask.length){   
                this.hasCompletedTask = true
                this.title = 'Deleting tasks';
                this.subtitle = 'Are you sure you want to delete all the completed tasks?'
                this.triggeredAlert = true
            } else {
                this.subtitle = "You haven't done any task yet."
                this.triggeredAlert = true
            }
        },
        confirmAlert(){
            this.title = ''
            this.subtitle = ""
            this.hasCompletedTask = false
            this.triggeredAlert = false
        },
        confirmDelete(){
            this.clearComplete()
            this.confirmAlert()
        }
    }
}
</script>