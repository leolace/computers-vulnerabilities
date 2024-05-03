<script lang="ts">
  import { onMount } from 'svelte';
  import '../global.css';
  import Timeline from "$lib/components/Timeline.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  import { scrollTo, scrollX } from "$lib/stores/store.ts"
  
  let slotSize = 2000;

  const SCROLL_AMOUNT = 100;
  const SCROLL_OFFSET = 600;
  const MAX_SCROLL = 500;
  const MARGIN_LEFT = 130;

  const contents = [{ title: 'Titulo 1' }, { title: 'Titulo 2' }, { title: 'teste' }];
</script>

<!--TODO: separate in components -->
<main>
  <Navigation SCROLL_AMOUNT={SCROLL_AMOUNT} MAX_SCROLL={MAX_SCROLL}/>

  <section class="scroll-container">
    <div class="container" style={`left: ${MARGIN_LEFT}px`}>
      {#each contents as content}
	<div class="content" style={`max-width: ${slotSize}px`}>
	  <h1>{content.title}</h1>
	</div>
      {/each}
    </div>
    
    <Timeline MARGIN_LEFT={MARGIN_LEFT} slotSize={slotSize}/>
  </section>
</main>

<style lang="scss">
  h1 {
    color: #fff;
  }

  main {
    position: relative;

    // TODO: define a dinamic width
	     height: 100dvh;
  }

  .scroll-container {
    height: 100dvh;
    position: relative;
    width: 400rem;
  }

  .navigation {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1rem;
    z-index: 10;

    button {
      border: 1px solid #fff;
      font-size: 1rem;
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
    }
  }

  .container {
    padding: 1rem;
    display: flex;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .content {
    flex: 1;
    height: 100%;
    max-width: 50rem;
    border-right: 1px solid red;
  }
</style>
