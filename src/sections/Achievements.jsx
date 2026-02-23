import { motion } from 'framer-motion';
import { FiAward, FiStar, FiMonitor } from 'react-icons/fi';

const achievements = [
    {
        icon: <FiAward className="w-8 h-8 text-indigo-400" />,
        title: "Full Stack Developer Certification",
        organization: "Infomatronics Project Services",
        date: "2024",
        description: "Certified in full stack web development with hands-on experience in building responsive web applications and integrating backend services."
    },
    {
        icon: <FiMonitor className="w-8 h-8 text-purple-400" />,
        title: "Prompt Engineer Certification",
        organization: "Infomatronics Project Services",
        date: "2024",
        description: "Learned prompt engineering techniques and applied them to improve UI/UX workflows while developing a Netflix Clone project."
    },
    {
        icon: <FiStar className="w-8 h-8 text-blue-400" />,
        title: "Cloud Computing Engineer",
        organization: "Corizo",
        date: "2024",
        description: "Worked with AWS and Firebase platforms and gained knowledge of cloud service models, scalability and deployment architectures."
    },
    {
        icon: <FiAward className="w-8 h-8 text-pink-400" />,
        title: "Oracle Generative AI Professional",
        organization: "Oracle",
        date: "2024",
        description: "Certified in Generative AI fundamentals, AI tools usage and real-world applications of large language model technologies."
    },
    {
        icon: <FiMonitor className="w-8 h-8 text-green-400" />,
        title: "Programming in Java",
        organization: "NPTEL Online Certification",
        date: "2024",
        description: "Covered object-oriented programming, exception handling and core Java development concepts."
    },
    {
        icon: <FiStar className="w-8 h-8 text-yellow-400" />,
        title: "Data Science for Beginners (Gold)",
        organization: "NASSCOM",
        date: "2024",
        description: "Learned data analysis basics, preprocessing techniques and introductory machine learning concepts."
    },
    {
        icon: <FiAward className="w-8 h-8 text-red-400" />,
        title: "Cybersecurity Analysis & Design (Silver)",
        organization: "NASSCOM",
        date: "2024",
        description: "Studied cybersecurity fundamentals including risk analysis, threat detection and secure system design practices."
    },
    {
        icon: <FiStar className="w-8 h-8 text-cyan-400" />,
        title: "Aptis ESOL English Certification (B2)",
        organization: "British Council",
        date: "2024",
        description: "Demonstrated intermediate to advanced English communication proficiency including speaking, writing and comprehension."
    }
];

const Achievements = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Achievements & <span className="text-gradient">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(79,70,229,0.15)] transition-all duration-300 border-slate-700/50 hover:border-indigo-500/50"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                {item.title}
                            </h3>
                            <div className="text-indigo-400 font-medium mb-4">{item.organization} • {item.date}</div>
                            <p className="text-slate-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;

