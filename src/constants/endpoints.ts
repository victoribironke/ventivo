const BASE_URL = "https://api.ventivo.co/api";

export const ENDPOINTS = {
  sendWaitlistConfirmation: (name: string, email: string) =>
    `${BASE_URL}/send-waitlist-confirmation?name=${name}&email=${email}`,
};
