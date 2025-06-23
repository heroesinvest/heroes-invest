'use client';

import Link from 'next/link';
import { TrendingUp, Target, BookOpen, Heart, Cpu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAreasInOrder } from '@/data/profile';

const iconMap = {
  education: BookOpen,
  care: Heart,
  performance: Target,
  tech: Cpu,
  capital: TrendingUp,
};

const colorMap = {
  education: {
    bg: 'bg-purple-50 hover:bg-purple-100',
    icon: 'text-purple-600',
    button: 'bg-purple-600 hover:bg-purple-700',
    border: 'border-purple-200 hover:border-purple-300',
  },
  care: {
    bg: 'bg-blue-50 hover:bg-blue-100',
    icon: 'text-blue-600',
    button: 'bg-blue-600 hover:bg-blue-700',
    border: 'border-blue-200 hover:border-blue-300',
  },
  performance: {
    bg: 'bg-orange-50 hover:bg-orange-100',
    icon: 'text-orange-600',
    button: 'bg-orange-600 hover:bg-orange-700',
    border: 'border-orange-200 hover:border-orange-300',
  },
  tech: {
    bg: 'bg-indigo-50 hover:bg-indigo-100',
    icon: 'text-indigo-600',
    button: 'bg-indigo-600 hover:bg-indigo-700',
    border: 'border-indigo-200 hover:border-indigo-300',
  },
  capital: {
    bg: 'bg-green-50 hover:bg-green-100',
    icon: 'text-green-600',
    button: 'bg-green-600 hover:bg-green-700',
    border: 'border-green-200 hover:border-green-300',
  },
};

export default function BusinessAreas() {
  const areas = getAreasInOrder();

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Investment Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive services designed to support every aspect of your investment journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {areas.map((area) => {
            const IconComponent = iconMap[area.id as keyof typeof iconMap];
            const colors = colorMap[area.id as keyof typeof colorMap];
            
            return (
              <div
                key={area.id}
                className={`${colors.bg} ${colors.border} border-2 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                <div className="text-center mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.icon} mb-4`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {area.title}
                  </h3>
                  <div className="text-sm text-gray-600 mb-3">
                    {area.subtitle.map((sub, index) => (
                      <div key={index}>{sub}</div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-3">
                    {area.description}
                  </p>
                  <div className="space-y-1">
                    {area.content.general.highlights.map((highlight, index) => (
                      <div key={index} className="text-xs text-gray-600 flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')} mr-2`}></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link href={area.href}>
                  <Button 
                    className={`w-full ${colors.button} text-white text-sm py-2 rounded-lg font-medium flex items-center justify-center gap-2 group`}
                  >
                    Learn More
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to start your investment journey?
          </p>
          <Link href="/contact">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
