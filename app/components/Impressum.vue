
<template>
    <section>
        
        <div class="address">
          <p>Lindenbergstrasse 4</p>
              <p>8630 Rüti</p>
              <p>079 599 33 36</p>
              <p>allbau.a@bluewin.ch</p>
              <p>Allbauprojekt GmbH</p>
          </div>
        <div class="vert-flex">
            <!--  <p class="bold">impressum</p>  --> 
            <p>umsetzung <span>✑</span> </p>
            <p>  &   </p>
            <p>webdesign <span>☞</span> <a href="https://www.undpfeifer.ch" class="undpfeifer"> &pfeifer</a></p>
        </div>
    </section>
    
  </template>
  
  <style scoped>



  .undpfeifer{
    font-family: 'Times New Roman', Times, serif;
    color: rgb(255, 239, 221);
    text-decoration: none;
    font-size: 22px;
  }

  .address {
    flex-direction: column;
  }
  
  * {
    transform: scale(1);
  }
  
  section {
    display: flex;
    flex-direction: row;
    padding: 20px 20px 200px 20px;
    gap: 0px;
    width: 100%;
  }
  
  span {
    font-size: 24px;
    vertical-align: middle; /* aligns symbol with text */
  
  }
  
  p {
      font-size: 12px;
      font-family: 'geist-regular';
  }
  
  div {
    position: relative;
    bottom: 0px;
    padding: 100px 0px 0px 0px;
  
    display: flex;
    gap: 12px;
  
    justify-content: center;
    align-items: center;
    width: 100%;
  
    
  }
  
  .bold {
    font-family: 'geist-medium';
    font-size: 24px;
  }
  
  a {
    
    font-style: italic;
    font-size: 14px;
    font-weight: bold;
  }

  @media (max-width:800px) {
    section {
        flex-direction: column;
    }
  }
  
  </style>
