
import React, { useState } from 'react';
import { useLocation, Link, HashRouter } from 'react-router-dom';
import { Menu, X, Globe, Moon, Sun, Search, ChevronRight, Facebook, Instagram, Youtube, Twitter, Phone, Mail, MessageCircle, Send, Linkedin } from 'lucide-react';
import { translations, dir } from '../i18n';
import { Language } from '../types';

interface LayoutProps {
  children?: React.ReactNode;
  lang: Language;
  setLang: (l: Language) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Header: React.FC<LayoutProps> = ({ lang, setLang, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang];
  const isRtl = dir(lang) === 'rtl';

  return (
    <div className="w-full flex flex-col">
       {/* Top Bar - Now containing Brand Links with Dynamic Zoom/Hover */}
       <div className="bg-[#1a1a1a] border-b border-[#333] h-12 flex items-center justify-between px-4 relative z-50">
          
          <div className="flex items-center space-x-2 md:space-x-6 overflow-x-auto no-scrollbar">
              <Link to="/" className="group flex items-center space-x-1 transition-transform hover:scale-110 duration-300">
                  <span className="text-nitecore-yellow font-black italic tracking-tighter text-sm group-hover:text-white transition-colors">{t['brand.nitecore'].toUpperCase()}</span>
              </Link>
              <div className="w-px h-4 bg-[#333]"></div>
              
              <Link to="/olight" className="group flex items-center space-x-1 transition-transform hover:scale-110 duration-300">
                  <span className="text-gray-400 font-bold text-xs uppercase group-hover:text-olight-green transition-colors">{t['brand.olight'].toUpperCase()}</span>
              </Link>
              <div className="w-px h-4 bg-[#333]"></div>

              <Link to="/wuben" className="group flex items-center space-x-1 transition-transform hover:scale-110 duration-300">
                   <span className="text-gray-400 font-bold text-xs uppercase group-hover:text-wuben-blue transition-colors">{t['brand.wuben'].toUpperCase()}</span>
              </Link>
              <div className="w-px h-4 bg-[#333]"></div>

              <Link to="/victorinox" className="group flex items-center space-x-1 transition-transform hover:scale-110 duration-300">
                  <span className="text-gray-400 font-bold text-xs uppercase group-hover:text-victorinox-red transition-colors">{t['brand.victorinox'].toUpperCase()}</span>
              </Link>
              <div className="w-px h-4 bg-[#333]"></div>

              <Link to="/tech" className="group flex items-center space-x-1 transition-transform hover:scale-110 duration-300">
                  <span className="text-gray-400 font-bold text-xs uppercase group-hover:text-neon transition-colors">TECH</span>
              </Link>
          </div>
          
          <div className="flex items-center space-x-4 ml-4">
             {/* Language Switcher */}
             <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-400 hover:text-white font-bold transition-colors">
                   <Globe size={14} />
                   <span className="uppercase text-xs">{lang}</span>
                </button>
                 <div className="absolute right-0 top-full mt-2 w-24 bg-[#222] border border-[#333] rounded shadow-xl overflow-hidden hidden group-hover:block">
                  {(['en', 'fa', 'zh', 'es'] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className="block w-full text-left px-3 py-2 hover:bg-[#333] text-xs text-white font-bold uppercase transition-colors"
                    >
                      {l}
                    </button>
                  ))}
                </div>
             </div>
          </div>
       </div>

       {/* Main Navigation Bar - Black */}
       <header className="bg-black/90 backdrop-blur-md border-b border-[#222] sticky top-0 z-40 shadow-2xl">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
              
              {/* Animated Nitecore Iran Logo - Smaller Font Size */}
              <Link to="/" className="flex items-center group relative pr-4">
                 <div className="font-black text-xl md:text-2xl italic tracking-tighter transform skew-x-[-5deg]">
                    <span 
                        className="logo-shine uppercase pr-2" 
                        data-text="NITECORE IRAN"
                    >
                        NITECORE IRAN
                    </span>
                 </div>
              </Link>

              {/* Desktop Menu - Categories */}
              <nav className="hidden lg:flex items-center space-x-1">
                 <Link to="/shop" className="text-gray-300 hover:text-white px-4 py-6 text-sm font-bold transition-colors uppercase tracking-wider">
                    {t['nav.shop']}
                 </Link>
                 <Link to="/accessories" className="text-gray-300 hover:text-white px-4 py-6 text-sm font-bold transition-colors uppercase tracking-wider">
                    {t['nav.accessories']}
                 </Link>
                 <Link to="/compare" className="text-gray-300 hover:text-white px-4 py-6 text-sm font-bold transition-colors uppercase tracking-wider">
                    {t['nav.compare']}
                 </Link>
                 <Link to="/contact" className="text-gray-300 hover:text-white px-4 py-6 text-sm font-bold transition-colors uppercase tracking-wider text-nitecore-yellow">
                    {t['nav.contact']}
                 </Link>
              </nav>

              {/* Right Icons */}
              <div className="flex items-center space-x-4">
                 <Link to="/ai" className="hidden md:flex items-center space-x-2 text-black bg-nitecore-yellow px-4 py-2 rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,225,0,0.3)]">
                    <span className="text-xs font-black uppercase tracking-wide">{t['nav.ai']}</span>
                 </Link>
                 <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                 </button>
              </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden bg-[#111] border-t border-[#222] p-4 absolute w-full left-0 top-20 z-50 flex flex-col space-y-4 shadow-2xl">
                <Link to="/" className="text-nitecore-yellow font-bold text-lg" onClick={() => setIsOpen(false)}>{t['brand.nitecore']}</Link>
                <Link to="/wuben" className="text-white font-bold text-lg hover:text-blue-400" onClick={() => setIsOpen(false)}>{t['brand.wuben']}</Link>
                <Link to="/olight" className="text-white font-bold text-lg hover:text-green-400" onClick={() => setIsOpen(false)}>{t['brand.olight']}</Link>
                <Link to="/victorinox" className="text-white font-bold text-lg hover:text-red-400" onClick={() => setIsOpen(false)}>{t['brand.victorinox']}</Link>
                <Link to="/tech" className="text-white font-bold text-lg" onClick={() => setIsOpen(false)}>{t['brand.tech']}</Link>
                <Link to="/accessories" className="text-gray-400 font-bold" onClick={() => setIsOpen(false)}>{t['nav.accessories']}</Link>
                <Link to="/contact" className="text-nitecore-yellow font-bold" onClick={() => setIsOpen(false)}>{t['nav.contact']}</Link>
            </div>
          )}
       </header>
    </div>
  );
};

