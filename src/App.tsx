import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, ShieldCheck, Zap, Star, MessageSquare } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4">
    <div className="max-w-7xl mx-auto glass-card px-8 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold tracking-tighter gold-gradient-text italic">
        ODONTO<span className="text-white font-light">HUB</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium opacity-80">
        <a href="#services" className="hover:text-[#D4AF37] transition-colors">Procedimentos</a>
        <a href="#about" className="hover:text-[#D4AF37] transition-colors">A Clínica</a>
        <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Experiências</a>
      </div>
      <button className="btn-gold text-xs py-2 px-5">Agendar Agora</button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0E14]/50 to-[#0B0E14]" />
      <img 
        src="https://images.unsplash.com/photo-1629909606779-3Dynamics-dental-clinic-luxury.jpg?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover opacity-40" 
        alt="Luxury Dental Clinic Interior" 
      />
    </div>
    
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="relative z-10 max-w-4xl text-center"
    >
      <div className="glass-card p-12 md:p-20 border-white/10 backdrop-blur-3xl">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          Sua Melhor Versão <br /> 
          <span className="gold-gradient-text font-bold italic">Começa no Sorriso</span>
        </h1>
        <p className="text-lg md:text-xl opacity-70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Combinamos a precisão da odontologia digital com a exclusividade de um atendimento personalizado. 
          Sinta a tranquilidade de quem domina a arte do sorriso perfeito.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-gold text-lg px-12">Agendar Consulta Privada</button>
          <button className="glass-card px-8 py-4 text-white hover:bg-white/20 transition-all">Conhecer Tratamentos</button>
        </div>
      </div>
    </motion.div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, desc, tags }: { icon: any, title: string, desc: string, tags: string[] }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass-card p-8 h-full flex flex-col justify-between group"
  >
    <div>
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#F7E7CE] flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
        <Icon className="text-[#2C3E50]" size={28} />
      </div>
      <h3 className="text-2xl font-serif mb-4 gold-gradient-text">{title}</h3>
      <p className="opacity-60 leading-relaxed mb-6">{desc}</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag: string) => (
        <span key={tag} className="text-[10px] uppercase tracking-tighter px-2 py-1 rounded-full bg-white/5 border border-white/10 opacity-60">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-6xl font-serif mb-6">Excelência em <span className="gold-gradient-text italic">Cada Detalhe</span></h2>
      <p className="opacity-60 max-w-2xl mx-auto text-lg">
        Tratamentos de alta complexidade executados com a precisão da odontologia digital e o conforto de um ambiente premium.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ServiceCard 
        icon={Zap} 
        title="Implantes Premium" 
        desc="Restauramos sua confiança com próteses de alta durabilidade e precisão cirúrgica. Procedimentos indolores e recuperação acelerada."
        tags={["SGE-Sinergy", "Surgical Precision", "Lifetime Warranty"]}
      />
      <ServiceCard 
        icon={ShieldCheck} 
        title="Extração de Siso" 
        desc="Técnicas avançadas para remoção de terceiros molares sem traumas. Foco total no conforto pós-operatório e segurança do paciente."
        tags={["Pain-Free", "Rapid Recovery", "Expert care"]}
      />
      <ServiceCard 
        icon={Star} 
        title="Estética & Limpeza" 
        desc="Muito além da higiene. Um protocolo de rejuvenescimento do sorriso com clareamento de última geração e profilaxia profunda."
        tags={["High-End Glow", "Preventive Care", "Pure White"]}
      />
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/10 bg-[#0B0E14]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-2xl font-bold tracking-tighter gold-gradient-text italic">
        ODONTO<span className="text-white font-light">HUB</span>
      </div>
      <div className="text-sm opacity-50">
        © 2026 Centro Odontológico de Luxo. Todos os direitos reservados.
      </div>
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-[#D4AF37] cursor-pointer transition-colors">
          <MessageSquare size={18} />
        </div>
        <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-[#D4AF37] cursor-pointer transition-colors">
          <Calendar size={18} />
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#D4AF37] selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto glass-card p-12 text-center relative overflow-hidden">
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4AF37]/20 blur-3xl rounded-full" />
           <h2 className="text-3xl font-serif mb-6">Pronto para transformar <span className="gold-gradient-text italic">sua autoestima</span>?</h2>
           <p className="opacity-70 mb-10 text-lg">
             Nossa agenda de consultas privadas é limitada para garantir a exclusividade de cada paciente.
           </p>
           <button className="btn-gold text-xl px-16 py-5">Solicitar Acesso Privado</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
