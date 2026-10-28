// EmailJS configuration for Shree Ganesh Steel Corporation
// Recipient email: shreeganeshsteel29@gmail.com

export const EMAILJS_CONFIG = {
  // Service ID connecting to shreeganeshsteel29@gmail.com in EmailJS Dashboard
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",

  // Email Template ID for business notifications
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",

  // EmailJS Public Key (Account -> General -> Public Key)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",

  // Optional: Auto-reply confirmation template for customer
  confirmationTemplateId:
    import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID || "",

  // Target business email recipient
  recipientEmail: "shreeganeshsteel29@gmail.com",

  // Export department email
  exportEmail: "exports@shreeganeshsteel.com",
};
