<script setup>
const baseUrl = 'https://admin.allbauprojekt.ch/wp-json/wp/v2/posts'

const { data: werWirSind } = await useFetch(baseUrl, { 
  query: { slug: 'wer-wir-sind' } 
})

const { data: aboutPost } = await useFetch(baseUrl, { 
  query: { slug: 'about-section' } 
})

const { data: servicesPost } = await useFetch(baseUrl, { 
  query: { slug: 'services-section' } 
})
</script>

<template>
  <div>

    <section>
      <div class="grid--header">
        <div class="block tel">📞</div>
        <div class="block mail">📧</div>
        <div class="block black"></div>
        <img  class="block" src="https://admin.allbauprojekt.ch/wp-content/uploads/2025/10/photo-1482731215275-a1f151646268.avif" alt="">
        <div class="block red"></div>
        <div class="block menu">–</div>
      </div>
      <h1 class="master--title">allbau projekte</h1>
      <div class="subtitle--grid">
        <p class="subtitle">wir können alles</p>
        <div class="sub--block"></div>
        <div class="sub--block two"></div>
      </div>
    </section>


    <section v-if="werWirSind?.[0]" class="darkmode"> 
      <h2 v-html="werWirSind[0].title.rendered"></h2>
      <div v-html="werWirSind[0].content.rendered"></div>
    </section>

    <section v-if="aboutPost?.[0]">
      <h2 v-html="aboutPost[0].title.rendered"></h2>
      <div v-html="aboutPost[0].content.rendered"></div>
    </section>

    <section v-if="servicesPost?.[0]">
      <h2 v-html="servicesPost[0].title.rendered"></h2>
      <div v-html="servicesPost[0].content.rendered"></div>
    </section>
  </div>
</template>

<style>
  * {
    font-family: Inter, Helvetica, sans-serif;
    margin: 0px;
    box-sizing: border-box;

  }



</style>