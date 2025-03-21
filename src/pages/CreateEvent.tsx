
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const CreateEvent = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Event created successfully",
        description: "Your event has been scheduled and is now live.",
      });
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="py-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Create New Event</h1>
        <p className="text-muted-foreground mb-8">
          Fill out the form below to create and publish a new event.
        </p>
        
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
              <CardDescription>
                Provide the basic information about your event.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="title">
                  Event Title
                </label>
                <Input 
                  id="title" 
                  placeholder="Enter the title of your event" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="type">
                  Event Type
                </label>
                <Select required>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conference">Conference</SelectItem>
                    <SelectItem value="webinar">Webinar</SelectItem>
                    <SelectItem value="seminar">Seminar</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Event Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="startTime">
                    Start Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="startTime" 
                      type="time"
                      className="pl-9"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="endTime">
                    End Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="endTime" 
                      type="time"
                      className="pl-9"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      required 
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="location">
                  Location
                </label>
                <Input 
                  id="location" 
                  placeholder="Enter event location or online platform" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="description">
                  Event Description
                </label>
                <Textarea 
                  id="description" 
                  placeholder="Provide a detailed description of your event"
                  rows={5}
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="capacity">
                  Maximum Capacity
                </label>
                <Input 
                  id="capacity" 
                  type="number" 
                  min="1"
                  placeholder="Enter the maximum number of attendees" 
                  required 
                />
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating Event..." : "Create Event"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </Layout>
  );
};

export default CreateEvent;
