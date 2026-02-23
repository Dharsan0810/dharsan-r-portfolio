import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
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
                            I am a dedicated Engineering student pursuing my B.E/B.Tech degree. With a strong passion for technology and innovation, I specialize in building scalable web applications and exploring the fascinating world of Artificial Intelligence and Machine Learning.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            My career objective is to leverage my technical skills and problem-solving abilities to contribute to impactful projects while continuously learning and growing in a professional environment. I am highly motivated, placement-ready, and eager to take on new challenges.
                        </p>

                        {/* Education Highlight */}
                        <div className="glass-card p-6 mt-8 border-l-4 border-l-indigo-500">
                            <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-indigo-300">B.E/B.Tech in Engineering</h4>
                                    <p className="text-sm text-slate-400">College Name Here • Expected 202X</p>
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
                            <div className="text-4xl font-bold text-indigo-400 mb-2">10+</div>
                            <div className="text-sm text-slate-300">Projects Completed</div>
                        </div>
                        <div className="glass-card p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
                            <div className="text-sm text-slate-300">Certifications</div>
                        </div>
                        <div className="glass-card p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-4xl font-bold text-blue-400 mb-2">2+</div>
                            <div className="text-sm text-slate-300">Hackathons</div>
                        </div>
                        <div className="glass-card p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
                            <div className="text-sm text-slate-300">Dedication</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
