document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp Appointment Form Logic
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const message = document.getElementById('message').value;
            
            const whatsappNumber = "923000000000"; // Replace with real number
            const text = `*New Appointment Request*
Name: ${name}
Phone: ${phone}
Preferred Date: ${date}
Message: ${message}`;
            
            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }

    // Dynamic WhatsApp booking for service buttons
    const whatsappBookingButtons = document.querySelectorAll('.book-service-btn');
    whatsappBookingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const service = this.getAttribute('data-service');
            const whatsappNumber = "923000000000"; // Replace with real number
            const text = `I want to book ${service} appointment.`;
            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
            window.open(whatsappUrl, '_blank');
        });
    });
});
