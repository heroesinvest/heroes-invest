'use client';

import { TrendingUp, Target, BookOpen, Heart, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroBannerProps {
  variant?: 'green' | 'blue';
}

export default function HeroBanner({ variant = 'green' }: HeroBannerProps) {
  const bgColor = variant === 'green' 
    ? 'bg-gradient-to-r from-green-50 to-green-100' 
    : 'bg-gradient-to-r from-blue-50 to-blue-100';
  
  const accentColor = variant === 'green' ? 'text-green-600' : 'text-blue-600';
  const buttonColor = variant === 'green' 
    ? 'bg-green-600 hover:bg-green-700' 
    : 'bg-blue-600 hover:bg-blue-700';

  return (
    <section className={`${bgColor} py-16 px-4 rounded-lg mx-4 my-8 shadow-lg`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={`text-5xl font-bold ${accentColor} mb-4`}>
            HEROES INVEST
          </h1>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            Empowering Your Investment Journey Through Comprehensive Solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <TrendingUp className="w-5 h-5" />
              <span>Capital Growth</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <BookOpen className="w-5 h-5" />
              <span>Education</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Target className="w-5 h-5" />
              <span>Performance</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Heart className="w-5 h-5" />
              <span>Wellness</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Cpu className="w-5 h-5" />
              <span>Technology</span>
            </div>
          </div>
          <Button 
            className={`${buttonColor} text-white px-8 py-3 rounded-lg font-semibold text-lg`}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            Explore Our Solutions
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-2">
            * Registration opening soon!
          </p>
          <p className="text-sm text-gray-500">
            Join thousands of investors who trust Heroes Invest for their financial journey
          </p>
        </div>
      </div>
    </section>
  );
}
