import { motion } from 'framer-motion';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiTailwindcss, SiVite } from 'react-icons/si';

const skillCategories = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'Java', icon: <FaJava className="text-[#f89820]" />, level: 85 },
            { name: 'Python', icon: <FaPython className="text-[#3776ab]" />, level: 70 },
            { name: 'C Programming', icon: <div className="text-blue-400 text-xl font-bold">C</div>, level: 85 },
            { name: 'JavaScript', icon: <SiJavascript className="text-[#f7df1e]" />, level: 70 },
            { name: 'TypeScript', icon: <div className="text-blue-500 text-xl font-bold">TS</div>, level: 65 },
        ],
    },
    {
        title: 'Web Development',
        skills: [
            { name: 'HTML5', icon: <FaHtml5 className="text-[#e34f26]" />, level: 90 },
            { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572b6]" />, level: 88 },
            { name: 'React.js', icon: <FaReact className="text-[#61dafb]" />, level: 80 },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06b6d4]" />, level: 85 },
            { name: 'Firebase', icon: <div className="text-yellow-400 text-xl font-bold">FB</div>, level: 78 },
            { name: 'MySQL', icon: <div className="text-orange-400 text-xl font-bold">SQL</div>, level: 75 },
        ],
    },
    {
        title: 'Tools & Technologies',
        skills: [
            { name: 'Git', icon: <FaGitAlt className="text-[#f1502f]" />, level: 85 },
            { name: 'GitHub', icon: <FaGithub className="text-white" />, level: 85 },
            { name: 'AWS (Basics)', icon: <div className="text-orange-400 text-xl font-bold">AWS</div>, level: 70 },
            { name: 'Postman', icon: <div className="text-orange-500 text-xl font-bold">API</div>, level: 70 },
        ],
    }
];
const Skills = () => {
    return (
        <section id="skills" className="py-24 relative bg-slate-900/50">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                            className="glass p-8 rounded-2xl hover:border-indigo-500/50 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-slate-700/50">
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, index) => (
                                    <div key={skill.name} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                                    {skill.icon}
                                                </span>
                                                <span className="font-medium text-slate-300">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-slate-500">{skill.level}%</span>
                                        </div>
                                        {/* Progress Bar */}
                                        <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                                                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full relative"
                                            >
                                                <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-[2px] animate-[shimmer_2s_infinite]"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

