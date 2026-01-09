/**
 * Envia el formulario usando EmailJS cargado dinámicamente
 * @param {HTMLFormElement} form
 * @returns {Promise<any>}
 */
export async function sendEmail(form) {
  try {
    const emailjs = await import("@emailjs/browser");
    
    // Inicializar EmailJS
    emailjs.default.init("612p8l6--jl1x8Irv");
    
    const serviceId = "default_service";
    const templateId = "template_ap3arcv";
    
    return emailjs.default.sendForm(serviceId, templateId, form);
  } catch (error) {
    console.error("Error loading or using EmailJS", error);
    throw error;
  }
}
