// GSAP Animations
gsap.from("#hero h1", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from("#hero p", { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from("#hero a", { opacity: 0, scale: 0.5, duration: 1, delay: 1.5 });

// Scroll Animations
gsap.from("#about", {
  scrollTrigger: { trigger: "#about", start: "top 80%" },
  opacity: 0,
  y: 50,
  duration: 1,
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});