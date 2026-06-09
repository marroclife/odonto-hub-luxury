import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, ShieldCheck, Zap, Star, MessageSquare, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 transition-all duration-500">
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${isScrolled ? 'py-3 px-6 glassmorphism rounded-full shadow-2xl' : 'py-4 px-2'}`} >
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-white italic">
            ODONTO<span className="text-[#E5E4E2] font-light opacity-80">HUB</span>
          </div>
          <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-medium opacity-70">
            <a href="#services" className="hover:text-white transition-colors duration-300">Tratamentos</a>
            <a href="#about" className="hover:text-white transition-colors duration-300">A Elite</a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">Contato</a>
          </div>
          <button className="bg-[#E5E4E2] text-[#050B1A] font-bold px-6 py-2 rounded-full text-xs uppercase tracking-tighter hover:bg-white transition-all duration-300 shadow-lg shadow-white/10">
            Agendar Agora
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden px-6 bg-radial-gradient-navy">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-dot-grid opacity-30" />
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-slate-600/20 blur-[120px] rounded-full" />
    </div>
    <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] uppercase tracking-widest text-white/60 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#E5E4E2] animate-pulse" />
          High-End Digital Dentistry
        </div>
        <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight text-white">
          A Arte da <br /> 
          <span className="italic text-glow-silver text-[#E5E4E2]">Precisão.</span>
        </h1>
        <p className="text-lg md:text-xl opacity-60 mb-12 max-w-lg leading-relaxed font-light">
          Sua experiência em odontologia elevada ao nível de hotelaria de luxo. 
          Onde a ciência digital encontra a exclusividade absoluta.
        </p>
        <div className="flex flex-wrap gap-6">
          <button className="group relative px-8 py-4 rounded-full overflow-hidden bg-[#E5E4E2] text-[#050B1A] font-bold transition-all hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Solicitar Acesso Privado <ArrowUpRight size={18} />
            </span>
          </button>
          <button className="px-8 py-4 rounded-full glassmorphism text-white font-medium hover:bg-white/10 transition-all">
            Ver Procedimentos
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.2 }}
        className="relative hidden lg:block"
      >
        <div className="glassmorphism-premium p-4 rounded-[40px] rotate-3 hover:rotate-0 transition-transform duration-700">
          <img 
            src="https://images.unsplash.com/photo-1606811976326-674793129741?auto=format&fit=crop&q=80&w=800" 
            className="rounded-[32px] w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" 
            alt="Luxury Dental Tech" 
          />
          <div className="absolute -bottom-6 -left-6 glassmorphism p-6 rounded-3xl animate-float">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#E5E4E2] rounded-lg text-[#050B1A]">
                <Award size={20} />
              </div>
              <div className="text-sm font-bold">Certified Excellence</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, desc, tags }) => (
  <motion.div 
    whileHover={{ y: -15 }}
    className="glassmorphism p-10 h-full flex flex-col group cursor-pointer transition-all duration-500 hover:bg-white/5"
  >
    <div className="mb-8">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5E4E2] to-slate-400 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
        <Icon className="text-[#050B1A]" size={24} />
      </div>
    </div>
    <h3 className="text-3xl font-serif mb-4 text-white group-hover:text-[#E5E4E2] transition-colors">{title}</h3>
    <p className="opacity-50 leading-relaxed mb-8 font-light">{desc}</p>
    <div className="mt-auto flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="text-[9px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 group-hover:text-white/80 transition-all">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-24">
      <h2 className="text-5xl md:text-7xl font-serif mb-8"> a elite dos <span className="italic text-[#E5E4E2]">tratamentos</span></h2>
      <p className="opacity-50 max-w-2xl mx-auto text-lg font-light">
        Unimos a precisão cirúrgica ao conforto absoluto. Cada procedimento é tratado como uma obra de arte.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <ServiceCard 
        icon={Zap} 
        title="Implantes Elite" 
        desc="Tecnologia suíça de precisão. Recuperação ultra-rápida com conforto absoluto e garantia vitalícia de excelência."
        tags={["SGE-Sinergy", "Surgical Precision", "Lifetime Warranty"]}
      />
      <ServiceCard 
        icon={ShieldCheck} 
        title="Siso Consciente" 
        desc="Extrações sem trauma através de sedação avançada e monitoramento digital. O fim do medo da cirurgia."
        tags={["Pain-Free", "Rapid Recovery", "Expert Care"]}
      />
      <ServiceCard 
        icon={Star} 
        title="Estética Digital" 
        desc="Rejuvenescimento do sorriso com clareamento de última geração e facetas de porcelana ultra-naturais."
        tags={["High-End Glow", "Preventive Care", "Pure White"]}
      />
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-[#050B1A]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="text-3xl font-bold tracking-tighter text-white italic">
        ODONTO<span className="text-[#E5E4E2] font-light opacity-80">HUB</span>
      </div>
      <div className="text-xs opacity-30 uppercase tracking-widest">
        © 2026 Luxury Dental Group. All Rights Reserved.
      </div>
      <div className="flex gap-6">
        <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center hover:text-[#E5E4E2] transition-all cursor-pointer">
          <MessageSquare size={20} />
        </div>
        <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center hover:text-[#E5E4E2] transition-all cursor-pointer">
          <Calendar size={20} />
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#E5E4E2] selection:text-[#050B1A] bg-deep-navy">
      <Navbar />
      <Hero />
      <Services />
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto glassmorphism-premium p-16 text-center relative z-10">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />
           <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white">Sua jornada para o <span className="italic text-[#E5E4E2]">sorriso perfeito</span> começa aqui.</h2>
           <p className="opacity-60 mb-12 text-lg max-w-2xl mx-auto font-light">
             Nossa agenda de consultas privadas é rigorosamente limitada para garantir a exclusividade de cada paciente.
           </p>
           <button className="bg-[#E5E4E2] text-[#050B1A] font-bold px-12 py-5 rounded-full text-lg hover:scale-105 transition-all shadow-xl shadow-white/10">
             Solicitar Acesso Privado
           </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
