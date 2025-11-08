<template>
    <section id="kontaktpopup">
        <div>
            <p>Uznacherstrasse 79</p>
            <p>8722 Kaltbrunn</p>
            <p>079 599 33 36</p>
            <p>allbau.a@bluewin.ch</p>
            <p>Allbauprojekt GmbH</p>
        </div>
    </section>
</template>

<style scoped>
    section{
        width: 100%;
        height: 100vh;
        background-color: black;

        position: fixed;
        left: 0;
        top: 0;
        visibility: hidden;
    }
    p {
        color: white;
    }
</style>

<script setup>
let KontaktPopUpOpen = false;

function togglePopUp() {
    let kontaktPopUp = document.getElementById('kontaktpopup');

    if (!KontaktPopUpOpen) {
        kontaktPopUp.style.visibility = 'visible';
        KontaktPopUpOpen = true;
    } else {
        kontaktPopUp.style.visibility = 'hidden';
        KontaktPopUpOpen = false;
    }
}

</script>