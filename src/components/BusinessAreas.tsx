'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAreasInOrder } from '@/data/profile';

const colorMap = {
  education: {
    bg: 'bg-white hover:bg-gray-50',
    button: 'bg-gray-800 hover:bg-gray-900',
    border: 'border-gray-200 hover:border-gray-300',
    accent: 'bg-blue-100',
  },
  care: {
    bg: 'bg-white hover:bg-gray-50',
    button: 'bg-gray-800 hover:bg-gray-900',
    border: 'border-gray-200 hover:border-gray-300',
    accent: 'bg-blue-100',
  },
  performance: {
    bg: 'bg-white hover:bg-gray-50',
    button: 'bg-gray-800 hover:bg-gray-900',
    border: 'border-gray-200 hover:border-gray-300',
    accent: 'bg-blue-100',
  },
  tech: {
    bg: 'bg-white hover:bg-gray-50',
    button: 'bg-gray-800 hover:bg-gray-900',
    border: 'border-gray-200 hover:border-gray-300',
    accent: 'bg-blue-100',
  },
  capital: {
    bg: 'bg-white hover:bg-gray-50',
    button: 'bg-gray-800 hover:bg-gray-900',
    border: 'border-gray-200 hover:border-gray-300',
    accent: 'bg-blue-100',
  },
};

export default function BusinessAreas() {
  const areas = getAreasInOrder();
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Investment Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive services designed to support every aspect of your investment journey
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {areas.map((area) => {
            const colors = colorMap[area.id as keyof typeof colorMap];
            
            return (
              <div
                key={area.id}
                className={`${colors.bg} ${colors.border} border-2 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
              >
                <div className="text-center mb-4">                  <div className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-gray-50 rounded-lg p-3">
                    <Image
                      src={area.logo.main || area.logo.blue}
                      alt={`${area.title} logo`}
                      width={60}
                      height={60}
                      className="w-full h-full object-contain"
                    />
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
                    {area.sections.general.highlights.map((highlight, index) => (
                      <div key={index} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
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
          <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to start your investment journey?
          </p>
          <Link href="/contact">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
