// Function to handle booking an appointment
function bookAppointment() {
    alert("Thank you for choosing DentalCare! Please call us at 123-456-7890 to book your appointment.");
  }
  
  // Function to handle form submission
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! We have received your message and will contact you shortly.`);
      document.getElementById('contactForm').reset();
    } else {
      alert("Please fill out all fields.");
    }
  });