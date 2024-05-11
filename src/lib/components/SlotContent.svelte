<script lang="ts">
  import { SLOT_SIZE } from "$lib/data/constants";
  import type {IContent} from "$lib/data/data"
  export let content: IContent;

</script>


<section class="container" style={`max-width: ${SLOT_SIZE}px`}>
  <div class="content">
    <div class="col">
      <p>{content.text[0]}</p>

      <img src={content.imageUrl} alt={content.title}/>
    </div>
    <div class="col">
      <iframe src={`https://www.youtube.com/embed/${content.videoYoutubeCode[1]}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>{content.text[1]}</p>
    </div>
    <div class="col">
      <p>{content.text[2]}</p>
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

    .col {
      display: grid;
      gap: 2rem;
      justify-items: center;
    }

    .texts {
      display: grid;
      gap: 2rem;
      justify-items: center;
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
