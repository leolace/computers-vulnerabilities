<script lang="ts">
  export let MARGIN_LEFT: number;
  export let slotSize: number;
  import { scrollTo, scrollX } from "$lib/stores/store.ts"

  const START_YEAR = 1917;

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

<div class="timeline-container" style={`left: ${MARGIN_LEFT}px`}>
  <div class="timeline">
    <div class="marker-container" style={`left: ${$scrollX}px`}>
      <span class="marker"></span>
      <span class="text">{Math.trunc(START_YEAR + $scrollX / slotSize)}</span>
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
  }

  .reset {
    position: absolute;
    top: 3rem;
    z-index: 101;
  }

  .timeline {
    height: 3px;
    background-color: #fff9;
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
    font-size: 5rem;
    top: -5rem;
    font-family: monospace;
    transform: translateX(-50%);
  }

  .marker {
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    background-color: #fff;
    border-radius: 50%;
  }
</style>
