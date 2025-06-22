'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Globe,
  RefreshCw,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';

interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: string;
}

interface MarketIndex {
  name: string;
  symbol: string;
  value: number;
  change: number;
  changePercent: number;
}

interface NewsItem {
  id: string;
  headline: string;
  summary: string;
  source: string;
  publishedAt: string;
  impact: 'positive' | 'negative' | 'neutral';
}

export default function MarketPage() {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [indices, setIndices] = useState<MarketIndex[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const timeframes = ['1D', '1W', '1M', '3M', '1Y'];

  useEffect(() => {
    loadMarketData();
    const interval = setInterval(loadMarketData, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const loadMarketData = () => {
    setIsLoading(true);
    
    // Simulate API call with mock data
    setTimeout(() => {
      setIndices([
        { name: 'S&P 500', symbol: 'SPX', value: 4520.15, change: 15.30, changePercent: 0.34 },
        { name: 'Dow Jones', symbol: 'DJI', value: 35240.89, change: -85.60, changePercent: -0.24 },
        { name: 'NASDAQ', symbol: 'IXIC', value: 14180.45, change: 65.20, changePercent: 0.46 },
        { name: 'Russell 2000', symbol: 'RUT', value: 2180.30, change: 8.90, changePercent: 0.41 }
      ]);

      setMarketData([
        { symbol: 'AAPL', name: 'Apple Inc.', price: 175.50, change: 2.30, changePercent: 1.33, volume: 45000000, marketCap: '$2.75T' },
        { symbol: 'MSFT', name: 'Microsoft Corp.', price: 335.20, change: -1.80, changePercent: -0.53, volume: 32000000, marketCap: '$2.50T' },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 125.40, change: 0.85, changePercent: 0.68, volume: 28000000, marketCap: '$1.56T' },
        { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 145.80, change: -2.10, changePercent: -1.42, volume: 35000000, marketCap: '$1.51T' },
        { symbol: 'TSLA', name: 'Tesla Inc.', price: 240.15, change: 8.45, changePercent: 3.65, volume: 55000000, marketCap: '$760B' },
        { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 450.30, change: 12.80, changePercent: 2.93, volume: 38000000, marketCap: '$1.11T' },
        { symbol: 'META', name: 'Meta Platforms', price: 320.60, change: -5.20, changePercent: -1.60, volume: 42000000, marketCap: '$812B' },
        { symbol: 'NFLX', name: 'Netflix Inc.', price: 385.90, change: 4.70, changePercent: 1.23, volume: 18000000, marketCap: '$171B' }
      ]);

      setNews([
        {
          id: '1',
          headline: 'Federal Reserve Holds Rates Steady, Signals Cautious Approach',
          summary: 'The Fed maintained interest rates while indicating a data-dependent stance on future policy decisions.',
          source: 'Reuters',
          publishedAt: '2024-12-19T10:30:00Z',
          impact: 'neutral'
        },
        {
          id: '2',
          headline: 'Tech Stocks Rally on Strong AI Earnings Reports',
          summary: 'Major technology companies report better-than-expected earnings driven by AI investments.',
          source: 'Bloomberg',
          publishedAt: '2024-12-19T09:15:00Z',
          impact: 'positive'
        },
        {
          id: '3',
          headline: 'Oil Prices Decline Amid Global Supply Concerns',
          summary: 'Crude oil futures drop as traders weigh supply disruptions against demand forecasts.',
          source: 'CNBC',
          publishedAt: '2024-12-19T08:45:00Z',
          impact: 'negative'
        }
      ]);

      setLastUpdated(new Date());
      setIsLoading(false);
    }, 1000);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(1)}M`;
    }
    return `${(volume / 1000).toFixed(0)}K`;
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <ArrowUp className="h-4 w-4" />;
    if (change < 0) return <ArrowDown className="h-4 w-4" />;
    return <Minus className="h-4 w-4" />;
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'positive': return 'border-l-green-500';
      case 'negative': return 'border-l-red-500';
      default: return 'border-l-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Market Data
              </h1>
              <p className="text-gray-600">
                Real-time market data and analysis • Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button
                variant="outline"
                size="sm"
                onClick={loadMarketData}
                disabled={isLoading}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Indices */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Major Indices</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {indices.map((index) => (
              <div key={index.symbol} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{index.name}</h3>
                  <span className="text-sm text-gray-500">{index.symbol}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatNumber(index.value)}
                  </span>
                  <div className={`flex items-center space-x-1 ${getChangeColor(index.change)}`}>
                    {getChangeIcon(index.change)}
                    <span className="text-sm font-medium">
                      {formatNumber(Math.abs(index.change))} ({Math.abs(index.changePercent).toFixed(2)}%)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stock Data */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Top Stocks</h2>
                  <div className="flex space-x-2">
                    {timeframes.map((timeframe) => (
                      <Button
                        key={timeframe}
                        variant={selectedTimeframe === timeframe ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedTimeframe(timeframe)}
                      >
                        {timeframe}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Symbol</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Price</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Change</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Volume</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Market Cap</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {marketData.map((stock) => (
                      <tr key={stock.symbol} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <span className="font-bold text-blue-600">{stock.symbol}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-900">{stock.name}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="font-semibold">${formatNumber(stock.price)}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className={`flex items-center justify-end space-x-1 ${getChangeColor(stock.change)}`}>
                            {getChangeIcon(stock.change)}
                            <span className="font-medium">
                              ${formatNumber(Math.abs(stock.change))}
                            </span>
                            <span className="text-sm">
                              ({Math.abs(stock.changePercent).toFixed(2)}%)
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right text-gray-600">
                          {formatVolume(stock.volume)}
                        </td>
                        <td className="px-6 py-4 text-right text-gray-600">
                          {stock.marketCap}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Market News */}
          <div>
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold text-gray-900">Market News</h2>
              </div>
              
              <div className="p-6 space-y-6">
                {news.map((item) => (
                  <div key={item.id} className={`border-l-4 pl-4 ${getImpactColor(item.impact)}`}>
                    <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                      {item.headline}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {item.summary}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{item.source}</span>
                      <span>{new Date(item.publishedAt).toLocaleTimeString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Stats */}
            <div className="bg-white rounded-lg shadow-sm border mt-6">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold text-gray-900">Quick Stats</h2>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Advancing</span>
                  </div>
                  <span className="font-semibold text-green-600">1,847</span>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <TrendingDown className="h-5 w-5 text-red-500" />
                    <span className="text-gray-600">Declining</span>
                  </div>
                  <span className="font-semibold text-red-600">1,234</span>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-600">Volume</span>
                  </div>
                  <span className="font-semibold">4.2B</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-600">VIX</span>
                  </div>
                  <span className="font-semibold">18.45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
