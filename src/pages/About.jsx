import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import BM from '../assets/about/SOCIAL BUSINESS MODEL CANVAS (SBMC) WIN SCOUT.pdf'
import SM from '../assets/about/SOCIAL MAPPING WIN SCOUT - FOKUS NILAI KEBERMANFAATAN.pdf'
import brandidentity from '../assets/about/brandidentity.jpeg'
import Icon from '../assets/favicon.png'

function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#FAF9F5] font-body px-4 py-16 flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center max-w-2xl mb-12">
          <h1 className="font-russo text-3xl md:text-4xl text-stone-900 uppercase tracking-wide">
            About US
          </h1>

          {/* Brand Icon */}
          {/* <div className="mt-3 flex justify-center">
            <img
              src={Icon}
              alt="WIN Scout Logo"
              className="w-14 h-14 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div> */}
          
          <h3 className="font-russo text-md md:text-sm text-orange-900 uppercase tracking-wide mt-3">WIN Scout Apparel</h3>

          <p className="mt-4 text-sm text-stone-600 leading-relaxed">
            Profil dan dokumentasi resmi perusahaan. Pelajari lebih lanjut tentang identitas kami, standar produksi, dan komitmen kami terhadap pakaian taktis berkualitas.
          </p>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">

            <div className="bg-white border border-stone-200 rounded-xl py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-stone-300">
              <p className="text-stone-900 font-russo">Tahun berdiri</p>
              <p className="font-bold text-stone-500 mt-1"> Sejak 2021</p>
            </div>

            <div className="bg-white border border-stone-200 rounded-xl py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-stone-300">
              <p className="text-stone-900 font-russo">Produk terjual</p>
              <p className="font-bold text-stone-500 mt-1">50K+</p>
            </div>

            <div className="bg-white border border-stone-200 rounded-xl py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-stone-300">
              <p className="text-stone-900 font-russo">Rating Shopee</p>
              <p className="font-bold text-stone-500 mt-1">4.8 / 5</p>
            </div>
          </div>
        
        </div>

        {/* Iframe Grid */}
        <div className="w-full max-w-6xl grid md:grid-cols-1 gap-6">

          {/* Document 1 */}
          <div className="bg-white border border-stone-200 rounded-2xl shadow-sm">
            <div className="px-4 py-3 border-b border-stone-200">
              <h2 className="font-russo text-xs uppercase tracking-wider text-stone-700">
                Social Business Model Canvas (SBMC)
              </h2>
            </div>

            <iframe
              src={BM}
              className="w-full h-[500px]"
              title="Company Profile"
            />
          </div>

          {/* Document 2 */}
          <div className="bg-white border border-stone-200 rounded-2xl shadow-sm">
            <div className="px-4 py-3 border-b border-stone-200">
              <h2 className="font-russo text-xs uppercase tracking-wider text-stone-700">
                Social Mapping
              </h2>
            </div>

            <iframe
              src={SM}
              className="w-full h-[500px]"
              title="Production Standards"
            />
          </div>

          {/* BRAND IDENTITY IMAGE SECTION */}
          <div className="w-full max-w-6xl mt-10">
            <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">

              <div className="px-4 py-3 border-b border-stone-200">
                <h2 className="font-russo text-xs uppercase tracking-wider text-stone-700">
                  Brand Identity
                </h2>
              </div>

              <div className="p-4 flex justify-center items-center bg-stone-50">
                <img
                  src={brandidentity}
                  alt="WIN Scout Brand Identity"
                  className="max-h-[500px] object-contain rounded-xl shadow-md"
                />
              </div>

            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-xs text-stone-500 max-w-xl">
          Dibuat dengan penuh perhatian untuk mendukung kebutuhan Anda di Indonesia.
        </div>

      </div>



      <Footer />

    </>
  );
}

export default About;