<script lang="ts">
  import { onMount } from "svelte"
  import { scrollTo, scrollX, scrollContainer } from "$lib/stores/store.ts"
  import {CONTAINER_SIZE, SCROLL_OFFSET} from "$lib/data/constants.ts"

  export let SCROLL_AMOUNT: number;

  const slideTimeline = (e) => {
    if ($scrollContainer.scrollLeft >= CONTAINER_SIZE) return;
    
    $scrollX = $scrollContainer.scrollLeft;
  };

  onMount(() => {
    $scrollContainer.scrollTo(0, 0);
    
    const scroll = (e: WheelEvent) => {
      slideTimeline(e);
    };
    
    $scrollContainer.addEventListener('scroll', scroll);

    return () => {
      document.body.removeEventListener('scroll', scroll);
    }})
</script>

<style lang="scss">
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
      user-select: none;
    }
  }

</style>
