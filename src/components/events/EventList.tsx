
import { useState, useEffect } from "react";
import { EventCard, EventProps } from "./EventCard";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

// Sample event data
const sampleEvents: EventProps[] = [
  {
    id: "evt-001",
    title: "Modern Web Development Conference 2023",
    type: "conference",
    date: "October 21, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Tech Convention Center, San Francisco",
    organizer: "TechLearn Association",
    attendees: 342,
    capacity: 400,
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop"
  },
  {
    id: "evt-002",
    title: "Introduction to Machine Learning",
    type: "webinar",
    date: "November 5, 2023",
    time: "1:00 PM - 3:00 PM",
    location: "Online (Zoom)",
    organizer: "AI Research Group",
    attendees: 156,
    capacity: 200,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "evt-003",
    title: "Leadership Skills for Technical Managers",
    type: "seminar",
    date: "November 12, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Grand Hotel Conference Room",
    organizer: "Management Excellence Institute",
    attendees: 45,
    capacity: 50,
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "evt-004",
    title: "Hands-on IoT Device Programming",
    type: "workshop",
    date: "December 3, 2023",
    time: "9:00 AM - 6:00 PM",
    location: "Innovation Lab, Boston",
    organizer: "IoT Makers Community",
    attendees: 24,
    capacity: 30,
    imageUrl: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2073&auto=format&fit=crop"
  },
  {
    id: "evt-005",
    title: "Data Visualization Techniques",
    type: "webinar",
    date: "December 15, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Online (Microsoft Teams)",
    organizer: "Data Science Institute",
    attendees: 180,
    capacity: 250,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: "evt-006",
    title: "Cybersecurity Best Practices 2023",
    type: "conference",
    date: "January 10, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "National Security Convention Center",
    organizer: "Cybersecurity Alliance",
    attendees: 287,
    capacity: 300,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
  }
];

export const EventList = () => {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents(sampleEvents);
      setFilteredEvents(sampleEvents);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Apply filters
  useEffect(() => {
    let result = events;
    
    // Apply search query filter
    if (searchQuery) {
      result = result.filter(event => 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply type filter
    if (typeFilter !== "all") {
      result = result.filter(event => event.type === typeFilter);
    }
    
    setFilteredEvents(result);
  }, [searchQuery, typeFilter, events]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  // Handle type filter change
  const handleTypeFilterChange = (value: string) => {
    setTypeFilter(value);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search events..."
            className="pl-9"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={typeFilter} onValueChange={handleTypeFilterChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Event Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="conference">Conference</SelectItem>
              <SelectItem value="webinar">Webinar</SelectItem>
              <SelectItem value="seminar">Seminar</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="h-[400px] rounded-lg animate-pulse bg-gray-100"></div>
          ))}
        </div>
      ) : filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No events found</h3>
          <p className="text-muted-foreground mb-4">
            We couldn't find any events matching your criteria.
          </p>
          <Button 
            onClick={() => {
              setSearchQuery("");
              setTypeFilter("all");
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};
