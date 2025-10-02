import { Helmet } from 'react-helmet-async'
import ContactForm from '../components/ContactForm.jsx'
import content from '../content/site.json'

export default function Contact(){
  const { seo, contact } = content
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Helmet>
        <title>Contact — {seo.brand}</title>
        <meta name="description" content={contact.description} />
      </Helmet>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Contact</h1>
      <p className="mt-3 text-gray-700 max-w-3xl">{contact.description}</p>
      <div className="mt-8 grid md:grid-cols-2 gap-10">
        <section>
          <ContactForm />
        </section>
        <section className="space-y-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-gray-900">Company</h2>
            <ul className="mt-2 text-gray-700 space-y-1">
              <li>Email: <a href="mailto:services@carsonmechanical.com" className="underline">services@carsonmechanical.com</a></li>
              <li>Phone: <a href="tel:+19169203733" className="underline">(916) 920-3733</a></li>
              <li>Fax: (916) 920-5214</li>
              <li>Address: 120 Main Ave., Ste. G, Sacramento, CA 95838</li>
              <li>License: LIC# 998103</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-gray-900">Map</h2>
            <div className="mt-2 aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=120+Main+Ave,+Sacramento,+CA+95838&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carson Mechanical Location - 120 Main Ave, Sacramento, CA 95838"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


