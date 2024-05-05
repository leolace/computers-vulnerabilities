<script lang="ts">
  import { onMount } from "svelte"
  import { scrollTo, scrollX, scrollContainer, innerWidth } from "$lib/stores/store.ts"
  import { CONTAINER_SIZE, SCROLL_OFFSET } from "$lib/data/constants.ts"

  export let SCROLL_AMOUNT: number;

  const getOffset: number = () => {
    if ($innerWidth >= 1000) return 0;
    return 500 / ($innerWidth / 500);
  }
  
  const slideTimeline = (e) => {
    if ($scrollContainer.scrollLeft >= CONTAINER_SIZE + getOffset()) return;
    
    $scrollX = $scrollContainer.scrollLeft - getOffset();
  };

  onMount(() => {
    $scrollContainer.scrollTo(0, 0);
    
    const scroll = (e: WheelEvent) => {
      slideTimeline(e);
    };
    
    $scrollContainer.addEventListener('scroll', scroll);

    return () => {
      $scrollContainer.removeEventListener('scroll', scroll);
    }})
</script>
