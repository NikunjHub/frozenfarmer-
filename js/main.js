// Contact Form (basic feedback interaction)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
  
        if (name && email && message) {
          alert(`Thanks for contacting us, ${name}! We'll get back to you shortly.`);
          form.reset();
        } else {
          alert("Please fill in all fields before submitting.");
        }
      });
    }
  });
  