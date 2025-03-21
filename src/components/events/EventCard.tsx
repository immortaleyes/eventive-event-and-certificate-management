
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Clock, MapPin, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface EventProps {
  id: string;
  title: string;
  type: "conference" | "webinar" | "seminar" | "workshop";
  date: string;
  time: string;
  location: string;
  organizer: string;
  attendees: number;
  capacity: number;
  imageUrl?: string;
}

export const EventCard = ({
  id,
  title,
  type,
  date,
  time,
  location,
  organizer,
  attendees,
  capacity,
  imageUrl,
}: EventProps) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  const typeColors = {
    conference: "bg-blue-50 text-blue-700 border-blue-200",
    webinar: "bg-green-50 text-green-700 border-green-200",
    seminar: "bg-purple-50 text-purple-700 border-purple-200",
    workshop: "bg-orange-50 text-orange-700 border-orange-200",
  };

  const typeColor = typeColors[type];
  const availabilityPercentage = (attendees / capacity) * 100;
  const isAlmostFull = availabilityPercentage >= 80;
  
  const defaultImage = "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop";
  const image = imageUrl || defaultImage;

  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-500 transform h-full flex flex-col",
      loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    )}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <Badge className={cn("absolute top-3 right-3 border", typeColor)}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Badge>
      </div>
      
      <CardHeader className="p-4 pb-2">
        <h3 className="text-lg font-semibold leading-tight line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{organizer}</p>
      </CardHeader>
      
      <CardContent className="p-4 pt-2 flex-grow">
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{attendees} / {capacity} attendees</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full transition-all duration-500",
                isAlmostFull ? "bg-amber-500" : "bg-emerald-500"
              )}
              style={{ width: `${Math.min(availabilityPercentage, 100)}%` }}
            />
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-2">
        <Button asChild className="w-full gap-1 group">
          <Link to={`/events/${id}`}>
            View Details
            <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
