'use client';

import Image from 'next/image';
import { TrendingUp, Target, BookOpen, Heart, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroBanner() {
  // Using dark professional theme
  const bgColor = 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900';
  const accentColor = 'text-white';
  const buttonColor = 'bg-blue-600 hover:bg-blue-700';
    return (
    <section className={`${bgColor} py-20 px-4 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0">
        <Image
          src="/images/business-overview.png"
          alt="Business Overview"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${accentColor} mb-4`}>
            HEROES INVEST
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Empowering Your Investment Journey Through Comprehensive Solutions
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 sm:mb-8 px-4">
            <div className="flex items-center gap-2 text-gray-300 bg-white bg-opacity-10 px-4 py-2 rounded-lg">
              <TrendingUp className="w-5 h-5" />
              <span>Capital Growth</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 bg-white bg-opacity-10 px-4 py-2 rounded-lg">
              <BookOpen className="w-5 h-5" />
              <span>Education</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 bg-white bg-opacity-10 px-4 py-2 rounded-lg">
              <Target className="w-5 h-5" />
              <span>Performance</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 bg-white bg-opacity-10 px-4 py-2 rounded-lg">
              <Heart className="w-5 h-5" />
              <span>Wellness</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 bg-white bg-opacity-10 px-4 py-2 rounded-lg">
              <Cpu className="w-5 h-5" />
              <span>Technology</span>
            </div>
          </div>          <Button 
            className={`${buttonColor} text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all`}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            Explore Our Solutions
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300 mb-2">
            * Registration opening soon!
          </p>
          <p className="text-sm text-gray-400">
            Join thousands of investors who trust Heroes Invest for their financial journey
          </p>
        </div>
      </div>
    </section>
  );
}
