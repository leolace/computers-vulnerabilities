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
    <section  class="scroll-container">
      <div class="home">
	<div>
	  <h1>Seja bem-vindo.</h1>
	  <p>Explore a história das vulnerabilidades da computação utilizando a linha do tempo à direita.</p>
	</div>
	<p>[Desenvolvido por Timehack | USP-ICMC]</p>
      </div>
      <div style={`flex: 1; position: relative; width: ${CONTAINER_SIZE}px;`}>
	<Slots />
	<Timeline />
      </div>
      <div class="end" style={`width: ${SLOT_SIZE - (SLOT_SIZE / 4)}px`}>
	<h1>fim da linha do tempo</h1>
      </div>
    </section>
  </div>
</main>

<style lang="scss">
  h1 {
    color: #00ff10;
    font-weight: 500;
    text-shadow: 0 0 3px #00ff10, 0 0 6px #00ff10;
  }

  main {
    position: relative;
    // TODO: define a dinamic width
    height: 100dvh;
    max-width: 100vw;
    overflow-x: auto;
  }

  .end {
    margin-left: 10rem;
  }
  
  .scroll-container {
    background: linear-gradient(90deg, #111 20%, #0f0f33 100%);
    padding: 1rem 2rem;
    position: relative;
    height: 100dvh;
    display: flex;
    width: max-content;
    padding-top: 4rem;
  }

  .home {
    width: 30rem;
    display: grid;
    align-content: space-between;
    gap: 1rem;
    margin-right: 15rem;

    div {
      display: grid;
      gap: 1rem;
    }

    p {
      color: #ddd;
      font-size: 1rem;
    }
  }


</style>
