import { useState } from "react";
import Icon from '../assets/favicon.png';
import '../index.css';

export default function Navbar() {

      // WhatsApp helper
    const openWhatsApp = (customText = "") => {
        const phoneNumber = "6285220169280";
        const defaultText = "Halo Admin WIN Scout Apparel, saya tertarik untuk berkonsultasi mengenai baju pramuka custom.";
        const text = encodeURIComponent(customText || defaultText);
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    };
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
          {/* 1. HEADER / STICKY NAVBAR */}
          <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#FAF9F5]/90 border-b border-stone-200/60 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
    
              {/* Logo & Brand */}
              <div className="flex items-center gap-3 cursor-pointer" onClick={() =>  window.location.href = "/"}>
                <img src={Icon} className="w-10 h-10 object-contain" alt="WIN Scout Logo" />
                <div>
                  <span className="font-russo text-xl tracking-wide text-stone-900 block leading-none">WIN SCOUT</span>
                  <span className="font-russo text-[12px] text-orange-800 uppercase tracking-widest block mt-0">APPAREL</span>
                </div>
              </div>
    
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-bold text-stone-600 font-body">

                <button
                    onClick={() =>
                      window.location.href = "/"}
                    className="hover:text-lime-800 transition-colors uppercase cursor-pointer"
                  >
                    HOME
                  </button>
                  
    
                  <button
                    onClick={() =>
                      window.location.href = "/about"}
                    className="hover:text-lime-800 transition-colors uppercase cursor-pointer"
                  >
                    ABOUT US
                  </button>
    
              </nav>
    
              {/* Contact Button */}
              <div className="hidden md:block">
                <button
                  onClick={() => openWhatsApp("Halo Admin WIN Scout Apparel, saya ingin berkonsultasi mengenai baju pramuka custom.")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black font-body tracking-wide uppercase bg-[#2d4a22] hover:bg-[#385c2b] text-white shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <span className="material-icons text-sm select-none font">chat</span>
                  Chat WhatsApp
                </button>
              </div>
    
              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-stone-600 hover:text-stone-950 transition-colors focus:outline-none"
                  aria-label="Toggle menu"
                >
                  <span className="material-icons select-none">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                </button>
              </div>
            </div>
    
            {/* Mobile Navigation Drawer */}
            <div
              className={`
                md:hidden overflow-hidden border-b border-stone-200 bg-[#FAF9F5]
                transition-all duration-300 ease-in-out
                ${
                  isMobileMenuOpen
                    ? 'max-h-[500px] opacity-100 translate-y-0 py-2 pb-6'
                    : 'max-h-0 opacity-0 -translate-y-2 py-0 pb-0 border-b-0'
                }
              `}
            >
              <div className="px-4 flex flex-col gap-4 items-center">

                <button
                    onClick={() =>
                      window.location.href = "/"}
                    className="py-2 text-left text-stone-700 hover:text-lime-800 font-bold uppercase tracking-wider text-xs font-body"
                  >
                    HOME
                  </button>
                  
    
                  <button
                    onClick={() =>
                      window.location.href = "/about"}
                    className="py-2 text-left text-stone-700 hover:text-lime-800 font-bold uppercase tracking-wider text-xs font-body"
                  >
                    ABOUT US
                  </button>
    
    
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
    
                    openWhatsApp(
                      "Halo Admin WIN Scout Apparel, saya ingin berkonsultasi mengenai baju pramuka custom."
                    );
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-black tracking-wide uppercase bg-[#2d4a22] text-white shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <span className="material-icons text-sm select-none">chat</span>
                  Chat WhatsApp
                </button>
    
              </div>
            </div>
            
          </header>
        </>
    );
}