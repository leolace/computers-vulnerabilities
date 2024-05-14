
<script lang="ts">
  import '../global.css';
  import { CONTAINER_SIZE, SLOT_SIZE} from "$lib/data/constants"
  import { contents } from "$lib/data/data"
  import { scrollX, scrollContainer, innerWidth, activeIndex } from "$lib/stores/store"
  
  import Timeline from "$lib/components/Timeline.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  import Slots from "$lib/components/Slots.svelte"
  import Terminal from '$lib/components/Terminal.svelte';
	import { textIntroduction } from '$lib/data/terminalsData';
  
  const SCROLL_AMOUNT: number = 100;
  $: MARGIN_LEFT = $innerWidth / 3;

  const moveTo = (i: number) => {
    $scrollContainer.scrollTo({left: (i * SLOT_SIZE) + (16 * 30 * i) + (SLOT_SIZE / 2), behavior: "smooth"})
  };

  let navBarRef: HTMLElement;

  $: isActive = (i: number) => {
    return $activeIndex === i && $scrollX >= SLOT_SIZE * i 
  }

  $: {
    if (navBarRef) {
      navBarRef.scrollTo({left: $activeIndex * 80, behavior: "smooth"})
    }
  }

</script>

<svelte:window bind:innerWidth={$innerWidth}/>

<!--TODO: separate in components -->
<main bind:this={$scrollContainer}>
  <Navigation SCROLL_AMOUNT={SCROLL_AMOUNT}/>

  <!-- falta estilizar titulo -->
  <nav class="header">
    <div bind:this={navBarRef} class="navigation">
      <ol>
      {#each contents as {year}, i}
	<li>
	  <button class={`${isActive(i) ? "active" : ""}`} on:click={() => moveTo(i)}>{year}</button>
	</li>
      {/each}
    </ol>
    </div>
    <span class="title">
      {#if $scrollX > 0}
	{contents[$activeIndex].title}
      {:else}
	[Vulcomp]
      {/if}
      </span>
  </nav>

  <div class="wrapper-container">
    <section  class="scroll-container">
      <section class="home">
	<div class="home-content">
	  <div>
	    <h1># Seja bem-vindo.</h1>
	    <p>Explore a história das vulnerabilidades da computação utilizando a linha do tempo à direita.</p>
	    {#if $innerWidth >= 1000}
	      <p>Para começar, segure <span><pre>[SHIFT]</pre></span> e efetue a rolagem da página com o [SCROLL] do mouse.</p>
	    {:else}
	      <p>Para começar, avance para a direita deslizando a tela.</p>
	    {/if}
	  </div>
	  <nav class="links">
	    <Terminal contents={[{triggerLabel: "## Introdução", isOpen: false, tab: "Introducao", text: textIntroduction}, {triggerLabel: "## Créditos", tab: "CreditosEFontes", isOpen: false, text: "fontes biliograficas"}]}>
	    </Terminal>
	  </nav>
	  <p>[Desenvolvido por Timehack | USP-ICMC]</p>
	</div>
      </section>
      
      <div style={`flex: 1; position: relative; width: ${CONTAINER_SIZE}px;`}>
	<Slots />
	<Timeline />
      </div>
      
      <div class="end">
	<h1>fim da linha do tempo</h1>
      </div>
    </section>
  </div>
</main>

<style lang="scss">
  h1, h2 {
    color: #00ff10;
    font-weight: 500;
    text-shadow: 0 0 3px #00ff10, 0 0 6px #00ff10;
    font-size: 1.75rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  main {
    position: relative;
    // TODO: define a dinamic width
    height: 100dvh;
    max-width: 100vw;
    overflow-x: auto;
  }

  .title {
    color: #000;
    width: 100%;
    font-weight: 700;
    text-align: center;
    background-color: #00ff10;
    font-size: 1.5rem;

    @media (max-width: 800px) {
      font-size: 1.25rem;
    }
  }

  .header {
    position: fixed;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    max-width: 30rem;
    background-color: #000;
    border: 3px solid #00ff10;
    z-index: 100;
    box-shadow: 0 0 2px #00ff10, 0 0 4px #00ff10;
    display: grid;
    justify-items: center;

    @media (max-width: 800px) {
      width: 100vw;
      max-width: unset;
      top: 0;
      left: 0;
      transform: translateX(0);
    }

    .navigation {
      overflow-x: auto;
      max-width: 100%;
    }

    ol {
      display: flex;
      align-items: center;
      height: 100%;
    }

    li {
      align-items: center;
      justify-content: center;
      transition: 0.3s linear background;
      display: flex;

    }

    button {
      color: #00ff10;
      font-size: 1.25rem;
      font-weight: 600;
      cursor: pointer;
      flex: 1;
      min-height: 1.75rem;
      min-width: 5rem;
      height: 100%;
      display: block;
      background: transparent;
      border: none;
      border-radius: 0;

      &:focus {
	outline: none;
      }

      &:hover, &.active {
	background-color: #00ff10;
	color: #000;
      }

      @media (max-width: 800px) {
	font-size: 1rem;
	min-width: 4rem;
      }

    }
  }

  .links {
    display: grid;
    gap: 1rem;
    color: #00ff10;
    font-size: 1.25rem;
    align-self: start;

    @media (max-width: 800px) {
      font-size: 1rem;
    }
  }

  .end {
    margin-left: 10rem;
    width: 100vw;
  }
  
  .scroll-container {
    background: linear-gradient(90deg, #111 20%, #0f0f33 100%);
    padding: 1rem 2rem;
    position: relative;
    height: 100dvh;
    display: flex;
    width: max-content;
    padding-top: 3rem;

    @media (max-width: 800px) {
      padding: 1rem;
      padding-top: 2rem;
    }
  }

  .home {
    width: 50rem;
    margin-right: 40rem;
    margin-top: 3rem;

    .home-content {
      gap: 1rem;
      display: grid;
      align-content: space-between;
      height: 100%;
    }

    @media (max-width: 800px) {
      margin-right: 20rem;
      width: 25rem;
      
      .home-content {
	max-width: calc(100vw - 2rem);
      }

    }

    div {
      display: grid;
      gap: 1rem;
    }

  }


</style>
