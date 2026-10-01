function countUp(element, target, duration) {
  let start = 0;
  let increment = target / (duration / 16); // ~60fps
  let timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(start);
  }, 16);
countUp(document.getElementById("stat_number1"),2400000,2000);
}