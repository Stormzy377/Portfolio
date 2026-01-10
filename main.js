// const canvas = document.getElementById("snowCanvas");
// const ctx = canvas.getContext("2d");

// let width, height, snowflakes;

// function init() {
//   width = window.innerWidth;
//   height = window.innerHeight;
//   canvas.width = width;
//   canvas.height = height;

//   snowflakes = [];
//   for (let i = 0; i < 150; i++) {
//     snowflakes.push({
//       x: Math.random() * width,
//       y: Math.random() * height,
//       radius: Math.random() * 3 + 1,
//       speed: Math.random() * 1 + 0.5,
//       opacity: Math.random() * 0.5 + 0.3,
//     });
//   }
// }

// function draw() {
//   ctx.clearRect(0, 0, width, height);
//   ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
//   ctx.beginPath();

//   snowflakes.forEach((flake) => {
//     ctx.moveTo(flake.x, flake.y);
//     ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);

//     flake.y += flake.speed;
//     flake.x += Math.sin(flake.y / 30) * 0.5; // Balanço lateral

//     if (flake.y > height) {
//       flake.y = -10;
//       flake.x = Math.random() * width;
//     }
//   });

//   ctx.fill();
//   requestAnimationFrame(draw);
// }

// window.addEventListener("resize", init);
// init();
// draw();

// // Smooth Scroll simples para os links
// document.querySelectorAll("nav a").forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     target.scrollIntoView({ behavior: "smooth" });
//   });
// });
