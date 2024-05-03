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
      scrollX += 1;
      return;
    }
    console.log("SCROLLX: ", $scrollX)
    window.scrollTo({ left: $scrollX - window.innerWidth / 3, top: 0, behavior: 'instant' });
    $scrollX += 1;
  }, 1);
}
