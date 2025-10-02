import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import content from './content/site.json'

export default function App() {
  const { seo } = content
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Helmet>
        <title>{seo.defaultTitle}</title>
        <meta name="description" content={seo.defaultDescription} />
        <meta property="og:title" content={seo.defaultTitle} />
        <meta property="og:description" content={seo.defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={seo.ogImage} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": content.organization.name,
          "url": content.organization.url,
          "logo": content.organization.logo,
          "email": content.organization.email,
          "telephone": content.organization.telephone,
          "address": {
            "@type": "PostalAddress",
            ...content.organization.address
          }
        })}</script>
      </Helmet>
      <a href="#main" className="skip-link focus:translate-y-0">Skip to content</a>
      <Header />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <a href="/contact" className="fixed bottom-4 right-4 md:hidden inline-flex items-center justify-center rounded-full bg-primary text-white font-semibold shadow-lg px-5 py-3">
        Get an Estimate
      </a>
    </div>
  )
}


