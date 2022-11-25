<template>
    <teleport to=".wrapper">
    <div class="overlay" @click="$emit('close')"></div>
    <dialog open class="invalid-alert">
        <header>
            <slot name="header">
                <h2>{{ title }}</h2>
            </slot>
        </header>
        <section>
            <slot></slot>
        </section>
        <menu>
            <slot name="actions">
                <button @click="$emit('close')">Close</button>
            </slot>
        </menu>
    </dialog>
</teleport>
</template>


<script>
export default {
    props:{
        title:{
            type: String,
            required: false,
            default: 'Something went wrong...'
        }
    },
    emits:['close'],
}
</script>