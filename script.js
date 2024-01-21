function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }



  // script.js

    // You can add your own logic here, like sending the message to your server

    // Display a confirmation message (you can replace this with your own logic)

    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("messageForm").addEventListener("submit", function (event) {
        // Your existing form submission code here
      });
    });




addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch('https://github.com/mhiskall282/portfoliowebsite/blob/main/index.html', {
    cf: {
      cacheTtl: 86400, // Cache for 24 hours
    },
  })

  return response
}

