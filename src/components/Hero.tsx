import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, PlayCircle, ShieldCheck, Sparkles, Users } from "lucide-react";
import { DemoModal } from "./DemoModal";
import { toast } from "sonner";

export default function Hero() {
  const handleWatchDemo = () => {
    toast.info("Video Demo", {
      description: "Our interactive video walkthrough is being updated. Check back soon!",
    });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-slate">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 text-brand-indigo text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3 h-3" />
              <span>India's First Complete AI Ecosystem</span>
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-brand-indigo leading-[1.1] mb-6">
              Empowering Schools to <span className="text-brand-cyan">Lead the AI Revolution</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              From student learning companions to secure AI infrastructure, we provide everything your school needs to adopt AI responsibly, effectively, and ethically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <DemoModal>
                <Button className="bg-brand-indigo hover:bg-brand-indigo/90 text-white h-14 px-8 text-lg font-medium group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DemoModal>
              <Button 
                variant="outline" 
                className="h-14 px-8 text-lg font-medium border-slate-200 hover:bg-brand-indigo hover:text-white transition-all group"
                onClick={handleWatchDemo}
              >
                <PlayCircle className="mr-2 w-5 h-5 text-brand-indigo group-hover:text-white transition-colors" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof / Trust Markers */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-medium text-slate-500">500+ Schools</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-medium text-slate-500">Secure & Ethical AI</span>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/school-${i}/100/100`}
                    alt="School Logo"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
                  +496
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual / Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://picsum.photos/seed/aiready/1200/800"
                alt="AI Ready School Platform"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              {/* Floating UI Elements */}
              <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Cypher AI</p>
                    <p className="text-sm font-bold text-slate-800">Learning Boost +40%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 -right-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Morpheus</p>
                    <p className="text-sm font-bold text-slate-800">Teacher Time Saved: 12h/wk</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-brand-indigo/5 rounded-[40px] -rotate-2 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
