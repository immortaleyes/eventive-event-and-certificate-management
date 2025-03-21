
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, ChevronRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [organizationType, setOrganizationType] = useState("educational");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === 1) {
      setCurrentStep(2);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created successfully",
        description: "Welcome to Eventive! You can now log in with your credentials.",
      });
    }, 1500);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-[80vh]">
        <Card className="w-full max-w-md animate-scale-in">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
            <CardDescription className="text-center">
              {currentStep === 1 
                ? "Enter your information to create an account" 
                : "Just a few more details to complete your profile"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {currentStep === 1 ? (
                <>
                  <div className="space-y-2">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-9"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-9"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-9 pr-9"
                        required
                      />
                      <button
                        type="button"
                        onClick={toggleShowPassword}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Organization Type</label>
                    <div className="grid grid-cols-1 gap-2">
                      <Button
                        type="button"
                        variant={organizationType === "educational" ? "default" : "outline"}
                        className="justify-start"
                        onClick={() => setOrganizationType("educational")}
                      >
                        <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border">
                          {organizationType === "educational" && (
                            <span className="h-2.5 w-2.5 rounded-full bg-current" />
                          )}
                        </span>
                        Educational Institution
                      </Button>
                      
                      <Button
                        type="button"
                        variant={organizationType === "corporate" ? "default" : "outline"}
                        className="justify-start"
                        onClick={() => setOrganizationType("corporate")}
                      >
                        <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border">
                          {organizationType === "corporate" && (
                            <span className="h-2.5 w-2.5 rounded-full bg-current" />
                          )}
                        </span>
                        Corporate
                      </Button>
                      
                      <Button
                        type="button"
                        variant={organizationType === "ngo" ? "default" : "outline"}
                        className="justify-start"
                        onClick={() => setOrganizationType("ngo")}
                      >
                        <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border">
                          {organizationType === "ngo" && (
                            <span className="h-2.5 w-2.5 rounded-full bg-current" />
                          )}
                        </span>
                        Non-profit / NGO
                      </Button>
                      
                      <Button
                        type="button"
                        variant={organizationType === "other" ? "default" : "outline"}
                        className="justify-start"
                        onClick={() => setOrganizationType("other")}
                      >
                        <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border">
                          {organizationType === "other" && (
                            <span className="h-2.5 w-2.5 rounded-full bg-current" />
                          )}
                        </span>
                        Other
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Organization Name</label>
                    <Input
                      type="text"
                      placeholder="Enter your organization name"
                      required
                    />
                  </div>
                </>
              )}
              
              <Button type="submit" className="w-full group" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Account...
                  </>
                ) : currentStep === 1 ? (
                  <>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
              
              <div className="text-center mt-4">
                <span className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    Log in
                  </Link>
                </span>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Register;
