<script lang="ts">
  import '../global.css';
  import { CONTAINER_SIZE, SLOT_SIZE} from "$lib/data/constants"
  import { contents } from "$lib/data/data"
  import { scrollX, scrollContainer, innerWidth } from "$lib/stores/store"
  
  import Timeline from "$lib/components/Timeline.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  import Slots from "$lib/components/Slots.svelte"
  
  const SCROLL_AMOUNT = 100;
  $: MARGIN_LEFT = $innerWidth / 3;

</script>

<svelte:window bind:innerWidth={$innerWidth}/>

<!--TODO: separate in components -->
<main bind:this={$scrollContainer}>
  <Navigation SCROLL_AMOUNT={SCROLL_AMOUNT}/>

  <div class="wrapper-container">
    <section  class="scroll-container" style={`width: ${CONTAINER_SIZE}px;`}>
      <Slots MARGIN_LEFT={MARGIN_LEFT} />

      <Timeline MARGIN_LEFT={MARGIN_LEFT} slotSize={SLOT_SIZE}/>
    </section>
    <div class="end" style={`transform: translateX(${MARGIN_LEFT}px)`}>
      <h1>fim da linha do tempo</h1>
      </div>
  </div>
</main>

<style lang="scss">
  h1 {
    color: #fff;
  }

  main {
    position: relative;
    // TODO: define a dinamic width
    height: 100dvh;
    max-width: 100vw;
    overflow-x: auto;
  }

  .wrapper-container {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0rem;
  }

  .end {
    width: 1700px;
  }
  
  .scroll-container {
    height: 100dvh;
    position: relative;
  }


</style>
