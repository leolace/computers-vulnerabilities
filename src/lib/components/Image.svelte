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
    <header>
      <button on:click={() => isActive = false}>X</button>
    </header>
    <div class="img-content">
      {#if isActive}
	<img {src} {alt}/>
      {/if}
    </div>
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

    header {
      background-color: #00ff10;
      height: 2rem;
      width: 100%;
      padding: 0 0.5rem;
      display: grid;

      button {
	background-color: transparent;
	height: 100%;
	outline: none;
	border: none;
	font-size: 1.5rem;
	justify-self: end;
	font-weight: 600;
	cursor: pointer;
      }
    }

    .img {
      display: flex;
      flex-direction: column;
      height: 80dvh;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 1001;
      border: 2px solid #00ff10;
      background-color: #000;

      @media (max-width: 800px) {
	width: 95%;
	height: fit-content;
      }

      .img-content {
	height: 90dvh;
	width: 60dvw;
	overflow: hidden;

	@media (max-width: 800px) {
	  height: fit-content;
	  width: 90dvw;
	}
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
      height: 15rem;
      aspect-ratio: 16 / 9;

    }

    img {
      height: 100%;
      width: 100%;
      pointer-events: none;
      object-fit: contain;

      @media (max-width: 1200px) {
	height: 100%;
      }

    }

    
    



</style>
