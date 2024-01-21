// Toggle Menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const messageForm = document.getElementById("messageForm");

  messageForm.addEventListener("submit", function (event) {
    // Example: You can prevent the default form submission only if it's not the hamburger menu button
    if (!event.target.querySelector('.hamburger-icon').contains(document.activeElement)) {
      event.preventDefault();

      // Add your logic to send the message to your server
      // For simplicity, we'll just log a message to the console
      console.log("Message submitted!");
    }
  });
});

// Service Worker
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
});

async function handleRequest(request) {
  const response = await fetch('https://github.com/mhiskall282/portfoliowebsite/blob/main/index.html', {
    cf: {
      cacheTtl: 86400, // Cache for 24 hours
    },
  });

  return response;
}
