import Navigation from '@/components/navigation';
import HeroBanner from '@/components/HeroBanner';
import BusinessAreas from '@/components/BusinessAreas';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Banner */}
      <HeroBanner variant="green" />
      
      {/* Business Areas */}
      <BusinessAreas />
      
      {/* Footer Section */}
      <footer className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Heroes Invest</h2>
            <p className="text-gray-300 mb-6">Empowering Your Investment Journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Capital Management</li>
                <li>Investment Education</li>
                <li>Performance Analytics</li>
                <li>Wellness Support</li>
                <li>Technology Solutions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="text-gray-300 space-y-2">
                <p>contact@heroesinvest.com</p>
                <p>+1 (555) 123-4567</p>
                <p>Professional Investment Services</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Heroes Invest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
