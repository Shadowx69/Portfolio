import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const SkillCard = ({ category, icon: Icon, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-dark-200/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-accent-blue/20 transition-all duration-300 group"
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-dark-300 rounded-xl text-gray-300 group-hover:text-accent-blue group-hover:bg-accent-blue/10 transition-all">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">{category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span
                    key={index}
                    className="px-3 py-1.5 bg-dark-300 rounded-lg text-sm text-gray-400 border border-transparent hover:border-white/10 hover:text-white transition-colors cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            category: "Languages",
            icon: Code2,
            skills: ["C++", "C#", "Java", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
            delay: 0.2
        },
        {
            category: "Frameworks & Libraries",
            icon: Layout,
            skills: ["React.js", "Node.js", "Express.js", "jQuery", "Three.js", "EJS", "Bootstrap"],
            delay: 0.3
        },
        {
            category: "Databases",
            icon: Database,
            skills: ["MySQL", "Microsoft SQL Server (SSMS)", "MongoDB"],
            delay: 0.4
        },
        {
            category: "Tools & Concepts",
            icon: Terminal,
            skills: ["Git", "RESTful APIs", "OOP", "VS Code", "Postman", "DSA"],
            delay: 0.5
        }
    ];

    return (
        <section id="skills" className="py-20 relative z-10 from-dark-100 to-dark bg-gradient-to-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-accent-blue font-mono text-sm tracking-wider uppercase mb-2 block">Excellence</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Technical Arsenal
                    </h2>
                    <div className="h-1 w-20 bg-accent-blue rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <SkillCard key={index} {...cat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
