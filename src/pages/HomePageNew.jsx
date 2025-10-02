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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-green-950">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C853' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Floating Orbs */}
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/30 rounded-full px-4 py-2 mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <Sparkles className="w-5 h-5 text-green-400" />
                <span className="text-sm font-semibold text-green-300">Trusted by 10,000+ UK Businesses</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Power Your</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Business Growth
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Revolutionary energy procurement platform delivering 
                <span className="text-green-400 font-semibold"> 45% average savings</span> through 
                AI-powered supplier matching and real-time market analysis.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">45%</div>
                  <div className="text-sm text-gray-400">Avg Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">30+</div>
                  <div className="text-sm text-gray-400">Suppliers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a 
                  href="https://app.watt.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-green-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Get Instant Quote</span>
                  <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="tel:01618338661"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
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
              {/* Glassmorphism Quote Form */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl"></div>
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-1">
                  <QuoteForm variant="dark" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronRight className="w-6 h-6 text-white/50 rotate-90" />
        </motion.div>
      </section>

      {/* Floating Stats Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4">
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
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                  <div className="text-green-400 mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid with 3D Cards */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Energy Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-4`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-semibold">{service.savings}</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Process Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent z-0"></div>
                )}
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-4">
                    <span className="text-3xl font-bold text-green-400">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Carousel */}
      <section className="py-12 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Trusted by Leading Suppliers</h3>
            <p className="text-gray-400">Access exclusive rates from 30+ energy providers</p>
          </div>
          <SupplierCarousel />
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

      {/* Trustpilot Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <TrustpilotWidget />
        </div>
      </section>
    </>
  )
}

export default HomePage