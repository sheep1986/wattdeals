import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location])

  const navItems = [
    {
      title: 'Energy Services',
      dropdown: [
        { name: 'Business Electricity', path: '/business-electricity' },
        { name: 'Business Gas', path: '/business-gas' },
        { name: 'Multi-Site Energy', path: '/multi-site-energy' },
        { name: 'Solar Energy', path: '/solar-energy' },
        { name: 'Green Energy', path: '/green-energy' },
      ]
    },
    {
      title: 'Resources',
      dropdown: [
        { name: 'Energy Saving Tips', path: '/energy-saving-tips' },
        { name: 'Bill Validation', path: '/bill-validation' },
        { name: 'Contract Types', path: '/contract-types' },
        { name: 'Switching Process', path: '/switching-process' },
        { name: 'Energy Insights', path: '/energy-insights' },
        { name: 'Business Benefits', path: '/business-benefits' },
      ]
    },
    {
      title: 'Company',
      dropdown: [
        { name: 'Our Company', path: '/about' },
        { name: 'Our Services', path: '/services' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Large Business', path: '/large-business' },
        { name: 'Trustpilot Reviews', path: '/trustpilot-reviews' },
      ]
    },
    {
      title: 'Support',
      dropdown: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Get Quote', path: 'https://app.watt.co.uk', external: true },
        { name: 'Contact Us', path: 'https://app.watt.co.uk', external: true },
      ]
    },
  ]

  return (
    <>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'bg-white/80 backdrop-blur-lg shadow-md'}`}>
        <div className="container">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/watt-deals-logo.png" 
                alt="Watt Deals" 
                className="h-16 w-auto group-hover:scale-105 transition-transform"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors">
                    <span>{item.title}</span>
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                      >
                        {item.dropdown.map((subItem, subIndex) => 
                          subItem.external ? (
                            <a
                              key={subIndex}
                              href={subItem.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b border-gray-50 last:border-0"
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b border-gray-50 last:border-0"
                            >
                              {subItem.name}
                            </Link>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <a
                href="https://app.watt.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Get Your Quote</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
            >
              <div className="container py-4">
                {navItems.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="font-semibold text-gray-900 mb-2">{item.title}</div>
                    {item.dropdown.map((subItem, subIndex) => 
                      subItem.external ? (
                        <a
                          key={subIndex}
                          href={subItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-2 pl-4 text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ) : (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block py-2 pl-4 text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      )
                    )}
                  </div>
                ))}
                <a
                  href="https://app.watt.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white text-center py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 mt-4"
                >
                  🚀 Get Free Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navigation