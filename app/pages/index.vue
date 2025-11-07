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


const list = [
  'Küchenbau', 'Keramik' , 'Naturstein' , 'Parkett' , 'Vinyl' , 'rennovationen' , 'Gartenarbeiten' ,
  'Entsorgungen' , 'Räumungen' , 'Hauswartungen' , 'Warenhandel'
]
</script>

<template>


  <div>
    <MenuBar/>

    <div class="header--container">
      <div class="header--text_container">

        <h1> Ihr Traum</h1> <h1 class="yellow">unser <span class="shaded">projekt</span></h1>
      </div>
    </div>


    <div>
      
          <section>
      
            <p class="lead big"> Allbauprojekt <br> </br>
            der Partner <span class="yellow">für Ihr Bauprojekt</span>
            </p>
      
          </section>
          <img src="/living-room-unsplash.jpg" alt="" style="max-height: 90vh; width: 100%; object-fit: cover; object-position: 0px;">

    </div>

    <div class="center--flex">
            <section>
            <div>
              <h2 class="yellow">Bauarbeiten </h2> 
              <h2 class="shaded ">Aller Art</h2>
            </div>


                <p>Der Allrounder <span class="yellow">für Ihr Bauprojekt</span></p>

                <div>

                  <div class="list--container">
            <div class="list--item" v-for="item in list" :key="item">{{ item }}</div>
            </div>

                </div>
              </section>

      <section class="grey--blue_bg"> 
        <h2>Wer Wir <br><span class="shaded">sind</span></h2>
        <div class="base--flex"> 
          <img src="/living_02_un.jpg" alt="">

          <div class="base--flex vert"> 
            
            <p class=" black"> <span class="white"> Geschäftspartner und Brüder. </span> Das Gesicht hinter dem Unternehmen sind Alain und Yuri Legena</p>
            <p class="sans black">Zwar besteht die GmbH erst seit 2021, als Geschwister begleiten wir uns aber schon ein Leben lang. </p>
          </div>
        </div>
      </section>

      <section>
        <p> <span class="yellow"> Nach jahrelanger praktischer Arbeitserfahrung</span> in verschiedenen Unternehmen, wurde es Zeit, eigenständige Wege zu gehen. Und das miteinander.</p>
      </section>
      <section>
        <Gallery />
        <p>  </p>
      </section>





    </div>

  


    



  </div>
</template>

<style>

/* GLOBAL BASE STYLES */
img {
  width: 100%;
  overflow: hidden;
  object-fit: cover;
}

.lead {
  font-size: 32px;
}

p {
  font-family: 'Times New Roman', Times, serif;
  font-size: 22px;
  color: white;
}

.sans {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}


  * {
    margin: 0px;
    box-sizing: border-box;

  }

  body {
    background-color: #605A5A;
  }

  h1 {
    font-family: 'Antarctica-CondensedBlack', sans-serif;

    text-transform: uppercase;
    font-size: 60px;
    color: white;
    line-height: 1;

  }

  h2 {
    font-family: 'Antarctica-CondensedBlack', sans-serif;
    text-transform: uppercase;
    line-height: 1;

    font-size: 44px;
  }


/* GLOBAL CONTAINER STYLES */



.base--flex {
  display: flex;
  gap: 12px;
  max-width: 100%;
}

.base--flex.vert {
  flex-direction: column;

}


.center--flex {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}



.list--container {
  display: flex;
  gap: 4px;
  width: 100%;

flex-wrap: wrap;
}

/* GLOBAL COLOR STYLES */


.black {
  color: black;
}

.white {
  color: white;
}



.list--item{
  background-color: white;
  width: fit-content;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 20px;

  padding: 2px;




}



body {
  padding: 8px;
}

section {
  padding: 72px 80px;
  display: flex;
  flex-direction:column;
  gap: 30px;
  max-width: 1200px;
}



  .yellow {
    color: #E3CA92;
  }


  .grey--blue_bg {
    background-color: #8D8F97;
  }

  .shaded {
    letter-spacing: -1px;
    text-shadow: -6px 6px black;
    color: white;
    -webkit-text-stroke: 2px black; /* width and color of the outline */
    /* Optional fallback for Firefox using text-shadow for outline */
    text-shadow: 
        1px 1px 0 black,  
        1px 1px 0 black,
        1px 1px 0 black,
        1px 1px 0 black,
        -5px 6px black; /* keep your original shadow if desired */
}




  /* HEADER */
  .header--container{
    background-image: url('/assets/images/Header--img-unsplash.webp');
    width: 100%;
    height: 80vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
    
    display: flex;
    align-items: center;
    justify-content: center;
}

.header--text_container {
  position: absolute;

}


/* MOBILE */

@media (max-width: 800px) { 
  .base--flex {
    flex-direction: column;
  }

  section {
    padding: 60px 2vw;
  }

  .header--container  {

  }

  .header--text_container {
    font-size: 40px;
    position: relative;
  }
  
}

</style>