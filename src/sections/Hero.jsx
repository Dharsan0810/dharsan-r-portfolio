import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
        >
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium tracking-wide mb-2"
                    >
                        Welcome to my portfolio
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">Dharsan</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-300 font-medium">
                        Software Engineer | Full Stack Enthusiast
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
                        Motivated engineering student passionate about technology, innovation, and building impactful solutions for the modern web.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] w-full sm:w-auto text-center"
                        >
                            View Projects
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-3.5 rounded-full glass hover:bg-slate-800/80 text-white font-medium transition-all w-full sm:w-auto text-center border border-slate-600 hover:border-slate-500"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex justify-center md:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
                        {/* Pulsing ring behind the image */}
                        <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
                        <div className="absolute inset-4 rounded-full border border-purple-500/40 animate-pulse" style={{ animationDuration: '2s' }}></div>

                        <div className="absolute inset-0 rounded-full  bg-gradient-to-tr from-indigo-500 to-purple-500 p-1">
                            <div className="w-full h-full rounded-full bg-slate-900 border-4 border-slate-900 overflow-hidden relative">
                                {/* Fallback pattern or actual image */}
                                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-600 text-[120px] font-bold">
                                    RD
                                </div>
                                {/* To use an actual image, uncomment below and add to public folder */}
                                <img src="/profile.jpeg" alt="Dharsan R" className="w-full h-full object-cover relative z-10 hover:scale-105 transition-transform duration-500" /> 
                            </div>
                        </div>

                        {/* Floating badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute top-10 -left-6 md:-left-12 glass-card px-4 py-2 flex items-center gap-2"
                        >
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-sm font-semibold">React.js</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-12 -right-6 md:-right-8 glass-card px-4 py-2 flex items-center gap-2"
                        >
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-sm font-semibold">Node.js</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;


