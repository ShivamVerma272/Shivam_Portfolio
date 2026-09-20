import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, Phone, ExternalLink, Code2, 
  Terminal as TerminalIcon, Search, Sun, Moon, ArrowUp, 
  FileText, Check, ChevronRight, Sparkles, Award, GraduationCap, 
  Layers, ArrowLeft, Menu, X, User
} from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioConfig';
import CinematicVFX from './components/CinematicVFX';
import Terminal from './components/Terminal';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSkillCat, setActiveSkillCat] = useState('Frontend');

  // Sync route
  useEffect(() => {
    const handlePopState = () => setCurrentRoute(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Theme Sync
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Scroll visibility for Back to Top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Filter projects
  const filteredProjects = PORTFOLIO_DATA.projects.filter(project => {
    const matchesCategory = activeTab === 'all' || project.category.map(c => c.toLowerCase()).includes(activeTab.toLowerCase());
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const selectedProject = PORTFOLIO_DATA.projects.find(
    p => `/projects/${p.slug}` === currentRoute
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans relative`}>
      {/* VFX Layer */}
      <CinematicVFX isDark={isDark} />

      {/* Sticky Glass Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${isDark ? 'bg-slate-950/80 border-slate-800/80' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div 
            onClick={() => navigate('/')} 
            className="cursor-pointer font-bold text-xl tracking-tight flex items-center gap-2 text-cyan-500 hover:opacity-80 transition-opacity"
          >
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text font-mono text-2xl">SV.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {['About', 'Skills', 'Projects', 'Achievements', 'Certifications', 'Education', 'Coding', 'Contact'].map((item) => (
              <a
                key={item}
                href={currentRoute === '/' ? `#${item.toLowerCase()}` : '/'}
                onClick={(e) => {
                  if (currentRoute !== '/') {
                    e.preventDefault();
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className={`transition-colors hover:text-cyan-400 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a
              href={PORTFOLIO_DATA.personalInfo.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all flex items-center gap-1.5"
            >
              <FileText size={14} /> Resume
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg border transition-colors ${isDark ? 'border-slate-800 text-yellow-400 hover:bg-slate-900' : 'border-slate-200 text-slate-700 hover:bg-slate-100'}`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg border border-slate-700 text-yellow-400"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden px-4 pt-2 pb-6 border-b ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className="flex flex-col space-y-3 font-medium text-sm">
              {['About', 'Skills', 'Projects', 'Achievements', 'Certifications', 'Education', 'Coding', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-cyan-400"
                >
                  {item}
                </a>
              ))}
              <a
                href={PORTFOLIO_DATA.personalInfo.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 pt-2"
              >
                <FileText size={16} /> View Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <div className="relative z-10 pt-20">
        {currentRoute.startsWith('/projects/') && selectedProject ? (
          /* Project Detail View */
          <div className="max-w-4xl mx-auto px-4 py-12">
            <button
              onClick={() => navigate('/')}
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Projects
            </button>

            <div className={`p-8 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} backdrop-blur-md shadow-2xl`}>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {selectedProject.category.map(cat => (
                  <span key={cat} className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {cat}
                  </span>
                ))}
                {selectedProject.featured && (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">{selectedProject.title}</h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">{selectedProject.description}</p>

              {/* Verified Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                  <Sparkles size={20} /> Verified Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <ChevronRight size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1.5 text-sm font-mono rounded-lg bg-slate-800 border border-slate-700 text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
                {selectedProject.liveDemo ? (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                ) : (
                  <button disabled className="px-5 py-2.5 rounded-lg bg-slate-800 text-slate-500 font-semibold text-sm flex items-center gap-2 cursor-not-allowed border border-slate-700">
                    Live Demo Coming Soon
                  </button>
                )}

                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm flex items-center gap-2 border border-slate-700 transition-all"
                  >
                    <Github size={16} /> View Code
                  </a>
                ) : (
                  <button disabled className="px-5 py-2.5 rounded-lg bg-slate-800/50 text-slate-500 font-semibold text-sm flex items-center gap-2 cursor-not-allowed border border-slate-800">
                    <Github size={16} /> Repository Private
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Main Homepage */
          <>
            {/* HERO SECTION */}
            <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  AVAILABLE FOR OPPORTUNITIES
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-medium text-slate-400">Hi, I'm Shivam Verma.</h2>
                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400">
                    Software Developer
                  </h1>
                  <p className="text-base sm:text-lg text-cyan-400 font-mono font-medium">
                    B.Tech IT Student • Problem Solver • Developer
                  </p>
                </div>

                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  I build practical software solutions, solve programming problems, and explore modern technologies to create useful applications.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#projects"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2"
                  >
                    Explore My Projects <ChevronRight size={16} />
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personalInfo.resumePdfUrl}
                    download
                    className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-sm transition-all flex items-center gap-2"
                  >
                    <FileText size={16} /> Download Resume
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 pt-4 text-slate-400">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-500">Connect:</span>
                  <a href={PORTFOLIO_DATA.personalInfo.socials.github || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={PORTFOLIO_DATA.personalInfo.socials.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={PORTFOLIO_DATA.personalInfo.socials.leetcode || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-mono font-bold text-sm">
                    LC
                  </a>
                  <a href={PORTFOLIO_DATA.personalInfo.socials.codechef || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-mono font-bold text-sm">
                    CC
                  </a>
                </div>
              </div>

              {/* Photo & Terminal Column */}
              <div className="lg:col-span-5 space-y-6">
                {/* PROFILE PHOTO CARD */}
                {
//            
<div className="flex justify-center">
  <div className="relative group">
    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-70 blur group-hover:opacity-100 transition duration-500"></div>
    <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-cyan-400/50 bg-slate-900 flex items-center justify-center shadow-2xl">
      {PORTFOLIO_DATA.personalInfo.photoUrl ? (
        <img 
          src={PORTFOLIO_DATA.personalInfo.photoUrl} 
          alt="Shivam Verma" 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          style={{ objectPosition: 'center 15%' }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
      ) : null}
      <div className="hidden w-full h-full flex-col items-center justify-center text-slate-500">
        <User size={48} />
        <span className="text-xs font-mono mt-1">Photo Placeholder</span>
      </div>
    </div>
  </div>
</div>


                }

                <Terminal />
              </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h2 className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">01. About Me</h2>
                <h3 className="text-3xl font-extrabold">Professional Overview</h3>
                <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                  I am a B.Tech Information Technology student at ABES Engineering College, Ghaziabad (Expected Graduation 2027) with a current CGPA of 8.02. I specialize in core software development, algorithmic problem solving, and modern web stack architectures.
                </p>

                <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                  {[
                    "Software Development", "Programming & DSA", "Problem Solving",
                    "Application Dev", "Web Technologies", "AI Applications"
                  ].map((interest) => (
                    <div key={interest} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-2">
                      <Sparkles size={14} className="text-cyan-400 shrink-0" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SKILLS SECTION */}
            <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
              <div className="text-center space-y-2 mb-12">
                <h2 className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">02. Expertise</h2>
                <h3 className="text-3xl font-extrabold">Technical Skills</h3>
              </div>

              {/* Skill Category Tabs */}
              <div className="flex justify-center gap-2 mb-8 flex-wrap">
                {Object.keys(PORTFOLIO_DATA.skills).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveSkillCat(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      activeSkillCat === cat 
                        ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20' 
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
                {PORTFOLIO_DATA.skills[activeSkillCat].map((skill) => (
                  <div 
                    key={skill} 
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all text-center group cursor-default"
                  >
                    <span className="font-mono font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
              <div className="text-center space-y-2 mb-12">
                <h2 className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">03. Portfolio</h2>
                <h3 className="text-3xl font-extrabold">Project Experience</h3>
              </div>

              {/* Search & Filter Controls */}
              <div className="max-w-3xl mx-auto mb-10 space-y-4">
                <div className="relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search projects by name or tech..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  {['All', 'AI', 'Web', 'Backend', 'Database'].map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveTab(category.toLowerCase())}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeTab === category.toLowerCase()
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Grid */}
              {filteredProjects.length === 0 ? (
                <div className="text-center py-16 text-slate-400 text-sm font-mono">
                  No projects found. Try another keyword.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      className={`group rounded-2xl border ${project.id === 'spendwise-ai' ? 'border-cyan-500/50 shadow-xl shadow-cyan-500/10' : 'border-slate-800'} bg-slate-900/60 p-6 flex flex-col justify-between hover:border-cyan-500/80 transition-all duration-300 hover:-translate-y-1`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            {project.category[0]}
                          </span>
                          {project.featured && (
                            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                              Featured
                            </span>
                          )}
                        </div>

                        <h4 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                        <button
                          onClick={() => navigate(`/projects/${project.slug}`)}
                          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                        >
                          View Details <ChevronRight size={14} />
                        </button>

                        <div className="flex items-center gap-2">
                          {project.liveDemo ? (
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-1.5 text-slate-400 hover:text-cyan-400" title="Live Demo">
                              <ExternalLink size={16} />
                            </a>
                          ) : (
                            <span className="text-[11px] text-slate-600 font-mono">Demo N/A</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* ACHIEVEMENTS & CODING SECTION */}
            <section id="coding" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
              <div className="text-center space-y-2 mb-12">
                <h2 className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">04. Coding & Problem Solving</h2>
                <h3 className="text-3xl font-extrabold">Competitive Programming Profile</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* LeetCode Card */}
                <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all text-center space-y-4">
                  <div className="text-4xl sm:text-5xl font-black text-cyan-400 font-mono">
                    150+
                  </div>
                  <div className="text-base font-semibold text-slate-200">
                    LeetCode Problems Solved
                  </div>
                  <div>
                    {PORTFOLIO_DATA.personalInfo.socials.leetcode ? (
                      <a 
                        href={PORTFOLIO_DATA.personalInfo.socials.leetcode} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 text-xs font-semibold transition-all"
                      >
                        Open Profile <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-slate-500">Profile URL Pending</span>
                    )}
                  </div>
                </div>

                {/* CodeChef Card */}
                <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all text-center space-y-4">
                  <div className="text-4xl sm:text-5xl font-black text-cyan-400 font-mono">
                    800+
                  </div>
                  <div className="text-base font-semibold text-slate-200">
                    CodeChef Problems Completed
                  </div>
                  <div>
                    {PORTFOLIO_DATA.personalInfo.socials.codechef ? (
                      <a 
                        href={PORTFOLIO_DATA.personalInfo.socials.codechef} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 text-xs font-semibold transition-all"
                      >
                        Open Profile <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-slate-500">Profile URL Pending</span>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* CERTIFICATIONS */}
            <section id="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
              <div className="text-center space-y-2 mb-12">
                <h2 className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">05. Credentials</h2>
                <h3 className="text-3xl font-extrabold">Certifications</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                    <Award size={20} className="text-cyan-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-200 text-sm">{cert.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* EDUCATION TIMELINE */}
            <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
              <div className="text-center space-y-2 mb-12">
                <h2 className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">06. Education</h2>
                <h3 className="text-3xl font-extrabold">Academic Timeline</h3>
              </div>

              <div className="max-w-2xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
                {PORTFOLIO_DATA.educationTimeline.map((item, idx) => (
                  <div key={idx} className="relative pl-10">
                    <div className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-slate-950" />
                    <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-xs font-mono text-cyan-400 font-bold">{item.year}</span>
                      <h4 className="text-lg font-bold text-slate-200 mt-1">{item.degree}</h4>
                      <p className="text-sm text-slate-400 mt-0.5">{item.institution}</p>
                      <span className="inline-block mt-3 text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                        {item.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
              <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
                <h2 className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">07. Connect</h2>
                <h3 className="text-3xl font-extrabold">Let's Connect</h3>
                <p className="text-slate-400 text-sm">
                  Have an opportunity, project, or idea? I'd be happy to connect.
                </p>
              </div>

              <div className="max-w-xl mx-auto bg-slate-900/80 border border-slate-800 p-8 rounded-2xl space-y-6">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = `mailto:${PORTFOLIO_DATA.personalInfo.email}`;
                  }} 
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Name</label>
                    <input required type="text" placeholder="Your Name" className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Email</label>
                    <input required type="email" placeholder="your@email.com" className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                    <textarea required rows={4} placeholder="Your message..." className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 text-sm"></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20">
                    Send Message
                  </button>
                </form>

                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-cyan-400" />
                    <span>{PORTFOLIO_DATA.personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-cyan-400" />
                    <span>{PORTFOLIO_DATA.personalInfo.phone}</span>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 relative z-10 font-mono">
        <p>© 2026 {PORTFOLIO_DATA.personalInfo.name}. All rights reserved.</p>
      </footer>

      {/* BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-cyan-500 text-slate-950 shadow-xl hover:bg-cyan-400 transition-all"
          aria-label="Back to Top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}