import { Campaign } from '@/lib/campaigns'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Zap } from 'lucide-react'

const exchangeVariants: Record<string, any> = {
  Binance: 'binance',
  OKX: 'okx',
  Bybit: 'bybit',
  'Gate.io': 'gateio',
  KuCoin: 'kucoin'
}

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const badgeVariant = exchangeVariants[campaign.exchange] || 'default'

  return (
    <Card className="flex flex-col h-full hover:border-neon-green/50 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-3">
          <Badge variant={badgeVariant} className="text-xs">
            {campaign.exchange}
          </Badge>
        </div>
        <h3 className="text-lg font-bold line-clamp-2 leading-tight">
          {campaign.title}
        </h3>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-neon-green" />
            <span className="text-neon-green font-bold text-sm">
              {campaign.prizePool}
            </span>
          </div>
          <p className="text-xs text-gray-400">
            {campaign.deadline}
          </p>
        </div>

        <p className="text-sm text-gray-300 line-clamp-2 flex-grow">
          {campaign.description}
        </p>

        <Button
          className="w-full mt-auto"
          onClick={() => window.open(campaign.link, '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Participate Now
        </Button>
      </CardContent>
    </Card>
  )
}