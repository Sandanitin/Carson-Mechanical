import { Helmet } from 'react-helmet-async'
import content from '../content/site.json'

export default function Services(){
  const { seo, services } = content
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Helmet>
        <title>HVAC WET & DRY — {seo.brand}</title>
        <meta name="description" content={services.description} />
      </Helmet>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">HVAC WET & DRY</h1>
      <p className="mt-3 text-gray-700 max-w-3xl">{services.description}</p>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Installations</h2>
          <p className="mt-2 text-gray-700">{services.installations}</p>
          <h2 className="mt-6 text-xl font-semibold text-gray-900">Maintenance</h2>
          <p className="mt-2 text-gray-700">{services.maintenance}</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Wet Services</h2>
          <p className="mt-2 text-gray-700">{services.wet}</p>
          <h2 className="mt-6 text-xl font-semibold text-gray-900">Dry Services</h2>
          <p className="mt-2 text-gray-700">{services.dry}</p>
        </section>
      </div>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">Capabilities</h2>
        <ul className="mt-3 grid md:grid-cols-2 gap-2 text-gray-800 list-disc list-inside">
          {services.features.map((f,i)=>(
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Typical Equipment</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
            {services.equipment.map((e,i)=>(<li key={i}>{e}</li>))}
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Service Areas</h2>
          <p className="mt-2 text-gray-700">{services.areas}</p>
          <h2 className="mt-6 text-xl font-semibold text-gray-900">Warranties</h2>
          <p className="mt-2 text-gray-700">{services.warranty}</p>
        </section>
      </div>
      <div className="mt-10">
        <a href="/contact" className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-white font-semibold shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary">Get an Estimate</a>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {content.images.service.map((img, i)=> (
          <img key={i} src={img.src} alt={img.alt} referrerPolicy="no-referrer" className="w-full h-48 object-cover rounded-lg" loading="lazy" />
        ))}
      </div>
    </div>
  )
}


