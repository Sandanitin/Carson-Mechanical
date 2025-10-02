import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2" aria-label="Carson Mechanical home">
          <img src="/images/logo.png" alt="Carson Mechanical logo" className="h-12 w-auto" loading="eager" />
        </Link>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({isActive})=>`py-2 ${isActive? 'text-secondary font-semibold':'text-gray-700'}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>`py-2 ${isActive? 'text-secondary font-semibold':'text-gray-700'}`}>About</NavLink>
          <NavLink to="/services" className={({isActive})=>`py-2 ${isActive? 'text-secondary font-semibold':'text-gray-700'}`}>Services</NavLink>
          <NavLink to="/contact" className={({isActive})=>`py-2 ${isActive? 'text-secondary font-semibold':'text-gray-700'}`}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white font-semibold shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary">Get an Estimate</Link>
          </div>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="#003E7E" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 grid gap-2" aria-label="Mobile">
            <NavLink to="/" onClick={()=>setOpen(false)} className={({isActive})=>`py-2 ${isActive? 'text-secondary font-semibold':'text-gray-700'}`}>Home</NavLink>
            <NavLink to="/about" onClick={()=>setOpen(false)} className={({isActive})=>`py-2 ${isActive? 'text-secondary font-semibold':'text-gray-700'}`}>About</NavLink>
            <NavLink to="/services" onClick={()=>setOpen(false)} className={({isActive})=>`py-2 ${isActive? 'text-secondary font-semibold':'text-gray-700'}`}>Services</NavLink>
            <NavLink to="/contact" onClick={()=>setOpen(false)} className={({isActive})=>`py-2 ${isActive? 'text-secondary font-semibold':'text-gray-700'}`}>Contact</NavLink>
            <Link to="/contact" onClick={()=>setOpen(false)} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white font-semibold shadow-sm hover:bg-blue-600">Get an Estimate</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

// Removed SVG text fallback; using provided PNG logo


