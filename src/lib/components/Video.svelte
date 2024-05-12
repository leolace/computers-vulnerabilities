<script lang="ts">
  export let videoYoutube: {code: string, title: string};

  let isActive = false;

</script>

<div on:click={() => isActive = true} class="container">
  <iframe src={`https://www.youtube.com/embed/${videoYoutube.code}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<dialog open={isActive}>
  <div class="background" on:click={() => isActive = false}></div>
  <div class="video">
    <header>
      <h3>{videoYoutube.title}</h3>
    </header>
    {#if isActive}
      <iframe src={`https://www.youtube.com/embed/${videoYoutube.code}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

    header {
      background-color: #00ff10;
      width: 100%;
      text-align: center;
    }

    .video {
      display: flex;
      flex-direction: column;
      width: 70vw;
      height: fit-content;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 1001;
      background-color: #000;
      padding: 0rem;
      border: 2px solid #00ff10;

      @media (max-width: 800px) {
	width: 95%;
      }
      

      iframe {
	grid-area: 1 / -1;
	pointer-events: auto;
	height: 40rem;

	@media (max-width: 1300px) {
	  height: 30rem;
	}

	@media (max-width: 800px) {
	  height: 20rem;
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
    height: 22rem;
    aspect-ratio: 16 / 9;

    @media (max-width: 800px) {
      height: 20rem;
      
    }
  }

  iframe {
    height: 100%;
    width: 100%;
    pointer-events: none;
    object-fit: contain;

    @media (max-width: 1300px) {
//      height: 30rem;
    }

    @media (max-width: 800px) {
   //   height: 20rem;
    }
  }

</style>
