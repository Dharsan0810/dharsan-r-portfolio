import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 relative border-t border-slate-800/80 pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter">
                            <a href="#home" className="text-gradient">
                                Dharsan R<span className="text-white"></span>
                            </a>
                        </h2>
                        <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                            A passionate software engineer building modern web applications and exploring the frontiers of AI. Available for full-time opportunities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Projects', 'Experience'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Connect</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Dharsan0810"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition-all hover:bg-indigo-500/10"
                                aria-label="GitHub"
                            >
                                <FiGithub size={18} />
                            </a>
                            <a
                                href="www.linkedin.com/in/dharsan122005"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition-all hover:bg-indigo-500/10"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin size={18} />
                            </a>
                            <a
                                href="mailto:dharsan.r0810@gmail.com"
                                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition-all hover:bg-indigo-500/10"
                                aria-label="Email"
                            >
                                <FiMail size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; {currentYear} Dharsan R. All rights reserved.
                    </p>
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;

