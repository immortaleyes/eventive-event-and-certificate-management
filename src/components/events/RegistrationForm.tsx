
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { sendRegistrationEmail } from "@/lib/email-service";
import { saveParticipant, type Participant } from "@/lib/participant-service";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  institution: z.string().min(2, { message: "Institution name is required." }),
  role: z.string().min(1, { message: "Please select your role." }),
  requirements: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface RegistrationFormProps {
  eventId: string;
  onSuccess: () => void;
}

export const RegistrationForm = ({ eventId, onSuccess }: RegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      institution: "Sharda University", // Default value
      role: "",
      requirements: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Generate a unique registration ID
      const registrationId = `REG-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      
      // Save participant data to database
      // Ensure all required fields from Participant type are included
      const participantData: Participant = {
        id: registrationId,
        eventId,
        name: data.name,
        email: data.email,
        phone: data.phone,
        institution: data.institution,
        role: data.role,
        requirements: data.requirements || "",
        registrationDate: new Date().toISOString(),
        status: "registered",
        attended: false,
        certificateIssued: false,
      };
      
      await saveParticipant(participantData);
      
      // Send confirmation email
      await sendRegistrationEmail({
        to: data.email,
        name: data.name,
        eventId,
        registrationId,
      });
      
      // Call success callback
      onSuccess();
    } catch (error) {
      console.error("Registration failed:", error);
      // In a real app, you would show an error message
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="institution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institution/Organization</FormLabel>
              <FormControl>
                <Input placeholder="Enter your institution name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="researcher">Researcher</SelectItem>
                  <SelectItem value="industry">Industry Professional</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="requirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Special Requirements (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Any dietary restrictions, accessibility needs, or other requirements"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Register"}
        </Button>
      </form>
    </Form>
  );
};
