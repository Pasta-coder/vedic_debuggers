'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} className="hover:text-purple-400 transition-colors">
    {children}
  </a>
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Star background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Image
            src="/globe.svg"
            alt="Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Celestial Debuggers
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">Problem Statement</NavLink>
          <NavLink href="#schedule">Solution</NavLink>
          <motion.a
            href="#register"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login 
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Hello
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
              Watch our incredible journey through space and code at the most
              exciting hackathon of the year
            </p>
            <motion.button
              className="px-8 py-3 text-lg rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore More
            </motion.button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute w-20 h-20 rounded-full bg-purple-500/20 blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ top: "20%", left: "20%" }}
          />
          <motion.div
            className="absolute w-32 h-32 rounded-full bg-pink-500/20 blur-xl"
            animate={{
              x: [0, -150, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ top: "60%", right: "20%" }}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-sm border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">0001jayant@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://x.com/jayant_043034"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Twitter
                </a>
                <a
                  href="https://github.com/Pasta-coder"
                  className="text-gray-400 hover:text-purple-400"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jayant-chauhan-991499260/"
                  className="text-gray-400 hover:text-purple-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Github repository</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Pasta-coder/codegeass"
                  className="text-gray-400 hover:text-purple-400"
                >
                  link to repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
