import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Hero />
            <Skills />
            <Projects />
            <Experience />

            {/* Call to Action for Contact Page */}
            <section className="py-20 relative z-10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-dark-200/50 backdrop-blur-md border border-white/5 rounded-2xl p-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to build something amazing?</h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            I'm currently available for freelance work and internship opportunities.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105"
                        >
                            Let's Talk <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;
