
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import DynamicStackIcon from './DynamicStackIcon';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-mono mb-6">
                        Available for Hire
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-white">
                        Haider Jehangir
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
                            Mirza
                        </span>
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-2xl text-gray-400 mb-8 font-light max-w-2xl mx-auto mt-4">
                        <span>Software Engineering Student</span>
                        <DynamicStackIcon />
                        <span className="text-white font-medium">Full Stack Developer</span>
                    </div>

                    <p className="max-w-2xl mx-auto text-gray-500 mb-12 text-lg leading-relaxed">
                        I build digital experiences that blend high-performance engineering with immersive design.
                        Specializing in the MERN stack, C++, and complex system architecture.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all transform hover:translate-y-[-2px]"
                        >
                            View Work
                        </a>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-dark-200 text-white border border-white/10 rounded-full font-bold hover:bg-dark-300 transition-all transform hover:translate-y-[-2px] flex items-center gap-2"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