export const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];

  return (
    <footer className="bg-[#020202] border-t border-[#1a1a1a] text-gray-400 pt-16 pb-8 text-xs relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nitecore-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>

       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 relative z-10">
          
          {/* Column 1: Company Profile (4 cols) */}
          <div className="md:col-span-5 pr-8">
             <div className="font-black text-3xl italic tracking-tighter text-white mb-6">
                NITECORE <span className="text-nitecore-yellow">IRAN</span>
             </div>
             <p className="mb-4 text-white font-bold uppercase tracking-wide text-xs">{t['company.role']}</p>
             <p className="mb-6 leading-relaxed text-gray-500 text-sm text-justify">
                {t['footer.desc']}
             </p>
             
             {/* Dynamic Vivid Mini Icons */}
             <div className="flex items-center gap-3 mt-6">
                 <a href={`https://wa.me/${t['contact.mobile'].replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-green-900/20 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all">
                     <MessageCircle size={16} />
                 </a>
                 <a href={`mailto:${t['contact.email']}`} className="w-8 h-8 rounded bg-orange-900/20 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all">
                     <Mail size={16} />
                 </a>
                 <a href={`tel:${t['contact.phone'].replace(/\s/g, '')}`} className="w-8 h-8 rounded bg-blue-900/20 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
                     <Phone size={16} />
                 </a>
                 <a href="https://t.me/+8ETRinn0OhdiNDZk" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-blue-400/20 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all">
                     <Send size={16} />
                 </a>
                 <a href="#" className="w-8 h-8 rounded bg-pink-900/20 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all">
                     <Instagram size={16} />
                 </a>
                 <a href="#" className="w-8 h-8 rounded bg-blue-700/20 flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-all">
                     <Linkedin size={16} />
                 </a>
             </div>
          </div>

          {/* Column 2: Sitemap (3 cols) */}
          <div className="md:col-span-3">
             <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest border-l-2 border-nitecore-yellow pl-3">{t['sitemap.title']}</h4>
             <ul className="space-y-3">
                <li><Link to="/" className="hover:text-nitecore-yellow transition-colors hover:pl-2 duration-200 block">{t['nav.home']}</Link></li>
                <li><Link to="/shop" className="hover:text-nitecore-yellow transition-colors hover:pl-2 duration-200 block">{t['sitemap.products']}</Link></li>
                <li><Link to="/shop" className="hover:text-nitecore-yellow transition-colors hover:pl-2 duration-200 block">{t['sitemap.categories']}</Link></li>
                <li><Link to="/about" className="hover:text-nitecore-yellow transition-colors hover:pl-2 duration-200 block">{t['nav.about']}</Link></li>
                <li><Link to="/contact" className="hover:text-nitecore-yellow transition-colors hover:pl-2 duration-200 block">{t['nav.contact']}</Link></li>
                <li><Link to="/blog" className="hover:text-nitecore-yellow transition-colors hover:pl-2 duration-200 block">{t['sitemap.blog']}</Link></li>
             </ul>
          </div>

           {/* Column 3: Contact Details (4 cols) */}
           <div className="md:col-span-4">
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest border-l-2 border-nitecore-yellow pl-3">{t['footer.contact']}</h4>
              <div className="space-y-4">
                  <div>
                      <span className="text-gray-600 text-[10px] uppercase font-bold block mb-1">Headquarters</span>
                      <p className="text-gray-300 leading-snug">{t['company.address']}</p>
                  </div>
                  <div>
                      <span className="text-gray-600 text-[10px] uppercase font-bold block mb-1">Management</span>
                      <p className="text-white font-bold">{t['company.ceo']}</p>
                      <p className="text-white font-bold text-[10px] uppercase tracking-wide opacity-80">{t['company.cmo']}</p>
                  </div>
                  <div className="pt-2 space-y-2">
                       <p className="text-lg font-mono text-white font-bold tracking-wider hover:text-nitecore-yellow transition-colors cursor-pointer">{t['contact.mobile']}</p>
                       <p className="text-base font-mono text-gray-500 font-bold tracking-wider hover:text-white transition-colors cursor-pointer">{t['contact.phone']}</p>
                  </div>
              </div>
           </div>
       </div>

       {/* Bottom Legal Strip */}
       <div className="container mx-auto px-4 border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center opacity-60 hover:opacity-100 transition-opacity">
          <p>{t['footer.rights']}</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-[10px] uppercase font-bold tracking-wider">
             <Link to="/terms" className="hover:text-white">{t['sitemap.terms']}</Link>
             <Link to="/return" className="hover:text-white">{t['sitemap.return']}</Link>
             <Link to="/privacy" className="hover:text-white">{t['sitemap.privacy']}</Link>
          </div>
       </div>
    </footer>
  );
};
