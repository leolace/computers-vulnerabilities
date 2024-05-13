<script lang="ts">
  import { SLOT_SIZE } from "$lib/data/constants";
  import type {IContent} from "$lib/data/data"
	import Image from "./Image.svelte";
	import Video from "./Video.svelte";
  export let content: IContent;

</script>


<section class="container" style={`max-width: ${SLOT_SIZE}px`}>
  <div class="content">
    <div class="col">
      <p class="text">{content.text[0]}</p>
      <Image src={content.imageUrl} alt={content.title}/>
    </div>
    <div class="col">
      <Video videoYoutube={content.videoYoutube}/>
      <p class="text">{content.text[1]}</p>
    </div>
    <div class="col">
      <p class="text">{content.text[2]}</p>
    </div>
  </div>
</section>

<style lang="scss">
  .container {
    /* margin-top: 4rem; */
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
  }
  
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5rem;
    height: 80%;
    align-content: space-around;

    .col {
      display: grid;
      gap: 2rem;
      justify-items: center;
    }

    .text {
      font-size: 1.25rem;
    }

    @media (max-width: 800px) {
      gap: 3rem;
    }
  }

  iframe, img {
    height: 22rem;
    aspect-ratio: 16 / 9;

    @media (max-width: 800px) {
      height: 20rem;
    }
  }

</style>
