function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }



  // script.js
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // You can add your own logic here, like sending the message to your server

    // Display a confirmation message (you can replace this with your own logic)
    alert('Message sent successfully!');
    // Alternatively, you can redirect the user to a thank you page or do any other action.
});
