import Navigation from '@/components/navigation';
import { TrendingUp, DollarSign, PieChart, Target, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getAreaBySlug } from '@/data/profile';

export default function CapitalPage() {
  const area = getAreaBySlug('capital');
  
  if (!area) {
    return <div>Area not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <TrendingUp className="w-16 h-16 text-green-600 mr-6" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{area.title}</h1>
              <p className="text-xl text-green-600">{area.subtitle.join(' • ')}</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <div className="space-y-4">
                {area.content.general.text.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Services</h2>
              <div className="grid grid-cols-1 gap-4">
                {area.content.general.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
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
            Our Capital Management Products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {area.products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                    {product.trial?.available && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {product.trial.maxPeriod} Trial
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-2">{product.subtitle.join(' • ')}</p>
                  <p className="text-gray-700 mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.sections.general.highlights.slice(0, 3).map((highlight, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <Link href={product.href}>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
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
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Heroes Capital?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Investment Strategy</h3>
              <p className="text-gray-600">
                Customized investment strategies tailored to your financial goals and risk tolerance.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-green-50 border border-green-200">
              <PieChart className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Portfolio Diversification</h3>
              <p className="text-gray-600">
                Strategic asset allocation across multiple investment vehicles to minimize risk.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-green-50 border border-green-200">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Goal Achievement</h3>
              <p className="text-gray-600">
                Focused approach to help you reach your long-term financial objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Grow Your Capital?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you build a stronger financial future.
          </p>
          <Link href="/contact">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
