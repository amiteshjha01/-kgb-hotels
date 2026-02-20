export const generateWhatsAppLink = (hotelName: string, phoneNumber: string = "919676247755") => {
  const message = `Hey! I'm interested in ${hotelName} and would like to know more about available rooms and rates.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const generateWhatsAppEnquiry = (hotelName: string, phoneNumber: string = "919676247755") => {
  return generateWhatsAppLink(hotelName, phoneNumber);
};
