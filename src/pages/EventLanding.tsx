
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RegistrationForm } from "@/components/events/RegistrationForm";
import { Container } from "@/components/ui/container";
import { ArrowRight, Calendar, Clock, MapPin, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EventLanding = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const { toast } = useToast();
  
  // Featured event data - in a real app, this would come from an API/database
  const event = {
    id: "featured-symposium",
    title: "Sharda University Annual Technical Symposium 2023",
    date: "November 15, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium, Sharda University Campus",
    description: "Join us for a day of innovation, learning, and networking. The Annual Technical Symposium features keynote speakers from industry leaders, hands-on workshops, and research presentations from faculty and students.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    capacity: 250,
    attendees: 120,
    organizer: "Department of Computer Science & Engineering"
  };

  const handleRegistrationSuccess = () => {
    setShowRegistration(false);
    setRegistrationSuccess(true);
    toast({
      title: "Registration Successful",
      description: "Check your email for confirmation and event details.",
    });
    
    // Redirect to home page after 5 seconds of showing success message
    setTimeout(() => {
      window.location.href = "/home";
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${event.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        
        <Container className="relative z-10 text-white text-center px-4 py-16 flex flex-col items-center">
          {registrationSuccess ? (
            <div className="animate-fade-in text-center">
              <h2 className="text-3xl font-bold mb-4">Thank You for Registering!</h2>
              <p className="text-xl mb-8">
                Your registration for {event.title} has been confirmed.
                Check your email for more details.
              </p>
              <p className="text-lg mb-6">
                You will be redirected to the homepage in a few seconds...
              </p>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">
                <Link to="/home">
                  Go to Home Now
                </Link>
              </Button>
            </div>
          ) : (
            <>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                {event.title}
              </h1>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  <span>{event.location}</span>
                </div>
              </div>
              
              <p className="text-lg max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {event.description}
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button 
                  size="lg" 
                  onClick={() => setShowRegistration(true)}
                  className="group"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild 
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20"
                >
                  <Link to="/home">
                    Go to Home
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Users className="h-5 w-5 text-primary" />
                <span className="text-white/90">
                  {event.attendees} / {event.capacity} already registered
                </span>
              </div>
            </>
          )}
        </Container>
      </div>

      {/* Registration Dialog */}
      <Dialog open={showRegistration} onOpenChange={setShowRegistration}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Register for {event.title}</DialogTitle>
          </DialogHeader>
          <RegistrationForm eventId={event.id} onSuccess={handleRegistrationSuccess} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventLanding;
