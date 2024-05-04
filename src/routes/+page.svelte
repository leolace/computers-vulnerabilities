<script lang="ts">
  import { onMount } from 'svelte';
  import '../global.css';
  import Timeline from "$lib/components/Timeline.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  import { scrollTo, scrollX, scrollContainer } from "$lib/stores/store.ts"
  import {CONTAINER_SIZE, SLOT_SIZE} from "$lib/data/constants.ts"
  import {contents} from "$lib/data/data.ts"
  
  const SCROLL_AMOUNT = 100;
  const SCROLL_OFFSET = 600;
  const MAX_SCROLL = 500;
  let innerWidth;
  $: MARGIN_LEFT = innerWidth / 3;

</script>

<svelte:window bind:innerWidth={innerWidth}/>

<!--TODO: separate in components -->
<main bind:this={$scrollContainer}>
  <Navigation scrollContainer={scrollContainer} SCROLL_AMOUNT={SCROLL_AMOUNT} MAX_SCROLL={MAX_SCROLL}/>

  <div class="wrapper-container">
    <section  class="scroll-container" style={`width: ${CONTAINER_SIZE}px;`}>
      <div class="container" style={`left: ${MARGIN_LEFT}px`}>
	{#each contents as content, i}
	  <div class="content" style={`max-width: ${SLOT_SIZE}px`}>
	    <h1>{content.title}</h1>
	    <span data-year={content.year} class={`circle ${(i * SLOT_SIZE) <= $scrollX - 500 ? "active" : ""}`} on:click={() => $scrollContainer.scrollTo({left: (i * SLOT_SIZE) + (SLOT_SIZE / 3), behavior: "smooth"})}></span>
	  </div>
	{/each}
      </div>
      
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

  .wrapper-container {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0rem;
  }

  .end {
    width: 1700px;
  }

  main {
    position: relative;

    // TODO: define a dinamic width
	     height: 100dvh;
    max-width: 100vw;
    overflow-x: auto;
  }

  .scroll-container {
    height: 100dvh;
    position: relative;
    width: 400rem;
  }

  .container {
    padding: 1rem;
    display: flex;
    height: 100%;
    position: absolute;
    width: 100%;
    gap: 1rem;
  }

  .content {
    flex: 1;
    height: 100%;
    max-width: 50rem;
    position: relative;
    // background-color: red;
    padding: 1rem 2rem;

    .circle {
      width: 4rem;
      height: 4rem;
      background-color: #fff;
      position: absolute;
      left: 50%;
      border-radius: 100%;
      transform: translateX(-50%);
      bottom: 5%;
      transition: 0.2s ease all;
      transform-origin: center center;
      cursor: pointer;
      z-index: 400;
      border: 2px solid #fff;

      &:hover {
	background-color: rgb(21,21,64,1);
      }

      &::before {
	content: attr(data-year);
	font-size: 3rem;
	display: inline-block;
	transform: translate(-20%, 0%);
	color: #fff;
	transition: 0.2s ease all;
	opacity: 0;
      }

      &.active {
	background-color: rgb(21,21,64,1);
	&::before {
	  transform: translate(-20%, -120%);
	  transition: 0.2s ease all;
	  opacity: 1;
	}

      }
    }

  }
</style>
