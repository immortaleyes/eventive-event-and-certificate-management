
import { EventList } from "@/components/events/EventList";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <Layout>
      <div className="py-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Sharda University Events</h1>
            <p className="text-muted-foreground">
              Browse and register for our featured events, webinars, and workshops.
            </p>
          </div>
          <div className="flex gap-2">
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
