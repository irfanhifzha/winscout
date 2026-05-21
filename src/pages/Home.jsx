import React, { useState, useEffect } from 'react';

// Import Assets
import Icon from '../assets/favicon.png';
import item1 from '../assets/item1.png';
import item2 from '../assets/item2.png';
import item3 from '../assets/item3.png';
import show0 from '../assets/show0.png';
import show00 from '../assets/show00.png';
import show1 from '../assets/show1.png';
import show2 from '../assets/show2.png';
import show3 from '../assets/show3.png';
import show4 from '../assets/show4.png';
import testim1 from '../assets/testim1.jpg';
import testim2 from '../assets/testim2.jpg';
import testim3 from '../assets/testim3.jpg';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hero Section Square Carousel Images
  const carouselImages = [show0, show00, show1, show2, show3, show4];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-cycle carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Product Catalog Data using real photo assets
  const products = [
    {
      id: 'pdl-vector',
      name: 'Jersey Pramuka AB-03 Merah Putih',
      originalPrice: 135000,
      discountPrice: 109999,
      image: item1,
      waText: 'Halo Admin WIN Scout Apparel, saya tertarik memesan Jersey Pramuka AB-03 Merah Putih.'
    },
    {
      id: 'scout-elite',
      name: 'Jersey Pramuka Baden Powel',
      originalPrice: 135000,
      discountPrice: 109999,
      image: item2,
      waText: 'Halo Admin WIN Scout Apparel, saya tertarik memesan Jeresy Pramuka Baden Powel.'
    },
    {
      id: 'ambalan-garuda',
      name: 'Jersey Pramuka Batik Kalimantan',
      originalPrice: 135000,
      discountPrice: 109999,
      image: item3,
      waText: 'Halo Admin WIN Scout Apparel, saya tertarik memesan Jersey Pramuka Batik Kalimantan.'
    }
  ];

  // Testimonials with custom JPEG photos
  const testimonials = [
    {
      id: 1,
      rating: 5,
      author: "Customer Shopee",
      image: testim1
    },
    {
      id: 2,
      rating: 5,
      author: "Customer Offline",
      image: testim2
    },
    {
      id: 3,
      rating: 5,
      author: "P3K Kab. Berau. Kalimantan Timur",
      image: testim3
    }
  ];

  // Steps
  const steps = [
    {
      number: "01",
      title: "Hubungi WhatsApp",
      desc: "Klik tombol order untuk langsung berkonsultasi gratis dengan admin kami via WhatsApp."
    },
    {
      number: "02",
      title: "Diskusi Desain",
      desc: "Diskusikan model baju, ukuran, logo ambalan/sekolah, dan konsep warna yang diinginkan."
    },
    {
      number: "03",
      title: "Revisi Mockup",
      desc: "Tim desainer profesional kami akan membuatkan mockup baju kustom Anda gratis."
    },
    {
      number: "04",
      title: "Proses Produksi",
      desc: "Setelah desain deal, jersey diproduksi menggunakan teknologi printing sublimasi premium."
    },
    {
      number: "05",
      title: "Pengiriman",
      desc: "Baju dikirim ke lokasi Anda di seluruh Indonesia dengan kemasan aman dan rapi."
    }
  ];

  // WhatsApp helper
  const openWhatsApp = (customText = "") => {
    const phoneNumber = "6285220169280";
    const defaultText = "Halo Admin WIN Scout Apparel, saya tertarik untuk berkonsultasi mengenai baju pramuka custom.";
    const text = encodeURIComponent(customText || defaultText);
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-900 font-sans antialiased selection:bg-amber-200 selection:text-amber-950 font-body">

      {/* Google fonts & custom pattern classes */}
      <style>{`
        .font-russo { font-family: 'Russo One', sans-serif; }
        .font-rough { font-family: 'Special Elite', system-ui; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .bg-grid-tactical {
          background-size: 28px 28px;
          background-image: radial-gradient(circle, rgba(46, 79, 54, 0.08) 1.2px, transparent 1.2px);
        }
        .bg-lines-rough {
          background-image: repeating-linear-gradient(45deg, rgba(108, 78, 49, 0.04) 0px, rgba(108, 78, 49, 0.04) 2px, transparent 2px, transparent 10px);
        }
        .text-shadow-rough {
          text-shadow: 2px 2px 0px rgba(46, 79, 54, 0.12);
        }
      `}</style>

      {/* 1. HEADER / STICKY NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#FAF9F5]/90 border-b border-stone-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={Icon} className="w-10 h-10 object-contain" alt="WIN Scout Logo" />
            <div>
              <span className="font-russo text-xl tracking-wide text-stone-900 block leading-none">WIN SCOUT</span>
              <span className="font-rough text-[12px] text-orange-800 font-bold uppercase tracking-widest block mt-1">APPAREL</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-bold text-stone-600">
            <a href="#keunggulan" className="hover:text-emerald-800 transition-colors">Keunggulan</a>
            <a href="#katalog" className="hover:text-emerald-800 transition-colors">Katalog Produk</a>
            <a href="#testimoni" className="hover:text-emerald-800 transition-colors">Testimoni</a>
            <a href="#cara-order" className="hover:text-emerald-800 transition-colors">Cara Order</a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button
              onClick={() => openWhatsApp("Halo Admin WIN Scout Apparel, saya ingin berkonsultasi mengenai baju pramuka custom.")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black tracking-wide uppercase bg-[#2d4a22] hover:bg-[#385c2b] text-white shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span className="material-icons text-sm select-none">chat</span>
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
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-stone-200 bg-[#FAF9F5] px-4 pt-2 pb-6 flex flex-col gap-4">
            <a
              href="#keunggulan"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-stone-700 hover:text-emerald-800 font-bold uppercase tracking-wider text-xs"
            >
              Keunggulan
            </a>
            <a
              href="#katalog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-stone-700 hover:text-emerald-800 font-bold uppercase tracking-wider text-xs"
            >
              Katalog Produk
            </a>
            <a
              href="#testimoni"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-stone-700 hover:text-emerald-800 font-bold uppercase tracking-wider text-xs"
            >
              Testimoni
            </a>
            <a
              href="#cara-order"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-stone-700 hover:text-emerald-800 font-bold uppercase tracking-wider text-xs"
            >
              Cara Order
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openWhatsApp("Halo Admin WIN Scout Apparel, saya ingin berkonsultasi mengenai baju pramuka custom.");
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-black tracking-wide uppercase bg-[#2d4a22] text-white shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span className="material-icons text-sm select-none">chat</span>
              Chat WhatsApp
            </button>
          </div>
        )}
      </header>

      {/* 2. HERO CONTENT SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 md:py-28 bg-grid-tactical border-b border-stone-200/80">

        {/* Subtle decorative stripes */}
        <div className="absolute right-0 top-0 w-24 h-full bg-lines-rough opacity-70 pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-24 h-24 bg-lines-rough opacity-70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="md:col-span-7 text-center md:text-left">

              {/* Adventurous Tag Label */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-orange-50 border-2 border-orange-800/20 text-orange-900 text-xs uppercase tracking-wider mb-6">
                <span className="material-icons text-xs select-none">auto_awesome</span> KONSULTASI DESAIN &amp; MOCKUP GRATIS
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-russo text-stone-900 tracking-tight leading-none uppercase text-shadow-rough">
                JERSEY PRAMUKA <br />
                <span className="text-orange-900">
                  CUSTOM PREMIUM
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-stone-600 max-w-xl mx-auto md:mx-0 leading-relaxed font-body">
                Tingkatkan kekompakan regu dan ambalanmu dengan baju pramuka lapangan kustom yang nyaman, tangguh, dan berdesain gahar. Dirancang khusus menggunakan material sublimasi premium standar petualang.
              </p>

              {/* Scope of Usages: Outdoor Style */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto md:mx-0 text-left">
                {[
                  { label: "KEGIATAN OUTDOOR", desc: "Tahan panas & gesekan lapangan", icon: "terrain" },
                  { label: "LOMBA & KOMPETISI", desc: "Tampil mencolok & solid", icon: "emoji_events" },
                  { label: "SPESIAL EVENT", desc: "Desain kompak identitas tim", icon: "groups" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start p-2 rounded-lg bg-white/60 border border-stone-200/50 shadow-sm backdrop-blur-sm">
                    <span className="material-icons text-orange-800 text-sm select-none mt-0.5">{item.icon}</span>
                    <div>
                      <h4 className="font-russo text-[11px] tracking-wide text-orange-850 leading-tight uppercase">{item.label}</h4>
                      <p className="text-[10px] text-stone-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Call-To-Action */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <button
                  onClick={() => openWhatsApp("Halo Admin WIN Scout Apparel, saya ingin pesan baju pramuka custom dan konsultasi desain gratis.")}
                  className="relative group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-black tracking-widest uppercase bg-[#2d4a22] hover:bg-[#385c2b] text-white shadow-md active:scale-95 transition-all duration-200 cursor-pointer overflow-hidden"
                >
                  <span className="material-icons text-sm select-none">chat</span>
                  Hubungi WhatsApp Admin
                </button>

                <a
                  href="#katalog"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-black tracking-widest uppercase bg-white hover:bg-stone-100 text-stone-800 border-2 border-stone-300 active:scale-95 transition-all duration-200"
                >
                  Lihat Katalog Baju <span className="material-icons text-xs select-none">arrow_forward</span>
                </a>
              </div>

            </div>

            {/* Right Showcase: Square Photo Carousel */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm rounded-3xl bg-white border-2 border-dashed border-stone-300 p-2.5 shadow-xl relative group">

                {/* Visual grid paper texture background inside mockup card */}
                <div className="absolute inset-0 rounded-3xl bg-grid-tactical opacity-25 pointer-events-none" />



                {/* Square Type Carousel Area */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden aspect-square bg-stone-100 flex items-center justify-center">
                  <img
                    src={carouselImages[currentSlide]}
                    alt={`Scout Jersey Design ${currentSlide}`}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                  />

                  {/* Carousel Slide Overlay Shadows */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                  {/* Carousel Arrow Navigation */}
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-stone-850 flex items-center justify-center shadow-md active:scale-95 transition-all cursor-pointer z-10"
                    aria-label="Previous slide"
                  >
                    <span className="material-icons select-none text-base">chevron_left</span>
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-stone-850 flex items-center justify-center shadow-md active:scale-95 transition-all cursor-pointer z-10"
                    aria-label="Next slide"
                  >
                    <span className="material-icons select-none text-base">chevron_right</span>
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5 z-10">
                    {carouselImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all cursor-pointer ${currentSlide === idx ? 'bg-orange-700 w-4' : 'bg-white/55 hover:bg-white/90'
                          }`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ADVANTAGES / FEATURES SECTION */}
      <section id="keunggulan" className="py-24 bg-white relative">

        <div className="absolute inset-x-0 top-0 h-40 bg-grid-tactical opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-rough text-sm font-bold text-orange-800 uppercase tracking-widest">KUALITAS BUKTIKAN SENDIRI</h2>
            <p className="mt-3 font-russo text-3xl sm:text-4xl text-stone-900 tracking-tight uppercase">
              Keunggulan Jersey Pramuka Kustom Kami
            </p>
            <div className="w-16 h-1 bg-[#6c4e31] mx-auto mt-4" />
            <p className="mt-4 text-base text-stone-650 font-body">
              Kami memproduksi setiap pakaian dengan ketelitian tinggi dan material terbaik demi memastikan kenyamanan maksimal saat kegiatan lapangan.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "brush",
                title: "Desain Kustom Bebas",
                desc: "Konsultasikan konsep ambalan atau regumu. Tambahkan logo sekolah, teks, dan detail grafis lainnya tanpa batas."
              },
              {
                icon: "air",
                title: "Bahan Dingin & Nyaman",
                desc: "Menggunakan bahan Dryfit kelas premium. Berpori mikro untuk sirkulasi udara optimal, anti-gerah, dan cepat kering."
              },
              {
                icon: "checkroom",
                title: "Warna Full-Print Tajam",
                desc: "Dicetak dengan mesin sublimasi Epson terbaru. Tinta menyerap sempurna ke serat kain sehingga anti-luntur walau dicuci berkali-kali."
              },
              {
                icon: "content_cut",
                title: "Jahitan Kuat Premium",
                desc: "Dijahit menggunakan teknik rantai / obras ganda berkualitas distro, sangat kokoh untuk berbagai aktivitas lapangan yang ekstrem."
              },
              {
                icon: "auto_awesome",
                title: "Gratis Revisi Desain",
                desc: "Revisi mockup desain sepuasnya sampai Anda 100% cocok sebelum masuk ke proses produksi pabrik."
              },
              {
                icon: "local_shipping",
                title: "Pengiriman Seluruh Indonesia",
                desc: "Bekerja sama dengan kargo terpercaya untuk memastikan pesanan Anda tiba tepat waktu dengan biaya terjangkau."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-stone-50 border border-stone-200 p-6 md:p-8 hover:border-orange-800/30 hover:bg-[#FAF9F5] transition-all duration-300 hover:shadow-xl shadow-sm"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-800/0 to-emerald-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Material Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-stone-200 shadow-sm group-hover:border-emerald-800/30 transition-colors">
                  <span className="material-icons text-emerald-800 text-2xl select-none">{feature.icon}</span>
                </div>

                <h3 className="mt-6 font-russo text-base tracking-wider text-stone-900 uppercase">{feature.title}</h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed font-body">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PRODUCT CATALOG SECTION */}
      <section id="katalog" className="py-24 bg-[#FAF9F5] border-y border-stone-200/85 relative">

        <div className="absolute inset-0 bg-grid-tactical opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-rough text-sm font-bold text-orange-800 uppercase tracking-widest">KATALOG PRODUK PILIHAN</h2>
            <p className="mt-3 font-russo text-3xl sm:text-4xl text-stone-900 tracking-tight uppercase">
              Model Jersey &amp; Baju Pramuka Lapangan
            </p>
            <div className="w-16 h-1 bg-[#6c4e31] mx-auto mt-4" />
            <p className="mt-4 text-base text-stone-650 font-body">
              Katalog real-photo untuk baju pramuka custom kami. Desain siap disesuaikan dengan identitas gugus depan atau ambalan Anda.
            </p>
          </div>

          {/* Product Grid using Photo Assets */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const formattedOriginal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(product.originalPrice);
              const formattedDiscount = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(product.discountPrice);

              return (
                <div
                  key={product.id}
                  className="group flex flex-col rounded-3xl bg-white border border-stone-200 overflow-hidden hover:border-emerald-800/30 hover:shadow-xl transition-all duration-300 relative"
                >


                  {/* Photo Image Box */}
                  <div className="aspect-square bg-stone-50 border-b border-stone-200 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-grid-tactical opacity-15 pointer-events-none" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Detail Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-russo text-sm tracking-wide text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-2 uppercase">{product.name}</h3>
                      <p className="font-rough text-[9px] text-[#6c4e31] mt-1 uppercase tracking-widest font-bold">WIN SCOUT APPAREL</p>

                      {/* Pricing block */}
                      <div className="mt-4 flex items-baseline gap-2">
                        <span className="font-russo text-lg text-emerald-800">{formattedDiscount}</span>
                        <span className="text-xs text-stone-400 line-through font-body">{formattedOriginal}</span>
                      </div>
                    </div>

                    {/* Order Button with Material Icon */}
                    <div className="mt-6">
                      <button
                        onClick={() => openWhatsApp(product.waText)}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-stone-100 group-hover:bg-[#2d4a22] text-stone-700 group-hover:text-white border border-stone-300 group-hover:border-transparent transition-all duration-300 cursor-pointer"
                      >
                        <span className="material-icons text-sm select-none">chat</span>
                        Pesan Sekarang
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Catalog CTA Alert */}
          <div className="mt-12 text-center">
            <p className="text-sm text-stone-600 font-body">
              Punya desain sendiri atau ingin konsultasi bahan jersey lainnya?{" "}
              <button
                onClick={() => openWhatsApp("Halo Admin WIN Scout Apparel, saya punya konsep desain sendiri. Apakah bisa dibuatkan baju lapangannya?")}
                className="bg-[#6c4e31] text-white px-4 py-2 rounded mt-3 hover:bg-[#5c3f24] transition ms-2 cursor-pointer"
              >
                Hubungi Desainer WIN Scout
              </button>
            </p>
          </div>

          <div className="mt-22 flex flex-col justify-center">
            <p className="m-3 text-center">Masih ingin lanjut melihat produk lainnya?</p>
            <button
              onClick={() => window.location.href = "https://shopee.co.id/winscoutapparel"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-black tracking-widest uppercase bg-[#ee4d2d] hover:bg-[#ff5722] text-white shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span className="material-icons text-sm select-none">shopping_bag</span>
              Kunjungi Toko Shopee
            </button>
          </div>

        </div>
      </section >

      {/* 5. TESTIMONIALS SECTION */}
      < section id="testimoni" className="py-24 bg-white relative" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-rough text-sm font-bold text-orange-800 uppercase tracking-widest">APA KATA MEREKA</h2>
            <p className="mt-3 font-russo text-3xl sm:text-4xl text-stone-900 tracking-tight uppercase">
              Ulasan Pramuka Se-Indonesia
            </p>
            <div className="w-16 h-1 bg-[#6c4e31] mx-auto mt-4" />
            <p className="mt-4 text-base text-stone-650 font-body">
              Kepuasan konsumen adalah prioritas utama kami. Berikut adalah tanggapan jujur dari mereka yang telah memesan baju pramuka di WIN Scout Apparel.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {testimonials.map((testi) => (
              <div
                key={testi.id}
                className="flex flex-col justify-between rounded-3xl bg-stone-50 border border-stone-200 p-5 shadow-sm relative hover:shadow-md hover:border-emerald-800/20 transition-all duration-300"
              >
                <div>
                  {/* Photo Testimoni (above review star) */}
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-stone-250/60 mb-4 relative">
                    <img
                      src={testi.image}
                      alt={`Foto Ulasan ${testi.author}`}
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-300"
                    />
                  </div>

                  {/* Rating Stars using Material Icons */}
                  <div className="flex gap-0.5">
                    {[...Array(testi.rating)].map((_, i) => (
                      <span key={i} className="material-icons text-amber-500 text-lg select-none">star</span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="mt-4 text-base text-stone-700 leading-relaxed font-body">
                    {testi.author}
                  </p>
                </div>

                {/* Author Info (without profile pic avatar) */}
                <div className="mt-6 border-t border-stone-200/60 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-rough text-[9px] text-[#6c4e31] mt-1.5 uppercase tracking-wider">{testi.school}</p>
                  </div>
                  <span className="material-icons text-emerald-800/20 text-xl select-none">format_quote</span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section >

      {/* 6. ORDERING PROCESS SECTION */}
      < section id="cara-order" className="py-24 bg-[#FAF9F5] border-t border-stone-200/80 relative" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-rough text-sm font-bold text-orange-800 uppercase tracking-widest">ALUR PEMESANAN MUDAH</h2>
            <p className="mt-3 font-russo text-3xl sm:text-4xl text-stone-900 tracking-tight uppercase">
              Cara Pemesanan di WIN Scout
            </p>
            <div className="w-16 h-1 bg-[#6c4e31] mx-auto mt-4" />
            <p className="mt-4 text-base text-stone-650 font-body">
              Proses pemesanan sangat transparan dan terstruktur agar hasil baju kustom Anda sesuai dengan ekspektasi.
            </p>
          </div>

          {/* Horizontal Steps Timeline */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative">

            {/* Visual connector line for large screens */}
            <div className="hidden lg:block absolute top-[15%] left-[10%] right-[10%] h-2 bg-gradient-to-r from-emerald-800/20 via-amber-800/30 to-emerald-800/20 pointer-events-none" />

            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative group">

                {/* Step circle */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-stone-300 flex items-center justify-center text-emerald-800 font-russo text-lg shadow-sm group-hover:border-[#6c4e31] group-hover:bg-orange-50 group-hover:scale-105 transition-all duration-300 relative z-10">
                  {step.number}
                </div>

                <h3 className="mt-6 font-russo text-xs tracking-wider text-stone-900 uppercase">{step.title}</h3>
                <p className="mt-2.5 text-xs text-stone-600 leading-relaxed max-w-[200px] font-body">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section >

      {/* 7. CALL TO ACTION SECTION */}
      < section className="py-20 relative overflow-hidden bg-white border-t border-stone-200" >

        {/* Adventurous stripes on the background */}
        < div className="absolute inset-0 bg-grid-tactical opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-lines-rough opacity-30 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">

          {/* Stamped element */}
          <div className="inline-block mb-4 border-2 border-dashed border-orange-800/20 px-4 py-1 text-xs font-rough text-orange-800 uppercase tracking-widest">
            BURUAN ORDER SEKARANG
          </div>

          <h2 className="font-russo text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight uppercase leading-none">
            TAMPIL GAHAR &amp; SOLID BERSAMA REGUMU!
          </h2>

          <p className="mt-6 text-base sm:text-lg text-stone-700 max-w-2xl mx-auto leading-relaxed font-body">
            Dapatkan baju kustom berkualitas tinggi dengan penawaran desain mockup gratis serta revisi tanpa batas. Pesan sekarang sebelum antrean produksi penuh!
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Primary Order Button */}
            <button
              onClick={() => openWhatsApp("Halo Admin WIN Scout Apparel, saya ingin berkonsultasi mengenai baju pramuka custom dan mengklaim penawaran desain gratis.")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-black tracking-widest uppercase bg-[#2d4a22] hover:bg-[#385c2b] text-white shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span className="material-icons text-sm select-none">chat</span>
              Pesan Lewat WhatsApp Sekarang
            </button>

            {/* Price Check / Catalog Shortcut */}
            <a
              href="#katalog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-black tracking-widest uppercase bg-white hover:bg-stone-100 text-stone-850 border-2 border-stone-300 active:scale-95 transition-all duration-200"
            >
              Tanya Harga &amp; Ukuran <span className="material-icons text-xs select-none">help_outline</span>
            </a>
          </div>

          {/* Secure disclaimer */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-stone-500 font-medium">
            <span className="material-icons text-[#2d4a22] text-lg select-none">verified</span>
            Jaminan 100% Terpercaya - Garansi hasil cetak presisi &amp; jahitan kuat.
          </div>

        </div>
      </section >

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
                <li><a href="#keunggulan" className="hover:text-emerald-500 transition-colors">Keunggulan Jersey</a></li>
                <li><a href="#katalog" className="hover:text-emerald-500 transition-colors">Katalog Produk</a></li>
                <li><a href="#testimoni" className="hover:text-emerald-500 transition-colors">Testimoni Pelanggan</a></li>
                <li><a href="#cara-order" className="hover:text-emerald-500 transition-colors">Cara Pemesanan</a></li>
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
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-850 text-slate-300 hover:text-emerald-500 hover:border-emerald-500/20 text-xs transition-colors cursor-pointer"
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

    </div >
  );
}
