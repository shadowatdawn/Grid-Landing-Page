const compactFormatter = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
});
const numberFormatter = new Intl.NumberFormat("en");

function countUp(element, target, duration, formatValue) {
  const startTime = performance.now();

  function update(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const value = progress === 1 ? target : target * progress;
    element.textContent = formatValue(value);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  element.textContent = formatValue(0);
  requestAnimationFrame(update);
}

countUp(document.getElementById("stat_number1"), 2400000, 2000, (value) =>
  compactFormatter.format(Math.floor(value)),
);
countUp(document.getElementById("stat_number2"), 1284, 2000, (value) =>
  numberFormatter.format(Math.floor(value)),
);
countUp(document.getElementById("stat_number3"), 38000, 2000, (value) =>
  compactFormatter.format(Math.floor(value)),
);
countUp(
  document.getElementById("stat_number4"),
  3.1,
  2000,
  (value) => (value === 0 ? "0×" : `${value.toFixed(1)}×`),
);
