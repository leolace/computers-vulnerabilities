<script lang="ts">
  import { SLOT_SIZE } from "$lib/data/constants"
  import { contents } from "$lib/data/data"
  import { scrollX, scrollContainer, innerWidth } from "$lib/stores/store"
  export let MARGIN_LEFT: number;

  console.log($innerWidth);

  const moveTo = (i) => {
    $scrollContainer.scrollTo({left: (i * SLOT_SIZE) + (SLOT_SIZE / 3), behavior: "smooth"})
  };

  $: isActive = (i) => i * SLOT_SIZE <= $scrollX - ((SLOT_SIZE - 100) / 2);

</script>

<div class="container" style={`left: ${MARGIN_LEFT}px`}>
  {#each contents as content, i}
    <div class="content" style={`max-width: ${SLOT_SIZE}px`}>
      <section>
	<h2>{content.title}</h2>
      </section>
      <span data-year={content.year} class={`circle ${isActive(i) ? "active" : ""}`} on:click={() => moveTo(i)}></span>
    </div>
  {/each}
</div>

<style lang="scss">

  h2 {
    color: #fff;
  }
  
  .container {
    padding: 1rem;
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
    padding: 1rem 2rem;

    .circle {
      width: 4rem;
      height: 4rem;
      background-color: #fff;
      position: absolute;
      left: 50%;
      border-radius: 100%;
      transform: translateX(-50%);
      transform-origin: -100% 0;
      bottom: 5%;
      transition: 0.3s ease all;
      cursor: pointer;
      z-index: 400;
      border: 5px solid #fff;

      &:hover {
	background-color: rgb(21,21,64,1);
	border-color: rgb(21,200,64,1);

	&::before {
	  transform: translate(-20%, -130%);
	  transition: 0.2s ease all;
	  opacity: 1;
	}
      }

      &::before {
	content: attr(data-year);
	font-size: 2rem;
	display: block;
	transform: translate(-20%, 0%);
	color: #fff;
	transition: 0.2s ease all;
	opacity: 0;

	@media (max-width: 600px) {
//	  font-size: 1.5rem;
	}
      }

      &.active {
	background-color: rgb(21,21,64,1);
	border-color: rgb(21,200,64,1);
	
	&::before {
	  transform: translate(-20%, -130%);
	  transition: 0.2s ease all;
	  opacity: 1;
	}

      }
    }

  }

</style>
