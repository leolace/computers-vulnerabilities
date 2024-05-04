<script lang="ts">
  export let MARGIN_LEFT: number;
  export let slotSize: number;
  import { scrollTo, scrollX } from "$lib/stores/store.ts"
  import {CONTAINER_SIZE, SCROLL_OFFSET, SLOT_SIZE} from "$lib/data/constants.ts"
  import {contents} from "$lib/data/data.ts"

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

<div class="timeline-container" style={`left: ${MARGIN_LEFT}px; width: ${CONTAINER_SIZE + (SCROLL_OFFSET / 2)}px`}>
  <div>
  </div>
  <div class="timeline">
    <div class="marker-container" style={`left: ${$scrollX}px`}>
      <span class="marker"></span>
      <span class="text">{contents[Math.trunc($scrollX / SLOT_SIZE)].year}</span>
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
    top: 0;
    transform: translateY(-50%);
    z-index: 101;
    padding-left: 0.5rem;
  }

  .text {
    position: absolute;
    color: #fff;
    font-size: 2.5rem;
    bottom: -3.5rem;
    font-family: monospace;
    left: 50%;
    transform: translateX(-50%);
  }

  .marker {
    display: block;
    width: 0.5rem;
    height: 3rem;
    background-color: #fff;
  }
</style>
