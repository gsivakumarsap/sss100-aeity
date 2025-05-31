import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { 
  Heart, 
  CreditCard, 
  Shield, 
  Users, 
  GraduationCap, 
  Building,
  CheckCircle,
  IndianRupee,
  DollarSign,
  Euro,
  Star,
} from 'lucide-react'

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState('INR')
  const [selectedImpact, setSelectedImpact] = useState('meals')

  const donationTiers = [
    {
      id: 'meals',
      amount: { INR: 100, USD: 1.2, EUR: 1.1 },
      icon: Heart,
      title: 'Meals for a Day',
      description: 'Provide nutritious meals to underprivileged children',
      impact: 'Feed 5 children for one day',
      popular: false,
    },
    {
      id: 'student',
      amount: { INR: 1000, USD: 12, EUR: 11 },
      icon: GraduationCap,
      title: 'Student Sponsorship',
      description: 'Support educational materials and resources',
      impact: 'One month of education support',
      popular: true,
    },
    {
      id: 'event',
      amount: { INR: 10000, USD: 120, EUR: 110 },
      icon: Building,
      title: 'Global Event Contribution',
      description: 'Support centennial celebration events worldwide',
      impact: 'Help organize local celebrations',
      popular: false,
    },
  ]

  const customAmounts = [
    { INR: 500, USD: 6, EUR: 5.5 },
    { INR: 2500, USD: 30, EUR: 27 },
    { INR: 5000, USD: 60, EUR: 55 },
    { INR: 25000, USD: 300, EUR: 275 },
  ]

  const currencies = [
    { code: 'INR', symbol: '₹', icon: IndianRupee },
    { code: 'USD', symbol: '$', icon: DollarSign },
    { code: 'EUR', symbol: '€', icon: Euro },
  ]

  const validationSchema = Yup.object({
    amount: Yup.number()
      .min(1, 'Amount must be at least 1')
      .required('Amount is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    phone: Yup.string()
      .matches(/^[0-9+\-\s()]+$/, 'Invalid phone number')
      .optional(),
    message: Yup.string().optional(),
  })

  const formik = useFormik({
    initialValues: {
      amount: '',
      email: '',
      name: '',
      phone: '',
      message: '',
      anonymous: false,
      newsletter: true,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Donation form submitted:', values)
      alert('Thank you for your generous donation! Redirecting to payment...')
    },
  })

  const handleTierSelect = (tier) => {
    setSelectedImpact(tier.id)
    setSelectedAmount(tier.amount[selectedCurrency].toString())
    formik.setFieldValue('amount', tier.amount[selectedCurrency])
  }

  const handleCustomAmount = (amount) => {
    setSelectedAmount(amount[selectedCurrency].toString())
    formik.setFieldValue('amount', amount[selectedCurrency])
  }

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency)
    if (selectedAmount) {
      const tier = donationTiers.find(t => t.id === selectedImpact)
      if (tier) {
        const newAmount = tier.amount[currency]
        setSelectedAmount(newAmount.toString())
        formik.setFieldValue('amount', newAmount)
      }
    }
  }

  const getCurrencySymbol = () => {
    return currencies.find(c => c.code === selectedCurrency)?.symbol || '₹'
  }

  return (
    <section className="section-padding bg-gradient-to-br from-white to-saffron-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-sacred-800 mb-6">
            Make a 
            <span className="text-gradient block">Donation</span>
          </h2>
          
          <p className="text-lg text-sacred-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Your contribution, no matter the size, helps us continue the mission of 
            love, service, and transformation across the globe.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-saffron-600">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">Secure & Trusted • Tax Deductible</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Donation Tiers */}
            <div className="lg:col-span-2">
              <div className="card p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-elegant font-semibold text-sacred-800">
                    Choose Your Impact
                  </h3>
                  
                  <div className="flex items-center space-x-2">
                    {currencies.map((currency) => (
                      <button
                        key={currency.code}
                        onClick={() => handleCurrencyChange(currency.code)}
                        className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedCurrency === currency.code
                            ? 'bg-saffron-100 text-saffron-700'
                            : 'text-sacred-600 hover:bg-gray-100'
                        }`}
                      >
                        <currency.icon className="w-4 h-4" />
                        <span>{currency.code}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {donationTiers.map((tier) => (
                    <div
                      key={tier.id}
                      onClick={() => handleTierSelect(tier)}
                      className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                        selectedImpact === tier.id
                          ? 'border-saffron-500 bg-saffron-50 shadow-lg scale-105'
                          : 'border-gray-200 bg-white hover:border-saffron-300 hover:shadow-md'
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-saffron-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center">
                        <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <tier.icon className="w-6 h-6 text-saffron-600" />
                        </div>
                        
                        <div className="text-2xl font-bold text-sacred-800 mb-2">
                          {getCurrencySymbol()}{tier.amount[selectedCurrency]}
                        </div>
                        
                        <h4 className="font-semibold text-sacred-800 mb-2">
                          {tier.title}
                        </h4>
                        
                        <p className="text-sm text-sacred-600 mb-3">
                          {tier.description}
                        </p>
                        
                        <div className="flex items-center justify-center space-x-1 text-xs text-saffron-600">
                          <Star className="w-3 h-3" />
                          <span>{tier.impact}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-sacred-800 mb-4">Quick Amounts:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {customAmounts.map((amount, index) => (
                      <button
                        key={index}
                        onClick={() => handleCustomAmount(amount)}
                        className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                          selectedAmount === amount[selectedCurrency].toString()
                            ? 'border-saffron-500 bg-saffron-50 text-saffron-700'
                            : 'border-gray-200 text-sacred-700 hover:border-saffron-300'
                        }`}
                      >
                        {getCurrencySymbol()}{amount[selectedCurrency]}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-sacred-700 mb-2">
                    Custom Amount:
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sacred-500">
                      {getCurrencySymbol()}
                    </span>
                    <input
                      type="number"
                      min="1"
                      placeholder="Enter amount"
                      value={selectedAmount}
                      onChange={(e) => {
                        setSelectedAmount(e.target.value)
                        formik.setFieldValue('amount', parseFloat(e.target.value) || '')
                      }}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500"
                    />
                  </div>
                  {formik.touched.amount && formik.errors.amount && (
                    <p className="text-red-500 text-xs mt-1">{formik.errors.amount}</p>
                  )}
                </div>
              </div>

              {/* Donation Form */}
              <div className="card p-8">
                <h3 className="text-xl font-elegant font-semibold text-sacred-800 mb-6">
                  Complete Your Donation
                </h3>

                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-sacred-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...formik.getFieldProps('name')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500"
                        placeholder="Enter your full name"
                      />
                      {formik.touched.name && formik.errors.name && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-sacred-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...formik.getFieldProps('email')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500"
                        placeholder="Enter your email"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-sacred-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      {...formik.getFieldProps('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500"
                      placeholder="Enter your phone number"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-sacred-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      {...formik.getFieldProps('message')}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500"
                      placeholder="Share your thoughts or dedication..."
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        {...formik.getFieldProps('anonymous')}
                        className="h-4 w-4 text-saffron-600 focus:ring-saffron-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-sacred-600">Make this donation anonymous</span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        {...formik.getFieldProps('newsletter')}
                        className="h-4 w-4 text-saffron-600 focus:ring-saffron-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-sacred-600">Subscribe to updates and newsletters</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center space-x-2 text-lg py-4"
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Donate {getCurrencySymbol()}{selectedAmount || '0'}</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Impact Summary */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-elegant font-semibold text-sacred-800 mb-4">
                  Your Impact
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-sacred-600">100% of donations go to programs</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-sacred-600">Tax-deductible receipt provided</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-sacred-600">Regular impact updates</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-sacred-600">Secure & encrypted transactions</span>
                  </div>
                </div>
              </div>

              <div className="card p-6 bg-gradient-to-br from-saffron-50 to-orange-50">
                <h4 className="font-semibold text-sacred-800 mb-3">
                  "Every Rupee Counts"
                </h4>
                
                <p className="text-sm text-sacred-600 mb-4">
                  Every contribution, no matter how small, creates ripples of positive change 
                  that reach communities worldwide.
                </p>
                
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-saffron-600 mb-1">
                    ₹2.5M+
                  </div>
                  <div className="text-xs text-sacred-600">
                    Raised so far to support global initiatives
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonationSection