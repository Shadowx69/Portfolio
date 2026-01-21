import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, MessageCircle, AlertCircle, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // NOTE: You need to replace these with your actual EmailJS service, template, and user IDs
        // For now, this is a simulation or placeholder.
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')

        // Simulating success for the user to see the UI state (since we don't have their keys)
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
        }, 1500);
    };

    const socialLinks = [
        { icon: Mail, label: 'Email', value: 'haiderjeh@gmail.com', href: 'mailto:haiderjeh@gmail.com', color: 'hover:text-red-400' },
        { icon: Phone, label: 'Phone', value: '+92 319 5476967', href: 'tel:+923195476967', color: 'hover:text-green-400' },
        { icon: Linkedin, label: 'LinkedIn', value: 'Connect Profile', href: 'https://www.linkedin.com/in/haider-jehangir-842a08361', color: 'hover:text-blue-400' },
        { icon: Github, label: 'GitHub', value: 'Shadowx69', href: 'https://github.com/Shadowx69', color: 'hover:text-white' },
    ];

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cyber-blue/5 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-cyber-purple/5 blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple text-transparent bg-clip-text">
                            Get In Touch
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Ready to collaborate on the next big project? Drop me a message.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                        <div className="grid gap-6">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyber-blue/30 transition-all group ${link.color}`}
                                >
                                    <div className="p-3 bg-gray-800 rounded-lg group-hover:scale-110 transition-transform">
                                        <link.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{link.label}</p>
                                        <p className="font-medium text-gray-200">{link.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <a
                            href="https://wa.me/923195476967"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center justify-center w-full py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-900/20"
                        >
                            <MessageCircle className="mr-2" /> Chat on WhatsApp
                        </a>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-lg font-bold shadow-lg shadow-cyber-purple/25 hover:shadow-cyber-purple/50 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    'Sending...'
                                ) : status === 'success' ? (
                                    <>Sent Successfully <CheckCircle size={20} /></>
                                ) : (
                                    <>Send Message <Send size={20} /></>
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-400 text-sm text-center mt-2 flex items-center justify-center gap-1">
                                    <CheckCircle size={14} /> Message sent! I'll get back to you soon.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
