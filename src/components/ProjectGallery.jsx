import content from '../content/site.json'

export default function ProjectGallery() {
  const images = content.images.gallery
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-secondary/80 font-semibold">Projects</div>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">Projects & Completed Jobs</h2>
        <p className="mt-2 text-gray-700 max-w-3xl">A selection of HVAC Wet & Dry installations and maintenance projects delivered with quality and reliability.</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i)=> (
            <figure key={i} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <img src={img.src} alt={img.alt} referrerPolicy="no-referrer" className="w-full h-44 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs md:text-sm text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}


