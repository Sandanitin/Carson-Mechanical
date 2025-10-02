import { Helmet } from 'react-helmet-async'

import content from '../content/site.json'

export default function About(){
  const { seo, about } = content
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Helmet>
        <title>About — {seo.brand}</title>
        <meta name="description" content={about.description} />
      </Helmet>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">About Carson Mechanical</h1>
      <p className="mt-3 text-gray-700 max-w-3xl">{about.description}</p>
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Mission</h2>
          <p className="mt-2 text-gray-700">{about.mission}</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Values</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
            {about.values.map((v,i)=>(<li key={i}>{v}</li>))}
          </ul>
        </section>
      </div>
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900">Projects / Completed Jobs</h2>
        <p className="mt-2 text-gray-700 max-w-3xl">{about.projectsIntro}</p>
      </section>
    </div>
  
  )
}


