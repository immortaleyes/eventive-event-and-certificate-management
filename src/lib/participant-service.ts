
// In a production app, this would connect to a real database like Supabase, Firebase, etc.

export interface Participant {
  id: string;
  eventId: string;
  name: string;
  email: string;
  phone: string;
  institution: string;
  role: string;
  requirements?: string;
  registrationDate: string;
  status: 'registered' | 'confirmed' | 'cancelled';
  attended: boolean;
  certificateIssued: boolean;
}

// Mock database
let participants: Participant[] = [];

export const saveParticipant = async (participant: Participant): Promise<Participant> => {
  console.log('Saving participant:', participant);
  
  // This is a mock implementation
  // In a real app, you would connect to a database
  
  // For development purposes, we'll just add to our in-memory array
  participants.push(participant);
  
  // Return the saved participant after a short delay to simulate network latency
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Participant saved successfully');
      resolve(participant);
    }, 800);
  });
};

export const getParticipantsByEvent = async (eventId: string): Promise<Participant[]> => {
  // In a real app, you would query the database
  return participants.filter(p => p.eventId === eventId);
};

export const getParticipantById = async (id: string): Promise<Participant | undefined> => {
  // In a real app, you would query the database
  return participants.find(p => p.id === id);
};
