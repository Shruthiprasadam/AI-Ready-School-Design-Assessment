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

interface ContactSalesModalProps {
  children: React.ReactNode;
}

export function ContactSalesModal({ children }: ContactSalesModalProps) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      toast.success("Message sent to sales!", {
        description: "Our sales team will get back to you shortly with more information.",
      });
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold text-brand-indigo">Contact Our Sales Team</DialogTitle>
          <DialogDescription>
            Have questions about our enterprise plans or custom AI solutions? We're here to help.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="contact-name">Full Name</Label>
            <Input id="contact-name" placeholder="Jane Smith" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-email">Work Email</Label>
            <Input id="contact-email" type="email" placeholder="jane@institution.org" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-subject">Subject</Label>
            <Input id="contact-subject" placeholder="Enterprise Pricing Inquiry" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea id="contact-message" placeholder="How can we help your school?" required />
          </div>
          <Button type="submit" className="bg-brand-indigo hover:bg-indigo-900 w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
