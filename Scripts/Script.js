(function () {
  const el = document.querySelector(".time");
  const tick = () => {
    const d = new Date();
    el.textContent = d.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  };
  tick();
  setInterval(tick, 1000);
})();