import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeXml, Database, Cpu, Sparkles } from 'lucide-react';

const icons = [
    { icon: CodeXml, color: 'bg-blue-500', label: 'Frontend' },
    { icon: Database, color: 'bg-emerald-500', label: 'Backend' },
    { icon: Cpu, color: 'bg-orange-500', label: 'Engineering' },
    { icon: Sparkles, color: 'bg-pink-500', label: 'Design' },
];

const DynamicStackIcon = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % icons.length);
        }, 2500);

        return () => clearInterval(timer);
    }, []);

    const CurrentIcon = icons[index].icon;

    return (
        <div className="inline-flex items-center justify-center w-10 h-10 align-middle relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -20, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className={`absolute inset-0 rounded-xl ${icons[index].color} flex items-center justify-center shadow-lg shadow-black/20`}
                >
                    <CurrentIcon size={20} className="text-white" />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default DynamicStackIcon;
