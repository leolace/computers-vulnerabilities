<script lang="ts">
  import { SLOT_SIZE } from "$lib/data/constants"
  import { contents } from "$lib/data/data"
  import { scrollX, scrollContainer, innerWidth } from "$lib/stores/store"
  export let MARGIN_LEFT: number;

  const moveTo = (i) => { $scrollContainer.scrollTo({left: (i *
    SLOT_SIZE) + (SLOT_SIZE / 3), behavior: "smooth"}) };

  $: isActive = (i) => i * SLOT_SIZE <= $scrollX - ((SLOT_SIZE - 100)
  / 2);

</script>

<div class="container" style={``}>
  {#each contents as content, i}
    <div class="content" style={`max-width: ${SLOT_SIZE}px`}>
      <section>
	<h2>{content.title}</h2>
      </section>
    </div>
  {/each}
</div>

<style lang="scss">

  h2 {
    color: #fff;
  }
  
  .container {
    display: flex;
    height: 100%;
    position: absolute;
    width: 100%;
    gap: 2rem;
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
