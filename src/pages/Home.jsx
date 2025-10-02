import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import Hero from '../components/Hero.jsx'
import ServicesCard from '../components/ServicesCard.jsx'
import ProjectGallery from '../components/ProjectGallery.jsx'
import RetailBrands from '../components/RetailBrands.jsx'
import content from '../content/site.json'

function CountUp({ value, duration = 1200 }) {
  const [display, setDisplay] = useState('0')
  useEffect(() => {
    const match = String(value).match(/([0-9]*\.?[0-9]+)(.*)/)
    const target = match ? parseFloat(match[1]) : 0
    const suffix = match ? match[2] : ''
    let start
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const current = target * p
      const rounded = match && match[1].includes('.') ? current.toFixed(1) : Math.round(current)
      setDisplay(`${rounded}${suffix}`)
      if (p < 1) requestAnimationFrame(step)
    }
    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [value, duration])
  return <>{display}</>
}

export default function Home(){
  const { seo, home } = content
  const capabilities = content.services.features
  const icons = [
    (<svg key="i1" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M12 3v18" opacity=".2"/><path d="M7 12h10M12 7v10"/></svg>),
    (<svg key="i2" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>),
    (<svg key="i3" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h18M5 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></svg>)
  ]
  return (
    <>
      <Helmet>
        <title>{home.title} — {seo.brand}</title>
        <meta name="description" content={home.description} />
      </Helmet>
      <Hero />
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-secondary/80 font-semibold">Our Services</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">Services We Provide</h2>
          <p className="mt-2 text-gray-700 max-w-3xl whitespace-pre-line">{home.intro}</p>
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6">
              {home.services.map((s, i)=> (
                <ServicesCard key={i} title={s.title} description={s.description} icon={icons[i % icons.length]} />
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700">Capabilities</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {capabilities.slice(0, 10).map((c, i)=> (
                  <span key={i} className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href="/services" className="inline-flex items-center rounded-md bg-secondary px-4 py-2 text-white font-semibold shadow hover:bg-[#003567]">Explore Services</a>
                <a href="/contact" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white font-semibold shadow hover:bg-blue-600">Get an Estimate</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-b from-gray-50 to-white pointer-events-none" aria-hidden="true"></div>
        <ProjectGallery />
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{content.video.title}</h2>
        <p className="mt-2 text-gray-700 max-w-3xl">{content.video.description}</p>
        <div className="mt-4 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <video src={content.video.src} poster={content.video.poster} className="w-full h-auto" controls muted playsInline preload="metadata" crossOrigin="anonymous"></video>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <figure className="order-1 md:order-none relative">
            <img src={home.feature.image.src} alt={home.feature.image.alt} className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg" loading="lazy" />
            <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs md:text-sm text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-b-2xl">{home.feature.image.alt}</figcaption>
          </figure>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{home.feature.title}</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">{home.feature.body}</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-gray-800">
              {home.feature.bullets.map((b,i)=> (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="/contact" className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-white font-semibold shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary">Get an Estimate</a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{home.feature2.title}</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">{home.feature2.body}</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-gray-800">
              {home.feature2.bullets.map((b,i)=> (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" aria-hidden></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="order-1 md:order-none relative">
            <img src={home.feature2.image.src} alt={home.feature2.image.alt} className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg" loading="lazy" />
            <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs md:text-sm text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-b-2xl">{home.feature2.image.alt}</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-3 gap-6">
          {home.stats.map((s, i)=>(
            <div key={i} className="text-center p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"><CountUp value={s.value} /></div>
              <div className="mt-1 text-gray-700">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <RetailBrands />

      {/* Testimonials section removed per request */}
    </>
  )
}


