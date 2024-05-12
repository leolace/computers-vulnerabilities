<script lang="ts">
  export let src: string;
  export let alt: string = "";

  let isActive = false;

</script>


<div class="container" on:click={() => isActive = true}>
  <img {src} {alt}/>
  
</div>
<dialog open={isActive}>
  <div class="background" on:click={() => isActive = false}></div>

  <div class="img">
    {#if isActive}
      <img {src} {alt}/>
    {/if}
  </div>

</dialog>

<style lang="scss">
  dialog {
    position: fixed;
    width: 100vw;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: transparent;

    .img {
      display: flex;
      width: 80%;
      height: fit-content;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 1001;

      @media (max-width: 800px) {
	width: 95%;
	height: fit-content;
      }
      

      iframe {
	pointer-events: auto;
      }
    }

    .background {
      background-color: #0009;
      height: 100%;
      width: 100%;
      position: absolute;
      cursor: auto;
      z-index: 1000;
    }
  }

    .container {
      cursor: pointer;
      height: 22rem;
      aspect-ratio: 16 / 9;

      @media (max-width: 800px) {
	height: 20rem;
	
      }
    }

    img {
      height: 100%;
      width: 100%;
      pointer-events: none;

      @media (max-width: 1200px) {
      object-fit: contain;
	height: 100%;
      }

    }

    
    



</style>
