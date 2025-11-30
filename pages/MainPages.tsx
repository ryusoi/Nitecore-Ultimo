
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ProductCard, formatPrice } from '../components/ProductComponents';
import { products } from '../services/mockData';
import { translations, Language } from '../i18n';
import { Link } from 'react-router-dom';
import { Shield, Zap, MapPin, Users, ChevronRight, Cpu, Play, Star, ExternalLink, Camera, BatteryCharging, Briefcase, Factory, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { AIAssistant } from '../components/AIAssistant';

interface PageProps {
  lang: Language;
}

// Helper to filter products
const getBrandProducts = (brand: string) => products.filter(p => p.brand === brand);

export const HomePage: React.FC<PageProps> = ({ lang }) => {
  const t = translations[lang];
  const nitecoreProducts = getBrandProducts('Nitecore').slice(0, 4);
  const olightProducts = getBrandProducts('Olight').slice(0, 4);
  const wubenProducts = getBrandProducts('Wuben').slice(0, 4);
  const victorinoxProducts = getBrandProducts('Victorinox').slice(0, 4);
  const otherProducts = getBrandProducts('Other').slice(0, 4);

  // Parallax Video Effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  // Nitecore Official Links
  const officialLinks = [
    { key: 'link.lighting', url: 'https://flashlight.nitecore.com/', icon: Zap, img: 'https://www.nitecore.com/Uploads/goodscat/original_img/1667450584.jpg' },
    { key: 'link.charger', url: 'https://charger.nitecore.com/', icon: BatteryCharging, img: 'https://www.nitecore.com/Uploads/goodscat/original_img/1683601552.jpg' },
    { key: 'link.photo', url: 'https://photo.nitecore.com/', icon: Camera, img: 'https://www.nitecore.com/Uploads/goodscat/original_img/1667450600.jpg' },
    { key: 'link.carry', url: 'https://carrygear.nitecore.com/', icon: Briefcase, img: 'https://www.nitecore.com/Uploads/goodscat/original_img/1630664067.jpg' },
    { key: 'link.industrial', url: 'https://www.nitecore.com/IndustrialCorporateSales', icon: Factory, img: '' }, // Fallback or text only
  ];

  return (
    <div className="bg-[#050505] min-h-screen pb-20 overflow-x-hidden relative">
      
      {/* 1. Parallax Video Hero Section */}
      <div className="fixed top-0 left-0 w-full h-[100vh] z-0 pointer-events-none overflow-hidden">
         <motion.video 
            style={{ y, opacity }}
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover scale-105" // slight scale to prevent white edges
            src="https://wafisohswxqutsttotkb.supabase.co/storage/v1/object/public/Tek/Nitecore%20Iran.mp4"
         />
         {/* Cinematic Overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-10 mix-blend-overlay"></div>
      </div>

      {/* Hero Content Wrapper */}
      <section className="relative z-10 h-[100vh] w-full flex items-center justify-center text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl"
          >
              <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter text-white mb-6 drop-shadow-[0_0_30px_rgba(255,225,0,0.2)]">
                 NITECORE <span className="text-nitecore-yellow relative inline-block">
                    IRAN
                    <span className="absolute -inset-1 blur-xl bg-nitecore-yellow/30 -z-10 rounded-full"></span>
                 </span>
              </h1>
              <div className="w-32 h-1 bg-nitecore-yellow mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(255,225,0,0.8)]"></div>
              <p className="text-xl md:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-xl tracking-wide">
                 {t['hero.subtitle']}
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <Link to="/shop" className="group relative px-12 py-4 bg-nitecore-yellow text-black text-lg font-black uppercase tracking-widest overflow-hidden rounded-sm hover:text-white transition-colors">
                     <div className="absolute inset-0 w-0 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                     <span className="relative z-10 flex items-center gap-2">{t['hero.cta']} <ChevronRight size={20} /></span>
                  </Link>
                  <Link to="/ai" className="group relative px-12 py-4 border border-white/30 text-white text-lg font-bold uppercase tracking-widest backdrop-blur-sm hover:border-white hover:bg-white/10 transition-all rounded-sm">
                     <span className="relative z-10">{t['nav.ai']}</span>
                  </Link>
              </div>
          </motion.div>
      </section>

      {/* Content Container */}
      <div className="relative z-20 bg-[#050505] shadow-[0_-50px_100px_rgba(5,5,5,1)] border-t border-white/10">
        
        {/* 2. Nitecore Ecosystem Links (High Definition) */}
        <section className="py-24 container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-[0.2em] mb-4">{t['nitecore.ecosystem']}</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">{t['trust.desc']}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {officialLinks.slice(0,4).map((link, idx) => (
                    <a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 hover:border-nitecore-yellow/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
                    >
                        <div className="absolute inset-0">
                            <img src={`https://wsrv.nl/?url=${encodeURIComponent(link.img)}&w=600&q=80&output=webp`} alt={t[link.key]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center text-center">
                            <div className="mb-4 p-4 bg-nitecore-yellow/10 rounded-full backdrop-blur-md border border-nitecore-yellow/20 group-hover:bg-nitecore-yellow group-hover:text-black text-nitecore-yellow transition-all duration-300">
                                <link.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">{t[link.key]}</h3>
                            <span className="text-xs text-gray-400 group-hover:text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                Visit Official Site <ExternalLink size={10} />
                            </span>
                        </div>
                    </a>
                ))}
            </div>
            
            {/* Industrial Link Separate */}
            <div className="mt-8 flex justify-center">
                <a href="https://www.nitecore.com/IndustrialCorporateSales" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-nitecore-yellow border border-white/10 hover:border-nitecore-yellow px-8 py-4 rounded-full transition-all uppercase text-sm font-bold tracking-widest hover:bg-white/5">
                    <Factory size={18} /> {t['link.industrial']} <ExternalLink size={14} />
                </a>
            </div>
        </section>

        {/* 3. NITECORE Products Segment */}
        <section className="py-24 bg-[#080808] border-t border-[#222]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-12 bg-nitecore-yellow shadow-[0_0_15px_#ffe100]"></div>
                        <h2 className="text-5xl font-black italic text-white uppercase tracking-tighter">NITECORE</h2>
                    </div>
                    <Link to="/shop" className="text-gray-400 hover:text-white border-b border-transparent hover:border-nitecore-yellow transition-all pb-1 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                        {t['products.view_catalog']} <ChevronRight size={14} />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {nitecoreProducts.map(p => (
                        <div key={p.id} className="border-flow" style={{'--border-color': '#ffe100'} as React.CSSProperties}>
                            <ProductCard product={p} lang={lang} />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 4. AI Comparison Section */}
        <section className="py-24 bg-[#050505] border-y border-[#222] relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="container mx-auto px-4 relative z-10">
               <div className="flex flex-col md:flex-row items-center gap-16">
                   <div className="flex-1">
                       <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/20 text-blue-400 rounded-full border border-blue-800/30 mb-8">
                          <Cpu size={16} className="animate-pulse" />
                          <span className="text-xs font-bold tracking-[0.2em] uppercase">AI-Powered Analysis</span>
                       </div>
                       <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                          {t['ai.promo.title']}
                       </h2>
                       <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light border-l-2 border-blue-900 pl-6">
                          {t['ai.promo.desc']}
                       </p>
                       <Link to="/ai" className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-900/20">
                          {t['ai.promo.btn']} <ChevronRight size={18} />
                       </Link>
                   </div>
                   <div className="flex-1 w-full">
                       <div className="relative bg-[#0a0a0a] border border-[#222] rounded-3xl p-8 shadow-2xl">
                           <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">LIVE DEMO</div>
                           <div className="space-y-6">
                               <div className="flex justify-end">
                                   <div className="bg-blue-600/20 text-blue-100 p-4 rounded-2xl rounded-br-none text-sm max-w-[80%] border border-blue-500/20">
                                       Compare Nitecore EDC27 vs Olight Arkfeld
                                   </div>
                               </div>
                               <div className="flex justify-start">
                                   <div className="bg-[#151515] text-gray-200 p-6 rounded-2xl rounded-bl-none text-sm max-w-[90%] border border-[#333] shadow-inner">
                                       <div className="flex items-center gap-2 mb-3 border-b border-[#333] pb-3">
                                           <Sparkles size={16} className="text-nitecore-yellow" />
                                           <span className="text-nitecore-yellow font-bold text-xs uppercase tracking-wider">AI Analysis</span>
                                       </div>
                                       <p className="leading-relaxed">The <span className="text-white font-bold">Nitecore EDC27</span> offers significantly higher output (3000 lumens) and a dedicated OLED display for real-time status. The <span className="text-white font-bold">Olight Arkfeld</span> is more focused on utility with its built-in laser pointer and magnetic charging. For tactical use, Nitecore wins; for office/presentation, Olight is superior.</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        </section>

        {/* 5. Other Brands (Olight, Wuben, Victorinox) */}
        <section className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Olight Column */}
                    <div>
                        <div className="flex items-center justify-between mb-8 border-b border-[#222] pb-4">
                            <h3 className="text-2xl font-black text-olight-green uppercase tracking-tighter">OLIGHT</h3>
                            <Link to="/olight" className="text-xs text-gray-500 hover:text-white uppercase font-bold">More</Link>
                        </div>
                        <div className="space-y-6">
                            {olightProducts.slice(0,2).map(p => (
                                <div key={p.id} className="bg-[#111] rounded-xl overflow-hidden border border-[#222] hover:border-olight-green/50 transition-all group">
                                    <Link to={`/product/${p.id}`} className="flex items-center p-4 gap-4">
                                        <div className="w-20 h-20 bg-white rounded-lg p-2 flex-shrink-0">
                                            <img src={p.images[0]} className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm group-hover:text-olight-green transition-colors">{p.name}</h4>
                                            <p className="text-gray-500 text-xs mt-1 line-clamp-2">{p.description[lang]}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wuben Column */}
                    <div>
                        <div className="flex items-center justify-between mb-8 border-b border-[#222] pb-4">
                            <h3 className="text-2xl font-black text-wuben-blue uppercase tracking-tighter">WUBEN</h3>
                            <Link to="/wuben" className="text-xs text-gray-500 hover:text-white uppercase font-bold">More</Link>
                        </div>
                        <div className="space-y-6">
                            {wubenProducts.slice(0,2).map(p => (
                                <div key={p.id} className="bg-[#111] rounded-xl overflow-hidden border border-[#222] hover:border-wuben-blue/50 transition-all group">
                                    <Link to={`/product/${p.id}`} className="flex items-center p-4 gap-4">
                                        <div className="w-20 h-20 bg-white rounded-lg p-2 flex-shrink-0">
                                            <img src={p.images[0]} className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm group-hover:text-wuben-blue transition-colors">{p.name}</h4>
                                            <p className="text-gray-500 text-xs mt-1 line-clamp-2">{p.description[lang]}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Victorinox Column */}
                    <div>
                        <div className="flex items-center justify-between mb-8 border-b border-[#222] pb-4">
                            <h3 className="text-2xl font-black text-victorinox-red uppercase tracking-tighter">VICTORINOX</h3>
                            <Link to="/victorinox" className="text-xs text-gray-500 hover:text-white uppercase font-bold">More</Link>
                        </div>
                        <div className="space-y-6">
                            {victorinoxProducts.slice(0,2).map(p => (
                                <div key={p.id} className="bg-[#111] rounded-xl overflow-hidden border border-[#222] hover:border-victorinox-red/50 transition-all group">
                                    <Link to={`/product/${p.id}`} className="flex items-center p-4 gap-4">
                                        <div className="w-20 h-20 bg-white rounded-lg p-2 flex-shrink-0">
                                            <img src={p.images[0]} className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm group-hover:text-victorinox-red transition-colors">{p.name}</h4>
                                            <p className="text-gray-500 text-xs mt-1 line-clamp-2">{p.description[lang]}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Nitecore Logo Video Animation */}
        <section className="py-24 bg-[#050505] border-t border-[#222] flex justify-center">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="relative rounded-3xl overflow-hidden border border-[#222] shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black">
                     <video 
                        src="https://wafisohswxqutsttotkb.supabase.co/storage/v1/object/public/Tek/Nitecore%20logo.mp4"
                        className="w-full h-full object-contain mix-blend-screen opacity-80"
                        autoPlay
                        muted
                        loop
                        playsInline
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50 pointer-events-none"></div>
                </div>
            </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-[#050505] border-t border-[#222]">
            <div className="container mx-auto px-4 text-center">
               <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider">{t['trust.title']}</h2>
               <p className="max-w-3xl mx-auto text-gray-500 mb-12 leading-loose">{t['trust.desc']}</p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                   <div className="flex flex-col items-center p-6 bg-[#111] rounded-2xl border border-[#222] hover:border-nitecore-yellow/30 transition-colors">
                      <MapPin className="text-nitecore-yellow mb-4" size={32} />
                      <span className="text-white font-bold">Tehran Central</span>
                   </div>
                   <div className="flex flex-col items-center p-6 bg-[#111] rounded-2xl border border-[#222] hover:border-nitecore-yellow/30 transition-colors">
                      <Shield className="text-nitecore-yellow mb-4" size={32} />
                      <span className="text-white font-bold">100% Original</span>
                   </div>
                   <div className="flex flex-col items-center p-6 bg-[#111] rounded-2xl border border-[#222] hover:border-nitecore-yellow/30 transition-colors">
                      <Users className="text-nitecore-yellow mb-4" size={32} />
                      <span className="text-white font-bold">10k+ Customers</span>
                   </div>
                   <div className="flex flex-col items-center p-6 bg-[#111] rounded-2xl border border-[#222] hover:border-nitecore-yellow/30 transition-colors">
                      <Zap className="text-nitecore-yellow mb-4" size={32} />
                      <span className="text-white font-bold">Fast Delivery</span>
                   </div>
               </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export const OlightPage: React.FC<PageProps> = ({ lang }) => {
   const t = translations[lang];
   const products = getBrandProducts('Olight');

   // Parallax for Video
   const { scrollY } = useScroll();
   const y = useTransform(scrollY, [0, 600], [0, 200]);

   const categories = [
       { name: 'EDC Lights', img: 'https://cdn.olightstore.com/image/arkpro-ultra-gll-172x191-x2b-kvduyc.png@270w_270h_100q.webp' },
       { name: 'Outdoor', img: 'https://cdn.olightstore.com/image/marauder-mini-2-ayl-160x160-x2b-n5r4yl.png@270w_270h_100q.webp' },
       { name: 'Tactical', img: 'https://cdn.olightstore.com/image/pc-wrarrior-ultra-qhs-160x160-6g72k9-569eis.png@270w_270h_100q.webp' },
       { name: 'WMLs', img: 'https://cdn.olightstore.com/image/pc-baldr-s-hs-160x160-91hisc-s5hfmu.png@270w_270h_100q.webp' }
   ];

   return (
      <div className="bg-[#101010] min-h-screen pb-20">
         {/* Hero Section with Video Parallax */}
         <div className="relative h-[600px] w-full overflow-hidden flex items-center justify-center bg-black">
             <motion.div 
                 style={{ y }} 
                 className="absolute inset-0 w-full h-[125%] -top-[12%] z-0"
             >
                 <video
                    src="https://cdn.olightstore.com/video/pc-ro1uau.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                 />
             </motion.div>
             
             <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/30 z-10"></div>
             
             {/* Content Overlay */}
             <div className="relative z-20 text-center px-4">
                 <h1 className="text-6xl md:text-8xl font-black italic text-white tracking-tighter mb-4 drop-shadow-2xl">
                     OLIGHT <span className="text-olight-green">OFFICIAL</span>
                 </h1>
                 <p className="text-2xl text-white font-light tracking-widest uppercase mb-8">Illuminate Your World</p>
                 <button className="bg-olight-green text-black font-bold py-3 px-8 rounded-full hover:bg-white transition-colors uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,0,0.4)]">
                     {t['hero.cta']}
                 </button>
             </div>
         </div>

         {/* Categories Strip */}
         <div className="container mx-auto px-4 -mt-20 relative z-20 mb-20">
             <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-6 shadow-2xl">
                 <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm text-center">{t['olight.explore_cats']}</h3>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {categories.map((cat, idx) => (
                         <div key={idx} className="flex flex-col items-center group cursor-pointer">
                             <div className="w-24 h-24 rounded-full bg-[#222] border border-[#333] p-4 group-hover:border-olight-green transition-colors mb-3">
                                 <img src={cat.img} alt={cat.name} className="w-full h-full object-contain" />
                             </div>
                             <span className="text-gray-400 text-xs font-bold uppercase group-hover:text-white transition-colors">{cat.name}</span>
                         </div>
                     ))}
                 </div>
             </div>
         </div>

         {/* Products Grid */}
         <div className="container mx-auto px-4 mb-24">
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-olight-green pl-4 uppercase">{t['olight.top_picks']}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {products.map(p => (
                  <div key={p.id} className="border border-olight-green/20 rounded-xl overflow-hidden bg-[#1a1a1a] hover:border-olight-green hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] transition-all duration-300">
                      <ProductCard product={p} lang={lang} />
                  </div>
               ))}
            </div>
         </div>

         {/* Featured Product Videos */}
         <section className="py-20 bg-[#080808]">
             <div className="container mx-auto px-4">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     {/* Video 1: ArkPro */}
                     <div className="relative group rounded-2xl overflow-hidden aspect-video border border-[#222]">
                         <video 
                             src="https://cdn.olightstore.de/video/arkprocjsp-pc-gc8lmy.mp4"
                             className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                             autoPlay muted loop playsInline
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8">
                             <h3 className="text-3xl font-bold text-white mb-2">{t['olight.video1.title']}</h3>
                             <p className="text-gray-300 mb-6">{t['olight.video1.subtitle']}</p>
                             <button className="self-start px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all rounded uppercase text-sm font-bold tracking-wider">
                                 {t['olight.video1.btn']}
                             </button>
                         </div>
                     </div>

                     {/* Video 2: Marauder */}
                     <div className="relative group rounded-2xl overflow-hidden aspect-video border border-[#222]">
                         <video 
                             src="https://cdn.olightstore.de/video/dgmarauder-mini-2hb-1-6iyg1m.mp4"
                             className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                             autoPlay muted loop playsInline
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8">
                             <h3 className="text-3xl font-bold text-white mb-2">{t['olight.video2.title']}</h3>
                             <p className="text-gray-300 mb-6">{t['olight.video2.subtitle']}</p>
                             <button className="self-start px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all rounded uppercase text-sm font-bold tracking-wider">
                                 {t['olight.video2.btn']}
                             </button>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
      </div>
   );
};

export const WubenPage: React.FC<PageProps> = ({ lang }) => {
   const t = translations[lang];
   const products = getBrandProducts('Wuben');

   return (
      <div className="bg-white min-h-screen text-slate-900">
         {/* Wuben Hero */}
         <div className="bg-black h-[500px] relative overflow-hidden flex items-center">
             <div className="absolute inset-0">
                <img src="https://www.wubenlight.com/cdn/shop/files/X1_c359ceef-9747-4052-a034-a56eed388a57.jpg" className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
             </div>
             <div className="container mx-auto px-4 relative z-10 text-white">
                <span className="bg-wuben-blue text-white text-xs font-bold px-3 py-1 rounded mb-4 inline-block">CYBER MONDAY DEALS</span>
                <h1 className="text-6xl font-bold mb-4">WUBEN COLLECTION</h1>
                <p className="text-2xl font-light mb-8 max-w-md">Explore the X-Series and New Arrivals.</p>
                <div className="flex gap-4">
                    <button className="bg-wuben-blue hover:bg-blue-700 text-white px-8 py-3 rounded font-bold transition-colors">{t['hero.cta']}</button>
                </div>
             </div>
         </div>

         {/* Category Strip */}
         <div className="bg-gray-100 py-8 border-b border-gray-200">
             <div className="container mx-auto px-4 flex justify-center gap-8 overflow-x-auto no-scrollbar">
                 {['X-Series', 'E-Series', 'C-Series', 'L-Series', 'T-Series', 'A-Series'].map(series => (
                     <button key={series} className="text-slate-600 font-bold hover:text-wuben-blue whitespace-nowrap uppercase text-sm tracking-wider">
                         {series}
                     </button>
                 ))}
             </div>
         </div>

         <div className="container mx-auto px-4 py-16">
             <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 uppercase tracking-tight">New Arrivals & Bundles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {products.map(p => (
                  <div key={p.id} className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <Link to={`/product/${p.id}`} className="block">
                          <div className="relative bg-gray-50 h-64 flex items-center justify-center p-6 overflow-hidden">
                              <img src={p.images[0]} className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                              <div className="absolute top-4 right-4 bg-wuben-blue text-white text-xs font-bold px-2 py-1 rounded">{p.specs['Max Output']}</div>
                          </div>
                          <div className="p-6">
                              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-wuben-blue transition-colors">{p.name}</h3>
                              <p className="text-gray-500 text-sm mb-4 line-clamp-2 h-10">{p.description[lang]}</p>
                              <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                                  <span className="text-wuben-blue font-black text-xl">
                                    {(p.price * 1000000).toLocaleString()} {t['common.currency']}
                                  </span>
                                  <span className="text-gray-400 group-hover:translate-x-1 transition-transform">
                                      <ChevronRight size={20} />
                                  </span>
                              </div>
                          </div>
                      </Link>
                  </div>
               ))}
            </div>
         </div>

         {/* Wuben X3 Owl Advertisement Section */}
         <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div>
                             <span className="text-wuben-blue font-bold tracking-widest uppercase text-sm mb-2 block">{t['wuben.x3.slogan']}</span>
                             <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-4 bg-gradient-to-r from-[#0055aa] via-[#ffffff] to-[#0055aa] bg-[length:200%_auto] animate-shine bg-clip-text text-transparent drop-shadow-xl">
                                X3 OWL
                             </h2>
                             <p className="text-slate-600 text-xl md:text-2xl font-light leading-relaxed max-w-xl">
                                {t['wuben.x3.desc']}
                             </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center text-center hover:border-wuben-blue transition-colors">
                                <div className="w-12 h-12 bg-blue-100 text-wuben-blue rounded-full flex items-center justify-center mb-4">
                                   <RotateCcw size={24} /> 
                                </div>
                                <span className="font-bold text-slate-800 text-sm uppercase">{t['wuben.x3.rotation']}</span>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center text-center hover:border-wuben-blue transition-colors">
                                 <div className="w-12 h-12 bg-blue-100 text-wuben-blue rounded-full flex items-center justify-center mb-4">
                                   <BatteryCharging size={24} /> 
                                </div>
                                <span className="font-bold text-slate-800 text-sm uppercase">{t['wuben.x3.wireless']}</span>
                            </div>
                        </div>
                         <Link to="/product/wuben-x3-bundle" className="inline-flex items-center gap-2 bg-wuben-blue text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                             {t['wuben.x3.btn']} <ArrowRight size={20} />
                         </Link>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700 bg-black">
                            <video 
                                src="https://wafisohswxqutsttotkb.supabase.co/storage/v1/object/public/Tek/X3%20Owl%20Wuben.mp4"
                                className="w-full h-full object-cover"
                                autoPlay muted loop playsInline
                            />
                             <div className="absolute inset-0 ring-1 ring-black/10 rounded-3xl pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
      </div>
   );
};

