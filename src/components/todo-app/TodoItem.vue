<template>
    <li class="todo-item">
        <div class="check">
            <label>
                <input @click="toggleComplete(id)" type="checkbox" id="toggle-complete" value="false"> 
                <span class="checkmark" :class="styleCompleteLabel()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>           
                </span>
            </label>
        </div>
        <p class="title" @click="showTask" :class="styleParagraph()">{{ title }}</p>
        <base-alert v-if="viewTask && !editing" title="Task" @close="confirmAlert">
            <template #default>
                <p>{{ title }}</p>
            </template>
            <template #actions>
                <button v-if="!isCompleted" @click="editTask">Edit</button>
                <button @click="confirmAlert">Close</button>
            </template>
        </base-alert>  
        <base-alert v-if="viewTask && editing" title="Edit Task" @close="confirmAlert">
            <template #default>
                <input @keyup.enter="confirmEdit(id)" type="text" name="updateTask" id="updateTask" v-model.trim="inputEdit" autofocus>
            </template>
            <template #actions>
                <p v-if="invalidEdit">Invalid input</p>
                <button @click="confirmEdit(id)">Confirm Edit</button>
                <button @click="closeEdit()">Cancel</button>
            </template>
        </base-alert>  
        <label>
            <input @click="toggleUrgent(id)" type="checkbox" id="urgent">
            <span class="urgent-label" :class="styleUrgentLabel()">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                width="18" height="18" viewBox="0 0 45.311 45.311" style="enable-background:new 0 0 45.311 45.311;"
                xml:space="preserve">
                    <path fill="currentColor" d="M22.675,0.02c-0.006,0-0.014,0.001-0.02,0.001c-0.007,0-0.013-0.001-0.02-0.001C10.135,0.02,0,10.154,0,22.656
                        c0,12.5,10.135,22.635,22.635,22.635c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0c12.5,0,22.635-10.135,22.635-22.635
                        C45.311,10.154,35.176,0.02,22.675,0.02z M22.675,38.811c-0.006,0-0.014-0.001-0.02-0.001c-0.007,0-0.013,0.001-0.02,0.001
                        c-2.046,0-3.705-1.658-3.705-3.705c0-2.045,1.659-3.703,3.705-3.703c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0
                        c2.045,0,3.706,1.658,3.706,3.703C26.381,37.152,24.723,38.811,22.675,38.811z M27.988,10.578
                        c-0.242,3.697-1.932,14.692-1.932,14.692c0,1.854-1.519,3.356-3.373,3.356c-0.01,0-0.02,0-0.029,0c-0.009,0-0.02,0-0.029,0
                        c-1.853,0-3.372-1.504-3.372-3.356c0,0-1.689-10.995-1.931-14.692C17.202,8.727,18.62,5.29,22.626,5.29
                        c0.01,0,0.02,0.001,0.029,0.001c0.009,0,0.019-0.001,0.029-0.001C26.689,5.29,28.109,8.727,27.988,10.578z"/>
                </svg>
            </span>
        </label>
        <button @click="deleteTask(id)" id="delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
        </button>
    </li>
</template>

<script>
export default {
    inject:['toggleUrgent','toggleComplete','updateTask','deleteTask'],
    props:{
        title:{
            type: String,
            required: true,
        },
        isCompleted:{
            type: Boolean,
            required: true,
            default: false,
        },
        isUrgent:{
            type: Boolean,
            required: true,
            default: false,
        },
        id:{
            type: String,
            required: true,
        }
    },data(){
        return{
            viewTask : false,
            editing: false,
            inputEdit: '',
            invalidEdit: false
        }
    },watch:{
        inputEdit(input){
            if(input === '') {
                this.invalidEdit = true
            } else {
                this.invalidEdit = false
            }
        }
    },
    methods:{
        styleParagraph(){
            return {'completed':this.isCompleted}
        },
        styleCompleteLabel(){
            return {'completed-label':this.isCompleted}
        },
        styleUrgentLabel(){
            return {'is-urgent':this.isUrgent}
        },
        showTask(){
            this.viewTask = true
        },
        confirmAlert(){
            this.viewTask = false
        },
        editTask(){
            this.editing =true
        },
        confirmEdit(id){
            if(this.inputEdit === '') {
                this.invalidEdit = true
                return
            }
            this.updateTask(id, this.inputEdit)
            this.editing = false
        },
        closeEdit(){
             this.editing = false
        }      
    }
}
</script>