'use client'

import { useState, useMemo } from 'react'
import { campaigns } from '@/lib/campaigns'
import { CampaignCard } from '@/components/campaign-card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Zap } from 'lucide-react'

const exchanges = ['All', 'Binance', 'OKX', 'Bybit', 'Gate.io', 'KuCoin'] as const

export default function Home() {
  const [selectedExchange, setSelectedExchange] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCampaigns = useMemo(() => {
    return campaigns.filter(campaign => {
      const matchesExchange = selectedExchange === 'All' || campaign.exchange === selectedExchange
      const matchesSearch =
        campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.exchange.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.description.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesExchange && matchesSearch
    })
  }, [selectedExchange, searchQuery])

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-950/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-8 h-8 text-neon-green" />
            <h1 className="text-2xl sm:text-4xl font-black">CEX Campaign Hub</h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">
            Ongoing Rewards & Contests
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input
              placeholder="Search campaigns by title, exchange, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Exchange Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {exchanges.map(exchange => (
              <Button
                key={exchange}
                onClick={() => setSelectedExchange(exchange)}
                variant={selectedExchange === exchange ? 'default' : 'outline'}
                className={
                  selectedExchange === exchange
                    ? 'bg-neon-green text-black hover:bg-neon-green_dark'
                    : 'border-gray-700 text-gray-300 hover:border-neon-green/50 hover:text-neon-green'
                }
                size="sm"
              >
                {exchange}
              </Button>
            ))}
          </div>
        </div>

        {/* Campaign Grid */}
        {filteredCampaigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map(campaign => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No campaigns found. Try a different search or filter.
            </p>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Showing {filteredCampaigns.length} of {campaigns.length} campaigns
          </p>
        </div>
      </div>
    </main>
  )
}