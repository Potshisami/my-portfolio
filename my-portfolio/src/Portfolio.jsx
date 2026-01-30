import React, { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { X, ExternalLink, Github, Mail, Code, Video, Palette, ChevronLeft, ChevronRight, Facebook, Sparkles, Box, Triangle, Circle } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [hoveredRole, setHoveredRole] = useState(null);
  const [activeTool, setActiveTool] = useState('design');

  // Animation Variants for re-use
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

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
    about: `I help brands tell their story and solve their problems. From producing high-impact motion graphics and video that hooks an audience, to architecting user-centric UI/UX designs that drive conversion, my work is about more than just looks. I combine creative media with functional design to help brands tell better stories and hit their growth goals.`,
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
        link: "https://embed.figma.com/design/YzNZ2JM78AQQP44OwX8RnJ/Malaybalay-City-Legal-Office?node-id=0-1&embed-host=share",
        previewImage: "/images/APP-Legalities.jpg"
    },
    {
        title: "BukSU Smart Governance",
        category: "Video",
        description: "Highlights the commitment of Smart Governance at BukSU, driving institutional excellence through digital transformation.",
        tags: ["After Effects", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        previewVideo: "/videos/BukSU-SmartGovernance.mp4",
        videoSrc: "https://drive.google.com/file/d/1cJgQ-UQ0NMOl5kvoAqlv2VxB9Leml0lF/preview",
        role: "Lead Editor & Motion Designer"
    },
    {
        title: "Kaamulan 2025",
        category: "Video",
        description: "Promotional video exploring Bukidnon’s Kaamulan Festival and its seven indigenous tribes.",
        role: "Lead Editor",
        tags: ["Videography", "Davinci Resolve", "Capcut"],
        icon: <Video className="w-5 h-5" />,
        previewVideo: "/videos/KAAMULAN-REELS.mp4",
        videoSrc: "https://drive.google.com/file/d/1M3WWsh3HXXFNA_Ciei1myHZuKvz2ZXu_/preview",
    },
     {
        title: "EcoQuest",
        category: "UI/UX",
        description: "An environmental gamification platform designed to encourage sustainable living habits through interactive challenges.",
        tags: ["Mobile App", "Figma"],
        icon: <Code className="w-5 h-5" />,
        role: "Lead UI/UX Designer & Front-End Developer",
        link: "https://embed.figma.com/design/9kABlns2XXdRi6nqX4NSk2/EcoQuest?node-id=0-1&embed-host=share",
        previewImage: "/images/APP-EcoQuest.jpg"
    },
    {
        title: "DYD Katorse Day 1 Highlights",
        category: "Video",
        description: "Highlights video capturing the energy and key moments of Day 1 at the DYD Katorse event.",
        role: "Same Day Editor",
        tags: ["Videography", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        previewVideo: "/videos/DYDSDE-DAY1.mp4",
        videoSrc: "https://drive.google.com/file/d/1Vcr7WNirRT8DAldBWeoCFX8MoeYx74XC/preview",
    },
    {
        title: "Kuripot Chronicles",
        category: "UI/UX",
        description: "A witty and student-friendly Budget & Allowance Tracker Android App built using Java in Android Studio.",
        role: "Lead UI/UX Designer & Front-End Developer",
        tags: ["Mobile App", "Figma"],
        icon: <Palette className="w-5 h-5" />,
        link: "https://embed.figma.com/design/OFIW2HhNDfjCAOz6ChItoP/Kuripot-Chronicles?node-id=0-1&embed-host=share",
        previewImage: "/images/APP-Kuripot.jpg"
    },
    {
        title: "DYD Katorse Day 2 Highlights",
        category: "Video",
        description: "Highlights video capturing the energy and key moments of Day 2 at the DYD Katorse event.",
        role: "Same Day Editor",
        tags: ["Videography", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        previewVideo: "/videos/DYDSDE-DAY2.mp4",
        videoSrc: "https://drive.google.com/file/d/1nY41BORUtV5lvrUnhW5UCg5QsLuKLZFJ/preview"
    },
    {
        title: "DYD Katorse Day 3 Highlights",
        category: "Video",
        description: "Highlights video capturing the energy and key moments of Day 2 at the DYD Katorse event.",
        role: "Same Day Editor",
        tags: ["Videography", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        previewVideo: "/videos/DYDSDE-DAY3.mp4",
        videoSrc: "https://drive.google.com/file/d/13yhXB-0NHBUJlfbP4M8Rhb21PFG8ARsV/preview"
    },
    {
        title: "JEMIMAH FoodHub Promotional Video",
        category: "Video",
        description: "A promotional video for JEMIMAH FoodHub, highlighting their renowned dishes and inviting viewers to experience their must try dishes.",
        role: "Videographer & Editor",
        tags: ["Videography", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        previewVideo: "/videos/JEMIMAH-PROMOTIONAL.mp4",
        videoSrc: "https://drive.google.com/file/d/1N6_SQngKWkZYCZup9GxUpyT4OaRrduer/preview"
    },
    {
        title: "39th CFC Bukidnon Anniversary Moving Logo",
        category: "Video",
        description: "A dynamic moving logo animation created for the 39th anniversary of CFC Bukidnon.",
        role: "Motion Designer",
        tags: ["After Effects"],
        icon: <Video className="w-5 h-5" />,
        previewVideo: "/videos/MOVINGLOGO-39THANNIV.mp4",
        videoSrc: "https://drive.google.com/file/d/1148coA39Q6EPei_al2K5PW2ExyVbNpEe/preview"
    },
    {
        title: "39th CFC Bukidnon Anniversary Same Day Edit",
        category: "Video",
        description: "A same day edit video capturing the highlights and memorable moments of the 39th anniversary celebration of CFC Bukidnon.",
        role: "Same Day Editor",
        tags: ["Videography", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        previewVideo: "/videos/SDE-CFCANNIV2023.mp4",
        videoSrc: "https://drive.google.com/file/d/1fFgO20ZxLiQ92Kp7ZeXQhe12K3bf5Fn3/preview"
    },
    {
        Title: "Project Worship Grace Abounds Moving Logo",
        category: "Video",
        description: "A dynamic moving logo animation created for Project Worship Grace Abounds event.",
        role: "Motion Designer",
        tags: ["After Effects"],
        icon: <Video className="w-5 h-5" />,
        previewVideo: "/videos/MovingLogo-GraceAbounds.mp4",
        videoSrc: "https://drive.google.com/file/d/14KE9iZ967O40nMwNjP_WgqhXKyawtVV5/preview"
    },
    {
        title: "San Miguel Beer Night & Kadayawan Festival Highlights",
        category: "Video",
        description: "A highlights video capturing the energy and key moments of the San Miguel Beer Kadayawan Festival.",
        role: "Videographer & Editor",
        tags: ["Videography", "Davinci Resolve"],
        icon: <Video className="w-5 h-5" />,
        previewVideo: "/videos/HIGHLIGHTS-SMBFINAL.mp4",
        videoSrc: "https://drive.google.com/file/d/1is-rz_2sU0kfd7nGyS8JmglZrGlrD4O-/preview"
    },
    {
        title: "YFC Bukidnon Conference 2025 Same Day Edit",
        category: "Video",
        description: "A highlights video capturing the energy and key moments of the YFC Bukidnon Conference 2025.",
        role: "Same Day Editor",
        tags: ["Video Editing", "Davinci Resolve", "After Effects"],
        icon: <Video className="w-5 h-5" />,
        previewVideo: "/videos/BCON2025-HIGHLIGHTS.mp4",
        videoSrc: "https://drive.google.com/file/d/1F2_iaR-Gvd3FHZzxTkNANUTal8z5ExJk/preview"
    },
    {
        title: "Contemporary Project Film",
        category: "Video",
        description: "",
        role: "Lead Editor",
        tags: ["Video Editing", "Davinci Resolve", "After Effects"],
        icon: <Video className="w-5 h-5" />,
        previewVideo: "/videos/CONTEMPO-FILM.mp4",
        videoSrc: "https://drive.google.com/file/d/1-mMkTCMjwmlUbywCuhTdEb5ENsh1z60m/preview"
    },
    {
        title: "RV App",
        category: "UI/UX",
        description: "Our 1st Year mobile e-commerce application prototype that aims to provide a seamless shopping experience for users.",
        role: "Lead UI/UX Designer",
        tags: ["Figma"],
        icon: <Palette className="w-5 h-5" />,
        link: "https://embed.figma.com/design/PEyHt9JhAqfTcg48RSi7rb/RV-App?node-id=0-1&embed-host=share",
        previewImage: "/images/APP-RV.jpg"
    },
    {
        title: "BukSU Engage",
        category: "UI/UX",
        description: "BukSU Engage is a University Training and Seminar Management System designed to streamline the organization and administration of training sessions and seminars within Bukidnon State University.     ",
        role: "Lead UI/UX Designer",
        tags: ["Figma"],
        icon: <Palette className="w-5 h-5" />,
        link: "https://embed.figma.com/design/JySNE4HEg9epC2uNdW6B4i/BukSU-Engage?node-id=0-1&embed-host=share",
        previewImage: "/images/APP-BukSUEngage.jpg"
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
        images: ["/images/DM-4.jpg"],
    },
    {   
        title: "Digital Marketing Publication Material",
        category: "Graphics",
        description: "A young Filipino leader shares how empathy, integrity, and innovation guide their mission to serve others and shape the future.",
        role: "Layout Artist",
        tags: ["Photoshop", "Canva"],
        icon: <Palette className="w-5 h-5" />,
        previewImage: "/images/DM-2.jpg",
        images: ["/images/DM-2.jpg"],
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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500/30 font-sans overflow-x-hidden">

      {/* 2. Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 z-[100] origin-left"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 3. Mouse Spotlight Effect */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-40 md:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x * 40 + (window.innerWidth / 2)}px ${mousePos.y * 40 + (window.innerHeight / 2)}px, rgba(139, 92, 246, 0.08), transparent 80%)`
        }}
      />

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-6 flex justify-between items-center fixed w-full z-50 backdrop-blur-md bg-slate-950/50 border-b border-white/5"
      >
        <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent uppercase cursor-default">V.B.</span>
        <div className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.2em] font-bold">
          {/* Use standard anchors with hover scale for cursor interaction */}
          {['Home', 'About Me', 'Works', "Stack", 'Achievements', 'Contact'].map((item) => (
            <motion.a 
              key={item}
              href={`/#${item.toLowerCase()}`} 
              whileHover={{ scale: 1.1 }}
              className="hover:text-purple-400 transition-colors text-slate-400"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.nav>


        {/*HERO SECTION*/}
      {/* RESPONSIVE HERO SECTION */}
      <section id="home" className="min-h-screen bg-slate-950 flex flex-col justify-center overflow-hidden relative">
        {/* Layer 1: Background Preview */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <motion.div 
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 bg-[url('/images/legalities-preview.png')] bg-cover bg-center"
          />
        </div>

        {/* Layer 2: Moving Text - Font size scales with screen width */}
        <div className="relative z-10 space-y-4">
          <div className="flex whitespace-nowrap overflow-hidden border-y border-white/5 py-4">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-[15vw] md:text-[12vw] font-black uppercase italic leading-none flex gap-10 md:gap-20 text-white"
            >
              <span>Vivian Bangcoyo</span>
              <span>Vivian Bangcoyo</span>
            </motion.div>
          </div>

          <div className="flex whitespace-nowrap overflow-hidden py-4">
            <motion.div 
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-[15vw] md:text-[12vw] font-black uppercase italic leading-none flex gap-10 md:gap-20 text-transparent stroke-text"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
            >
              <span>UI/UX & Motion</span>
              <span>UI/UX & Motion</span>
            </motion.div>
          </div>
        </div>
        
        {/* Responsive Footer - Max width matches your constraint */}
        <div className="max-w-[1400px] mx-auto w-full mt-12 md:mt-20 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center md:items-end gap-10 z-10">
          <p className="text-slate-500 font-mono text-[9px] uppercase tracking-widest text-center md:text-left">
            Multimedia & UI/UX Designer Portfolio ©2026
          </p>
          <motion.a 
            href="#works"
            whileHover={{ x: 10 }}
            className="group flex items-center gap-4 text-white no-underline"
          >
            <div className="flex flex-col items-end md:items-start text-right md:text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500 mb-1">Portfolio</span>
              <span className="text-xl md:text-2xl font-black italic uppercase tracking-tighter group-hover:text-fuchsia-500 transition-colors">
                Enter The Studio.
              </span>
            </div>
            <div className="w-8 md:w-12 h-[1px] bg-white/20 group-hover:w-20 group-hover:bg-fuchsia-500 transition-all duration-500" />
          </motion.a>
        </div>
      </section>

      <section id="about me" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden border-t border-white/5">
          
          {/* --- MOVING OBJECTS LAYER --- */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <AnimatePresence>
              {hoveredRole === 'uiux' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  className="absolute top-1/4 right-1/4 text-purple-500/20"
                >
                  <Icon icon="logos:figma" className="text-[100px] md:text-[200px]" />
                </motion.div>
              )}
              
              {hoveredRole === 'video' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  className="absolute bottom-1/4 right-1/3 text-fuchsia-500/20"
                >
                  <Icon icon="simple-icons:davinciresolve" className="text-[80px] md:text-[180px]" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/2 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px]"
            />
          </div>

          {/* MAIN CONTAINER: Consistent px-6 md:px-20 */}
          <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
              
              {/* PROFILE IMAGE: Shrinks responsively */}
              <motion.div 
                className="relative shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 md:-inset-6 border-2 border-dashed border-purple-500/20 rounded-full"
                />
                
                <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-1.5 bg-gradient-to-tr from-purple-600 to-fuchsia-500 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden border-[6px] md:border-[10px] border-slate-950 bg-slate-900">
                    <img 
                      src="/images/profile-transparent.png" 
                      alt="Vivian J. Bangcoyo" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </motion.div>

              {/* CONTENT AREA: Centered on mobile/tablet, Left-aligned on Desktop */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black italic text-white uppercase mb-6 leading-tight tracking-tighter">
                    THE <span className="text-purple-500">VISIONARY.</span>
                  </h2>
                  
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 lg:border-l-2 border-purple-500/30 lg:pl-6">
                    I bridge the gap between technical logic and visual storytelling. As a 4th year BSIT student with a passion for <b className="text-white">UI/UX</b> and <b className="text-white">Motion Design</b>, I help brands solve problems through creative precision.
                  </p>

                  {/* ROLES: Compact Grid */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 mb-12 w-full">
                    {[
                      { role: 'UI/UX Designer', tech: 'Interfaces // Figma', color: 'bg-purple-500', id: 'uiux' },
                      { role: 'Video Editor', tech: 'Motion // DaVinci', color: 'bg-fuchsia-500', id: 'video' },
                      { role: 'Graphic Designer', tech: 'Branding // AI & PS', color: 'bg-blue-500', id: 'graphic' }
                    ].map((item) => (
                      <div key={item.id} className="group min-w-fit">
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                          <div className={`w-[3px] h-4 ${item.color} rounded-full group-hover:h-6 transition-all duration-300`} />
                          <p className="text-white font-black text-lg uppercase italic leading-none whitespace-nowrap">
                            {item.role}
                          </p>
                        </div>
                        <p className="text-[8px] text-slate-500 tracking-[0.2em] font-bold uppercase lg:pl-3">
                          {item.tech}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* BUTTONS: Responsive Wrap */}
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    <motion.button 
                      onClick={() => setIsResumeOpen(true)}
                      className="px-8 py-4 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-purple-600 hover:text-white transition-all shadow-xl"
                    >
                      Resume
                    </motion.button>
                    <motion.a 
                      href="#works"
                      className="px-8 py-4 border border-fuchsia-500/40 text-fuchsia-400 font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-fuchsia-500 hover:text-white transition-all flex items-center justify-center"
                    >
                      Explore Studio
                    </motion.a>
                    <motion.a 
                      href="#contact"
                      className="px-8 py-4 border border-slate-800 text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:border-purple-500 flex items-center justify-center transition-all"
                    >
                      Contact
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
      </section>

      {/* WORKS SECTION - Scroll Triggered */}
      <section id="works" className="py-32 px-6 md:px-20 bg-slate-950 relative z-10">
        <div className="max-w-[1400px] mx-auto relative z-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
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

          {/* DYNAMIC FLOW ENGINE with Staggered children */}
            <motion.div 
              key={filter} 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={
                (filter === 'Video' || filter === 'All') 
                  ? "columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8" 
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              }
            >
              <AnimatePresence mode='wait'>
                {displayedProjects.map((project, idx) => {
                const isGraphics = project.category === "Graphics";
                const isVideo = project.category === "Video";
                const isUI = project.category === "UI/UX";

                  return (
                    <motion.div 
                      variants={fadeInUp}
                      layout 
                      key={`${filter}-${project.title}`} 
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ y: -15, transition: { type: "spring", stiffness: 300 } }}
                      className="inline-block w-full relative group cursor-pointer rounded-[40px] overflow-hidden border border-white/5 bg-slate-900 shadow-2xl hover:border-purple-500/50 transition-all duration-700"
                    >
                      {/* 1. THE MEDIA LAYER */}
                      {isVideo ? (
                        /* Video Preview - Staggered Masonry */
                        <div className={`relative w-full overflow-hidden bg-black ${idx % 3 === 0 ? 'aspect-[3/4]' : idx % 2 === 0 ? 'aspect-video' : 'aspect-square'}`}>
                          <div className="absolute inset-0 w-full h-full">
                            <video 
                              key={`${project.title}-stable-video`}
                              src={project.previewVideo}
                              autoPlay muted loop playsInline preload="auto"
                              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                            />
                          </div>
                        </div>
                      ) : (
                        /* UI/UX & Graphics Preview - Show Image */
                        <div className="w-full aspect-square overflow-hidden bg-slate-800 relative">
                          <img 
                            src={project.previewImage} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                          />
                          {/* Visual overlay for both UI and Graphics */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      )}
                      
                      {/* 2. THE OVERLAY LAYER (Appears for all items now) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity">
                        <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
                              <span className="text-purple-500 font-mono text-[8px] uppercase tracking-[0.3em] font-black">
                                {isVideo ? "Motion Capture" : isUI ? "System Interface" : "Creative Media"}
                              </span>
                            </div>
                            <h4 className="text-lg font-black text-white italic uppercase tracking-widest leading-tight">
                              {project.title}
                            </h4>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
        </div>
      </section>

      {/* TECH STACK */}
        {/* ANIMATED TECH STACK */}
      <section id="stack" className="py-24 bg-slate-950 border-t border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex items-end justify-between"
          >
            <h3 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
              Tech <span className="text-purple-500">Stack.</span>
            </h3>
            <p className="text-slate-500 font-mono text-[9px] uppercase tracking-[0.3em] hidden md:block">
              BSIT // UI UX // Multimedia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {[
              { 
                category: "Design & Creative", 
                skills: [
                  { name: 'Figma', icon: 'logos:figma' },
                  { name: 'Illustrator', icon: 'logos:adobe-illustrator' },
                  { name: 'Photoshop', icon: 'logos:adobe-photoshop' },
                  { name: 'Canva', icon: 'lineicons:canva' },
                ]
              },
              { 
                category: "Media Production", 
                skills: [
                  { name: 'After Effects', icon: 'skill-icons:aftereffects' },
                  { name: 'DaVinci', icon: 'simple-icons:davinciresolve' },
                  { name: 'CapCut', icon: 'hugeicons:capcut-rectangle' },
                  { name: 'OBS Studio', icon: 'simple-icons:obsstudio' },
                ]
              },
              { 
                category: "Web & Logic", 
                skills: [
                  { name: 'React', icon: 'material-icon-theme:react' },
                  { name: 'Tailwind', icon: 'vscode-icons:file-type-tailwind' },
                  { name: 'JavaScript', icon: 'skill-icons:javascript' },
                  { name: 'Bootstrap', icon: 'skill-icons:bootstrap' },
                  { name: 'GitHub', icon: 'skill-icons:github-dark' },
                ]
              }
            ].map((group, groupIdx) => (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.2 }}
                className="flex flex-col md:flex-row md:items-center gap-6"
              >
                {/* Category Label */}
                <div className="w-48 shrink-0">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-1">
                    {group.category}
                  </h4>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "2rem" }}
                    transition={{ delay: 0.5 + groupIdx * 0.2, duration: 0.8 }}
                    className="h-[2px] bg-purple-500/50" 
                  />
                </div>

                {/* Icon Row */}
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: (groupIdx * 0.2) + (skillIdx * 0.1),
                        type: "spring",
                        stiffness: 260,
                        damping: 20 
                      }}
                      whileHover={{ 
                        y: -8, 
                        transition: { duration: 0.2 } 
                      }}
                      className="group relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-slate-900/40 border border-white/5 rounded-2xl transition-all hover:border-purple-500/50 hover:bg-slate-900/80"
                    >
                      {/* Subtle Inner Glow on Hover */}
                      <div className="absolute inset-0 rounded-2xl bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors duration-300" />
                      
                      <Icon 
                        icon={skill.icon} 
                        className="w-7 h-7 md:w-9 md:h-9 grayscale group-hover:grayscale-0 transition-all duration-500 z-10" 
                      />
                      
                      {/* Tooltip on Hover */}
                      <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-300 ease-out bg-white text-black px-3 py-1 rounded-lg z-20 pointer-events-none shadow-xl">
                        <span className="text-[9px] font-black uppercase whitespace-nowrap">{skill.name}</span>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section id="achievements" className="py-24 px-10 md:px-24 bg-slate-950 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
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
                      initial={{ opacity: 0, scale: 0.9 }} 
                      whileInView={{ opacity: 1, scale: 1 }} 
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
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-5xl font-black text-white italic uppercase mb-12"
        >
            Let's Create <span className="text-purple-500">Together.</span>
        </motion.h2>

        <div className="flex justify-center space-x-8 mb-12">
            <motion.a whileHover={{ y: -10, color: "#a855f7" }} href={profile.socials.github} target="_blank" className="p-4 rounded-full bg-slate-900 border border-white/5 text-white transition-all shadow-xl"><Github size={24}/></motion.a>
            <motion.a whileHover={{ y: -10, color: "#3b82f6" }} href={profile.socials.facebook} target="_blank" className="p-4 rounded-full bg-slate-900 border border-white/5 text-white transition-all shadow-xl"><Facebook size={24}/></motion.a>
            <motion.a whileHover={{ y: -10, color: "#a855f7" }} href={gmailLink} target="_blank" className="p-4 rounded-full bg-slate-900 border border-white/5 text-white transition-all shadow-xl"><Mail size={24}/></motion.a>
        </div>

        <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            href={gmailLink} target="_blank"
            className="inline-block px-12 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black rounded-2xl uppercase tracking-widest text-sm shadow-2xl"
        >
            Send Email
        </motion.a>
      </footer>

      {/* MODAL SYSTEM (Kept standard for performance) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-slate-950/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-10" onClick={() => setSelectedProject(null)}>
            {selectedProject.category === "Graphics" ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
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
              <motion.div initial={{ scale: 0.95, y: 40, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} className="bg-slate-900 rounded-[40px] w-full max-w-7xl h-[85vh] flex flex-col md:flex-row overflow-hidden border border-white/10 shadow-2xl shadow-black/50" onClick={e => e.stopPropagation()}>
                <div className="w-full md:w-3/4 bg-black flex items-center justify-center relative overflow-hidden">
                  {selectedProject.videoSrc ? (
                    selectedProject.videoSrc.includes('drive.google.com') ? (
                      <iframe src={selectedProject.videoSrc} className="w-full h-full border-0" allow="autoplay; fullscreen" title={selectedProject.title} />
                    ) : (
                      <video controls autoPlay className="w-full h-full object-contain">
                        <source src={selectedProject.videoSrc} type="video/mp4" />
                      </video>
                    )
                  ) : (
                    <iframe className="w-full h-full border-0 bg-slate-900" src={selectedProject.link} />
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
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-slate-900 rounded-[32px] w-full max-w-6xl h-[90vh] flex flex-col md:flex-row overflow-hidden border border-white/10 shadow-2xl" onClick={e => e.stopPropagation()}>
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