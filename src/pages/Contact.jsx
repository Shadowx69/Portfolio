import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate sending
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
        }, 1500);
    };

    const socialLinks = [
        { icon: Mail, label: 'Email', value: 'haiderjeh@gmail.com', href: 'mailto:haiderjeh@gmail.com' },
        { icon: Phone, label: 'Phone', value: '+92 319 5476967', href: 'tel:+923195476967' },
        { icon: Linkedin, label: 'LinkedIn', value: 'Connect Profile', href: 'https://www.linkedin.com/in/haider-jehangir-842a08361' },
        { icon: Github, label: 'GitHub', value: 'Shadowx69', href: 'https://github.com/Shadowx69' },
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Back to Home
                    </Link>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Let's start a <br />
                        <span className="text-accent-blue">Conversation.</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg">
                        Interested in working together? I'm always open to discussing product design, collaborating on projects, or partnership opportunities.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-all"
                            >
                                <div className="p-3 bg-dark-200 rounded-lg text-gray-300 group-hover:text-white group-hover:bg-accent-blue/20 transition-all">
                                    <link.icon size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{link.label}</p>
                                    <p className="font-medium text-gray-200 group-hover:text-white">{link.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-dark-200/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
                >
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input type="text" name="user_name" required
                                    className="w-full bg-dark-300/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all placeholder:text-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" name="user_email" required
                                    className="w-full bg-dark-300/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all placeholder:text-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                            <select className="w-full bg-dark-300/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all">
                                <option>General Inquiry</option>
                                <option>Project Proposal</option>
                                <option>Hiring / Job Opportunity</option>
                                <option>Mentorship</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea name="message" required rows="5"
                                className="w-full bg-dark-300/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none placeholder:text-gray-600"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? (
                                'Sender...'
                            ) : status === 'success' ? (
                                <>Message Sent <CheckCircle size={20} /></>
                            ) : (
                                <>Send Message <Send size={20} /></>
                            )}
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
};

export default Contact;
