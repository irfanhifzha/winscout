import { useState } from "react";
import Icon from '../assets/favicon.png';
import '../index.css';

export default function Footer() {

    

    return (
        <>
          
          {/* 8. FOOTER SECTION (Stay Dark for Solid Grounding) */}
                < footer className="bg-stone-950 text-stone-400 text-sm pt-16 pb-8" >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-12 border-b border-stone-900">
          
                      {/* Column 1: Info & Brand */}
                      <div className="md:col-span-5 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <img src={Icon} className="w-8 h-8 object-contain" alt="WIN Scout Footer Logo" />
                          <span className="font-russo text-lg tracking-wider text-white">WIN SCOUT APPAREL</span>
                        </div>
                        <p className="text-xs text-stone-400 leading-relaxed mt-2 font-body">
                          WIN Scout Apparel adalah produsen terpercaya untuk baju pramuka PDH/PDL lapangan dan jersey custom bermutu tinggi. Melayani pesanan satuan, regu, ambalan, hingga kwartir cabang di seluruh wilayah Indonesia dengan kualitas bahan dryfit premium dan cetak warna sublimasi tajam.
                        </p>
                      </div>
          
                      {/* Column 2: Navigation Links */}
                      <div className="md:col-span-3">
                        <h4 className="font-russo text-white font-bold text-xs uppercase tracking-wider mb-4">Navigasi Halaman</h4>
                        <ul className="space-y-2.5 text-xs text-stone-400 font-body">
                          <li><a onClick={() => window.location.href = "/"} className="hover:text-lime-500 transition-colors cursor-pointer">Home Page</a></li>
                          <li><a onClick={() => window.location.href = "/about"} className="hover:text-lime-500 transition-colors cursor-pointer">About Page</a></li>
                        </ul>
                      </div>
          
                      {/* Column 3: Platform Mentions & Social Media Links */}
                      <div className="md:col-span-4">
                        <h4 className="font-russo text-white font-bold text-xs uppercase tracking-wider mb-4">Temukan Kami Di</h4>
                        <p className="text-xs text-stone-400 leading-relaxed mb-4 font-body">
                          Pesan langsung atau intip kreasi desain kaos pramuka terbaru kami di berbagai media sosial dan marketplace resmi.
                        </p>
          
                        {/* Social Links using Material Icons */}
                        <div className="flex flex-wrap items-center gap-3">
          
                          {/* Shopee */}
                          <a
                            href="https://shopee.co.id/winscoutapparel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-850 text-stone-300 hover:text-orange-500 hover:border-orange-500/20 text-xs transition-colors"
                          >
                            <span className="material-icons text-xs select-none">shopping_bag</span>
                            <span>Shopee</span>
                          </a>
          
                          {/* Instagram */}
                          <a
                            href="https://www.instagram.com/winscoutapparel/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-850 text-stone-300 hover:text-pink-500 hover:border-pink-500/20 text-xs transition-colors"
                          >
                            <span className="material-icons text-xs select-none">camera_alt</span>
                            <span>Instagram</span>
                          </a>
          
                          {/* TikTok */}
                          <a
                            href="https://www.tiktok.com/@winscoutapparel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-850 text-slate-300 hover:text-white hover:border-slate-700 text-xs transition-colors"
                          >
                            <span className="material-icons text-xs select-none">music_note</span>
                            <span>TikTok</span>
                          </a>
          
                          {/* WhatsApp */}
                          <button
                            onClick={() => openWhatsApp("Halo Admin WIN Scout Apparel, saya ingin berkonsultasi mengenai pemesanan jersey kustom.")}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-850 text-slate-300 hover:text-lime-500 hover:border-lime-500/20 text-xs transition-colors cursor-pointer"
                          >
                            <span className="material-icons text-xs select-none">chat</span>
                            <span>WhatsApp</span>
                          </button>
          
                        </div>
                      </div>
          
                    </div>
          
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-600 gap-4 font-body">
                      <div>
                        &copy; {new Date().getFullYear()} <span className="text-stone-500 font-bold">WIN Scout Apparel</span>. Hak Cipta Dilindungi.
                      </div>
                      <div>
                        Didesain dengan ❤️ untuk Gerakan Pramuka Indonesia.
                      </div>
                    </div>
          
                  </div>
                </footer >

        </>
    );
}