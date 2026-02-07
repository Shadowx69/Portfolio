import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Database, Layout } from 'lucide-react';

const ProjectCard = ({ title, type, stack, description, points, icon: Icon, delay, github }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay }}
        className="group relative bg-dark-200/50 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 hover:border-accent-blue/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col h-full"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="p-8 relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <span className="text-xs font-mono text-accent-blue tracking-wider uppercase mb-2 block">{type}</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors duration-300">{title}</h3>
                </div>
                <div className="p-3 bg-dark-300 rounded-xl border border-white/5 group-hover:border-accent-blue/20 transition-colors">
                    <Icon size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
            </div>

            <p className="text-gray-400 text-sm mb-6 font-mono leading-relaxed">{stack}</p>

            <ul className="space-y-3 mb-8 flex-grow">
                {points.map((point, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0 opacity-60"></span>
                        <span className="leading-relaxed">{point}</span>
                    </li>
                ))}
            </ul>

            <div className="flex gap-4 pt-6 border-t border-white/5">
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/btn"
                >
                    <Github size={18} />
                    <span className="group-hover/btn:underline underline-offset-4 decoration-accent-blue">View Code</span>
                </a>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Keeb X",
            type: "Full Stack • Scrollytelling",
            stack: "Next.js, TypeScript, Framer Motion, Canvas API, Tailwind CSS",
            icon: Layout,
            github: "https://github.com/Shadowx69/KeebX-scrollytelling",
            points: [
                "Built scroll-controlled canvas animation with 100+ frame image sequence for immersive product storytelling.",
                "Implemented keyboard-inspired color palette (cyan, purple, gold) with unified animated gradient backgrounds.",
                "Created progressive content reveal system with scroll-triggered text overlays and smooth opacity transitions."
            ],
            delay: 0.1
        },
        {
            title: "Wonderland Toy Store",
            type: "Full Stack • E-Commerce",
            stack: "React, Node.js, Express.js, MySQL, Three.js, Tailwind",
            icon: Layout,
            github: "https://github.com/Shadowx69/Wonderland-Toystore",
            points: [
                "Architected a scalable e-commerce platform with a custom Admin Dashboard.",
                "Integrated Three.js to render interactive 3D model, boosting engagement.",
                "Implemented secure RESTful API architecture for seamless data handling."
            ],
            delay: 0.2
        },
        {
            title: "Event Management System",
            type: "System Design • Operations",
            stack: "C#, HTML, CSS, Microsoft SQL Server, RESTful APIs",
            icon: Database,
            github: "https://github.com/Shadowx69/Event-Flow-Pro",
            points: [
                "Engineered an operations system with dynamic QR Code generation for check-ins.",
                "Utilized stored procedures in SSMS for real-time validation of attendee data.",
                "Optimized database queries for high-volume transactions."
            ],
            delay: 0.3
        },
        {
            title: "Dynamic Blog Platform",
            type: "Full Stack • CMS",
            stack: "Node.js, Express.js, EJS, MongoDB",
            icon: Layout,
            github: "https://github.com/Shadowx69/Blog-Site",
            points: [
                "Built a responsive CMS allowing full CRUD operations with server-side rendering.",
                "Implemented session-based authentication and secure password hashing.",
                "Designed a mobile-first UI ensuring performance across devices."
            ],
            delay: 0.4
        },
        {
            title: "Train Route System",
            type: "Algorithms • DSA",
            stack: "C++, Microsoft SQL Server, STL",
            icon: Code2,
            github: "https://github.com/Shadowx69/Train-Management-system-GUI-MySQL-c-",
            points: [
                "Designed a sophisticated route tracking system using Double Linked Lists.",
                "Optimized traversal algorithms to calculate fares and distances efficiently.",
                "Integrated persistent storage with SSMS for complex schedule management."
            ],
            delay: 0.5
        },
        {
            title: "ATM System",
            type: "Software Design • OOP",
            stack: "Java, Object Oriented Programming",
            icon: Code2,
            github: "https://github.com/Shadowx69/ATM",
            points: [
                "Built a robust banking simulation strictly following OOP principles.",
                "Implemented secure transaction logic, account management, and history tracking.",
                "Demonstrated encapsulation and inheritance for secure data handling."
            ],
            delay: 0.6
        },
        {
            title: "Adventures of Eldoria",
            type: "Game Dev • Strategy",
            stack: "C++, Advanced OOP",
            icon: Code2,
            github: "https://github.com/Shadowx69/Text-Based-game--C--",
            points: [
                "Programmed a multi-stage console RPG involving PvP logic and boss fights.",
                "Applied advanced Polymorphism to manage diverse character classes and states.",
                "Designed a complex state machine for game loop management."
            ],
            delay: 0.7
        },
        {
            title: "Timetable Application",
            type: "Utility • Optimization",
            stack: "C++, File Handling",
            icon: Code2,
            github: "https://github.com/Shadowx69/TimeTable-App",
            points: ["Tool for optimizing weekly student schedules and conflict detection."],
            delay: 0.8
        }
    ];

    return (
        <section id="projects" className="py-32 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6">
                        Selected Works
                    </h2>
                    <div className="h-1 w-20 bg-accent-blue rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
