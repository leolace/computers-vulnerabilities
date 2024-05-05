<script lang="ts">
  import { scrollTo, scrollX, scrollContainer } from "$lib/stores/store"
  import {CONTAINER_SIZE, SCROLL_OFFSET, SLOT_SIZE} from "$lib/data/constants"
  import {contents} from "$lib/data/data"

  const resetTimeline = () => {
    const DECREMENT_RATE = 50;

    let id = setInterval(() => {
      if ($scrollX <= 0) {
	$scrollX = 0;
	return clearInterval(id);
      }
      $scrollX -= DECREMENT_RATE;
    }, 1);
    window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
  };

  const moveTo = (i) => { $scrollContainer.scrollTo({left: (i * SLOT_SIZE) + (SLOT_SIZE / 3), behavior: "smooth"}) };

  $: isActive = (i) => i * SLOT_SIZE <= $scrollX - ((SLOT_SIZE - 100) / 2);
  $: slotIndex = Math.trunc($scrollX / SLOT_SIZE)

</script>

<div class="timeline-container" style={``}>
  <div class="timeline">
    <div class="marker-container">
      <span class="marker" style={`left: ${$scrollX}px;`}>
	<span class="text">{contents[slotIndex].year}</span>
      </span>
      <span class="progress-bar" style={`width: ${$scrollX}px`}></span>
    </div>
    <div class="middle-point-container">
      {#each Array(contents.length) as _, i}
	<div class="middle-point" style={`left: ${(i * SLOT_SIZE) + SLOT_SIZE / 2}px`}>
	  <span class={`${isActive(i) ? "active" : ""}`}>
	    <p>{contents[slotIndex].year}</p>
	  </span>
	</div>
      {/each}
    </div>
  </div>
  <div class="reset" style={`left: ${$scrollX}px`}>
    <!-- <button on:click={resetTimeline}>voltar</button> -->
  </div>
</div>

<style lang="scss">
  .timeline-container {
    position: absolute;
    bottom: 10%;
    width: 100%;
    z-index: 1;
  }

  .reset {
    position: absolute;
    top: 3rem;
    z-index: 101;
  }

  .timeline {
    height: 5px;
    background-color: #fff;
    width: 100%;
    position: relative;
  }

  .marker-container {
    position: absolute;
    left: 0;
    top: 50%;
    // width: 100%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .text {
    position: absolute;
    color: #fff;
    font-size: 2.5rem;
    bottom: -5rem;
    font-family: monospace;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  .marker {
    display: block;
    width: 100%;
    height: 5px;
    background-color: #00ff10;
    position: relative;

    &::before {
      content: "";
      width: 0.5rem;
      height: 2.5rem;
      background-color: #fff;
      display: inline-block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .progress-bar {
    display: block;
    width: 100%;
    height: 5px;
    background-color: #00ff10;
    position: relative;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .middle-point-container {
    width: 100%;


  }

  .middle-point {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 100;
    
    span {
      width: 2rem;
      height: 2rem;
      display: block;
      background-color: #fff;
      left: 50%;
      transition: 0.3s ease all;
      cursor: pointer;
      border: 5px solid #fff;

      display: flex;
      align-items: center;
      justify-content: center;

      p {
	color: #00ff10;
	font-size: 0rem;
	font-weight: 600;
      }

      &.active, &:hover {
	background-color: #000;
	border-color: #00ff10;
	height: 5rem;
	width: 5rem;

	p {
	  font-size: 1.25rem;
	}
      }
      
    }
  }
</style>
