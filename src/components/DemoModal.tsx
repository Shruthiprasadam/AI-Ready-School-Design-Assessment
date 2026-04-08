import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface DemoModalProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  className?: string;
}

export function DemoModal({ children, variant = "default", className }: DemoModalProps) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      toast.success("Demo request sent!", {
        description: "Our team will contact you within 24 hours to schedule your personalized demo.",
      });
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold text-brand-indigo">Book a Personalized Demo</DialogTitle>
          <DialogDescription>
            See how AI Ready School can transform your institution. Fill out the form below and we'll be in touch.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Work Email</Label>
            <Input id="email" type="email" placeholder="john@school.edu" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="school">School Name</Label>
            <Input id="school" placeholder="Greenwood International" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea id="message" placeholder="Tell us about your school's AI goals..." />
          </div>
          <Button type="submit" className="bg-brand-indigo hover:bg-indigo-900 w-full" disabled={loading}>
            {loading ? "Sending..." : "Request Demo"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
