import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'AI Chat Assistant',
        description: 'A responsive AI chatbot application built with React and integrated with open-source LLMs to provide real-time conversational responses.',
        tech: ['React', 'Tailwind CSS', 'OpenAI API'],
        github: 'https://github.com',
        live: 'https://example.com',
        image: 'bg-gradient-to-br from-blue-600/40 to-indigo-600/40' // placeholder gradient
    },
    {
        title: 'E-Commerce Dashboard',
        description: 'A full-stack admin dashboard for e-commerce with analytics charting, real-time sales tracking, and inventory management.',
        tech: ['MERN Stack', 'Redux', 'Recharts'],
        github: 'https://github.com',
        live: 'https://example.com',
        image: 'bg-gradient-to-br from-purple-600/40 to-pink-600/40'
    },
    {
        title: 'Portfolio Generator',
        description: 'A tool that allows users to input their data and automatically generates a customized, responsive portfolio website.',
        tech: ['React', 'Vite', 'Framer Motion'],
        github: 'https://github.com',
        live: '',
        image: 'bg-gradient-to-br from-teal-600/40 to-emerald-600/40'
    },
    {
        title: 'Smart Attendance System',
        description: 'A Python-based facial recognition system to automate student attendance marking, integrated with a local database.',
        tech: ['Python', 'OpenCV', 'SQLite'],
        github: 'https://github.com',
        live: '',
        image: 'bg-gradient-to-br from-orange-600/40 to-red-600/40'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            {/* Background glow */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 transform -translate-y-1/2 translate-x-1/3" />

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group glass-card overflow-hidden flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(79,70,229,0.2)] transition-all duration-300 border-slate-700/50 hover:border-indigo-500/50"
                        >
                            {/* Image / Placeholder */}
                            <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-300"></div>
                                {/* Simulated mockup overlay */}
                                <div className="absolute inset-x-8 bottom-0 h-32 bg-slate-800 rounded-t-xl border-t border-x border-slate-600/50 shadow-2xl translate-y-8 group-hover:translate-y-4 transition-transform duration-300 flex items-start justify-center pt-4">
                                    <div className="w-3/4 h-2 bg-slate-700 rounded-full"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-800"
                                        aria-label="GitHub Repository"
                                    >
                                        <FiGithub size={20} />
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-800"
                                            aria-label="Live Demo"
                                        >
                                            <FiExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
