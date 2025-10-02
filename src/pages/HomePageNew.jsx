import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Helmet } from 'react-helmet-async'
import { 
  Zap, TrendingDown, Shield, Users, Award, Clock, 
  ChevronRight, Check, Star, Phone, ArrowRight,
  Building2, Lightbulb, Leaf, Calculator, Sparkles,
  BarChart3, Globe, Headphones, TrendingUp, Battery,
  Wind, Sun, Factory, PiggyBank, FileCheck
} from 'lucide-react'
import SupplierCarousel from '../components/SupplierCarousel'
import QuoteForm from '../components/QuoteForm'
import TrustpilotWidget from '../components/TrustpilotWidget'

const HomePage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [energySaved, setEnergySaved] = useState(0)
  const [businessCount, setBusinessCount] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    if (statsInView) {
      const timer = setInterval(() => {
        setEnergySaved(prev => {
          if (prev < 2000000) return prev + 50000
          clearInterval(timer)
          return 2000000
        })
      }, 50)
      
      const timer2 = setInterval(() => {
        setBusinessCount(prev => {
          if (prev < 10000) return prev + 200
          clearInterval(timer2)
          return 10000
        })
      }, 50)
      
      return () => {
        clearInterval(timer)
        clearInterval(timer2)
      }
    }
  }, [statsInView])

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Business Electricity',
      description: 'Competitive rates from 30+ suppliers',
      savings: 'Save up to 45%',
      link: '/business-electricity',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Business Gas',
      description: 'Fixed & flexible gas contracts',
      savings: 'Save up to 40%',
      link: '/business-gas',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Green Energy',
      description: '100% renewable energy sources',
      savings: 'Carbon neutral',
      link: '/green-energy',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Multi-Site Energy',
      description: 'Portfolio management solutions',
      savings: 'Bulk discounts',
      link: '/multi-site-energy',
      gradient: 'from-purple-400 to-pink-500'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Submit Your Details',
      description: 'Quick online form takes less than 60 seconds',
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      number: '02',
      title: 'We Compare Prices',
      description: 'Access exclusive rates from 30+ suppliers',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      number: '03',
      title: 'Review Your Options',
      description: 'Receive tailored recommendations',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      number: '04',
      title: 'Switch & Save',
      description: 'We handle the entire switching process',
      icon: <PiggyBank className="w-6 h-6" />
    }
  ]

  return (
    <>
      <Helmet>
        <title>Watt Deals - Smart Business Energy Solutions | Save Up to 45%</title>
        <meta name="description" content="Watt Deals powers business growth with smart energy solutions. Compare prices from 30+ suppliers. Save up to 45% on utilities. Expert consultants, trusted by UK businesses." />
      </Helmet>

      {/* Modern Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-green-50 to-emerald-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Circles */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-300/30 to-emerald-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-300/30 to-green-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>
          
          {/* Geometric Pattern */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgb(34 197 94 / 0.05)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          
          {/* Wave Shape */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 320" className="w-full">
              <path fill="rgb(34 197 94 / 0.05)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Premium Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full px-4 py-2 mb-6 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold">Trusted by 10,000+ UK Businesses</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Power Your</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                  Business Growth
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-gray-700 leading-relaxed">
                Revolutionary energy procurement platform delivering 
                <span className="text-green-600 font-semibold"> 45% average savings</span> through 
                AI-powered supplier matching and real-time market analysis.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
                  <div className="text-3xl font-bold text-green-600">45%</div>
                  <div className="text-sm text-gray-600">Avg Savings</div>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
                  <div className="text-3xl font-bold text-green-600">30+</div>
                  <div className="text-sm text-gray-600">Suppliers</div>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a 
                  href="https://app.watt.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Get Instant Quote</span>
                  <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="tel:01618338661"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300 shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>0161 833 8661</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Quote Form */}
              <QuoteForm />
            </motion.div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronRight className="w-6 h-6 text-gray-600/50 rotate-90" />
        </motion.div>
      </section>

      {/* Floating Stats Section with Background Image */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Background with city images */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="grid grid-cols-2 h-full">
            <div className="relative">
              <img src="https://i.ibb.co/sPcLPsG/manchester.jpg" alt="Manchester" className="w-full h-full object-cover" />
            </div>
            <div className="relative">
              <img src="https://i.ibb.co/W56v4Hx/london.jpg" alt="London" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            ref={statsRef}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { value: businessCount.toLocaleString()+'+', label: 'Happy Customers', icon: <Users className="w-8 h-8" /> },
              { value: `£${(energySaved/1000000).toFixed(1)}M+`, label: 'Saved This Year', icon: <PiggyBank className="w-8 h-8" /> },
              { value: '4.9/5', label: 'Trustpilot Rating', icon: <Star className="w-8 h-8" /> },
              { value: '60 sec', label: 'Quote Time', icon: <Clock className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-green-100 hover:border-green-300 transition-all duration-300">
                  <div className="text-green-600 mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid with 3D Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Energy Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive energy management services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Link to={service.link}>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 group-hover:transform group-hover:-translate-y-2 h-full flex flex-col">
                    {/* Add images for each service */}
                    {service.title === 'Green Energy' && (
                      <div className="h-40 overflow-hidden">
                        <img src="https://i.ibb.co/4fCfzyV/wind-power-plant-at-sunset-5639456.jpg" alt="Wind Power" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    )}
                    {service.title === 'Business Electricity' && (
                      <div className="h-40 overflow-hidden">
                        <img src="https://i.ibb.co/mRJQxkr/solar-panels.jpg" alt="Solar Panels" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    )}
                    {service.title === 'Business Gas' && (
                      <div className="h-40 overflow-hidden">
                        <img src="https://i.ibb.co/q1Rq7hB/lightbulb.jpg" alt="Energy Innovation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    )}
                    {service.title === 'Multi-Site Energy' && (
                      <div className="h-40 overflow-hidden">
                        <img src="https://i.ibb.co/KVBCc1y/laptop.jpg" alt="Business Technology" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-6 flex-grow flex flex-col">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-4 shadow-lg self-start`}>
                        <div className="text-white">{service.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-green-600 font-semibold">{service.savings}</span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Process Section with Images */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
        {/* Decorative Images */}
        <div className="absolute right-0 top-20 w-64 h-64 opacity-10">
          <img src="https://i.ibb.co/GJ8vPYM/man.jpg" alt="Professional" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute left-0 bottom-20 w-64 h-64 opacity-10">
          <img src="https://i.ibb.co/dkLxCzQ/student.jpg" alt="Student" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four simple steps to massive energy savings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-green-400/50 to-transparent z-0"></div>
                )}
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg mb-4">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Carousel */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Leading Suppliers</h3>
            <p className="text-gray-600">Access exclusive rates from 30+ energy providers</p>
          </div>
          <SupplierCarousel />
          
          {/* Partnership Logos */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-center text-lg font-semibold text-gray-700 mb-6">Our Partnerships & Accreditations</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <img 
                src="https://i.ibb.co/S7PKPmt/1.png" 
                alt="Partnership 1" 
                className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <img 
                src="https://i.ibb.co/LDws4MW/2.png" 
                alt="Partnership 2" 
                className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <img 
                src="https://i.ibb.co/6cbMz0J/3.png" 
                alt="Partnership 3" 
                className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <img 
                src="https://i.ibb.co/m5QSF5y/4.png" 
                alt="Partnership 4" 
                className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://i.ibb.co/VYkBwrk/calculator-1156121-1280.jpg" 
                alt="Energy Savings Calculator" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Calculate Your Savings
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Our advanced calculator analyzes your current energy costs and shows you exactly how much you could save with our tailored solutions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Instant savings calculation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Compare multiple suppliers</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">No obligation quote</span>
                </li>
              </ul>
              <motion.a
                href="https://app.watt.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Calculate My Savings
                <Calculator className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expert Consultation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Expert Energy Consultation
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Our dedicated team of energy experts work tirelessly to find the perfect energy solution for your business needs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dedicated Account Manager</h3>
                    <p className="text-gray-600">Personal support throughout your energy journey</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Market Analysis</h3>
                    <p className="text-gray-600">Real-time market insights and forecasting</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Contract Management</h3>
                    <p className="text-gray-600">We handle all the paperwork and negotiations</p>
                  </div>
                </div>
              </div>
              <motion.a
                href="tel:01618338661"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold border-2 border-green-500 hover:bg-green-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Book Free Consultation
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://i.ibb.co/gLhrYdg/meeting-2284501-1280.jpg" 
                alt="Business Meeting" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="mt-6 p-6 bg-green-50 rounded-xl border border-green-100">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">JD</div>
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">SC</div>
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">MR</div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Energy Experts</p>
                    <p className="text-sm text-gray-600">Available Mon-Fri, 8am-6pm</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"Our team saved £12,000 last year thanks to Watt Deals' expert guidance!"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Start Saving Today
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Join thousands of UK businesses already benefiting from our expert energy management services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://app.watt.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:01618338661"
                className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-800 transition-all duration-300 border-2 border-green-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone />
                <span>Speak to an Expert</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Success Section with Image */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Empowering Business Success
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                From startups to enterprise, we've helped thousands of UK businesses transform their energy costs into competitive advantages.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">98%</h3>
                  <p className="text-gray-600">Customer Retention Rate</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">£2M+</h3>
                  <p className="text-gray-600">Saved This Year</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://i.ibb.co/LdcGGQH/business-man.jpg" 
                alt="Business Success" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="font-semibold">"Watt Deals transformed our energy strategy completely!"</p>
                <p className="text-sm mt-2 opacity-90">- James Wilson, CEO</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trustpilot Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <TrustpilotWidget />
        </div>
      </section>
    </>
  )
}

export default HomePage