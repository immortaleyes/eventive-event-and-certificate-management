
// In a production app, this would connect to a real email service like SendGrid, Mailchimp, etc.

interface EmailData {
  to: string;
  name: string;
  eventId: string;
  registrationId: string;
}

export const sendRegistrationEmail = async (data: EmailData): Promise<boolean> => {
  console.log('Sending registration confirmation email to:', data.to);
  
  // This is a mock implementation
  // In a real app, you would integrate with an email service API
  
  // For development purposes, we'll just return a successful response after a short delay
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Email sent successfully', {
        to: data.to,
        subject: 'Event Registration Confirmation - Sharda University',
        templateData: {
          name: data.name,
          eventId: data.eventId,
          registrationId: data.registrationId,
          confirmationLink: `https://events.sharda.edu/confirm/${data.registrationId}`,
          eventDetails: {
            title: "Sharda University Annual Technical Symposium 2023",
            date: "November 15, 2023",
            time: "10:00 AM - 4:00 PM",
            location: "Main Auditorium, Sharda University Campus",
            agenda: [
              { time: "10:00 AM", title: "Opening Ceremony" },
              { time: "10:30 AM", title: "Keynote Speaker: Innovations in AI" },
              { time: "12:00 PM", title: "Lunch Break" },
              { time: "01:00 PM", title: "Workshop Sessions" },
              { time: "03:30 PM", title: "Award Ceremony & Closing" }
            ],
            additionalInfo: "Please bring your ID card for campus entry. Free parking available at Gate 2."
          },
          paymentDetails: {
            status: "Pending",
            amount: "₹500",
            paymentLink: `https://events.sharda.edu/payment/${data.registrationId}`
          }
        }
      });
      resolve(true);
    }, 1000);
  });
};

// Additional email service functions that would be implemented in a production app

export const sendEventReminder = async (email: string, eventDetails: any): Promise<boolean> => {
  console.log('Sending reminder email to:', email);
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Reminder email sent');
      resolve(true);
    }, 500);
  });
};

export const sendCertificateEmail = async (email: string, certificateUrl: string): Promise<boolean> => {
  console.log('Sending certificate email to:', email);
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Certificate email sent');
      resolve(true);
    }, 500);
  });
};

export const sendBulkInvitations = async (emails: string[], eventDetails: any): Promise<boolean> => {
  console.log('Sending bulk invitations to:', emails.length, 'recipients');
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Bulk invitations sent');
      resolve(true);
    }, 1000);
  });
};
