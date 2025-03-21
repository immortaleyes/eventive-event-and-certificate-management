
import { EventList } from "@/components/events/EventList";
import { Layout } from "@/components/layout/Layout";

const Events = () => {
  return (
    <Layout>
      <div className="py-10">
        <h1 className="text-3xl font-bold mb-2">Upcoming Events</h1>
        <p className="text-muted-foreground mb-8">
          Browse and register for our featured events, webinars, and workshops.
        </p>
        <EventList />
      </div>
    </Layout>
  );
};

export default Events;
