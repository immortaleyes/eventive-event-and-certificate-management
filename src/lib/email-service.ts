
// In a production app, this would connect to a real email service like SendGrid, Mailchimp, etc.

interface EmailData {
  to: string;
  name: string;
  eventId: string;
  registrationId: string;
}

export const sendRegistrationEmail = async (data: EmailData): Promise<boolean> => {
  console.log('Sending email to:', data.to);
  
  // This is a mock implementation
  // In a real app, you would integrate with an email service API
  
  // For development purposes, we'll just return a successful response after a short delay
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Email sent successfully', {
        to: data.to,
        subject: 'Event Registration Confirmation',
        templateData: {
          name: data.name,
          eventId: data.eventId,
          registrationId: data.registrationId,
          confirmationLink: `https://events.sharda.edu/confirm/${data.registrationId}`
        }
      });
      resolve(true);
    }, 1000);
  });
};
