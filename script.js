// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact Button Alert
document.getElementById("contactBtn").addEventListener("click", () => {
  alert("Contact M. Kavinesh at: kavinesh@example.com");
});

// Auto Year Update
document.getElementById("year").textContent = new Date().getFullYear();