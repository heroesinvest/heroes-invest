// Heroes Invest Profile Data
export interface BusinessArea {
  id: string;
  title: string;
  href: string;
  subtitle: string[];
  description: string;
  status: {
    enable: boolean;
    visible: boolean;
  };
  content: {
    general: {
      text: string[];
      highlights: string[];
    };
  };
}

const profile = {
  areas: {
    capital: {
      id: 'capital',
      title: 'Capital',
      href: '/areas/capital',
      subtitle: ['Enrich your future'],
      description: 'Investment solutions for growing your capital with strategic portfolio management.',
      status: {
        enable: true,
        visible: true,
      },
      content: {
        general: {
          text: [
            'Most investors are not aware of the wide range of investment products and solutions that are available to increase their capital.',
            "Heroes Capital is the set of solutions we provide to investors who have capital available to be invested but don't have the time or interest to invest on their own; or for investors who do not have the adequate capital to consistently and securely leverage their earnings but have above-average proven interest and performance.",
          ],
          highlights: [
            'Portfolio Management',
            'Investment Advisory',
            'Risk Assessment',
            'Market Analysis'
          ]
        },
      },
    },
    care: {
      id: 'care',
      title: 'Care',
      href: '/areas/care',
      subtitle: ['Your wellbeing matters'],
      description: 'Comprehensive wellness and care services for a balanced investment lifestyle.',
      status: {
        enable: true,
        visible: true,
      },
      content: {
        general: {
          text: [
            'Investment success requires mental clarity and emotional balance. Our care services ensure you maintain optimal wellbeing.',
            'Heroes Care provides psychological support, stress management, and wellness coaching tailored for investors and traders.',
          ],
          highlights: [
            'Stress Management',
            'Psychological Support',
            'Wellness Coaching',
            'Work-Life Balance'
          ]
        },
      },
    },
    education: {
      id: 'education',
      title: 'Education',
      href: '/areas/education',
      subtitle: ['Knowledge is power'],
      description: 'Comprehensive financial education and investment training programs.',
      status: {
        enable: true,
        visible: true,
      },
      content: {
        general: {
          text: [
            'Financial literacy is the foundation of successful investing. Our education programs cover everything from basics to advanced strategies.',
            'Heroes Education offers structured learning paths, mentorship programs, and hands-on training for investors at all levels.',
          ],
          highlights: [
            'Investment Fundamentals',
            'Advanced Trading Strategies',
            'Market Analysis Training',
            'Personal Finance Management'
          ]
        },
      },
    },
    performance: {
      id: 'performance',
      title: 'Performance',
      href: '/areas/performance',
      subtitle: ['Optimize your results'],
      description: 'Performance tracking and optimization tools for maximizing investment returns.',
      status: {
        enable: true,
        visible: true,
      },
      content: {
        general: {
          text: [
            'Track, analyze, and optimize your investment performance with our comprehensive suite of analytics tools.',
            'Heroes Performance provides detailed insights into your portfolio performance, risk metrics, and optimization opportunities.',
          ],
          highlights: [
            'Portfolio Analytics',
            'Risk Metrics',
            'Performance Benchmarking',
            'Optimization Strategies'
          ]
        },
      },
    },
    tech: {
      id: 'tech',
      title: 'Tech',
      href: '/areas/tech',
      subtitle: ['Innovation drives success'],
      description: 'Cutting-edge technology solutions for modern investment management.',
      status: {
        enable: true,
        visible: true,
      },
      content: {
        general: {
          text: [
            'Leverage the latest technology to enhance your investment strategy and execution.',
            'Heroes Tech provides automated trading systems, AI-powered analysis, and advanced portfolio management tools.',
          ],
          highlights: [
            'Automated Trading',
            'AI-Powered Analysis',
            'Advanced Algorithms',
            'Technology Integration'
          ]
        },
      },
    },
  },
  company: {
    name: 'Heroes Invest',
    tagline: 'Empowering Your Investment Journey',
    description: 'A comprehensive investment platform providing capital management, education, performance optimization, wellness care, and cutting-edge technology solutions.',
    contact: {
      email: 'contact@heroesinvest.com',
      phone: '+1 (555) 123-4567',
    },
  },
};

export default profile;
