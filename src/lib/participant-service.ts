
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
  paymentStatus?: 'pending' | 'completed' | 'failed';
  paymentAmount?: number;
  feedbackSubmitted?: boolean;
  evaluationScore?: number;
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

export const updateParticipantStatus = async (id: string, status: Participant['status']): Promise<Participant | undefined> => {
  const participantIndex = participants.findIndex(p => p.id === id);
  if (participantIndex === -1) return undefined;
  
  participants[participantIndex].status = status;
  return participants[participantIndex];
};

export const markAttendance = async (id: string, attended: boolean): Promise<Participant | undefined> => {
  const participantIndex = participants.findIndex(p => p.id === id);
  if (participantIndex === -1) return undefined;
  
  participants[participantIndex].attended = attended;
  return participants[participantIndex];
};

export const updatePaymentStatus = async (id: string, status: 'pending' | 'completed' | 'failed', amount?: number): Promise<Participant | undefined> => {
  const participantIndex = participants.findIndex(p => p.id === id);
  if (participantIndex === -1) return undefined;
  
  participants[participantIndex].paymentStatus = status;
  if (amount) {
    participants[participantIndex].paymentAmount = amount;
  }
  
  return participants[participantIndex];
};

export const recordFeedback = async (id: string, submitted: boolean): Promise<Participant | undefined> => {
  const participantIndex = participants.findIndex(p => p.id === id);
  if (participantIndex === -1) return undefined;
  
  participants[participantIndex].feedbackSubmitted = submitted;
  return participants[participantIndex];
};

export const updateEvaluationScore = async (id: string, score: number): Promise<Participant | undefined> => {
  const participantIndex = participants.findIndex(p => p.id === id);
  if (participantIndex === -1) return undefined;
  
  participants[participantIndex].evaluationScore = score;
  return participants[participantIndex];
};

export const issueCertificate = async (id: string): Promise<Participant | undefined> => {
  const participantIndex = participants.findIndex(p => p.id === id);
  if (participantIndex === -1) return undefined;
  
  participants[participantIndex].certificateIssued = true;
  return participants[participantIndex];
};

// Sample certificate template data
export const certificateTemplates = [
  {
    id: "template-1",
    name: "Standard Participation",
    imageUrl: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&auto=format&fit=crop",
    description: "Certificate of Participation for attending the event."
  },
  {
    id: "template-2",
    name: "Workshop Completion",
    imageUrl: "https://images.unsplash.com/photo-1576504674773-a3d0138a8426?w=800&auto=format&fit=crop",
    description: "Certificate for successfully completing a workshop."
  },
  {
    id: "template-3",
    name: "Award Certificate",
    imageUrl: "https://images.unsplash.com/photo-1557823882-c5c7035a70a0?w=800&auto=format&fit=crop",
    description: "Certificate for winning competitions or awards."
  }
];
