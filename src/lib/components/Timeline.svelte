<script lang="ts">
  export let MARGIN_LEFT: number;
  export let slotSize: number;
  import { scrollTo, scrollX } from "$lib/stores/store"
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
</script>

<div class="timeline-container" style={`left: ${MARGIN_LEFT}px;`}>
  <div>
  </div>
  <div class="timeline">
    <div class="marker-container">
      <span class="marker" style={`left: ${$scrollX}px;`}>
	<span class="text">{contents[Math.trunc($scrollX / SLOT_SIZE)].year}</span>
      </span>
      <span class="progress-bar" style={`width: ${$scrollX + 8}px`}></span>
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
    z-index: 200;
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
    z-index: 101;
    padding-left: 0.5rem;
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
    background-color: rgb(21,200,64,1);
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
    background-color: rgb(21,200,64,1);
    position: relative;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
