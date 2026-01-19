import React, { useState, useRef } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Linkedin, Mail, Code, Video, Palette } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    {
        title: "LegalITies",
        category: "UI/UX",
        description: "3rd Place DigiMC 2025. A legal document management system.",
        tags: ["React", "Tailwind", "Figma"],
        icon: <Code className="w-5 h-5" />,
        link: "https://www.figma.com/design/YzNZ2JM78AQQP44OwX8RnJ/MC-LEGAL-OFFICE?node-id=0-1&t=GwC2zOppc9q1tFO3-1",
        linkType: "external" 
    },
    {
        title: "BukSU Good Governance Area 1",
        category: "Video",
        description: "Visual identity and motion graphics for youth events.",
        tags: ["After Effects", "Premiere"],
        icon: <Video className="w-5 h-5" />,
        link: "https://drive.google.com/file/d/1cJgQ-UQ0NMOl5kvoAqlv2VxB9Leml0lF/view?usp=drive_link",
        linkType: "modal"
    },
    {
        title: "Kuripot Chronicles",
        category: "Graphics",
        description: "Multimedia storytelling for digital engagement.",
        tags: ["Photography", "Design"],
        icon: <Palette className="w-5 h-5" />,
        link: "YOUR_PORTFOLIO_LINK_OR_DRIVE_HERE",
        linkType: "external"
    }
  ];

  const categories = ['All', 'UI/UX', 'Graphics', 'Video'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleProjectClick = (project) => {
    if (project.linkType === "modal") {
      setSelectedVideo(project.link);
    } else {
      window.open(project.link, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500/30 font-sans">
      
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center fixed w-full z-50 backdrop-blur-md bg-slate-950/50">
        <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">V.B.</span>
        <div className="space-x-8 text-sm uppercase tracking-widest font-medium">
          <a href="#work" className="hover:text-purple-400 transition-colors">Work</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-10 md:px-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <p className="text-purple-400 font-mono mb-4 text-lg tracking-widest">Hi, my name is</p>
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
            Vivian <span className="text-slate-500 italic">Bangcoyo.</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8 leading-tight max-w-4xl">
            I bridge the gap between <span className="text-white underline decoration-purple-500 underline-offset-8">design</span> and <span className="text-white underline decoration-fuchsia-500 underline-offset-8">code</span>.
          </h2>
          <div className="flex space-x-4">
            <a href="#work" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-900/20 transform hover:-translate-y-1">
              View My Work
            </a>
          </div>
        </motion.div>
      </section>

      {/* Featured Work / Gallery */}
      <section id="work" className="py-24 px-10 md:px-24 bg-slate-900/30">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h3 className="text-3xl font-bold border-l-4 border-purple-500 pl-4">My Creations</h3>
            <div className="flex space-x-2 mt-6 md:mt-0 bg-slate-800/50 p-1.5 rounded-2xl backdrop-blur-sm border border-slate-700">
              {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${filter === cat ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    {cat}
                  </button>
              ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project) => (
                    <motion.div 
                        layout
                        key={project.title}
                        onClick={() => handleProjectClick(project)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="group relative cursor-pointer overflow-hidden rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all duration-500"
                    >
                        <div className="aspect-video w-full bg-slate-800 flex items-center justify-center overflow-hidden">
                            <div className="text-slate-600 italic text-sm group-hover:scale-110 group-hover:text-purple-400 transition-all duration-700">
                                View {project.category} 
                            </div>
                        </div>

                        <div className="p-8">
                            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.3em] font-bold">{project.category}</span>
                            <h4 className="text-2xl font-bold mt-2 group-hover:text-purple-300 transition-colors">{project.title}</h4>
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex gap-3 text-purple-400">
                                    {project.icon}
                                </div>
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                                  <ExternalLink className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
      </section>

      {/* Video Modal Popup */}
      {/* Video Modal Popup */}
        <AnimatePresence>
        {selectedVideo && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedVideo(null)}
            >
            <motion.div 
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-slate-900 rounded-3xl w-full max-w-4xl relative border border-slate-800 flex flex-col max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()} 
            >
                {/* Close Button */}
                <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 text-white/50 hover:text-purple-400 transition-colors p-2 bg-slate-950/50 rounded-full backdrop-blur-md"
                >
                <X size={24}/>
                </button>
                
                {/* Video Area */}
                <div className="aspect-video w-full bg-black flex-shrink-0">
                <iframe 
                    src={selectedVideo.replace('/view', '/preview')} 
                    className="w-full h-full" 
                    allow="autoplay"
                    title="Video Preview"
                ></iframe>
                </div>

                {/* Description Portion */}
                <div className="p-8 overflow-y-auto custom-scrollbar bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-mono uppercase tracking-widest rounded-full">
                    Project Insight
                    </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    Project Overview
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                    {/* This finds the description from your projects array based on the video link */}
                    {projects.find(p => p.link === selectedVideo)?.description || "No description provided for this project."}
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
                    <div>
                    <h4 className="text-slate-500 text-xs font-mono uppercase tracking-tighter mb-2 font-bold">Role</h4>
                    <p className="text-slate-300 text-sm">Lead Editor & Motion Designer</p>
                    </div>
                    <div>
                    <h4 className="text-slate-500 text-xs font-mono uppercase tracking-tighter mb-2 font-bold">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                        {projects.find(p => p.link === selectedVideo)?.tags.map(tag => (
                        <span key={tag} className="text-purple-300 text-[10px] italic">#{tag}</span>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>

      {/* Footer */}
      <section id="contact" className="py-32 px-10 text-center relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-purple-900/10 blur-[100px] -z-10"></div>
        <h2 className="text-5xl font-black mb-4">Let's Create Together</h2>
        <p className="text-slate-400 mb-12 max-w-md mx-auto">Looking for a creative front-end intern for Sprobe Inc. Let's talk about design and code.</p>
        
        <div className="flex justify-center space-x-8 mb-12">
            <a href="#" className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-purple-500 hover:text-purple-400 transition-all"><Github size={24}/></a>
            <a href="#" className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-purple-500 hover:text-purple-400 transition-all"><Linkedin size={24}/></a>
            <a href="mailto:2201103762@student.buksu.edu.ph" className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-purple-500 hover:text-purple-400 transition-all"><Mail size={24}/></a>
        </div>

        <a href="mailto:2201103762@student.buksu.edu.ph" className="inline-block px-12 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-purple-900/40 uppercase tracking-widest text-sm">
          Send an Email
        </a>
      </section>
    </div>
  );
};

export default Portfolio;