
import { EventList } from "@/components/events/EventList";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Events = () => {
  return (
    <Layout>
      <div className="py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Sharda University Events</h1>
            <p className="text-muted-foreground">
              Browse and register for our featured events, webinars, and workshops.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild variant="default" className="group">
              <Link to="/">
                Featured Event
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/certificates">Verify Certificate</Link>
            </Button>
            <Button asChild>
              <Link to="/admin">Admin Login</Link>
            </Button>
          </div>
        </div>
        <EventList />
      </div>
    </Layout>
  );
};

export default Events;
