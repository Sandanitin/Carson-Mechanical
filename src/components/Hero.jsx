import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import content from '../content/site.json'

export default function Hero() {
  const images = content.images.hero
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setIndex(i => (i+1) % images.length), 5000)
    return ()=>clearInterval(t)
  }, [images.length])
  return (
    <section className="relative">
      <div className="relative h-[64vh] md:h-[72vh] lg:h-[80vh] w-full overflow-hidden bg-gray-100">
        {images.map((img, i)=> (
          <img key={i} src={img.src} alt={img.alt} referrerPolicy="no-referrer" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i===index?'opacity-100':'opacity-0'}`} loading={i===0? 'eager':'lazy'} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden="true"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-white ring-1 ring-white/30">HVAC Wet & Dry</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow">{content.home.heroTitle}</h1>
            <p className="mt-4 text-white/90 max-w-3xl leading-relaxed">{content.home.heroSubtitle}</p>
            <div className="mt-7 flex items-center gap-3">
              <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-white font-semibold shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary">Get an Estimate</Link>
              <Link to="/services" className="inline-flex items-center rounded-md bg-white/15 px-6 py-3 text-white font-semibold ring-1 ring-white/30 hover:bg-white/25">Our Services</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur">
          {images.map((_, i)=> (
            <button key={i} aria-label={`Slide ${i+1}`} onClick={()=>setIndex(i)} className={`h-2.5 w-2.5 rounded-full ${i===index? 'bg-white':'bg-white/60 hover:bg-white/80'}`}></button>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button aria-label="Previous slide" onClick={()=>setIndex((index-1+images.length)%images.length)} className="m-2 md:m-4 h-10 w-10 rounded-full bg-black/35 text-white flex items-center justify-center hover:bg-black/45">‹</button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button aria-label="Next slide" onClick={()=>setIndex((index+1)%images.length)} className="m-2 md:m-4 h-10 w-10 rounded-full bg-black/35 text-white flex items-center justify-center hover:bg-black/45">›</button>
        </div>
      </div>
    </section>
  )
}


