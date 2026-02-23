import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Full Stack Web Development Intern",
        company: "Infomatronics Project Services (Remote)",
        duration: "24 July 2024 – 08 August 2024",
        description: [
            "Developed an E-commerce website using HTML, CSS and JavaScript.",
            "Built a Dark Web Monitor website using HTML, CSS, JavaScript and TypeScript.",
            "Implemented responsive UI design and integrated backend functionalities."
        ],
    },
    {
        role: "Prompt Engineering Intern",
        company: "Infomatronics Project Services (Remote)",
        duration: "01 October 2024 – 15 October 2024",
        description: [
            "Created a responsive Netflix Clone using HTML, CSS and TailwindCSS.",
            "Implemented Firebase Authentication, Firestore database and admin panel for content uploads.",
            "Applied prompt engineering techniques to improve UI/UX workflow and content handling."
        ],
    },
    {
        role: "Cloud Computing Intern",
        company: "Corizo (Remote)",
        duration: "05 July 2024 – 05 August 2024",
        description: [
            "Worked with AWS and Firebase platforms to deploy cloud-based applications.",
            "Learned cloud service models (IaaS, PaaS, SaaS) and deployment architectures.",
            "Explored virtualization, scalability and cloud security concepts."
        ],
    },
    {
        role: "Game Development Intern",
        company: "Monolith Research and Training Labs Pvt. Ltd.",
        duration: "02 June 2025 – 01 September 2025",
        description: [
            "Gained practical industry exposure in a professional IT development environment.",
            "Improved technical skills, problem-solving ability and teamwork through project tasks.",
            "Worked under senior mentors and collaborated in development activities."
        ],
    }
];
const Experience = () => {
    return (
        <section id="experience" className="py-24 relative bg-slate-900/50">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Experience & <span className="text-gradient">Internships</span>
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-500/50 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-indigo-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8 hover:border-indigo-500/50 transition-colors duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className="text-indigo-300 font-medium">{exp.company}</div>
                                    </div>
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-sm text-slate-300 whitespace-nowrap self-start md:self-auto">
                                        {exp.duration}
                                    </div>
                                </div>

                                <ul className="space-y-3 text-slate-400">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="text-indigo-500 mt-1.5 shrink-0">▹</span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

