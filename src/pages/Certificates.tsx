
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Award, Download, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Certificates = () => {
  const [certificateId, setCertificateId] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<"success" | "error" | null>(null);
  const [certificateData, setCertificateData] = useState<{
    id: string;
    name: string;
    event: string;
    issueDate: string;
    validUntil: string;
  } | null>(null);
  const { toast } = useToast();

  const handleVerify = () => {
    if (!certificateId.trim()) {
      toast({
        title: "Verification Failed",
        description: "Please enter a valid certificate ID",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      // For demo purposes, we'll consider any ID starting with "SU-" as valid
      if (certificateId.startsWith("SU-")) {
        setVerificationResult("success");
        setCertificateData({
          id: certificateId,
          name: "John Doe",
          event: "Advanced Web Development Workshop",
          issueDate: "March 15, 2023",
          validUntil: "March 15, 2025",
        });
        toast({
          title: "Certificate Verified",
          description: "This certificate is authentic and valid.",
        });
      } else {
        setVerificationResult("error");
        setCertificateData(null);
        toast({
          title: "Verification Failed",
          description: "The certificate ID is invalid or has been revoked.",
          variant: "destructive",
        });
      }
      setIsVerifying(false);
    }, 1500);
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your certificate is being downloaded.",
    });
    
    // In a real implementation, this would trigger an actual download
  };

  return (
    <Layout>
      <div className="py-10">
        <h1 className="text-3xl font-bold mb-2">Certificate Verification</h1>
        <p className="text-muted-foreground mb-8">
          Verify the authenticity of certificates issued by Sharda University
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Verify a Certificate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Enter the certificate ID to verify its authenticity. The ID can be found on the bottom of your certificate.
                  </p>
                  
                  <div className="flex gap-2">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Certificate ID (e.g., SU-123456)"
                        className="pl-9"
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value)}
                      />
                    </div>
                    <Button onClick={handleVerify} disabled={isVerifying}>
                      {isVerifying ? "Verifying..." : "Verify"}
                    </Button>
                  </div>
                  
                  {verificationResult === "success" && certificateData && (
                    <div className="mt-6 p-4 border border-green-200 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-green-800">Certificate Verified</h3>
                        <Button variant="outline" size="sm" className="gap-1" onClick={handleDownload}>
                          <Download className="h-4 w-4" /> Download
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Certificate ID:</span>
                          <span className="text-sm">{certificateData.id}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Recipient:</span>
                          <span className="text-sm">{certificateData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Event:</span>
                          <span className="text-sm">{certificateData.event}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Issue Date:</span>
                          <span className="text-sm">{certificateData.issueDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Valid Until:</span>
                          <span className="text-sm">{certificateData.validUntil}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {verificationResult === "error" && (
                    <div className="mt-6 p-4 border border-red-200 bg-red-50 rounded-lg">
                      <h3 className="text-lg font-semibold text-red-800 mb-2">Verification Failed</h3>
                      <p className="text-sm text-red-600">
                        This certificate ID is invalid or has been revoked. Please check the ID and try again.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  About Our Certificates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">
                    Sharda University issues digital certificates for various academic achievements, workshops, seminars, and events. Each certificate includes:
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>A unique Certificate ID for verification</li>
                    <li>QR code linked to this verification system</li>
                    <li>Digital signature of the issuing authority</li>
                    <li>Anti-forgery features and design elements</li>
                  </ul>
                  
                  <div className="border-t pt-4 mt-4">
                    <h4 className="font-medium mb-2">Sample Certificate</h4>
                    <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-48">
                      <div className="text-center">
                        <Award className="h-12 w-12 mx-auto mb-3 text-primary" />
                        <p className="text-sm font-medium">Sample Sharda University Certificate</p>
                        <p className="text-xs text-muted-foreground mt-1">ID: SU-123456</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Certificates;
