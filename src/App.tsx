/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductEcosystem from "./components/ProductEcosystem";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone, Twitter, Linkedin, Github } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { DemoModal } from "./components/DemoModal";
import { ContactSalesModal } from "./components/ContactSalesModal";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <Toaster position="top-center" />
      
      <main>
        <Hero />
        
        {/* Stats Section / Impact */}
        <section id="impact" className="py-12 bg-brand-indigo text-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-display font-bold mb-1">500+</p>
                <p className="text-slate-300 text-sm uppercase tracking-wider font-medium">Schools Onboarded</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold mb-1">1M+</p>
                <p className="text-slate-300 text-sm uppercase tracking-wider font-medium">Students Impacted</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold mb-1">98%</p>
                <p className="text-slate-300 text-sm uppercase tracking-wider font-medium">Teacher Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold mb-1">24/7</p>
                <p className="text-slate-300 text-sm uppercase tracking-wider font-medium">AI Support</p>
              </div>
            </div>
          </div>
        </section>

        <ProductEcosystem />

        {/* About Section */}
        <section id="about" className="py-24 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-indigo mb-8">
                  Pioneering the Future of <span className="text-brand-cyan">AI in Education</span>
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    AI Ready School was founded with a single mission: to ensure that every school in India has the tools, knowledge, and infrastructure to embrace AI safely and effectively.
                  </p>
                  <p>
                    We don't just provide software; we provide a complete ecosystem. From student learning companions to teacher support agents, our platform is built by educators, for educators.
                  </p>
                  <div className="pt-4 grid grid-cols-2 gap-6">
                    <div className="p-4 rounded-2xl bg-brand-slate border border-slate-100">
                      <p className="font-bold text-brand-indigo text-2xl mb-1">Mission</p>
                      <p className="text-sm">Democratizing AI for 10,000 schools by 2027.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-brand-slate border border-slate-100">
                      <p className="font-bold text-brand-indigo text-2xl mb-1">Vision</p>
                      <p className="text-sm">Empowering every child with a personalized AI tutor.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/about-school/800/600" 
                  alt="Students using AI" 
                  className="rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-brand-cyan p-8 rounded-2xl text-white shadow-xl hidden md:block">
                  <p className="text-4xl font-display font-bold">100%</p>
                  <p className="text-sm font-medium opacity-90">Ethical AI Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-brand-slate relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-indigo/5 -skew-x-12 translate-x-1/4" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-brand-indigo rounded-[40px] p-12 lg:p-20 text-center text-white shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              </div>
              
              <h2 className="font-display text-4xl lg:text-6xl font-bold mb-8 relative z-10">
                Ready to make your school <br /> <span className="text-brand-cyan">AI Ready?</span>
              </h2>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto relative z-10">
                Join hundreds of forward-thinking institutions already transforming education with our complete AI ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <DemoModal>
                  <Button className="bg-white text-brand-indigo hover:bg-slate-100 h-14 px-10 text-lg font-bold">
                    Book a Free Demo
                  </Button>
                </DemoModal>
                <ContactSalesModal>
                  <Button variant="ghost" className="bg-white text-brand-indigo hover:bg-slate-100 h-14 px-10 text-lg font-bold">
                    Contact Sales
                  </Button>
                </ContactSalesModal>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-indigo rounded-lg flex items-center justify-center">
                  <span className="text-white font-display font-bold text-lg">AI</span>
                </div>
                <span className="font-display font-bold text-xl text-brand-indigo">
                  AI Ready School
                </span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Empowering the next generation of learners and educators through responsible AI integration.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-indigo hover:border-brand-indigo transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-indigo hover:border-brand-indigo transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-indigo hover:border-brand-indigo transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Products</h4>
              <ul className="space-y-4">
                {["Cypher", "Morpheus", "Zion", "NEO", "Matrix"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 hover:text-brand-indigo transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
              <ul className="space-y-4">
                {["About Us", "Impact Report", "Careers", "Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 hover:text-brand-indigo transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-500">
                  <MapPin className="w-5 h-5 text-brand-indigo shrink-0" />
                  <span>123 AI Innovation Hub, Bangalore, India</span>
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <Phone className="w-5 h-5 text-brand-indigo shrink-0" />
                  <span>+91 800 123 4567</span>
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <Mail className="w-5 h-5 text-brand-indigo shrink-0" />
                  <span>hello@aireadyschool.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 AI Ready School. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-slate-400 hover:text-brand-indigo text-sm">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-brand-indigo text-sm">Terms</a>
              <a href="#" className="text-slate-400 hover:text-brand-indigo text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
