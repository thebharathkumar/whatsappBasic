const whatsappForm = document.querySelector('#whatsapp-form');
const phoneInput = document.querySelector('#phone-input');

whatsappForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const phone = phoneInput.value.replace(/\D/g, ''); // Remove all non-numeric characters from the phone number
	window.location.href = `https://wa.me/${phone}`; // Redirect to the WhatsApp chat with the phone number
});
