'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, TrendingUp } from 'lucide-react';
import { getAreasInOrder } from '@/data/profile';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const areas = getAreasInOrder();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">Heroes Invest</span>
            </Link>
          </div>          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            {areas.map((area) => (
              <Link 
                key={area.id}
                href={area.href} 
                className="text-gray-700 hover:text-blue-600 transition-colors capitalize"
              >
                {area.title}
              </Link>
            ))}
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>      {/* Mobile Navigation */}
      {isOpen && (        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {areas.map((area) => (
              <Link
                key={area.id}
                href={area.href} 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 capitalize"
                onClick={() => setIsOpen(false)}
              >
                {area.title}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-4 border-t">
              <div className="px-3 py-2 space-y-2">
                <Link href="/contact" className="block">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button size="sm" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
