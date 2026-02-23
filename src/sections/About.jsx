import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 space-y-6"
                    >
                        <p className="text-lg text-slate-300 leading-relaxed">
                            I am a Computer Science Engineering student and aspiring Full Stack Web Developer with hands-on experience in building scalable and responsive web applications. I work with modern technologies including React.js, Node.js, Express.js and Firebase to create clean and user-friendly interfaces along with secure backend services.
                        </p>

                        <p className="text-lg text-slate-300 leading-relaxed">
                            Through internships and real-world projects such as an E-commerce platform, Netflix Clone and cloud-deployed applications, I have gained practical knowledge in frontend development, backend integration, authentication systems and database management. I am passionate about cloud computing, AI technologies and continuously improving my development skills.
                        </p>

                        {/* Education Highlight */}
                        <div className="glass-card p-6 mt-8 border-l-4 border-l-indigo-500">
                            <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-indigo-300">
                                        B.E. Computer Science Engineering
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        Panimalar Engineering College, Chennai • Expected Graduation: May 2027
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual / Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex-1 w-full grid grid-cols-2 gap-4"
                    >
                        <div className="glass-card p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-4xl font-bold text-indigo-400 mb-2">4+</div>
                            <div className="text-sm text-slate-300">Major Projects</div>
                        </div>

                        <div className="glass-card p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-4xl font-bold text-purple-400 mb-2">8+</div>
                            <div className="text-sm text-slate-300">Certifications</div>
                        </div>

                        <div className="glass-card p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-4xl font-bold text-blue-400 mb-2">3+</div>
                            <div className="text-sm text-slate-300">Internships</div>
                        </div>

                        <div className="glass-card p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
                            <div className="text-sm text-slate-300">Commitment</div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
