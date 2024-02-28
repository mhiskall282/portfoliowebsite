// Toggle Menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
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
 document.addEventListener('DOMContentLoaded', function() {
            var profileSection = document.getElementById('profile');
            profileSection.classList.add('show'); 
        });












  const profileImages = [
      "./assets/profile-pic.png", // Default profile image
      "./assets/profile-pic2.png", // Other profile images
      "./assets/profile-pic3.png",
      // Add more image URLs as needed
    ];
    let currentImageIndex = 0;
    const profileImageElement = document.getElementById('profileImage');

    function changeProfileImage() {
      currentImageIndex = (currentImageIndex + 1) % profileImages.length;
      profileImageElement.src = profileImages[currentImageIndex];
    }

    // Change profile image every 3 seconds (adjust interval as needed)
    setInterval(changeProfileImage, 3000);
