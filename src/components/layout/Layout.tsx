
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Container } from "@/components/ui/container";

interface LayoutProps {
  children: ReactNode;
  containerClassName?: string;
  fullWidth?: boolean;
}

export const Layout = ({ 
  children, 
  containerClassName,
  fullWidth = false
}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {fullWidth ? (
          children
        ) : (
          <Container className={containerClassName}>
            {children}
          </Container>
        )}
      </main>
      <footer className="border-t py-6 mt-10">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Eventive. All rights reserved.
              </span>
            </div>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </a>
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </a>
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};
