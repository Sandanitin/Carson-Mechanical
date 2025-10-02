import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-16" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="mb-3">
            <Logo className="h-7 w-auto" variant="light" />
          </div>
          <p className="text-white/80 max-w-sm">We provide heating, air conditioning, refrigeration, and sheet metal fabrication services for commercial and residential clients.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-white/90">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><a href="#" aria-disabled className="opacity-75">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-white/90">
            <li>Email: <a href="mailto:services@carsonmechanical.com" className="underline">services@carsonmechanical.com</a></li>
            <li>Phone: <a href="tel:+19169203733" className="underline">(916) 920-3733</a></li>
            <li>Fax: (916) 920-5214</li>
            <li>120 Main Ave., Ste. G<br />Sacramento, CA 95838</li>
            <li>LIC# 998103</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Carson Mechanical</p>
          <div className="flex gap-2">
            <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20">in</a>
            <a href="#" aria-label="Facebook" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20">f</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Logo({ className = '', variant = 'light' }) {
  const fill = variant === 'light' ? '#FFFFFF' : '#003E7E'
  return (
    <svg className={className} viewBox="0 0 600 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carson Mechanical logo">
      <title>Carson Mechanical</title>
      <text x="0" y="55" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fontSize="48" fill={fill}>Carson Mechanical</text>
    </svg>
  )
}


