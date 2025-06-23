'use client';

import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/data/profile';

interface ProductDetailProps {
  product: Product;
  areaTitle: string;
}

export default function ProductDetail({ product, areaTitle }: ProductDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href={`/areas/${product.area}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {areaTitle}
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {product.subtitle.join(' • ')}
              </p>
              <p className="text-lg text-gray-700 max-w-3xl">
                {product.description}
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              {product.status.waitingList?.enabled && (
                <Badge variant="secondary">Waitlist Available</Badge>
              )}
              {product.trial?.available && (
                <Badge variant="outline" className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {product.trial.maxPeriod} Trial
                </Badge>
              )}
              <Badge 
                variant={product.status.enable ? "default" : "secondary"}
                className={product.status.enable ? "bg-green-100 text-green-800" : ""}
              >
                {product.status.enable ? "Available" : "Coming Soon"}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
              <div className="space-y-4">
                {product.sections.general.text.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.sections.general.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration */}
            {product.sections.integration && (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Integration & Compatibility</h2>
                <div className="space-y-4">
                  {product.sections.integration.text.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {product.sections.integration.examples && (
                  <div className="mt-6 space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Integration Examples:</h3>
                    {product.sections.integration.examples.map((example, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-900">{example.area}: </span>
                          <span className="text-gray-700">{example.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ready to get started?
                </h3>
                
                {product.trial?.available && product.sections.general.trial && (
                  <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-center space-x-2 text-blue-800 mb-2">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">Free Trial Available</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      {product.sections.general.trial.text}
                    </p>
                  </div>
                )}

                <div className="space-y-3">
                  {product.status.waitingList?.enabled ? (
                    <Button className="w-full" size="lg">
                      {product.status.waitingList.text || 'Join Waitlist'}
                    </Button>
                  ) : product.sections.general.trial ? (
                    <>
                      <Button className="w-full" size="lg">
                        {product.sections.general.trial.text}
                      </Button>
                      <Button variant="outline" className="w-full">
                        {product.sections.general.cta?.text || 'Learn More'}
                      </Button>
                    </>
                  ) : (
                    <Button className="w-full" size="lg">
                      {product.sections.general.cta?.text || 'Get Started'}
                    </Button>
                  )}
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  Questions? <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact us</Link>
                </p>
              </div>
            </div>

            {/* Product Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Product Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium text-gray-900 capitalize">{product.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium ${product.status.enable ? 'text-green-600' : 'text-orange-600'}`}>
                    {product.status.enable ? 'Available' : 'Coming Soon'}
                  </span>
                </div>
                {product.trial?.available && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Free Trial:</span>
                    <span className="font-medium text-gray-900">{product.trial.maxPeriod}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
