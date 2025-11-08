<template>
    <button @click="$emit('click')"> 
       <span>☞</span> 
       <p>{{ value }}</p>
    </button>
</template>

<style scoped>
    button{
        all:unset;
        background-color: black;
        border: 1px solid white;
        padding: 6px 6px;

        gap: 4px;

        font-size: 20px;

        color: white;
        width:fit-content;


        cursor:pointer;
        height: auto;
        line-height: 1;
        display: flex;

    }

    button:hover {
        background-color: rgb(65, 65, 65);
    }

    p {
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 0px;
        font-weight: 400;
        


        text-transform: uppercase;
    }

    span {
        font-size: 28px;
        height: 20px;
        
    }
</style>

<script setup>
    defineProps(['value'])
    const emit = defineEmits(['click'])

</script>