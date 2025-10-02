export default function RetailBrands() {
  const brands = [
    { name: "Williams Sonoma", logo: "/images/williams-sonoma.png", alt: "Williams Sonoma logo" },
    { name: "Burlington", logo: "/images/burlington.png", alt: "Burlington logo" },
    { name: "Uniqlo", logo: "/images/uniqlo.png", alt: "Uniqlo logo" },
    { name: "Tesla", logo: "/images/tesla.png", alt: "Tesla logo" },
    { name: "Ross", logo: "/images/ross.png", alt: "Ross Dress for Less logo" },
    { name: "REI", logo: "/images/rel.png", alt: "REI logo" },
    { name: "Pottery Barn", logo: "/images/pottery-barn.png", alt: "Pottery Barn logo" },
    { name: "GoPuff & BevMo", logo: "/images/gopuff-bevmo.png", alt: "GoPuff and BevMo logos" },
    { name: "Best Buy", logo: "/images/bestbuy.png", alt: "Best Buy logo" },
    { name: "Barnes & Noble", logo: "/images/barnes-noble.png", alt: "Barnes & Noble logo" }
  ]

  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-[10%]">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 font-sans mb-2">
            Popular Retail Brands
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center mb-12">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-32"
            >
              <img 
                src={brand.logo} 
                alt={brand.alt}
                className="max-w-full max-h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Footer Caption */}
        <div className="text-center">
          <p className="text-xs text-gray-600 font-sans">
            Carson Mechanical proudly serves leading retail brands with professional HVAC, refrigeration, and sheet metal fabrication services.
          </p>
        </div>
      </div>
    </section>
  )
}
