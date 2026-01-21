import React, { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Mail, Code, Video, Palette, ChevronLeft, ChevronRight, Facebook, Sparkles, Box, Triangle, Circle } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX - window.innerWidth / 2) / 40,
      y: (e.clientY - window.innerHeight / 2) / 40,
    });
  };

  useEffect(() => {
    setCurrentImgIdx(0);
  }, [selectedProject]);

  const profile = {
    name: "Vivian",
    lastName: "Bangcoyo",
    title: "UI/UX Designer & Front-End Developer",
    socials: {
      github: "https://github.com/Potshisami",
      mail: "vivianbangcoyo@gmail.com",
      facebook: "https://www.facebook.com/PotshIsamixzxc/"
    },
    about: `I bridge the gap between creative vision and technical execution. Specializing in UI/UX Design and Multimedia Arts, I craft high-impact digital experiences through a blend of aesthetic precision and functional code.`,
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
        title: "BukSU Smart Governance",
        category: "Video",
        description: "Highlights the commitment of Smart Governance at BukSU, driving institutional excellence through digital transformation.",
        tags: ["After Effects", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        videoSrc: "/videos/BukSU-SmartGovernance.mp4",
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
        videoSrc: "/videos/KAAMULAN-REELS.mp4",
        previewImage: "/images/kuripot-preview.png"
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
        title: "DYD Katorse Day 1 Highlights",
        category: "Video",
        description: "Highlights video capturing the energy and key moments of Day 1 at the DYD Katorse event.",
        role: "Same Day Editor",
        tags: ["Videography", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        videoSrc: ["/videos/DYDSDE-DAY1.mp4"],
    },
    {
        title: "DYD Katorse Day 2 Highlights",
        category: "Video",
        description: "Highlights video capturing the energy and key moments of Day 2 at the DYD Katorse event.",
        role: "Same Day Editor",
        tags: ["Videography", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        videoSrc: ["/videos/DYDSDE-DAY2.mp4"],
    },
    {
        title: "DYD Katorse Day 3 Highlights",
        category: "Video",
        description: "Highlights video capturing the energy and key moments of Day 2 at the DYD Katorse event.",
        role: "Same Day Editor",
        tags: ["Videography", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        videoSrc: ["/videos/DYDSDE-DAY3.mp4"],
    },
    {
        title: "JEMIMAH FoodHub Promotional Video",
        category: "Video",
        description: "A promotional video for JEMIMAH FoodHub, highlighting their renowned dishes and inviting viewers to experience their must try dishes.",
        role: "Videographer & Editor",
        tags: ["Videography", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        videoSrc: ["/videos/JEMIMAH-PROMOTIONAL.mp4"],
    },
    {
        title: "39th CFC Bukidnon Anniversary Moving Logo",
        category: "Video",
        description: "A dynamic moving logo animation created for the 39th anniversary of CFC Bukidnon.",
        role: "Motion Designer",
        tags: ["After Effects"],
        icon: <Video className="w-5 h-5" />,
        videoSrc: ["/videos/MOVINGLOGO-39THANNIV.mp4"],
    },
    {
        title: "39th CFC Bukidnon Anniversary Same Day Edit",
        category: "Video",
        description: "A same day edit video capturing the highlights and memorable moments of the 39th anniversary celebration of CFC Bukidnon.",
        role: "Same Day Editor",
        tags: ["Videography", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        videoSrc: ["/videos/SDE-CFCANNIV2023.mov"],
    },
    {
        Title: "Project Worship Grace Abounds Moving Logo",
        category: "Video",
        description: "A dynamic moving logo animation created for Project Worship Grace Abounds event.",
        role: "Motion Designer",
        tags: ["After Effects"],
        icon: <Video className="w-5 h-5" />,
        videoSrc: ["/videos/MovingLogo-GraceAbounds.mp4"]
    },
    {
        title: "San Miguel Beer Night & Kadayawan Festival Highlights",
        category: "Video",
        description: "A highlights video capturing the energy and key moments of the San Miguel Beer Kadayawan Festival.",
        role: "Videographer & Editor",
        tags: ["Videography", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        videoSrc: ["/videos/HIGHLIGHTS-SMBFINAL.mp4"],
    },
    {
        title: "YFC Bukidnon Conference 2025 Same Day Edit",
        category: "Video",
        description: "A highlights video capturing the energy and key moments of the YFC Bukidnon Conference 2025.",
        role: "Same Day Editor",
        tags: ["Video Editing", "Davinci Resolve", "After Effects"],
        icon: <Video className="w-5 h-5" />,
        videoSrc: ["/videos/BCON2025-HIGHLIGHTS.mp4"],
    },
    {
        title: "RV App",
        category: "UI/UX",
        description: "Our 1st Year mobile e-commerce application prototype that aims to provide a seamless shopping experience for users.",
        role: "Lead UI/UX Designer",
        tags: ["Figma"],
        icon: <Palette className="w-5 h-5" />,
        link: "https://www.figma.com/design/PEyHt9JhAqfTcg48RSi7rb/Untitled--Copy-?node-id=0-1&t=q1aEeyasd9wFEmmb-1",
        previewImage: "/images/rvapp-preview.png"
    },
    {
        title: "BukSU Engage",
        category: "UI/UX",
        description: "BukSU Engage is a University Training and Seminar Management System designed to streamline the organization and administration of training sessions and seminars within Bukidnon State University.     ",
        role: "Lead UI/UX Designer",
        tags: ["Figma"],
        icon: <Palette className="w-5 h-5" />,
        link: "https://www.figma.com/design/JySNE4HEg9epC2uNdW6B4i/BukSU-Engage?node-id=0-1&t=uzsrVS7qMRqr1Jau-1",
        previewImage: "/images/rvapp-preview.png"
    },

    {
        title: "Youth Camp Pubmat",
        category: "Graphics",
        description: "A vibrant promotional poster for Bukidnon Youth Camp 2025, capturing the spirit of roots and growth.",
        role: "Graphic Designer",
        tags: ["Canva"],
        icon: <Palette className="w-5 h-5" />,
        previewImage: "/images/graphics-1.png",
        link: "/images/graphics-1.png",
    },
    {
        title: "Leadership Tabloid",
        category: "Graphics",
        description: "A young Filipino leader shares how empathy, integrity, and innovation guide their mission to serve others and shape the future.",
        role: "Layout Artist",
        tags: ["Adobe Canva"],
        icon: <Palette className="w-5 h-5" />,
        previewImage: "/images/Tabloid-1.png",
        images: [
            "/images/Tabloid-1.png",
            "/images/Tabloid-2.png",
            "/images/Tabloid-3.png",
            "/images/Tabloid-4.png",
            "/images/Tabloid-5.png",
            "/images/Tabloid-6.png",
            "/images/Tabloid-7.png",
            "/images/Tabloid-8.png"
        ],
    },
    {   
        title: "Digital Marketing Informational Material",
        category: "Graphics",
        description: "A young Filipino leader shares how empathy, integrity, and innovation guide their mission to serve others and shape the future.",
        role: "Layout Artist",
        tags: ["Photoshop", "Canva"],
        icon: <Palette className="w-5 h-5" />,
        previewImage: "/images/DM-1.jpg",
        images: [
            "/images/DM-1.jpg",
            "/images/DM-1.1.jpg",
            "/images/DM-1.2.jpg",
            "/images/DM-1.3.jpg",
            "/images/DM-1.4.jpg",
            "/images/DM-1.5.jpg",
            "/images/DM-1.6.jpg"
        ],
    },
    {   
        title: "Agriculture in Asean Brochure",
        category: "Graphics",
        role: "Layout Artist",
        tags: ["Canva"],
        icon: <Palette className="w-5 h-5" />,
        previewImage: "/images/Trifold-Asean1.png",
        images: [
            "/images/Trifold-Asean1.png",
            "/images/Trifold-Asean2.png",
        ],
    },
    {   
        title: "Digital Marketing Publication Material",
        category: "Graphics",
        description: "A young Filipino leader shares how empathy, integrity, and innovation guide their mission to serve others and shape the future.",
        role: "Layout Artist",
        tags: ["Photoshop", "Canva"],
        icon: <Palette className="w-5 h-5" />,
        previewImage: "/images/DM-4.jpg",
        images: [
            "/images/DM-4.jpg",
        ],
    },
    {   
        title: "Digital Marketing Publication Material",
        category: "Graphics",
        description: "A young Filipino leader shares how empathy, integrity, and innovation guide their mission to serve others and shape the future.",
        role: "Layout Artist",
        tags: ["Photoshop", "Canva"],
        icon: <Palette className="w-5 h-5" />,
        previewImage: "/images/DM-2.jpg",
        images: [
            "/images/DM-2.jpg",
        ],
    },  
  ];

  const skillCategories = [
    { title: "Design & Creative", skills: ["UI/UX (Figma)", "Graphic Design", "Motion Graphics", "Video Editing"] },
    { title: "Media Production", skills: ["Videography", "Photography", "Event Documentation", "Photo/Video Editing"] },
    { title: "Tools", skills: ["Adobe Photoshop", "Illustrator", "After Effects", "DaVinci Resolve", "CapCut", "Canva", "OBS Studio"] },
    { title: "Web Development", skills: ["React", "Tailwind CSS", "Bootstrap", "Javascript"] },
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
        title: "Fundamentals of Web Development",
        issuer: "DICT",
        link: "https://drive.google.com/file/d/1jY9HUntBU4q3AhCUywlzhOHPWJttGJAN/preview",
        type: "Certificate"
    },
    {
        title: "TOPCIT",
        issuer: "TOPCIT",
        link: "https://drive.google.com/file/d/1abP2JjVORRcKroYVKyzi2Ij7AAYzu_dk/preview",
        type: "Certificate"
    },
    {
        title: "P2A ASEAN Green Entrepreneurship Hackathon 2025",
        description: "Participant | 2025",
        videoSrc: "/videos/VERTIGROW.mp4",
        type: "Achievement"
    }
  ];

  const categories = ['All', 'UI/UX', 'Graphics', 'Video'];
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.socials.mail}`;
  
  const currentFiltered = projects.filter(p => filter === 'All' ? true : p.category === filter);
  const displayedProjects = filter === 'All' ? currentFiltered.slice(0, 7) : currentFiltered;

  return (
    <div onMouseMove={handleMouseMove} className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500/30 font-sans overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center fixed w-full z-50 backdrop-blur-md bg-slate-950/50">
        <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent uppercase">V.B.</span>
        <div className="space-x-8 text-sm uppercase tracking-widest font-medium">
          <a href="#work" className="hover:text-purple-400 transition-colors text-slate-400">Work</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors text-slate-400">Contact</a>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-24 relative z-10 overflow-hidden bg-slate-950">
        
        {/* Particles RESTORED in Hero Only */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              initial={{ x: Math.random() * 2000, y: Math.random() * 1000, opacity: 0.6 }}
              animate={{ x: [null, Math.random() * 200 - 100], y: [null, Math.random() * 200 - 100] }}
              transition={{ duration: Math.random() * 20 + 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 pt-24 md:pt-0 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="relative group md:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] rounded-full p-2 bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-transparent shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-slate-950 bg-[#8b5cf6] relative">
                <img src="/images/profile-transparent.png" alt="Profile" className="w-full h-full object-cover z-10 relative" />
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="flex-1 text-center md:text-left md:order-1">
            <p className="text-purple-400 font-mono mb-4 text-sm tracking-widest uppercase font-bold">UI/UX and Creative Media Enthusiast</p>
            <h1 className="text-5xl md:text-9xl font-black mb-6 tracking-tighter leading-none text-white uppercase italic">
              Vivian <br/><span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">Bangcoyo.</span>
            </h1>
            <p className="max-w-xl mx-auto md:mx-0 text-slate-400 leading-relaxed text-lg mb-10 border-l-0 md:border-l-2 border-purple-500/30 pl-0 md:pl-6">{profile.about}</p>
            <div className="flex justify-center md:justify-start gap-6">
              <motion.a whileHover={{ scale: 1.05 }} href="#work" className="px-10 py-5 bg-white text-black font-black rounded-2xl transition-all uppercase tracking-widest text-xs hover:bg-purple-500 hover:text-white">Explore</motion.a>
              <motion.button whileHover={{ scale: 1.05 }} onClick={() => setIsResumeOpen(true)} className="px-10 py-5 border border-slate-800 text-white font-bold rounded-2xl transition-all uppercase tracking-widest text-xs hover:border-purple-500">Resume</motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Artifacts Section */}
      <section id="work" className="py-32 px-6 md:px-20 bg-slate-950 relative z-10">
        
        {/* AMBIENT SIDE DECORATIONS */}
        <div className="absolute top-40 -left-20 opacity-10 pointer-events-none hidden lg:block">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
                <Box size={280} className="text-purple-500" />
            </motion.div>
        </div>
        <div className="absolute bottom-60 -right-20 opacity-10 pointer-events-none hidden lg:block">
            <motion.div animate={{ y: [0, 40, 0], rotate: [0, 15, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}>
                <Triangle size={320} className="text-fuchsia-500" />
            </motion.div>
        </div>
        <div className="absolute top-1/2 left-10 opacity-20 pointer-events-none hidden lg:block">
            <motion.div animate={{ scale: [1, 1.15, 1], x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }}>
                <Circle size={45} className="text-violet-400" />
            </motion.div>
        </div>
        <div className="absolute bottom-1/3 right-16 opacity-20 pointer-events-none hidden lg:block">
            <Sparkles size={70} className="text-purple-300 animate-pulse" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8 text-center md:text-left"
          >
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-white leading-none">My <span className="text-purple-600">Works</span></h3>
            
            <div className="flex p-1.5 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/5 shadow-2xl relative">
                {categories.map(cat => (
                <button key={cat} onClick={() => setFilter(cat)} className={`relative z-10 px-6 md:px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${filter === cat ? 'text-black' : 'text-slate-400 hover:text-white'}`}>
                    {filter === cat && (
                        <motion.div layoutId="activeFilter" className="absolute inset-0 bg-white rounded-full -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                    )}
                    {cat}
                </button>
                ))}
            </div>
          </motion.div>

          {/* DYNAMIC MASONRY FLOW ENGINE */}
          <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            <AnimatePresence mode='wait'>
              {displayedProjects.map((project, idx) => {
                const isGraphics = project.category === "Graphics";
                const isVideo = project.category === "Video";
                const isUI = project.category === "UI/UX";

                return (
                  <motion.div 
                    layout key={`${filter}-${project.title}`} 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.4, delay: idx * 0.05 }} 
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ y: -10 }}
                    className="break-inside-avoid relative group cursor-pointer rounded-[40px] overflow-hidden border border-white/5 bg-slate-900 shadow-2xl hover:border-purple-500/50 transition-all duration-700"
                  >
                    {isGraphics ? (
                      <div className="w-full h-auto overflow-hidden">
                        <img src={project.previewImage} alt={project.title} className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110" />
                      </div>
                    ) : isVideo ? (
                      <div className="relative w-full overflow-hidden bg-black">
                        <video src={Array.isArray(project.videoSrc) ? project.videoSrc[0] : project.videoSrc} autoPlay muted loop playsInline className="w-full h-auto opacity-70 group-hover:opacity-100 transition-all" />
                      </div>
                    ) : (
                      <div className="p-10 flex flex-col justify-between min-h-[380px] bg-slate-900/40 backdrop-blur-md">
                         <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">{project.icon}</div>
                         <div className="mt-12">
                           <span className="text-purple-500 font-mono text-[9px] uppercase tracking-[0.4em] font-black mb-3 block">System Interface</span>
                           <h4 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-tight group-hover:text-purple-300 transition-colors">{project.title}</h4>
                           <p className="text-slate-500 text-xs mt-4 line-clamp-3 leading-relaxed">{project.description}</p>
                         </div>
                      </div>
                    )}
                    
                    {(isGraphics || isVideo) && (
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity">
                        <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-purple-500 font-mono text-[9px] uppercase tracking-[0.4em] font-black mb-2 block">{isVideo ? "Motion" : "Art"}</span>
                            <h4 className="text-xl font-black text-white italic uppercase tracking-widest leading-tight">{project.title}</h4>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filter === 'All' && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-24 flex justify-center">
              <motion.button whileHover={{ scale: 1.05 }} onClick={() => { setFilter('Video'); setTimeout(() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' }), 100); }}
                className="group relative px-12 py-5 bg-white text-black font-black rounded-2xl uppercase tracking-widest text-xs overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-3">View More Motion Work <Video size={16}/></span>
                <div className="absolute inset-0 bg-purple-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-10 md:px-24 bg-slate-950 border-t border-white/5 relative z-10">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-black mb-16 text-white uppercase italic">Tech Stack.</motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {skillCategories.map((cat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/40 border border-white/5 p-8 rounded-[32px] hover:border-purple-500/30 transition-all group"
              >
                <h4 className="text-purple-400 font-mono text-[10px] uppercase tracking-widest mb-6 font-bold">{cat.title}</h4>
                <div className="flex flex-wrap gap-2 justify-center">{cat.skills.map(s => <span key={s} className="px-3 py-1.5 bg-white/5 text-slate-300 text-[10px] rounded-xl border border-white/5">{s}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 px-10 md:px-24 bg-slate-950 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="text-4xl font-black mb-16 text-white uppercase italic">Certificates and <span className="text-purple-500">Achievements</span></motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              onClick={() => achievements[0].link && window.open(achievements[0].link, "_blank")} 
              className="lg:col-span-7 bg-slate-900/40 border border-white/10 rounded-[40px] overflow-hidden cursor-pointer group shadow-2xl"
            >
              <div className="h-64 md:h-96 relative overflow-hidden">
                <img src={achievements[0].previewImage} alt="Award" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 opacity-80"></div>
                <div className="absolute bottom-8 left-8"><span className="px-4 py-1 bg-purple-500 text-white text-[10px] font-black rounded-full uppercase tracking-widest">Featured</span></div>
              </div>
              <div className="p-10"><h4 className="text-3xl font-black italic mb-4">{achievements[0].title}</h4><p className="text-slate-400">{achievements[0].description}</p></div>
            </motion.div>
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.slice(1).map((item, idx) => {
                const hasLink = !!item.link;
                return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 30 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      onClick={() => hasLink && setSelectedCert(item)} 
                      className={`bg-slate-900/40 border border-white/5 p-8 rounded-3xl transition-all flex flex-col justify-between shadow-xl 
                        ${hasLink ? 'hover:border-purple-500 cursor-pointer' : 'cursor-default opacity-80'}`}
                    >
                      <h5 className="text-md font-bold text-white group-hover:text-purple-300 transition-colors">{item.title}</h5>
                      <span className="text-[10px] text-slate-500 mt-8 uppercase font-bold tracking-widest flex items-center gap-2">
                        {hasLink ? <>View Certificate <ExternalLink size={12}/></> : (item.description || "Participant")}
                      </span>
                    </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-32 px-10 text-center relative z-10 border-t border-white/5 bg-slate-950">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-5xl font-black text-white italic uppercase mb-12"
        >
            Let's Create <span className="text-purple-500">Together.</span>
        </motion.h2>

        <div className="flex justify-center space-x-8 mb-12">
            <motion.a whileHover={{ y: -5 }} href={profile.socials.github} target="_blank" className="p-4 rounded-full bg-slate-900 border border-white/5 text-white hover:text-purple-400 transition-all shadow-xl"><Github size={24}/></motion.a>
            <motion.a whileHover={{ y: -5 }} href={profile.socials.facebook} target="_blank" className="p-4 rounded-full bg-slate-900 border border-white/5 text-white hover:text-blue-500 transition-all shadow-xl"><Facebook size={24}/></motion.a>
            <motion.a whileHover={{ y: -5 }} href={`mailto:${profile.socials.mail}`} className="p-4 rounded-full bg-slate-900 border border-white/5 text-white hover:text-purple-400 transition-all shadow-xl"><Mail size={24}/></motion.a>
        </div>

        <motion.a 
            whileHover={{ scale: 1.05 }} 
            href={`mailto:${profile.socials.mail}`} 
            className="inline-block px-12 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black rounded-2xl uppercase tracking-widest text-sm shadow-2xl"
        >
            Send Email
        </motion.a>
      </footer>

      {/* MODAL SYSTEM */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-slate-950/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-10" onClick={() => setSelectedProject(null)}>
            {selectedProject.category === "Graphics" ? (
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
                    <button onClick={() => setSelectedProject(null)} className="absolute -top-12 right-0 p-3 text-white/50 hover:text-white transition-colors"><X size={32}/></button>
                    <div className="relative group overflow-hidden rounded-[40px] shadow-2xl border border-white/5 bg-slate-900">
                        <AnimatePresence mode="wait"><motion.img key={currentImgIdx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={selectedProject.images ? selectedProject.images[currentImgIdx] : selectedProject.previewImage} className="max-w-full max-h-[75vh] object-contain" /></AnimatePresence>
                        {selectedProject.images?.length > 1 && (
                            <>
                                <button onClick={() => setCurrentImgIdx(p => (p === 0 ? selectedProject.images.length-1 : p-1))} className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-black/60 rounded-full text-white hover:bg-purple-600 transition-all shadow-2xl"><ChevronLeft/></button>
                                <button onClick={() => setCurrentImgIdx(p => (p === selectedProject.images.length-1 ? 0 : p+1))} className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black/60 rounded-full text-white hover:bg-purple-600 transition-all shadow-2xl"><ChevronRight/></button>
                            </>
                        )}
                    </div>
                    <h4 className="mt-8 text-white text-2xl font-black uppercase italic tracking-widest">{selectedProject.title}</h4>
                </motion.div>
            ) : (
              <motion.div initial={{ scale: 0.95, y: 40 }} animate={{ scale: 1, y: 0 }} className="bg-slate-900 rounded-[40px] w-full max-w-7xl h-[85vh] flex flex-col md:flex-row overflow-hidden border border-white/10 shadow-2xl shadow-black/50" onClick={e => e.stopPropagation()}>
                <div className="w-full md:w-3/4 bg-black flex items-center justify-center relative overflow-hidden">
                  {selectedProject.videoSrc ? (
                    <video controls autoPlay className="w-full h-full object-contain shadow-2xl"><source src={Array.isArray(selectedProject.videoSrc) ? selectedProject.videoSrc[0] : selectedProject.videoSrc} type="video/mp4" /></video>
                  ) : (
                    <iframe className="w-full h-full border-0 bg-slate-900" src={selectedProject.link?.includes("figma") ? `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(selectedProject.link)}` : selectedProject.link} />
                  )}
                </div>
                <div className="w-full md:w-1/4 p-10 overflow-y-auto bg-slate-900/80 backdrop-blur-md border-l border-white/5 text-left">
                  <h3 className="text-3xl font-black text-white italic uppercase leading-tight mb-6">{selectedProject.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-10">{selectedProject.description}</p>
                  <div className="space-y-6 mb-10">
                    <div><h4 className="text-slate-500 text-[10px] font-bold uppercase mb-1">Role</h4><p className="text-white text-sm font-medium">{selectedProject.role}</p></div>
                    <div className="flex flex-wrap gap-2">{selectedProject.tags?.map(tag => <span key={tag} className="text-purple-300/60 text-[11px] font-mono">#{tag}</span>)}</div>
                  </div>
                  {selectedProject.link && <button onClick={() => window.open(selectedProject.link, "_blank")} className="w-full py-4 bg-white text-black font-black rounded-2xl hover:bg-purple-500 hover:text-white transition-all uppercase text-[10px] tracking-widest shadow-xl">Launch Project</button>}
                </div>
                <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 p-3 bg-white/10 text-white rounded-full transition-all border border-white/10"><X size={24}/></button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(isResumeOpen || selectedCert) && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[250] bg-slate-950/98 backdrop-blur-md flex items-center justify-center p-4 md:p-6" onClick={() => { setIsResumeOpen(false); setSelectedCert(null); }}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-slate-900 rounded-[32px] w-full max-w-6xl h-[90vh] flex flex-col md:flex-row overflow-hidden border border-white/10 shadow-2xl" onClick={e => e.stopPropagation()}>
              <div className="w-full md:w-80 p-8 flex flex-col bg-slate-900/50 border-r border-white/5 text-left">
                <h3 className="text-2xl font-black text-white mb-4 uppercase italic">{isResumeOpen ? 'Resume' : selectedCert.title}</h3>
                <div className="space-y-4 mt-auto">
                  <a href={isResumeOpen ? profile.resumeLink : selectedCert.link} target="_blank" className="flex items-center justify-center w-full py-4 bg-white text-black font-black text-xs rounded-2xl shadow-xl">Download PDF</a>
                  <button onClick={() => { setIsResumeOpen(false); setSelectedCert(null); }} className="w-full py-4 bg-slate-800 text-white font-bold text-xs rounded-2xl border border-white/5 hover:bg-slate-700 transition-all">Close</button>
                </div>
              </div>
              <div className="flex-grow bg-black relative">
                 <iframe src={(isResumeOpen ? profile.resumeLink : (selectedCert?.link || "")).replace('/view?usp=sharing', '/preview').replace('/view', '/preview')} className="w-full h-full border-0 relative z-10" title="Viewer" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;