<script lang="ts">
  import { onMount } from "svelte"
  import { scrollTo, scrollX } from "$lib/stores/store.ts"

  export let SCROLL_AMOUNT: number;
  export let MAX_SCROLL: number;

  let scrolling_right = false;
  let scrolling_left = false;

  let leftButton: HTMLButtonElement;
  let rightButton: HTMLButtonElement;

  const goLeft = () => {
    scrolling_right = false;
    const beforeScrollX = $scrollX - SCROLL_AMOUNT;
    let id = setInterval(() => { 
      const isLimit = $scrollX <= 0;
      if (beforeScrollX > $scrollX || isLimit || scrolling_right) return clearInterval(id);
      scrolling_left = true;

      window.scrollTo({ left: $scrollX - window.innerWidth / 3, top: 0, behavior: 'instant' });
      $scrollX -= 1;
    }, 1);
  };

  const goRight = () => {
    scrolling_left = false;
    if ($scrollX >= document.body.scrollWidth - MAX_SCROLL) return;
    const beforeScrollX = $scrollX + SCROLL_AMOUNT;
    let id = setInterval(() => {
      const isLimit = $scrollX >= document.body.scrollWidth - MAX_SCROLL;
      if (beforeScrollX < $scrollX || isLimit || scrolling_left) return clearInterval(id);
      scrolling_right = true;

      if (scrollX < window.innerWidth / 3) {
	$scrollX += 1;
	return;
      }

      window.scrollTo({ left: $scrollX - window.innerWidth / 3, top: 0, behavior: 'instant' });
      $scrollX += 1;
    }, 1);
  };

  const holdit = (btn, action, start, speedup) => {
    let id;

    const repeat = () => {
      action();
      id = setTimeout(repeat, start);
      start = start / speedup;
    }

    btn.onmousedown = () => repeat();
    btn.onmouseup = () => clearTimeout(id);

    btn.ontouchstart = () => repeat();
    btn.ontouchend = () => clearTimeout(id);
  }


  onMount(() => {
    window.scrollTo(0, 0);

    const scroll = (e: WheelEvent) => {
      if (e.deltaY < 0) {
	goLeft();
      } else {
	goRight();
      }
    };

    holdit(leftButton, goLeft, 100, 1);
    holdit(rightButton, goRight, 100, 1);
    
    document.body.addEventListener('wheel', scroll);

    document.body.addEventListener('touchstart', () => {
      document.body.style.overflowX = 'hidden';
    });

    document.body.addEventListener('touchend', () => {
      document.body.style.overflowX = 'auto';
    });

    return () => {
      document.body.removeEventListener('wheel', scroll);
      document.body.removeEventListener(
	'touchstart',
	() => (document.body.style.overflowX = 'hidden')
      );
      document.body.removeEventListener('touchend', () => (document.body.style.overflowX = 'auto'));
    };
  })
</script>

<div class="navigation">
  <button class="left-btn" bind:this={leftButton}>left</button>
  <button class="right-btn" bind:this={rightButton}>right</button>
</div>


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
    }
  }

</style>
