import React, { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Mail, Code, Video, Palette } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX - window.innerWidth / 2) / 40,
      y: (e.clientY - window.innerHeight / 2) / 40,
    });
  };

  const profile = {
    name: "Vivian",
    lastName: "Bangcoyo",
    title: "UI/UX Designer & Front-End Developer",
    location: "Bukidnon, Philippines",
    email: "vivianbangcoyo@gmail.com",
    about: `I bridge the gap between creative vision and technical execution. Specializing in UI/UX Design and Multimedia Arts, I craft high-impact digital experiences through a blend of aesthetic precision and functional code.`,
    socials: {
      github: "https://github.com/Potshisami",
      mail: "vivianbangcoyo@gmail.com"
    },
    resumeLink: "https://drive.google.com/file/d/1t7ogBrPV3adn_Oh_DgAeJX1c6JshpeGV/view?usp=sharing"
  };

  const projects = [
    {
        title: "LegalITies",
        category: "UI/UX",
        description: "3rd Place DigiMC 2025. A legal document management system for the Malaybalay City's Legal office that focused on optimizing the law office workflow.",
        tags: ["Figma"],
        icon: <Code className="w-5 h-5" />,
        role: "Lead UI/UX Designer & Front-End Developer",
        link: "https://www.figma.com/design/YzNZ2JM78AQQP44OwX8RnJ/MC-LEGAL-OFFICE?node-id=0-1&t=GwC2zOppc9q1tFO3-1",
        previewImage: "/images/legalities-preview.png"
    },
    {
        title: "EcoQuest",
        category: "UI/UX",
        description: "An environmental gamification platform designed to encourage sustainable living habits through interactive challenges.",
        tags: ["Mobile App", "Figma"],
        icon: <Code className="w-5 h-5" />,
        role: "Lead UI/UX Designer & Front-End Developer",
        link: "https://www.figma.com/design/9kABlns2XXdRi6nqX4NSk2/EcoQuest?node-id=0-1&t=yBC8YJTHyvqVeNcB-1",
        previewImage: "/images/ecoquest-preview.png"
    },
    {
        title: "BukSU Smart Governance",
        category: "Video",
        description: "Highlights the commitment of Smart Governance at BukSU, driving institutional excellence through digital transformation.",
        tags: ["After Effects", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        link: "https://drive.google.com/file/d/1cJgQ-UQ0NMOl5kvoAqlv2VxB9Leml0lF/view?usp=drive_link",
        role: "Lead Editor & Motion Designer"
    },
    {
        title: "Kuripot Chronicles",
        category: "UI/UX",
        description: "A witty and student-friendly Budget & Allowance Tracker Android App built using Java in Android Studio.",
        role: "Lead UI/UX Designer & Front-End Developer",
        tags: ["Mobile App", "Figma"],
        icon: <Palette className="w-5 h-5" />,
        link: "https://www.figma.com/design/OFIW2HhNDfjCAOz6ChItoP/Kuripot-Chronicles?node-id=0-1&t=IwZQBwS1n4Haron6-1",
        previewImage: "/images/kuripot-preview.png"
    },
    {
        title: "Kaamulan 2025",
        category: "Video",
        description: "Promotional video exploring Bukidnon’s Kaamulan Festival and its seven indigenous tribes.",
        role: "Lead Editor",
        tags: ["Videography", "Davinci Resolve", "Capcut"],
        icon: <Video className="w-5 h-5" />,
        link: "https://drive.google.com/file/d/1cJgQ-UQ0NMOl5kvoAqlv2VxB9Leml0lF/view?usp=drive_link",
        previewImage: "/images/kuripot-preview.png"
    },
    {
        title: "Calendar",
        category: "Graphics",
        description: "Innovative calendar design for digital and print multimedia engagement.",
        role: "Graphic Designer",
        tags: ["Canva", "Calendar"],
        icon: <Palette className="w-5 h-5" />,
        link: "https://simplebooklet.com/embed.php?wpKey=1S39rtpU9pSKwGzAqLHfpc&source=embed",
        previewImage: "/images/kuripot-preview.png"
    }
  ];

  const skillCategories = [
    { title: "Design & Creative", skills: ["UI/UX (Figma)", "Graphic Design", "Motion Graphics", "Video Editing"] },
    { title: "Media Production", skills: ["Videography", "Photography", "Event Documentation", "Photo/Video Editing"] },
    { title: "Tools", skills: ["Adobe Photoshop", "Illustrator", "After Effects", "DaVinci Resolve", "CapCut", "Canva", "OBS Studio"] },
    { title: "Web Development", skills: ["React", "Tailwind CSS", "Bootstrap", "Basic JS/HTML/CSS"] },
    { title: "Marketing & Branding", skills: ["Social Media Management", "Content Strategy", "Brand Identity"] }
  ];

  const achievements = [
    {
        title: "3rd Place - DigiMC 2025",
        issuer: "DigiMC Reverse Pitch Competition",
        description: "Recognized for 'LegalITies' in the Reverse Pitch Competition.",
        link: "https://buksu.edu.ph/2025/11/10/buksu-it-digital-solution-finished-third-at-digimc-2025-reverse-pitch-competition/",
        previewImage: "/images/digimc2025.jpg",
        type: "Achievement"
    },
    {
        title: "Capture and Create Workshop",
        issuer: "Bukidnon Business Summit 2025",
        link: "https://drive.google.com/file/d/1uEuZJT_AHi0XLUAeg9aOX8xifUjSjhTm/preview",
        type: "Certificate"
    },
    {
        title: "Fundamentals of Marketing",
        issuer: "DICT",
        link: "https://drive.google.com/file/d/19_lyzaioDDcXMH7abT-IWDlVO1F8DyWU/preview",
        type: "Certificate"
    },
    {
        title: "Principles of Web Development",
        issuer: "DICT",
        link: "https://drive.google.com/file/d/1OgRoCghp68DCdfi48Y3yuDvq3J8taj4I/preview",
        type: "Certificate"
    },
    {
        title: "UI/UX Mastery",
        issuer: "DICT",
        link: "https://drive.google.com/file/d/1jY9HUntBU4q3AhCUywlzhOHPWJttGJAN/preview",
        type: "Certificate"
    }
  ];

  const categories = ['All', 'UI/UX', 'Graphics', 'Video'];
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;
  const currentFiltered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const displayedProjects = currentFiltered.slice(0, visibleCount);

  return (
    <div onMouseMove={handleMouseMove} className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500/30 font-sans">
      
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center fixed w-full z-50 backdrop-blur-md bg-slate-950/50">
        <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">V.B.</span>
        <div className="space-x-8 text-sm uppercase tracking-widest font-medium">
          <a href="#work" className="hover:text-purple-400 transition-colors text-slate-400">Work</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors text-slate-400">Contact</a>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-10 md:px-24 relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500 rounded-full"
              initial={{ x: Math.random() * 1920, y: Math.random() * 1080, opacity: 0.6 }}
              animate={{ x: [null, Math.random() * 200 - 100], y: [null, Math.random() * 200 - 100] }}
              transition={{ duration: Math.random() * 20 + 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 z-10 pt-20">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="flex-1 text-left">
            <p className="text-purple-400 font-mono mb-4 text-sm tracking-widest uppercase font-bold">Creative technologist</p>
            <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-none text-white uppercase italic">
              Vivian <br/><span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">Bangcoyo.</span>
            </h1>
            <p className="max-w-xl text-slate-400 leading-relaxed text-lg mb-10 border-l-2 border-purple-500/30 pl-6">{profile.about}</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#work" className="px-10 py-5 bg-white text-black font-black rounded-2xl transition-all uppercase tracking-widest text-xs">Explore Work</a>
              <button onClick={() => setIsResumeOpen(true)} className="px-10 py-5 border border-slate-800 text-white font-bold rounded-2xl transition-all uppercase tracking-widest text-xs hover:border-purple-500">Resume</button>
            </div>
          </motion.div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] rounded-full p-2 bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-transparent shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-slate-950 bg-[#8b5cf6] relative">
                <img src="/images/profile-transparent.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="py-24 px-10 md:px-24 bg-slate-950 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h3 className="text-3xl font-bold border-l-4 border-purple-500 pl-4 uppercase tracking-tighter">My Creations</h3>
          <div className="flex space-x-2 mt-6 md:mt-0 bg-slate-800/50 p-1.5 rounded-2xl border border-slate-700">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${filter === cat ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white' : 'text-slate-400 hover:text-white'}`}>{cat}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {displayedProjects.map((project) => (
              <motion.div layout key={project.title} onClick={() => setSelectedProject(project)} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="group relative cursor-pointer overflow-hidden rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-purple-500 transition-all flex flex-col h-full shadow-xl">
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold">{project.category}</span>
                    <div className="text-purple-400 opacity-50">{project.icon}</div>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">{project.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">{project.description}</p>
                </div>
                <div className="p-8 pt-0 flex flex-wrap gap-2 mb-6">
                  {project.tags?.map(tag => <span key={tag} className="px-2 py-1 text-[10px] bg-slate-800 text-slate-400 rounded-md border border-slate-700 font-mono">#{tag}</span>)}
                </div>
                <div className="px-8 pb-8 flex items-center justify-between border-t border-slate-800 pt-6 mt-auto">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-purple-400 transition-colors">View Details</span>
                    <div className="p-2 rounded-full bg-slate-800 group-hover:bg-purple-600 transition-colors"><ExternalLink size={16} className="text-white" /></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {currentFiltered.length > visibleCount && (
          <div className="flex justify-center mt-20">
            <button onClick={() => setVisibleCount(prev => prev + 6)} className="px-12 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-white font-bold uppercase tracking-widest text-xs hover:border-purple-500 transition-all">View More Projects ↓</button>
          </div>
        )}
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-10 md:px-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-[1400px] mx-auto">
          <h3 className="text-4xl font-black mb-16 text-white uppercase italic">My Current <span className="text-purple-500">Tech Stack.</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-purple-500/30 transition-all">
                <h4 className="text-purple-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => <span key={skill} className="px-3 py-1.5 bg-slate-800/50 text-slate-300 text-[10px] rounded-xl border border-slate-700">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-10 md:px-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-black mb-16 text-white uppercase italic">Certificates & <span className="text-purple-500">Accolades.</span></h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {achievements[0] && (
              <div onClick={() => window.open(achievements[0].link, "_blank")} className="lg:col-span-7 bg-slate-900/40 border border-purple-500/30 rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl">
                <div className="relative h-64 md:h-96 overflow-hidden bg-slate-900">
                  <img src={achievements[0].previewImage} alt="Featured" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-8">
                    <span className="px-4 py-1 bg-purple-500 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">Featured Achievement</span>
                  </div>
                </div>
                <div className="p-10">
                  <h4 className="text-3xl font-black text-white italic mb-4">{achievements[0].title}</h4>
                  <p className="text-slate-400 text-lg">{achievements[0].description}</p>
                </div>
              </div>
            )}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.slice(1).map((item, idx) => (
                <div key={idx} onClick={() => setSelectedCert(item)} className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between hover:border-purple-500 transition-all cursor-pointer shadow-lg">
                  <h5 className="text-md font-bold text-white group-hover:text-purple-300">{item.title}</h5>
                  <span className="text-[10px] text-slate-500 mt-8 uppercase font-bold tracking-widest">View Certificate <ExternalLink size={12} className="inline ml-1" /></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-32 px-10 text-center border-t border-slate-900 bg-slate-950">
        <h2 className="text-5xl font-black text-white italic uppercase mb-12">Let's Create <span className="text-purple-500">Together.</span></h2>
        <div className="flex justify-center space-x-8 mb-12">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-slate-900 border border-slate-800 text-white hover:text-purple-400 transition-all shadow-xl"><Github size={24}/></a>
          <a href={gmailLink} target="_blank" className="p-4 rounded-full bg-slate-900 border border-slate-800 text-white hover:text-purple-400 transition-all shadow-xl"><Mail size={24}/></a>
        </div>
        <a href={gmailLink} target="_blank" className="inline-block px-12 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black rounded-2xl uppercase tracking-widest text-sm shadow-2xl hover:scale-105 transition-transform">Send an Email</a>
      </footer>

      {/* RESTORED: Project Modal Logic */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-slate-900 rounded-3xl w-full max-w-6xl relative border border-slate-800 flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 text-white/50 hover:text-purple-400 transition-colors p-2 bg-slate-950/50 rounded-full backdrop-blur-md">
                <X size={24}/>
              </button>
              
              <div className="w-full md:w-2/3 bg-black flex items-center justify-center overflow-hidden relative min-h-[300px]">
                {selectedProject.category === "Video" ? (
                    <iframe src={selectedProject.link.replace('/view', '/preview')} className="w-full h-full aspect-video" allow="autoplay" title="Video Preview"></iframe>
                ) : selectedProject.link.includes("figma.com") ? (
                    <iframe className="w-full h-full border-0 bg-slate-900" src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(selectedProject.link)}`} allowFullScreen loading="lazy"></iframe>
                ) : selectedProject.link.includes("simplebooklet.com") ? (
                    <iframe src={selectedProject.link} className="w-full h-full border-0" allowFullScreen title="Graphics Preview"></iframe>
                ) : (
                    <img src={selectedProject.previewImage} alt={selectedProject.title} className="w-full h-full object-cover" />
                )}
              </div>

              <div className="w-full md:w-1/3 p-10 overflow-y-auto bg-slate-900 flex flex-col border-t md:border-t-0 md:border-l border-slate-800">
                <span className="text-purple-400 text-[10px] font-mono uppercase tracking-widest mb-2 font-bold">{selectedProject.category} Project</span>
                <h3 className="text-3xl font-bold mb-6 text-white">{selectedProject.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-8">{selectedProject.description}</p>
                <div className="border-t border-slate-800 pt-8 mb-8">
                  <h4 className="text-slate-500 text-[10px] font-mono uppercase tracking-widest mb-2 font-bold">Your Role</h4>
                  <p className="text-slate-200 text-sm font-medium">{selectedProject.role}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.tags?.map(tag => <span key={tag} className="text-purple-300 text-[11px] italic font-mono">#{tag}</span>)}
                </div>
                <button onClick={() => window.open(selectedProject.link, "_blank")} className="mt-auto w-full py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg">
                  Open Live Link <ExternalLink size={18}/>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10" onClick={() => setIsResumeOpen(false)}>
              <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-slate-900 rounded-3xl w-full max-w-5xl h-[90vh] relative border border-slate-800 overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                  <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900">
                    <h3 className="text-xl font-bold text-white uppercase italic tracking-tighter">Curriculum Vitae</h3>
                    <div className="flex items-center gap-4">
                        <a href={profile.resumeLink} target="_blank" rel="noreferrer" className="text-sm text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1">Download PDF <ExternalLink size={14}/></a>
                        <button onClick={() => setIsResumeOpen(false)} className="text-white hover:text-purple-400"><X size={20}/></button>
                    </div>
                  </div>
                  <iframe src={profile.resumeLink.replace('/view?usp=sharing', '/preview')} className="w-full h-full border-0" title="Resume Preview"></iframe>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[120] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10" onClick={() => setSelectedCert(null)}>
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-slate-900 rounded-3xl w-full max-w-4xl h-[85vh] relative border border-slate-800 overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
              <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900">
                <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                <button onClick={() => setSelectedCert(null)} className="text-white hover:text-purple-400 transition-colors"><X size={20}/></button>
              </div>
              <iframe src={selectedCert.link} className="w-full h-full border-0" title="Certificate View"></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Portfolio;