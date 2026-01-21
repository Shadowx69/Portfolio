import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-dark-DEFAULT">

            {/* Mesh Gradient Container */}
            <div className="absolute inset-0 opacity-40">
                {/* Top Left - Cyan/Blue */}
                <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-cyan-500/30 via-blue-600/10 to-transparent blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>

                {/* Bottom Right - Purple/Violet */}
                <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-600/30 via-violet-600/10 to-transparent blur-[120px] rounded-full mix-blend-screen"></div>

                {/* Center - Deep Blue Accent */}
                <div className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent blur-[100px] rounded-full mix-blend-overlay"></div>
            </div>

            {/* Floating Orbs - Subtle Movement */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[10%] right-[10%] w-[200px] h-[200px] bg-cyan-400/10 rounded-full blur-[80px] opacity-30"
            />

            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] opacity-30"
            />

            {/* Noise Overlay for Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]"></div>
        </div>
    );
};

export default ParallaxBackground;
