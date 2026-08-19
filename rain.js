// CineMatrix — lluvia de caracteres del hero.
// Deliberadamente sutil (ver opacity en styles.css) y limitada a la
// cabecera: es el único lugar de la web donde aparece el guiño "Matrix"
// del logo, en vez de repetirlo por todas partes.
(function () {
  const canvas = document.getElementById("rain-canvas");
  if (!canvas) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const ctx = canvas.getContext("2d");
  const chars = "01アイウエオカキクケコCM日本語VDBTMDBニネノハヒフ";
  const fontSize = 15;
  let columns, drops, width, height;

  function resize() {
    width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    columns = Math.floor(canvas.offsetWidth / fontSize);
    drops = new Array(columns).fill(0).map(() => Math.random() * -50);
  }

  function draw() {
    ctx.fillStyle = "rgba(10, 15, 26, 0.15)";
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    ctx.font = fontSize + "px 'IBM Plex Mono', monospace";
    for (let i = 0; i < columns; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillStyle = "#39ff88";
      ctx.fillText(char, x, y);

      if (y > canvas.offsetHeight && Math.random() > 0.985) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  window.addEventListener("resize", resize);
  resize();
  setInterval(draw, 60);
})();
