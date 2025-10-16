<script>
// Snowflake background
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Snowflake properties
const snowflakes = Array.from({length:200}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 3 + 1,        // size of snowflake
  speedY: Math.random() * 0.5 + 0.2, // vertical speed
  speedX: Math.random() * 0.5 - 0.25 // horizontal drift
}));

function drawSnowflakes() {
  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#fff"; // snowflakes are white
  snowflakes.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fill();
    s.y += s.speedY;
    s.x += s.speedX;

    // wrap around bottom/top and sides
    if(s.y > canvas.height) s.y = 0;
    if(s.x > canvas.width) s.x = 0;
    if(s.x < 0) s.x = canvas.width;
  });
  requestAnimationFrame(drawSnowflakes);
}

drawSnowflakes();

window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
</script>
