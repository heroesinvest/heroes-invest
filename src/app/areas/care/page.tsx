import Navigation from '@/components/navigation';
import { Heart, Shield, Users, Brain, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getAreaBySlug } from '@/data/profile';

export default function CarePage() {
  const area = getAreaBySlug('care');
  
  if (!area) {
    return <div>Area not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <Heart className="w-16 h-16 text-blue-600 mr-6" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{area.title}</h1>
              <p className="text-xl text-blue-600">{area.subtitle.join(' • ')}</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 max-w-4xl">
            {area.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Care Philosophy</h2>
              <div className="space-y-4">
                {area.content.general.text.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Wellness Services</h2>
              <div className="grid grid-cols-1 gap-4">
                {area.content.general.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-gray-900 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Care & Wellness Products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {area.products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                    {product.status.enable && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Available
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-2">{product.subtitle.join(' • ')}</p>
                  <p className="text-gray-700 mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.sections.general.highlights.slice(0, 3).map((highlight, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <Link href={product.href}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Heroes Care?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mental Health</h3>
              <p className="text-gray-600">
                Professional psychological support to maintain mental clarity and emotional balance.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-blue-50 border border-blue-200">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Stress Management</h3>
              <p className="text-gray-600">
                Tools and techniques to manage investment-related stress and anxiety.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-blue-50 border border-blue-200">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Community</h3>
              <p className="text-gray-600">
                Connect with other investors in a supportive, understanding environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prioritize Your Wellbeing
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Successful investing starts with taking care of yourself.
          </p>
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
              Learn More
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
