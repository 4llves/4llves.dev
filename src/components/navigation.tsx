"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/about" },
    { name: "Projetos", href: "/projects" },
    { name: "Talks", href: "/talks" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      className="fixed w-full z-50 px-4 py-4 bg-black/30 backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex max-w-5xl mx-auto">
        <nav className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <motion.img
              src="/myLogoLight.png"
              alt="Logo"
              className="w-6 md:w-8"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="relative py-2"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {item.name}
                  </span>
                  {hoveredItem === item.name && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                      layoutId="underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-cyan-400"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-black/95 border-cyan-950"
            >
              <SheetHeader>
                <SheetTitle className="text-cyan-400">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col mt-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center py-4 text-lg text-gray-300 hover:text-cyan-400 transition-colors"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                    <div className="h-px bg-cyan-950/50" />
                  </motion.div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  );
}
