'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  Plus,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

interface Portfolio {
  id: string;
  name: string;
  totalValue: number;
  todayChange: number;
  todayChangePercent: number;
  totalReturn: number;
  totalReturnPercent: number;
}

interface Transaction {
  id: string;
  type: 'buy' | 'sell' | 'dividend';
  asset: string;
  quantity: number;
  price: number;
  date: string;
  total: number;
}

export default function DashboardPage() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setPortfolios([
        {
          id: '1',
          name: 'Growth Portfolio',
          totalValue: 125000,
          todayChange: 2500,
          todayChangePercent: 2.04,
          totalReturn: 25000,
          totalReturnPercent: 25.0
        },
        {
          id: '2',
          name: 'Conservative Portfolio',
          totalValue: 85000,
          todayChange: -750,
          todayChangePercent: -0.87,
          totalReturn: 8500,
          totalReturnPercent: 11.1
        }
      ]);

      setRecentTransactions([
        {
          id: '1',
          type: 'buy',
          asset: 'AAPL',
          quantity: 10,
          price: 175.50,
          date: '2025-06-20',
          total: 1755.00
        },
        {
          id: '2',
          type: 'sell',
          asset: 'MSFT',
          quantity: 5,
          price: 335.00,
          date: '2025-06-19',
          total: 1675.00
        },
        {
          id: '3',
          type: 'dividend',
          asset: 'VTI',
          quantity: 100,
          price: 0.85,
          date: '2025-06-18',
          total: 85.00
        }
      ]);

      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-24 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your portfolio...</p>
          </div>
        </div>
      </div>
    );
  }

  const totalPortfolioValue = portfolios.reduce((sum, p) => sum + p.totalValue, 0);
  const totalTodayChange = portfolios.reduce((sum, p) => sum + p.todayChange, 0);
  const totalTodayChangePercent = (totalTodayChange / (totalPortfolioValue - totalTodayChange)) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, Investor!
            </h1>
            <p className="text-gray-600">Here&apos;s your investment overview</p>
          </div>

          {/* Portfolio Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Portfolio Value</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${totalPortfolioValue.toLocaleString()}
                  </p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Today&apos;s Change</p>
                  <p className={`text-2xl font-bold ${totalTodayChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {totalTodayChange >= 0 ? '+' : ''}${totalTodayChange.toLocaleString()}
                  </p>
                  <p className={`text-sm ${totalTodayChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {totalTodayChange >= 0 ? '+' : ''}{totalTodayChangePercent.toFixed(2)}%
                  </p>
                </div>
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                  totalTodayChange >= 0 ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {totalTodayChange >= 0 ? 
                    <ArrowUpRight className="h-6 w-6 text-green-600" /> : 
                    <ArrowDownRight className="h-6 w-6 text-red-600" />
                  }
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Return</p>
                  <p className="text-2xl font-bold text-green-600">
                    +${portfolios.reduce((sum, p) => sum + p.totalReturn, 0).toLocaleString()}
                  </p>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Active Investments</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <PieChart className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Portfolios */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Your Portfolios</h2>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Portfolio
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {portfolios.map((portfolio) => (
                    <div key={portfolio.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900">{portfolio.name}</h3>
                        <span className="text-lg font-semibold text-gray-900">
                          ${portfolio.totalValue.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <span className={`flex items-center ${
                            portfolio.todayChange >= 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {portfolio.todayChange >= 0 ? 
                              <ArrowUpRight className="h-4 w-4 mr-1" /> : 
                              <ArrowDownRight className="h-4 w-4 mr-1" />
                            }
                            {portfolio.todayChange >= 0 ? '+' : ''}${portfolio.todayChange.toLocaleString()}
                          </span>
                          <span className={portfolio.todayChange >= 0 ? 'text-green-600' : 'text-red-600'}>
                            ({portfolio.todayChange >= 0 ? '+' : ''}{portfolio.todayChangePercent.toFixed(2)}%)
                          </span>
                        </div>
                        <span className="text-green-600">
                          +{portfolio.totalReturnPercent.toFixed(1)}% all time
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          transaction.type === 'buy' ? 'bg-green-100' : 
                          transaction.type === 'sell' ? 'bg-red-100' : 'bg-blue-100'
                        }`}>
                          {transaction.type === 'buy' ? 
                            <ArrowUpRight className="h-4 w-4 text-green-600" /> :
                            transaction.type === 'sell' ?
                            <ArrowDownRight className="h-4 w-4 text-red-600" /> :
                            <DollarSign className="h-4 w-4 text-blue-600" />
                          }
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {transaction.type === 'dividend' ? 'Dividend' : 
                             transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)} {transaction.asset}
                          </p>
                          <p className="text-sm text-gray-500">
                            {transaction.quantity} shares @ ${transaction.price}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${
                          transaction.type === 'buy' ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {transaction.type === 'buy' ? '-' : '+'}${transaction.total.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
