<template>
    <section>
        <div>

            <a href="mailto:allbauprojekt.a@bluewin.ch">
                <svg @click="email()" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24">
                    <path fill="white" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/>
    
                </svg>
            </a>
        </div>

        <div>

            <a href="tel:+41 076 245 60 90">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24">
                    <path fill="none" stroke="white" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/>
                    </path>
                </svg>
            </a>
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: black;
    opacity: 1;
    position: fixed;

    bottom: 8px;
    padding: 8px;
    border-radius: 12px;
    display: flex;
    gap: 12px;

    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
}

div{
    opacity: 1;
    background-color: rgb(37, 37, 37);
    padding: 4px;
    border-radius: 8px;

}
div:hover{
    background-color: rgb(61, 61, 61);
}
</style>

<script setup>
function email() {
    alert('allbauprojekt.a@bluewin.ch')
}
</script>
