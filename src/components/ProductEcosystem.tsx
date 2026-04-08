import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Cpu, Globe, GraduationCap, LayoutGrid, Shield, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const products = [
  {
    id: "cypher",
    title: "Cypher",
    tagline: "Student Companion",
    description: "Personalized AI tutor that adapts to every student's learning pace and style.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "bg-blue-500",
    size: "lg:col-span-2 lg:row-span-2",
    features: ["Adaptive Learning", "24/7 Doubt Solving", "Progress Tracking"],
  },
  {
    id: "morpheus",
    title: "Morpheus",
    tagline: "Teaching Agent",
    description: "Automates grading, lesson planning, and administrative tasks for teachers.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "bg-indigo-600",
    size: "lg:col-span-1 lg:row-span-1",
    features: ["Auto-Grading", "Lesson AI", "Admin Automation"],
  },
  {
    id: "zion",
    title: "Zion",
    tagline: "AI Tool Suite",
    description: "A curated collection of AI tools for creative and academic excellence.",
    icon: <LayoutGrid className="w-6 h-6" />,
    color: "bg-cyan-500",
    size: "lg:col-span-1 lg:row-span-1",
    features: ["Creative Suite", "Research AI", "Writing Lab"],
  },
  {
    id: "neo",
    title: "NEO",
    tagline: "Innovation Lab",
    description: "Physical and digital infrastructure to foster AI research and development in schools.",
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-purple-600",
    size: "lg:col-span-1 lg:row-span-1",
    features: ["Hardware Kits", "Curriculum", "Mentorship"],
  },
  {
    id: "matrix",
    title: "Matrix",
    tagline: "AI Infrastructure",
    description: "Secure, scalable, and ethical AI backbone for modern educational institutions.",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-slate-800",
    size: "lg:col-span-1 lg:row-span-1",
    features: ["Data Security", "Ethical Guardrails", "Cloud Scale"],
  },
];

export default function ProductEcosystem() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="products" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-brand-indigo text-brand-indigo font-bold px-4 py-1">
            The Ecosystem
          </Badge>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-indigo mb-6">
            Five Pillars of <span className="text-brand-cyan">AI Ready Schools</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our integrated platform covers every aspect of the school experience, ensuring a seamless transition into the AI era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={product.size}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className={cn(
                "h-full border-slate-100 transition-all duration-500 group overflow-hidden relative",
                hoveredId === product.id ? "shadow-2xl border-brand-indigo/50 -translate-y-2" : "hover:shadow-xl"
              )}>
                <CardHeader className="relative pb-0">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 transition-all duration-500",
                    product.color,
                    hoveredId === product.id ? "scale-110 rotate-3 shadow-lg" : ""
                  )}>
                    {product.icon}
                  </div>
                  <Badge variant="secondary" className="absolute top-6 right-6 bg-slate-100 text-slate-500 font-medium">
                    {product.tagline}
                  </Badge>
                  <CardTitle className="font-display text-2xl font-bold text-brand-indigo group-hover:text-brand-cyan transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-slate-500 mt-2 text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                  <AnimatePresence mode="wait">
                    {hoveredId === product.id ? (
                      <motion.div
                        key="features"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-3"
                      >
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                            {feature}
                          </div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="visual"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {product.id === "cypher" ? (
                          <div className="mt-4 rounded-2xl overflow-hidden border border-slate-100">
                            <img
                              src="https://picsum.photos/seed/cypher/800/400"
                              alt="Cypher Interface"
                              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ) : (
                          <div className="flex items-center text-brand-indigo font-bold text-sm group-hover:translate-x-1 transition-transform cursor-pointer">
                            Explore {product.title}
                            <Globe className="ml-2 w-4 h-4" />
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
