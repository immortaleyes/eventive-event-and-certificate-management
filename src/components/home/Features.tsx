
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { 
  Mail, 
  CreditCard, 
  Bell, 
  ListChecks, 
  QrCode, 
  BarChart, 
  FileText, 
  Download, 
  LayoutDashboard
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}

const Feature = ({ icon: Icon, title, description, delay = 0 }: FeatureProps) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={cn(
        "flex gap-4 transition-all duration-700 transform",
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4">Comprehensive Platform</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Every Feature You Need
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform manages the entire event lifecycle, from invitations and registrations to feedback collection and certificate generation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <Feature 
            icon={Mail}
            title="Bulk Invitations"
            description="Import contact lists and send personalized event invitations in bulk through email and WhatsApp."
            delay={100}
          />
          
          <Feature 
            icon={CreditCard}
            title="Registration & Payment"
            description="Streamline registration with customizable forms and integrated payment processing."
            delay={200}
          />
          
          <Feature 
            icon={Bell}
            title="Smart Notifications"
            description="Automate reminders and updates, and notify participants of important event changes."
            delay={300}
          />
          
          <Feature 
            icon={ListChecks}
            title="Session Scheduling"
            description="Create detailed timetables with sessions, speakers, and resources for your events."
            delay={400}
          />
          
          <Feature 
            icon={QrCode}
            title="Attendance Tracking"
            description="Generate attendance QR codes and track participation across each session."
            delay={500}
          />
          
          <Feature 
            icon={BarChart}
            title="Feedback Collection"
            description="Automatically collect, analyze, and visualize participant feedback after sessions."
            delay={600}
          />
          
          <Feature 
            icon={FileText}
            title="Custom Evaluations"
            description="Create quizzes, tests, and forms to evaluate participant knowledge and performance."
            delay={700}
          />
          
          <Feature 
            icon={Download}
            title="Certificate Generation"
            description="Automatically create and distribute professional certificates upon completion."
            delay={800}
          />
          
          <Feature 
            icon={LayoutDashboard}
            title="Admin Dashboard"
            description="Monitor all aspects of your events with comprehensive analytics and reporting."
            delay={900}
          />
        </div>
      </Container>
    </section>
  );
};
