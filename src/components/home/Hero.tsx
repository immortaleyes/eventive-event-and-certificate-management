
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarDays, Users, Award, ArrowRight } from "lucide-react";

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <div className="relative overflow-hidden pb-16 pt-20 md:pt-32 md:pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <div className="absolute top-24 -left-24 w-72 h-72 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute top-36 right-10 w-80 h-80 rounded-full bg-purple-200/20 blur-3xl" />
      </div>
      
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className={cn(
            "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl",
            "bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400",
            "transition-all duration-1000 transform",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Effortless Event & Certificate Management
          </h1>
          
          <p className={cn(
            "mt-6 text-lg text-muted-foreground leading-relaxed",
            "transition-all duration-1000 delay-100 transform",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Streamline your events from invitation to certification with an elegant, all-in-one platform. Designed for educators, trainers, and event organizers.
          </p>
          
          <div className={cn(
            "mt-8 flex flex-col sm:flex-row gap-4 justify-center",
            "transition-all duration-1000 delay-200 transform",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button asChild size="lg" className="gap-2 group">
              <Link to="/events">
                Browse Events
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/register">Create Account</Link>
            </Button>
          </div>
        </div>
        
        <div className={cn(
          "mt-16 grid grid-cols-1 gap-6 md:grid-cols-3",
          "transition-all duration-1000 delay-300 transform",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-sm border p-8 flex flex-col items-center text-center">
            <div className="mb-4 h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
              <CalendarDays className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Event Management</h3>
            <p className="text-muted-foreground text-sm">
              Create and manage educational events with detailed scheduling, multi-session support, and resource allocation.
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-sm border p-8 flex flex-col items-center text-center">
            <div className="mb-4 h-12 w-12 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
              <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Attendee Tracking</h3>
            <p className="text-muted-foreground text-sm">
              Manage registrations, track attendance, collect feedback, and communicate with participants all in one place.
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-sm border p-8 flex flex-col items-center text-center">
            <div className="mb-4 h-12 w-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
              <Award className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Certificate Generation</h3>
            <p className="text-muted-foreground text-sm">
              Automatically create and verify professional certificates based on attendance, evaluations, and custom criteria.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
