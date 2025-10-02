import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, ChevronDown, Zap, Factory, Building2, Sun, 
  Leaf, FileText, Calculator, LifeBuoy, Phone, HelpCircle,
  Users, Award, BookOpen, TrendingUp, Shield, Sparkles,
  BarChart3, ClipboardList, ArrowRight, Star
} from 'lucide-react'

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
      icon: <Zap className="w-5 h-5" />,
      description: 'Comprehensive energy solutions for your business',
      featured: true,
      dropdown: [
        { 
          name: 'Business Electricity', 
          path: '/business-electricity',
          icon: <Zap className="w-4 h-4" />,
          description: 'Save up to 45% on electricity',
          highlight: 'Most Popular'
        },
        { 
          name: 'Business Gas', 
          path: '/business-gas',
          icon: <Factory className="w-4 h-4" />,
          description: 'Competitive gas contracts'
        },
        { 
          name: 'Multi-Site Energy', 
          path: '/multi-site-energy',
          icon: <Building2 className="w-4 h-4" />,
          description: 'Portfolio management'
        },
        { 
          name: 'Solar Energy', 
          path: '/solar-energy',
          icon: <Sun className="w-4 h-4" />,
          description: 'Renewable solutions'
        },
        { 
          name: 'Green Energy', 
          path: '/green-energy',
          icon: <Leaf className="w-4 h-4" />,
          description: '100% renewable sources',
          highlight: 'Eco Friendly'
        },
      ]
    },
    {
      title: 'Resources',
      icon: <BookOpen className="w-5 h-5" />,
      description: 'Expert guides and insights',
      dropdown: [
        { 
          name: 'Energy Saving Tips', 
          path: '/energy-saving-tips',
          icon: <TrendingUp className="w-4 h-4" />,
          description: 'Reduce your consumption'
        },
        { 
          name: 'Bill Validation', 
          path: '/bill-validation',
          icon: <ClipboardList className="w-4 h-4" />,
          description: 'Check your bills'
        },
        { 
          name: 'Contract Types', 
          path: '/contract-types',
          icon: <FileText className="w-4 h-4" />,
          description: 'Understanding contracts'
        },
        { 
          name: 'Switching Process', 
          path: '/switching-process',
          icon: <Sparkles className="w-4 h-4" />,
          description: 'How switching works'
        },
        { 
          name: 'Energy Insights', 
          path: '/energy-insights',
          icon: <BarChart3 className="w-4 h-4" />,
          description: 'Market analysis'
        },
        { 
          name: 'Business Benefits', 
          path: '/business-benefits',
          icon: <Award className="w-4 h-4" />,
          description: 'Why choose us'
        },
      ]
    },
    {
      title: 'Company',
      icon: <Users className="w-5 h-5" />,
      dropdown: [
        { 
          name: 'About Us', 
          path: '/about',
          icon: <Users className="w-4 h-4" />,
          description: 'Our story'
        },
        { 
          name: 'Our Services', 
          path: '/services',
          icon: <Shield className="w-4 h-4" />,
          description: 'What we offer'
        },
        { 
          name: 'Case Studies', 
          path: '/case-studies',
          icon: <Award className="w-4 h-4" />,
          description: 'Success stories'
        },
        { 
          name: 'Testimonials', 
          path: '/testimonials',
          icon: <Star className="w-4 h-4" />,
          description: 'Client reviews'
        },
        { 
          name: 'Large Business', 
          path: '/large-business',
          icon: <Building2 className="w-4 h-4" />,
          description: 'Enterprise solutions'
        },
        { 
          name: 'Trustpilot Reviews', 
          path: '/trustpilot-reviews',
          icon: <Star className="w-4 h-4" />,
          description: '4.9/5 rating'
        },
      ]
    },
    {
      title: 'Support',
      icon: <LifeBuoy className="w-5 h-5" />,
      dropdown: [
        { 
          name: 'FAQ', 
          path: '/faq',
          icon: <HelpCircle className="w-4 h-4" />,
          description: 'Common questions'
        },
        { 
          name: 'LOA Form', 
          path: '/loa',
          icon: <FileText className="w-4 h-4" />,
          description: 'Letter of Authority'
        },
        { 
          name: 'Get Quote', 
          path: 'https://app.watt.co.uk', 
          external: true,
          icon: <Calculator className="w-4 h-4" />,
          description: 'Instant pricing',
          highlight: 'Free'
        },
        { 
          name: 'Contact Us', 
          path: 'https://app.watt.co.uk', 
          external: true,
          icon: <Phone className="w-4 h-4" />,
          description: 'Get in touch'
        },
      ]
    },
  ]

  return (
    <>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white backdrop-blur-xl shadow-2xl border-b border-gray-200' : 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'}`}>
        <div className="container">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <motion.img 
                src="/watt-deals-logo.png" 
                alt="Watt Deals" 
                className="h-14 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${activeDropdown === index ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
                    {item.icon && <span className="text-green-600">{item.icon}</span>}
                    <span className="text-sm font-semibold">{item.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180 text-green-600' : 'text-gray-400'}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`absolute top-full left-0 mt-2 ${item.featured ? 'w-96' : 'w-80'} bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden`}
                      >
                        {/* Header */}
                        {item.description && (
                          <div className="px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-100">
                            <p className="text-sm font-medium text-gray-700">{item.description}</p>
                          </div>
                        )}
                        
                        {/* Menu Items */}
                        <div className="py-2">
                          {item.dropdown.map((subItem, subIndex) => {
                            const ItemComponent = subItem.external ? 'a' : Link
                            const itemProps = subItem.external ? {
                              href: subItem.path,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            } : {
                              to: subItem.path
                            }
                            
                            return (
                              <ItemComponent
                                key={subIndex}
                                {...itemProps}
                                className="group/item flex items-start gap-3 px-6 py-3 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-200"
                              >
                                <span className="p-2 bg-white rounded-lg shadow-sm group-hover/item:shadow-md group-hover/item:bg-green-100 transition-all duration-200 mt-0.5">
                                  <span className="text-green-600">{subItem.icon}</span>
                                </span>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold text-gray-900 group-hover/item:text-green-700 transition-colors">
                                      {subItem.name}
                                    </span>
                                    {subItem.highlight && (
                                      <span className="px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full font-medium">
                                        {subItem.highlight}
                                      </span>
                                    )}
                                  </div>
                                  {subItem.description && (
                                    <p className="text-sm text-gray-500 mt-0.5">{subItem.description}</p>
                                  )}
                                </div>
                                {subItem.external && (
                                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover/item:text-green-600 transition-colors mt-1" />
                                )}
                              </ItemComponent>
                            )
                          })}
                        </div>
                        
                        {/* CTA Footer for Energy Services */}
                        {item.featured && (
                          <div className="px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 mt-2">
                            <a href="https://app.watt.co.uk" className="flex items-center justify-between text-white hover:text-green-100 transition-colors">
                              <span className="font-semibold">Compare all services instantly</span>
                              <ArrowRight className="w-5 h-5" />
                            </a>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* CTA Button */}
              <motion.a
                href="https://app.watt.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Your Quote</span>
                <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
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