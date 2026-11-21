

// SGR CONSTRUCTIONS - WHATSAPP ENQUIRY FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get customer details
    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const project = document.getElementById("projectType").value;
    const message = document.getElementById("customerMessage").value;

    // Prepare WhatsApp message
    const whatsappMessage =
        "Hello SGR Constructions,%0A%0A" +
        "I would like to enquire about your services.%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Project: " + encodeURIComponent(project) + "%0A" +
        "Message: " + encodeURIComponent(message);

    // SGR WhatsApp number
    const whatsappNumber = "919739138206";

    // Open WhatsApp
    const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");

});
