<script setup lang="ts">
</script>

<template>
    <div class="Home">
      <div class="Fast">
        <div class="title">
          <svg style="margin: 30px;" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-fast-forward" viewBox="0 0 16 16">
        <path d="M6.804 8 1 4.633v6.734L6.804 8Zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"/>
        <path d="M14.804 8 9 4.633v6.734L14.804 8Zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"/>
        </svg>
        <h1>Fast Service</h1>
        </div>
        <ul style="text-align: left;">
          <li>high speed</li>
          <li>local web service</li>
          <li>local web service</li>
          <li>local web service</li>
          <li>local web service</li>

        </ul>
        <br>
        <br>
        <br>

        <!-- <h2 >Powered by loopback</h2> -->
      </div>

      <div class="Fast">
        <div class="title">
          <svg style="margin: 30px;" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-easel3-fill" viewBox="0 0 16 16">
        <path d="M8.5 12v1.134a1 1 0 1 1-1 0V12h-5A1.5 1.5 0 0 1 1 10.5V3h14v7.5a1.5 1.5 0 0 1-1.5 1.5h-5Zm7-10a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1h15Z"/>
        </svg>
        <h1>Beautifull UI</h1>
        </div>
        <ul style="text-align: left;">
          <li>UI</li>
          <li>UI</li>
          <li>UI</li>
          <li>UI</li>
          <li>UI</li>

          

        </ul>
        <br>
        <br>
        <br>

        <!-- <h2 >Powered by loopback</h2> -->
      </div>

      <div class="Fast">
        <div class="title">
          <svg style="margin: 30px; " xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-easel3-fill" viewBox="0 0 16 16">
        <path d="M8.5 12v1.134a1 1 0 1 1-1 0V12h-5A1.5 1.5 0 0 1 1 10.5V3h14v7.5a1.5 1.5 0 0 1-1.5 1.5h-5Zm7-10a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1h15Z"/>
        </svg>
        <h1>Beautifull UI</h1>
        </div>
        <ul style="text-align: left;">
          <li>UI</li>
          <li>UI</li>
          <li>UI</li>
          <li>UI</li>
          <li>UI</li>

          

        </ul>
        <br>
        <br>
        <br>

        <!-- <h2  >Powered by loopback</h2> -->
      </div>
    </div>

    
</template>

<style scoped>

  .Home{
    /* position: relative; */
    margin: 30px 10px;
    /* display: flex; */
    
  }

  .Fast{
    border: 2px solid rgb(171, 88, 238);
    position: relative;
    width: 100%;
    height: 50%;
    display: flex;
    /* background: linear-gradient(109.6deg, rgb(128, 144, 233) 17.4%, rgb(171, 88, 238) 52.4%, rgb(255, 129, 246) 91%); */
    border-radius: 10px;
    text-align: center;
    color: rgb(128, 144, 233) ;
    margin-right: 20px;
    margin-top: 30px;
    align-items: center;
  
  }

  .title{
    margin: 20px;
  }

  .Fast li{
    font-size: 30px;
    position: relative;
    left: 128px;
    background: linear-gradient(109.6deg, rgb(128, 144, 233) 17.4%, rgb(171, 88, 238) 52.4%, rgb(255, 129, 246) 91%);
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
  }

  .Fast h1{
    background: linear-gradient(109.6deg, rgb(128, 144, 233) 17.4%, rgb(171, 88, 238) 52.4%, rgb(255, 129, 246) 91%);
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
  }


</style>
