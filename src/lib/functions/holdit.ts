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

export default holdit;
