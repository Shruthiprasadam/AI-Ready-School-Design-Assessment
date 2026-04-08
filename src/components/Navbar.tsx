import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { DemoModal } from "./DemoModal";
import { LoginModal } from "./LoginModal";
import { ContactModal } from "./ContactModal";

const products = [
  {
    title: "Cypher",
    description: "The ultimate AI learning companion for students.",
    href: "#cypher",
  },
  {
    title: "Morpheus",
    description: "Empowering teachers with AI-driven teaching agents.",
    href: "#morpheus",
  },
  {
    title: "Zion",
    description: "A comprehensive suite of AI tools for school admin.",
    href: "#zion",
  },
  {
    title: "NEO",
    description: "Next-gen AI innovation labs for future-ready schools.",
    href: "#neo",
  },
  {
    title: "Matrix",
    description: "Robust AI infrastructure for secure school adoption.",
    href: "#matrix",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-indigo rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">AI</span>
            </div>
            <span className="font-display font-bold text-xl text-brand-indigo hidden sm:block">
              AI Ready School
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-slate-600 hover:text-brand-indigo transition-colors">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {products.map((product) => (
                        <li key={product.title}>
                          <NavigationMenuLink
                            render={
                              <a
                                href={product.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-brand-indigo focus:bg-slate-100 focus:text-brand-indigo"
                              >
                                <div className="text-sm font-bold leading-none">{product.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                                  {product.description}
                                </p>
                              </a>
                            }
                          />
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#about" className="text-sm font-medium text-slate-600 hover:text-brand-indigo transition-colors px-4">
                    About
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#impact" className="text-sm font-medium text-slate-600 hover:text-brand-indigo transition-colors px-4">
                    Impact
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <ContactModal>
                    <button className="text-sm font-medium text-slate-600 hover:text-brand-indigo transition-colors px-4">
                      Contact
                    </button>
                  </ContactModal>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4 border-l border-slate-200 pl-8">
              <LoginModal>
                <Button variant="ghost" className="text-slate-600 font-medium">
                  Login
                </Button>
              </LoginModal>
              <DemoModal>
                <Button className="bg-brand-indigo hover:bg-brand-indigo/90 text-white font-medium px-6">
                  Book a Demo
                </Button>
              </DemoModal>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 py-4 px-4 space-y-4 shadow-xl">
          <div className="space-y-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3">Products</p>
            {products.map((product) => (
              <a
                key={product.title}
                href={product.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-indigo hover:bg-slate-50"
              >
                {product.title}
              </a>
            ))}
            <ContactModal>
              <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-indigo hover:bg-slate-50">
                Contact
              </button>
            </ContactModal>
          </div>
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <LoginModal>
              <Button variant="outline" className="w-full justify-center">
                Login
              </Button>
            </LoginModal>
            <DemoModal>
              <Button className="w-full justify-center bg-brand-indigo hover:bg-brand-indigo/90">
                Book a Demo
              </Button>
            </DemoModal>
          </div>
        </div>
      )}
    </nav>
  );
}
