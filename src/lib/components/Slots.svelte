<script lang="ts">
  import { SLOT_SIZE } from "$lib/data/constants"
  import { contents } from "$lib/data/data"
  import { scrollX, scrollContainer, innerWidth } from "$lib/stores/store"

  import SlotContent from "$lib/components/SlotContent.svelte"
  
  const moveTo = (i: number) => { $scrollContainer.scrollTo({left: (i *
    SLOT_SIZE) + (SLOT_SIZE / 3), behavior: "smooth"}) };

  $: isActive = (i: number) => i * SLOT_SIZE <= $scrollX - ((SLOT_SIZE - 100)
							    / 2);

</script>

<div class="container" style={``}>
  {#each contents as content, i}
       <SlotContent content={content} />
   {/each}
</div>

<style lang="scss">

  h2 {
    color: #fff;
  }
  
  .container {
    display: flex;
    height: 100%;
    width: 100%;
    gap: 30rem;
    padding-top: 5rem;

    @media (max-width: 800px) {
      /* gap: 20rem; */
    }
  }

  .content {
    flex: 1;
    height: 100%;
    max-width: 50rem;
    position: relative;
    // background-color: red;
    padding: 0rem 2rem;
  }

</style>
