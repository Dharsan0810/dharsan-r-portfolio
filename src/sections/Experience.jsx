import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Software Engineering Intern",
        company: "Tech Solutions Inc.",
        duration: "June 2023 - Present",
        description: [
            "Developed responsive web interfaces using React.js and Tailwind CSS, improving user engagement by 25%.",
            "Collaborated with the backend team to integrate RESTful APIs and ensure seamless data flow.",
            "Participated in daily stand-ups and agile development cycles, delivering features on schedule."
        ],
    },
    {
        role: "Web Development Intern",
        company: "Digital Innovators Agency",
        duration: "Jan 2023 - May 2023",
        description: [
            "Assisted in redesigning the corporate website, focusing on modern UI aesthetics and accessibility.",
            "Optimized legacy code leading to a 40% reduction in page load times.",
            "Created reusable UI components that are now part of the company's internal design system."
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
