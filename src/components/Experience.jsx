import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative z-10 bg-dark-100/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education Route</h2>
                    <div className="h-1 w-20 bg-accent-blue rounded-full mx-auto"></div>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 md:border-none space-y-12">
                    {/* Education Item */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:flex items-center justify-between group"
                    >
                        <div className="hidden md:block w-5/12 text-right pr-8">
                            <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">Bachelor of Science</h3>
                            <p className="text-gray-400 font-medium">Software Engineering</p>
                        </div>

                        <div className="absolute left-[-5px] md:left-1/2 md:-ml-3 w-3 h-3 md:w-6 md:h-6 bg-dark-DEFAULT rounded-full border-4 border-accent-blue z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

                        <div className="md:w-5/12 md:pl-8 ml-8">
                            {/* Mobile Title View */}
                            <div className="md:hidden mb-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors">Bachelor of Science</h3>
                                <p className="text-gray-400 font-medium">Software Engineering</p>
                            </div>

                            <div className="bg-dark-200/50 p-8 rounded-2xl border border-white/5 group-hover:border-accent-blue/30 transition-all hover:bg-dark-200">
                                <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                                    <GraduationCap size={16} className="text-accent-blue" />
                                    <span className="font-semibold">Bahria University, Islamabad</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                                    <Calendar size={16} />
                                    <span>Expected 2026 • Current Semester: 6th</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Focusing on advanced software engineering principles, full-stack development, and algorithmic optimization.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
