
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Calendar,
  Award,
  BarChart as BarChartIcon,
  UserPlus,
  FileText,
  Mail,
  Settings,
  Loader2
} from "lucide-react";

// Admin dashboard sample data
const eventStats = [
  { name: "Webinars", value: 24, color: "#8884d8" },
  { name: "Workshops", value: 18, color: "#82ca9d" },
  { name: "FDPs", value: 12, color: "#ffc658" },
  { name: "Conferences", value: 8, color: "#ff8042" },
];

const attendanceData = [
  { name: "Web Development", attendance: 87, capacity: 100 },
  { name: "AI Workshop", attendance: 68, capacity: 80 },
  { name: "Cyber Security", attendance: 45, capacity: 50 },
  { name: "Cloud Computing", attendance: 92, capacity: 120 },
  { name: "Mobile App Dev", attendance: 63, capacity: 75 },
];

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Sample authentication function
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // For demo: admin@sharda.edu / admin123
    setTimeout(() => {
      if (email === "admin@sharda.edu" && password === "admin123") {
        setIsAuthenticated(true);
        toast({
          title: "Login successful",
          description: "Welcome to the Admin Dashboard",
        });
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleCreateEvent = () => {
    navigate("/create-event");
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[80vh]">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Admin Login</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access the Sharda University Event Management dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@sharda.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="password">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign in"
                  )}
                </Button>
                
                <div className="text-center mt-4">
                  <p className="text-xs text-muted-foreground">
                    For demo: admin@sharda.edu / admin123
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Sharda University Event Management System
            </p>
          </div>
          <Button onClick={handleCreateEvent}>Create New Event</Button>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Events</p>
                <h3 className="text-2xl font-bold">62</h3>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Participants</p>
                <h3 className="text-2xl font-bold">2,845</h3>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Registrations</p>
                <h3 className="text-2xl font-bold">3,412</h3>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Certificates</p>
                <h3 className="text-2xl font-bold">1,293</h3>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Tabs */}
        <Tabs defaultValue="analytics">
          <TabsList className="mb-4">
            <TabsTrigger value="analytics" className="gap-2">
              <BarChartIcon className="h-4 w-4" /> Analytics
            </TabsTrigger>
            <TabsTrigger value="participants" className="gap-2">
              <Users className="h-4 w-4" /> Participants
            </TabsTrigger>
            <TabsTrigger value="certificates" className="gap-2">
              <Award className="h-4 w-4" /> Certificates
            </TabsTrigger>
            <TabsTrigger value="bulk-actions" className="gap-2">
              <Mail className="h-4 w-4" /> Bulk Actions
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Event Distribution</CardTitle>
                  <CardDescription>
                    Distribution of event types in the current academic year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={eventStats}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {eventStats.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Rates</CardTitle>
                  <CardDescription>
                    Attendance rate for top 5 events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={attendanceData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="attendance" name="Attendance" fill="#8884d8" />
                        <Bar dataKey="capacity" name="Capacity" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="participants">
            <Card>
              <CardHeader>
                <CardTitle>Participant Management</CardTitle>
                <CardDescription>
                  View and manage event participants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <UserPlus className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Participant data will load here</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-4">
                    In the production version, this tab will display participant data with filters, search, and export options.
                  </p>
                  <Button variant="outline">Load Sample Data</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="certificates">
            <Card>
              <CardHeader>
                <CardTitle>Certificate Management</CardTitle>
                <CardDescription>
                  Generate, revoke, and verify certificates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Award className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Certificate generation tools</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-4">
                    In the production version, you'll be able to create certificate templates, generate bulk certificates, and manage issued certificates.
                  </p>
                  <Button variant="outline" onClick={() => navigate("/certificates")}>
                    View Certificate Verification
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="bulk-actions">
            <Card>
              <CardHeader>
                <CardTitle>Bulk Communications</CardTitle>
                <CardDescription>
                  Send bulk emails, notifications, and invitations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Mail className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Communication tools</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-4">
                    In the production version, this tab will provide tools for sending bulk invitations, reminders, and follow-ups.
                  </p>
                  <Button variant="outline">View Sample Templates</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Admin;
