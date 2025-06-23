import Navigation from '@/components/navigation';
import { Target, BarChart3, TrendingUp, Zap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getAreaBySlug } from '@/data/profile';

export default function PerformancePage() {
  const area = getAreaBySlug('performance');
  
  if (!area) {
    return <div>Area not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <Target className="w-16 h-16 text-orange-600 mr-6" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{area.title}</h1>
              <p className="text-xl text-orange-600">{area.subtitle.join(' • ')}</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 max-w-4xl">
            {area.description}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Optimization</h2>
              <div className="space-y-4">
                {area.content.general.text.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics Services</h2>
              <div className="grid grid-cols-1 gap-4">
                {area.content.general.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="w-3 h-3 bg-orange-600 rounded-full mr-4"></div>
                    <span className="text-gray-900 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>      </section>

      {/* Products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Performance Products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {area.products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                    {product.trial?.available && (
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {product.trial.maxPeriod} Trial
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-2">{product.subtitle.join(' • ')}</p>
                  <p className="text-gray-700 mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.sections.general.highlights.slice(0, 3).map((highlight, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <Link href={product.href}>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
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
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Heroes Performance?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <BarChart3 className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">
                Comprehensive performance metrics and detailed portfolio analysis.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-orange-50 border border-orange-200">
              <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization Tools</h3>
              <p className="text-gray-600">
                AI-powered tools to identify and implement performance improvements.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-orange-50 border border-orange-200">
              <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Insights</h3>
              <p className="text-gray-600">
                Live performance tracking with instant alerts and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Maximize Your Performance
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the insights you need to optimize your investment returns.
          </p>
          <Link href="/contact">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold">
              Get Performance Analysis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
