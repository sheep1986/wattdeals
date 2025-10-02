import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Shield, CheckCircle, Lock, FileText, 
  AlertCircle, ChevronRight, Building, 
  MapPin, Phone, Mail, Calendar, User
} from 'lucide-react'
import toast from 'react-hot-toast'

const LOAPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyNumber: '',
    tradingAddress: '',
    billingAddress: '',
    sameAddress: false,
    contactName: '',
    position: '',
    email: '',
    phone: '',
    mpan: '',
    mprn: '',
    currentSupplier: '',
    contractEndDate: '',
    estimatedUsage: '',
    consent: false,
    marketing: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.consent) {
      toast.error('Please provide your consent to proceed')
      return
    }

    setIsSubmitting(true)

    try {
      // Submit to your backend or Google Sheets
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
      
      toast.success('Letter of Authority submitted successfully!')
      
      // Redirect to app.watt.co.uk or next step
      setTimeout(() => {
        window.location.href = 'https://app.watt.co.uk/company'
      }, 2000)
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Letter of Authority | Watt Deals - Unlock Accurate Energy Quotes</title>
        <meta name="description" content="Complete your Letter of Authority to receive accurate business energy quotes. Secure, obligation-free process. Compare 30+ suppliers instantly." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm font-semibold">Secure & Confidential Process</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Letter of Authority
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Unlock accurate energy quotes by allowing us to review your current contracts. 
              This secure process takes just 5 minutes and could save you thousands.
            </p>

            {/* Trust Badges */}
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-400" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-400" />
                <span>Ofgem Registered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-600">Step 1 of 3</span>
                <span className="text-sm text-gray-500">Estimated time: 5 minutes</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '33%' }}></div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              {/* Company Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Building className="w-6 h-6 text-green-500" />
                  Company Details
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Registration Number
                    </label>
                    <input
                      type="text"
                      name="companyNumber"
                      value={formData.companyNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition"
                      placeholder="12345678"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="inline w-4 h-4 mr-1" />
                    Trading Address *
                  </label>
                  <textarea
                    name="tradingAddress"
                    value={formData.tradingAddress}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition"
                    placeholder="123 Business Street, Manchester, M1 1AA"
                  />
                </div>

                <div className="mt-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="sameAddress"
                      checked={formData.sameAddress}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">Billing address same as trading address</span>
                  </label>
                </div>

                {!formData.sameAddress && (
                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Billing Address
                    </label>
                    <textarea
                      name="billingAddress"
                      value={formData.billingAddress}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition"
                      placeholder="Enter billing address if different"
                    />
                  </div>
                )}
              </div>

              {/* Contact Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <User className="w-6 h-6 text-green-500" />
                  Contact Details
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Position/Role *
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition"
                      placeholder="Finance Director"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline w-4 h-4 mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="inline w-4 h-4 mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition"
                      placeholder="0161 123 4567"
                    />
                  </div>
                </div>
              </div>

              {/* Energy Supply Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-green-500" />
                  Energy Supply Details
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      MPAN (Electricity)
                    </label>
                    <input
                      type="text"
                      name="mpan"
                      value={formData.mpan}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition"
                      placeholder="S12 3456 7890 123"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      MPRN (Gas)
                    </label>
                    <input
                      type="text"
                      name="mprn"
                      value={formData.mprn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition"
                      placeholder="1234567890"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Supplier
                    </label>
                    <input
                      type="text"
                      name="currentSupplier"
                      value={formData.currentSupplier}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition"
                      placeholder="British Gas"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Calendar className="inline w-4 h-4 mr-1" />
                      Contract End Date
                    </label>
                    <input
                      type="date"
                      name="contractEndDate"
                      value={formData.contractEndDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Estimated Annual Usage (Optional)
                  </label>
                  <input
                    type="text"
                    name="estimatedUsage"
                    value={formData.estimatedUsage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition"
                    placeholder="e.g., 50,000 kWh electricity, 100,000 kWh gas"
                  />
                </div>
              </div>

              {/* Consent */}
              <div className="mb-8 p-6 bg-green-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Authorization & Consent
                </h3>
                
                <div className="space-y-4">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-500 mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I authorize Watt Deals to obtain my energy supply information from my current 
                      supplier(s) for the purpose of providing accurate quotes. I understand this is 
                      a no-obligation service and my data will be handled in accordance with GDPR regulations. *
                    </span>
                  </label>
                  
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="marketing"
                      checked={formData.marketing}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-500 mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I would like to receive energy market updates, money-saving tips, and exclusive 
                      offers from Watt Deals. You can unsubscribe at any time.
                    </span>
                  </label>
                </div>
              </div>

              {/* Important Information */}
              <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-2">Important Information:</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>This Letter of Authority allows us to obtain your current rates and contract details</li>
                      <li>You are under no obligation to switch suppliers</li>
                      <li>We will provide you with a detailed comparison within 24-48 hours</li>
                      <li>Your supply will not be interrupted at any stage</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Letter of Authority
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  Back
                </button>
              </div>
            </form>

            {/* Security Note */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                Your information is encrypted and secure. We are ICO registered and GDPR compliant.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default LOAPage