export const VictorinoxPage: React.FC<PageProps> = ({ lang }) => {
   const t = translations[lang];
   const products = getBrandProducts('Victorinox');

   // Parallax
   const { scrollY } = useScroll();
   const y = useTransform(scrollY, [0, 800], [0, 400]);

   const categories = [
      { name: 'vic.cat.knives', img: 'https://imageengine.victorinox.com/transform/6682e4f5-e5b0-40bf-819f-9a9e2884e309/SAK_1-3703_B3-jpg?io=transform%3Afill%2Cwidth%3A575%2Cheight%3A575&quality=100', desc: 'vic.desc.knives' },
      { name: 'vic.cat.cutlery', img: 'https://imageengine.victorinox.com/transform/a3429d1f-548a-4dc7-975e-901db428a6ef/CUT_7-7403-20G_7-7323-17G_7-7203-12G_G?io=transform%3Acrop%2Cheight%3A1300%2Cwidth%3A1300%2Cpath%3Asquare&focuspoint=0.53%2C0.52&io=transform%3Afill%2Cwidth%3A575%2Cheight%3A575&quality=100', desc: 'vic.desc.cutlery' },
      { name: 'vic.cat.watches', img: 'https://imageengine.victorinox.com/transform/fc99d1fd-f2e9-401a-9ce3-37986aea74a1/WAT_242024-1_B_1?io=transform%3Afill&focuspoint=0.49%2C0.43&io=transform%3Afill%2Cwidth%3A575%2Cheight%3A575&quality=100', desc: 'vic.desc.watches' },
      { name: 'vic.cat.travel', img: 'https://imageengine.victorinox.com/transform/96d036f1-cf03-4869-85fb-7d96aab69f0a/TGE_Category_Shot_2023_G_1?io=transform%3Acrop%2Cheight%3A1200%2Cwidth%3A1200%2Cpath%3Asquare&focuspoint=0.52%2C0.46&quality=100', desc: 'vic.desc.travel' },
      { name: 'vic.cat.fragrance', img: 'https://imageengine.victorinox.com/transform/ba308ade-2e3d-4f00-a4d9-6046810e573e/FRA_V0001247_LS4-jpg?io=transform%3Afill%2Cheight%3A600%2Cwidth%3A600&io=overlay%3Abox%2Ccolor%3A000000%2Copacity%3A10&focuspoint=0.39%2C0.7&quality=100', desc: 'vic.desc.fragrance' },
   ];

   const newArrivals = products.slice(0, 4);
   const bestsellers = products.slice(4, 8);

   return (
      <div className="bg-white min-h-screen text-slate-900 font-sans">
         {/* Hero Section */}
         <div className="relative h-[700px] w-full overflow-hidden">
             <motion.div 
                 style={{ y }} 
                 className="absolute inset-0 w-full h-[150%] -top-[25%] z-0"
             >
                 <video 
                    src="https://wafisohswxqutsttotkb.supabase.co/storage/v1/object/public/Tek/Viktorinox.mp4" 
                    className="w-full h-full object-cover brightness-[0.85]"
                    autoPlay muted loop playsInline
                 />
             </motion.div>
             <div className="absolute inset-0 bg-black/20 flex flex-col justify-center px-16 relative z-10">
                 <h1 className="text-6xl font-bold text-white mb-8 max-w-xl drop-shadow-lg uppercase">{t['vic.perfect_gift']}</h1>
                 <button className="bg-[#b10034] text-white font-bold py-4 px-8 rounded-md w-fit hover:bg-[#8a1b14] transition-colors uppercase tracking-wide text-sm shadow-xl">
                     {t['vic.browse_gift']}
                 </button>
             </div>
         </div>

         {/* Categories Grid */}
         <div className="container mx-auto px-4 py-20">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {categories.map((cat, idx) => (
                     <div key={idx} className="group relative h-[500px] overflow-hidden cursor-pointer">
                         <img src={cat.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                         <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                         <div className="absolute bottom-8 left-8 text-white">
                             <h3 className="text-2xl font-bold uppercase mb-2 drop-shadow-md">{t[cat.name]}</h3>
                             <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">{t[cat.desc]}</p>
                         </div>
                     </div>
                 ))}
                 {/* Bestsellers Tile */}
                 <div className="group relative h-[500px] bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                     <div className="text-center p-8">
                         <h3 className="text-2xl font-bold uppercase text-slate-800 mb-2">BESTSELLERS</h3>
                         <p className="text-slate-600">Top-tier treasures</p>
                         <div className="mt-6 inline-block border-b-2 border-[#b10034] pb-1 text-[#b10034] font-bold uppercase text-sm">Discover Now</div>
                     </div>
                 </div>
             </div>
         </div>

         {/* New Arrivals Slider / Grid */}
         <div className="bg-gray-50 py-20">
             <div className="container mx-auto px-4">
                 <h2 className="text-3xl font-bold text-slate-900 mb-12 uppercase">New Arrivals</h2>
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                     {newArrivals.map(p => (
                         <div key={p.id} className="group bg-white p-4 transition-all duration-300 hover:shadow-xl">
                             <div className="relative h-64 mb-4 overflow-hidden bg-white">
                                 <img src={p.images[0]} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                             </div>
                             <h4 className="font-bold text-slate-800 mb-1 line-clamp-1">{p.name}</h4>
                             <p className="text-gray-500 text-xs mb-4 line-clamp-2">{p.description[lang]}</p>
                             <div className="flex justify-between items-center">
                                 <span className="text-[#b10034] font-bold">{formatPrice(p.price, t)}</span>
                                 <ArrowRight size={18} className="text-slate-400 group-hover:text-[#b10034] transition-colors" />
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
         </div>

         {/* Lifestyle Section */}
         <div className="container mx-auto px-4 py-20">
             <h2 className="text-3xl font-bold text-slate-900 mb-12 uppercase">What will you do with your knife?</h2>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                 {[
                     { title: 'Everyday', img: 'https://imageengine.victorinox.com/transform/e4afb0f1-220b-45d1-a7da-f061890f0cbb/SAK_Master_the_Moment_0-8231-26_LS_3-jpg?io=transform%3Afill%2Cwidth%3A480%2Cheight%3A872&quality=100' },
                     { title: 'Outdoor & Sports', img: 'https://imageengine.victorinox.com/transform/7b9752a1-5859-4703-8f22-d11f3684acc4/SAK_B2M_OB_1080x1920px_Outdoor_Sports_1-3713_LS_1_withoutLogo?quality=100' },
                     { title: 'Trades & Crafts', img: 'https://imageengine.victorinox.com/transform/9b81c4eb-eaf7-492d-a7ee-b90bce830417/SAK_B2M_Trades_Crafts_3-0339-N_LS_1?io=transform%3Acrop%2Cheight%3A1080%2Cwidth%3A684%2Cpath%3Asquare&focuspoint=0.42%2C0.48&quality=100' },
                     { title: 'Accessories', img: 'https://imageengine.victorinox.com/transform/e0cb811b-04d3-4c54-9672-50142f45cc5b/SAK_Segmentation_Accessories_G-jpg?io=transform%3Afill%2Cheight%3A880%2Cwidth%3A484&focuspoint=0.54%2C0.57&quality=100' },
                 ].map((item, idx) => (
                     <div key={idx} className="relative h-[400px] group cursor-pointer overflow-hidden rounded-lg">
                         <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                         <div className="absolute bottom-6 left-6 text-white">
                             <h3 className="text-xl font-bold uppercase">{item.title}</h3>
                             <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 block">View Collection</span>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
         
         {/* Shop By Category (Small Icons/Grid) */}
         <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase">Shop by Category</h2>
                <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
                    {[
                        { name: 'Small Pocket Knives', img: 'https://imageengine.victorinox.com/transform/3394ae99-399a-430f-a166-d1acb32666f2/SAK_Small_PocketKnives-jpg?io=transform%3Afill%2Cwidth%3A360%2Cheight%3A360&quality=100' },
                        { name: 'Medium Pocket Knives', img: 'https://imageengine.victorinox.com/transform/65f4fb66-87ad-405f-993b-a94a257c3edb/SAK_Medium_PocketKnives_B1-jpg?io=transform%3Afill%2Cwidth%3A360%2Cheight%3A360&quality=100' },
                        { name: 'Large Pocket Knives', img: 'https://imageengine.victorinox.com/transform/86993d21-4690-40a7-a402-76cff9d58631/SAK_Large_PocketKnives_B2-jpg?io=transform%3Afill%2Cwidth%3A360%2Cheight%3A360&quality=100' },
                        { name: 'Swiss Tools', img: 'https://imageengine.victorinox.com/transform/a973fb3c-3fe8-4e4a-ac11-0fdaba48ecb4/SAK_Swiss_Tool_Extension_1080x1080_G_3-jpg?io=transform%3Afill%2Cwidth%3A360%2Cheight%3A360&quality=100' },
                        { name: 'Swiss Cards', img: 'https://imageengine.victorinox.com/transform/5d63db0b-eae3-4830-a68a-07f4f85e506f/SAK_Swiss_Cards_B1-jpg?io=transform%3Acrop%2Cheight%3A1000%2Cwidth%3A1000%2Cpath%3Asquare&io=overlay%3Abox%2Ccolor%3A666%2Copacity%3A20&focuspoint=0.48%2C0.44&io=transform%3Afill%2Cwidth%3A360%2Cheight%3A360&quality=100' },
                    ].map((cat, idx) => (
                        <div key={idx} className="flex-shrink-0 w-48 group cursor-pointer">
                            <div className="w-48 h-48 overflow-hidden mb-4">
                                <img src={cat.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h4 className="font-bold text-slate-800 text-sm uppercase text-center group-hover:text-[#b10034] transition-colors">{cat.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
         </div>

         {/* Collections Banner */}
         <div className="container mx-auto px-4 py-20">
             <h2 className="text-3xl font-bold text-slate-900 mb-12 uppercase">Shop by Collection</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                 {[
                     { name: 'Alox Refined', img: 'https://imageengine.victorinox.com/transform/75557ed0-9ca7-4fee-9b0a-734c01bbf1b6/SAK_Alox_Refined_G1?io=transform%3Acrop%2Cheight%3A1500%2Cwidth%3A1500%2Cpath%3Asquare&focuspoint=0.49%2C0.44&io=transform%3Afill%2Cwidth%3A360%2Cheight%3A360&quality=100' },
                     { name: 'Companion', img: 'https://imageengine.victorinox.com/transform/19b501f9-40c4-4648-8082-b581ce269bf0/SAK_-0-8170-20_B?io=transform%3Acrop%2Cheight%3A1000%2Cwidth%3A1000%2Cpath%3Asquare&focuspoint=0.48%2C0.59&io=transform%3Afill%2Cwidth%3A360%2Cheight%3A360&quality=100' },
                     { name: 'Alox Limited', img: 'https://imageengine.victorinox.com/transform/947eb278-37b4-4fca-bd0d-f6eb7f4ba338/SAK_Alox_LE_StoneRed_G_1080x1080px_240919_RR?io=transform%3Afill%2Cwidth%3A360%2Cheight%3A360&quality=100' },
                     { name: 'Limited Ed.', img: 'https://imageengine.victorinox.com/transform/fe1d5133-768f-400d-9075-6a15ffb2f704/SAK_1-3603-T21E1_B_1080x1080px?io=transform%3Afill%2Cwidth%3A360%2Cheight%3A360&quality=100' },
                     { name: 'Live to Explore', img: 'https://imageengine.victorinox.com/transform/e5df0dce-959c-45d5-9dad-6b7c1dc9ed36/SAK_Live_to_Explore_G_SoMe_1080x1620px-jpg?io=transform%3Afill%2Cwidth%3A360%2Cheight%3A360&quality=100' },
                     { name: 'Evoke', img: 'https://imageengine.victorinox.com/transform/8aafdacf-c91b-45ad-856d-50c04be4516b/SAK_Evoke_G-jpg?io=transform%3Acrop%2Cheight%3A1040%2Cwidth%3A1920%2Cpath%3Asquare&focuspoint=0.48%2C0.57&quality=100' },
                 ].map((col, idx) => (
                     <div key={idx} className="text-center group cursor-pointer">
                         <div className="aspect-square overflow-hidden rounded-full mb-4 border-2 border-transparent group-hover:border-[#b10034] transition-all p-1">
                             <img src={col.img} className="w-full h-full object-cover rounded-full" />
                         </div>
                         <h5 className="font-bold text-sm uppercase">{col.name}</h5>
                     </div>
                 ))}
             </div>
         </div>

      </div>
   );
};

export const TechPage: React.FC<PageProps> = ({ lang }) => {
    const t = translations[lang];
    const products = getBrandProducts('SharperImage').concat(getBrandProducts('Nitecore').filter(p => p.category === 'power' || p.category === 'tech'));

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
       <div className="bg-slate-900 min-h-screen pb-20">
          {/* Hero Section */}
          <div className="relative h-[600px] w-full overflow-hidden mb-12">
             <motion.div 
                 style={{ y }} 
                 className="absolute inset-0 w-full h-[150%] -top-[25%] z-0"
             >
                 <video 
                    src="https://wafisohswxqutsttotkb.supabase.co/storage/v1/object/public/Tek/Aria%20Tech.mp4" 
                    className="w-full h-full object-cover brightness-[0.6]"
                    autoPlay muted loop playsInline
                 />
             </motion.div>
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40 z-10"></div>
             
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                 <h1 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-[0_0_25px_rgba(0,255,157,0.5)]">
                    {t['brand.tech']}
                 </h1>
                 <p className="text-xl md:text-2xl text-neon font-mono tracking-widest uppercase bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-neon/30">
                    {t['tech.slogan']}
                 </p>
             </div>
          </div>

          <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(p => (
                    <div key={p.id} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-neon transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,157,0.2)] group hover:-translate-y-1">
                        <ProductCard product={p} lang={lang} />
                    </div>
                ))}
             </div>
          </div>
       </div>
    );
};

export const AccessoriesPage: React.FC<PageProps> = ({ lang }) => {
    const t = translations[lang];
    const products = getBrandProducts('Nitecore').filter(p => p.category === 'accessory' || p.category === 'bag' || p.category === 'power').concat(getBrandProducts('Wuben').filter(p => p.category === 'accessory')).concat(getBrandProducts('Olight').filter(p => p.category === 'accessory')).concat(getBrandProducts('Victorinox').filter(p => p.category === 'accessory'));

    return (
       <div className="bg-[#111] min-h-screen pb-20">
          <div className="container mx-auto px-4 py-12">
             <h1 className="text-3xl font-bold text-white mb-8 border-b border-[#333] pb-4 uppercase">{t['nav.accessories']}</h1>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {products.map(p => (
                     <ProductCard key={p.id} product={p} lang={lang} />
                 ))}
             </div>
          </div>
       </div>
    );
};

export const ShopPage: React.FC<PageProps> = ({ lang }) => {
    return (
        <div className="bg-[#0b0b0b] min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4">ALL PRODUCTS</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map(p => (
                        <ProductCard key={p.id} product={p} lang={lang} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export const ComparePage: React.FC<PageProps> = ({ lang }) => (
    <div className="container mx-auto px-4 py-12 text-white">Compare Page Placeholder</div>
);

export const AIAssistantPage: React.FC<PageProps> = ({ lang }) => (
    <div className="container mx-auto px-4 py-12">
        <AIAssistant lang={lang} />
    </div>
);
