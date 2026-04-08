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
import { toast } from "sonner";
import { LogIn } from "lucide-react";

export function LoginModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      toast.error("Invalid credentials", {
        description: "Please check your school ID and password.",
      });
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold text-brand-indigo flex items-center gap-2">
            <LogIn className="w-6 h-6" />
            School Login
          </DialogTitle>
          <DialogDescription>
            Access your AI Ready School dashboard.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleLogin} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="schoolId">School ID</Label>
            <Input id="schoolId" placeholder="SCH-12345" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="bg-brand-indigo hover:bg-indigo-900 w-full" disabled={loading}>
            {loading ? "Authenticating..." : "Login"}
          </Button>
          <div className="text-center">
            <a href="#" className="text-xs text-slate-500 hover:text-brand-indigo underline">Forgot password?</a>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
