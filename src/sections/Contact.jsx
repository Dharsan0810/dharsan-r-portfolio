import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative bg-slate-900/50">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 translate-y-1/2" />

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
                        I'm currently looking for placement opportunities as a Full Stack Developer. 
                        Feel free to contact me anytime!
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="glass-card p-8 bg-indigo-900/20 border-indigo-500/20">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">

                                {/* EMAIL */}
                                <a href="mailto:dharsan.r0810@gmail.com" className="flex items-start gap-4 text-slate-300 hover:text-indigo-400 transition-colors group">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20">
                                        <FiMail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Email</h4>
                                        <p className="text-sm">dharsan.r0810@gmail.com</p>
                                    </div>
                                </a>

                                {/* LINKEDIN */}
                                <a href="https://www.linkedin.com/in/dharsan122005/" target="_blank" rel="noreferrer" className="flex items-start gap-4 text-slate-300 hover:text-indigo-400 transition-colors group">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20">
                                        <FiLinkedin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">LinkedIn</h4>
                                        <p className="text-sm">www.linkedin.com/in/dharsan122005</p>
                                    </div>
                                </a>

                                {/* GITHUB */}
                                <a href="https://github.com/Dharsan0810" target="_blank" rel="noreferrer" className="flex items-start gap-4 text-slate-300 hover:text-indigo-400 transition-colors group">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20">
                                        <FiGithub className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">GitHub</h4>
                                        <p className="text-sm">github.com/Dharsan0810</p>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <form className="glass p-8 rounded-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                        placeholder="yourmail@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                    placeholder="Opportunity / Collaboration"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                                    placeholder="Hello Dharsan R, I'd like to talk about..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] active:scale-[0.98]"
                            >
                                <span>Send Message</span>
                                <FiSend />
                            </button>

                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
