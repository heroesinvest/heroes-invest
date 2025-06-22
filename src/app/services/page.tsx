'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Shield, 
  Users,
  Calculator,
  BarChart3,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price: string;
  popular?: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function ServicesPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 'robo-advisor',
      title: 'Robo-Advisor',
      description: 'Automated portfolio management powered by advanced algorithms',
      icon: <Zap className="h-8 w-8" />,
      features: [
        'Automated rebalancing',
        'Tax-loss harvesting',
        'Low-cost ETF portfolios',
        'Goal-based investing',
        '24/7 portfolio monitoring'
      ],
      price: '0.25% annual fee',
      popular: true
    },
    {
      id: 'personal-advisor',
      title: 'Personal Advisor',
      description: 'One-on-one guidance from certified financial advisors',
      icon: <Users className="h-8 w-8" />,
      features: [
        'Dedicated financial advisor',
        'Personalized investment strategy',
        'Regular portfolio reviews',
        'Financial planning guidance',
        'Estate planning support'
      ],
      price: '0.50% annual fee'
    },
    {
      id: 'self-directed',
      title: 'Self-Directed Trading',
      description: 'Professional tools for experienced investors',
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        'Commission-free trades',
        'Advanced research tools',
        'Real-time market data',
        'Options trading',
        'Professional-grade platform'
      ],
      price: '$0 commissions'
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'What is the minimum investment amount?',
      answer: 'You can start investing with as little as $100. There are no minimum balance requirements for our Robo-Advisor service.'
    },
    {
      question: 'How are the fees calculated?',
      answer: 'Our fees are calculated as a percentage of your assets under management (AUM) and are charged quarterly. For example, a 0.25% annual fee means you pay $2.50 per year for every $1,000 invested.'
    },
    {
      question: 'Are my investments insured?',
      answer: 'Yes, your investments are protected by SIPC insurance up to $500,000. Additionally, we use bank-level security measures to protect your accounts.'
    },
    {
      question: 'Can I switch between services?',
      answer: 'Absolutely! You can upgrade or downgrade your service level at any time without penalties. Changes typically take effect within 1-2 business days.'
    },
    {
      question: 'What types of accounts do you offer?',
      answer: 'We offer taxable investment accounts, Traditional IRAs, Roth IRAs, SEP-IRAs, and 401(k) rollovers. Each account type has different benefits and eligibility requirements.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Investment Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the investment approach that&apos;s right for you. From automated investing to personal guidance, 
            we have solutions for every investor.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  service.popular ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  service.popular ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Pricing</span>
                    <span className="text-xl font-bold text-gray-900">{service.price}</span>
                  </div>
                  
                  <Link href="/auth/signin">
                    <Button 
                      className={`w-full ${service.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                      variant={service.popular ? 'default' : 'outline'}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Investment Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our services come with industry-leading features and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bank-Level Security</h3>
              <p className="text-gray-600">256-bit encryption and SIPC protection</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Performance</h3>
              <p className="text-gray-600">15% average annual returns since 2015</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Low Fees</h3>
              <p className="text-gray-600">Up to 10x lower than traditional advisors</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Goal-Based</h3>
              <p className="text-gray-600">Strategies tailored to your objectives</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our investment services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose your service level and begin building wealth today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signin">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                Speak with an Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
