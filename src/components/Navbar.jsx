import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/#projects' },
        { name: 'About', path: '/#experience' },
        { name: 'Contact', path: '/contact', isCta: true },
    ];

    const handleNavClick = (e, path) => {
        e.preventDefault();
        setIsOpen(false);

        if (path.startsWith('/#')) {
            const hash = path.substring(1);
            if (location.pathname === '/') {
                const id = hash.substring(1);
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate('/');
                setTimeout(() => {
                    const id = hash.substring(1);
                    const element = document.getElementById(id);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            navigate(path);
        }
    };

    return (
        <>
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <nav className="w-full max-w-4xl bg-dark-100/70 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/20 transition-all duration-300">
                    <div className="px-6 h-16 flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0 group relative z-50" onClick={() => setIsOpen(false)}>
                            <span className="text-xl font-bold tracking-tighter text-white flex items-center gap-1">
                                <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-black font-black text-xs transform group-hover:rotate-12 transition-transform">H</div>
                                <span>Mirza</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={(e) => handleNavClick(e, link.path)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${link.isCta
                                            ? 'bg-white text-black hover:bg-gray-200 font-bold ml-2'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden relative z-50">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-white transition-colors"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay - Full Screen "Mobbin" Style */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-dark-DEFAULT/95 backdrop-blur-2xl pt-28 px-6"
                    >
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={(e) => handleNavClick(e, link.path)}
                                    className={`text-2xl font-semibold border-b border-white/5 pb-4 flex justify-between items-center ${link.isCta ? 'text-white' : 'text-gray-400'
                                        }`}
                                >
                                    {link.name}
                                    {link.isCta && <ArrowRight size={20} />}
                                </a>
                            ))}

                            <div className="pt-8">
                                <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Connect</p>
                                <div className="flex gap-4">
                                    {/* Social placeholders or smaller links could go here */}
                                    <a href="mailto:haiderjeh@gmail.com" className="text-gray-400 hover:text-white">Email</a>
                                    <a href="https://wa.me/923195476967" className="text-gray-400 hover:text-white">WhatsApp</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
