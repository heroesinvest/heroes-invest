// Heroes Invest Profile Data
export interface Product {
  id: string;
  area: string;
  title: string;
  href: string;
  subtitle: string[];
  description: string;
  status: {
    enable: boolean;
    visible: boolean;
    waitingList?: {
      enabled: boolean;
      text: string;
      url: string;
    };
  };
  trial?: {
    maxPeriod: string;
    available: boolean;
  };
  sections: {
    general: {
      text: string[];
      highlights: string[];
      cta?: {
        url: string;
        text: string;
      };
      trial?: {
        period: string;
        url: string;
        text: string;
      };
    };
    integration?: {
      text: string[];
      examples?: Array<{
        area: string;
        text: string;
      }>;
    };
  };
}

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
  products: Product[];
}

const profile = {
  areas: {
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
      products: [
        {
          id: 'investment-fundamentals',
          area: 'education',
          title: 'Investment Fundamentals',
          href: '/areas/education/products/investment-fundamentals',
          subtitle: ['Master the basics of investing'],
          description: 'Comprehensive course covering investment principles, risk management, and portfolio construction.',
          status: {
            enable: true,
            visible: true,
            waitingList: {
              enabled: false,
              text: '',
              url: '',
            },
          },
          trial: {
            maxPeriod: '30D',
            available: true,
          },
          sections: {
            general: {
              text: [
                'Learn the fundamental principles of investing including asset classes, risk assessment, and portfolio diversification.',
                'Our comprehensive curriculum covers stocks, bonds, ETFs, mutual funds, and alternative investments.',
                'Practical exercises and real-world case studies help reinforce key concepts.'
              ],
              highlights: [
                'Asset Class Analysis',
                'Risk Management Strategies',
                'Portfolio Construction',
                'Market Analysis Basics',
                'Investment Psychology'
              ],
              cta: {
                url: '/contact',
                text: 'Enroll Now!',
              },
              trial: {
                period: '30D',
                url: '/contact',
                text: '30 Days Free Trial!',
              },
            },
            integration: {
              text: [
                'Integrates with our Performance Analytics tools for real-time tracking.',
                'Compatible with all major brokerage platforms and trading systems.'
              ],
              examples: [
                {
                  area: 'Performance',
                  text: 'Track your learning progress with performance metrics'
                },
                {
                  area: 'Tech',
                  text: 'Access learning materials through our mobile app'
                }
              ]
            }
          }
        },
        {
          id: 'advanced-trading',
          area: 'education',
          title: 'Advanced Trading Strategies',
          href: '/areas/education/products/advanced-trading',
          subtitle: ['Master professional trading techniques'],
          description: 'Advanced course for experienced investors covering sophisticated trading strategies and techniques.',
          status: {
            enable: true,
            visible: true,
            waitingList: {
              enabled: false,
              text: '',
              url: '',
            },
          },
          trial: {
            maxPeriod: '14D',
            available: true,
          },
          sections: {
            general: {
              text: [
                'Advanced trading strategies including options, futures, and derivatives trading.',
                'Technical analysis, algorithmic trading, and risk management for professional traders.',
                'Live trading sessions and mentorship from experienced professionals.'
              ],
              highlights: [
                'Options Trading Strategies',
                'Algorithmic Trading',
                'Technical Analysis',
                'Risk Management',
                'Live Trading Sessions'
              ],
              cta: {
                url: '/contact',
                text: 'Join Advanced Program!',
              },
              trial: {
                period: '14D',
                url: '/contact',
                text: '14 Days Free Trial!',
              },
            }
          }
        }
      ]
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
      products: [
        {
          id: 'stress-management',
          area: 'care',
          title: 'Stress Management Program',
          href: '/areas/care/products/stress-management',
          subtitle: ['Manage investment stress effectively'],
          description: 'Comprehensive stress management program designed specifically for investors and traders.',
          status: {
            enable: true,
            visible: true,
          },
          sections: {
            general: {
              text: [
                'Learn proven techniques to manage stress and anxiety related to investing and trading.',
                'Mindfulness practices, breathing exercises, and cognitive strategies for emotional regulation.',
                'One-on-one coaching sessions with licensed therapists specializing in financial stress.'
              ],
              highlights: [
                'Mindfulness Training',
                'Breathing Techniques',
                'Cognitive Strategies',
                'One-on-One Coaching',
                'Group Support Sessions'
              ],
              cta: {
                url: '/contact',
                text: 'Start Your Wellness Journey!',
              },
            }
          }
        },
        {
          id: 'psychological-support',
          area: 'care',
          title: 'Psychological Support Services',
          href: '/areas/care/products/psychological-support',
          subtitle: ['Professional mental health support'],
          description: 'Professional psychological support services for investors dealing with financial stress and anxiety.',
          status: {
            enable: true,
            visible: true,
          },
          sections: {
            general: {
              text: [
                'Professional counseling services with therapists who understand the unique pressures of investing.',
                'Individual and group therapy sessions focused on financial anxiety and decision-making stress.',
                'Crisis support and emergency consultation services available 24/7.'
              ],
              highlights: [
                'Licensed Therapists',
                'Individual Counseling',
                'Group Therapy',
                '24/7 Crisis Support',
                'Financial Psychology Expertise'
              ],
              cta: {
                url: '/contact',
                text: 'Schedule Consultation!',
              },
            }
          }
        }
      ]
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
      products: [
        {
          id: 'portfolio-analytics',
          area: 'performance',
          title: 'Portfolio Analytics Dashboard',
          href: '/areas/performance/products/portfolio-analytics',
          subtitle: ['Comprehensive portfolio analysis'],
          description: 'Advanced analytics dashboard providing deep insights into your investment portfolio performance.',
          status: {
            enable: true,
            visible: true,
          },
          trial: {
            maxPeriod: '30D',
            available: true,
          },
          sections: {
            general: {
              text: [
                'Real-time portfolio tracking with advanced performance metrics and risk analysis.',
                'Comprehensive reporting tools with customizable dashboards and alerts.',
                'Benchmark comparison and attribution analysis for optimal decision making.'
              ],
              highlights: [
                'Real-time Tracking',
                'Risk Analysis',
                'Performance Attribution',
                'Custom Dashboards',
                'Automated Alerts'
              ],
              cta: {
                url: '/contact',
                text: 'Try Analytics Dashboard!',
              },
              trial: {
                period: '30D',
                url: '/contact',
                text: '30 Days Free Trial!',
              },
            }
          }
        },
        {
          id: 'risk-assessment',
          area: 'performance',
          title: 'Risk Assessment Tools',
          href: '/areas/performance/products/risk-assessment',
          subtitle: ['Advanced risk management'],
          description: 'Sophisticated risk assessment and management tools for portfolio optimization.',
          status: {
            enable: true,
            visible: true,
          },
          sections: {
            general: {
              text: [
                'Advanced risk metrics including VaR, beta analysis, and stress testing.',
                'Scenario analysis and Monte Carlo simulations for risk modeling.',
                'Risk-adjusted performance measurement and optimization recommendations.'
              ],
              highlights: [
                'Value at Risk (VaR)',
                'Stress Testing',
                'Monte Carlo Simulations',
                'Beta Analysis',
                'Risk-Adjusted Returns'
              ],
              cta: {
                url: '/contact',
                text: 'Assess Your Risk!',
              },
            }
          }
        }
      ]
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
      products: [
        {
          id: 'automated-trading',
          area: 'tech',
          title: 'Automated Trading Platform',
          href: '/areas/tech/products/automated-trading',
          subtitle: ['Algorithmic trading solutions'],
          description: 'Advanced automated trading platform with customizable strategies and risk management.',
          status: {
            enable: true,
            visible: true,
            waitingList: {
              enabled: true,
              text: 'Join the waitlist for early access',
              url: '/contact',
            },
          },
          sections: {
            general: {
              text: [
                'Sophisticated algorithmic trading platform with pre-built and custom strategies.',
                'Real-time execution with advanced order management and risk controls.',
                'Backtesting capabilities and strategy optimization tools.'
              ],
              highlights: [
                'Custom Algorithms',
                'Real-time Execution',
                'Risk Controls',
                'Backtesting Tools',
                'Strategy Optimization'
              ],
              cta: {
                url: '/contact',
                text: 'Join Waitlist!',
              },
            }
          }
        },
        {
          id: 'ai-analysis',
          area: 'tech',
          title: 'AI-Powered Market Analysis',
          href: '/areas/tech/products/ai-analysis',
          subtitle: ['Artificial intelligence insights'],
          description: 'AI-powered market analysis and prediction tools for enhanced investment decisions.',
          status: {
            enable: true,
            visible: true,
          },
          sections: {
            general: {
              text: [
                'Machine learning algorithms analyze market patterns and predict trends.',
                'Natural language processing for news sentiment analysis and market impact.',
                'Real-time AI insights and automated research reports.'
              ],
              highlights: [
                'Machine Learning',
                'Sentiment Analysis',
                'Trend Prediction',
                'Automated Reports',
                'Real-time Insights'
              ],
              cta: {
                url: '/contact',
                text: 'Try AI Analysis!',
              },
            }
          }
        }
      ]
    },
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
      products: [
        {
          id: 'portfolio-management',
          area: 'capital',
          title: 'Professional Portfolio Management',
          href: '/areas/capital/products/portfolio-management',
          subtitle: ['Expert management of your investments'],
          description: 'Professional portfolio management services with personalized investment strategies.',
          status: {
            enable: true,
            visible: true,
          },
          sections: {
            general: {
              text: [
                'Dedicated portfolio managers create and execute personalized investment strategies.',
                'Regular portfolio reviews and rebalancing to maintain optimal asset allocation.',
                'Access to institutional-grade investment opportunities and research.'
              ],
              highlights: [
                'Dedicated Portfolio Managers',
                'Personalized Strategies',
                'Regular Rebalancing',
                'Institutional Access',
                'Professional Research'
              ],
              cta: {
                url: '/contact',
                text: 'Start Portfolio Management!',
              },
            }
          }
        },
        {
          id: 'investment-advisory',
          area: 'capital',
          title: 'Investment Advisory Services',
          href: '/areas/capital/products/investment-advisory',
          subtitle: ['Expert investment guidance'],
          description: 'Comprehensive investment advisory services for informed decision making.',
          status: {
            enable: true,
            visible: true,
          },
          trial: {
            maxPeriod: '30D',
            available: true,
          },
          sections: {
            general: {
              text: [
                'Expert investment advice tailored to your financial goals and risk tolerance.',
                'Market research, asset allocation recommendations, and investment selection.',
                'Ongoing consultation and strategic planning for long-term wealth building.'
              ],
              highlights: [
                'Expert Advice',
                'Market Research',
                'Asset Allocation',
                'Strategic Planning',
                'Ongoing Consultation'
              ],
              cta: {
                url: '/contact',
                text: 'Get Investment Advice!',
              },
              trial: {
                period: '30D',
                url: '/contact',
                text: '30 Days Free Consultation!',
              },
            }
          }
        }
      ]
    }
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

// Utility functions
export const getAreasInOrder = (): BusinessArea[] => {
  const order = ['education', 'care', 'performance', 'tech', 'capital'];
  return order.map(areaId => profile.areas[areaId as keyof typeof profile.areas]);
};

export const getAreaBySlug = (slug: string): BusinessArea | undefined => {
  return profile.areas[slug as keyof typeof profile.areas];
};

export const getProductBySlug = (areaSlug: string, productSlug: string): Product | undefined => {
  const area = getAreaBySlug(areaSlug);
  return area?.products.find(product => product.id === productSlug);
};

export const getAllProducts = (): Product[] => {
  return Object.values(profile.areas).flatMap(area => area.products);
};

export const getProductsByArea = (areaSlug: string): Product[] => {
  const area = getAreaBySlug(areaSlug);
  return area?.products || [];
};
