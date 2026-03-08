export interface Campaign {
  id: string
  exchange: 'Binance' | 'OKX' | 'Bybit' | 'Gate.io' | 'KuCoin'
  title: string
  prizePool: string
  deadline: string
  description: string
  link: string
}

export const campaigns: Campaign[] = [
  {
    id: '1',
    exchange: 'Binance',
    title: 'February Trading Competition',
    prizePool: '$50,000 USDT',
    deadline: 'Ends 28 Feb 2026',
    description: 'Trade any spot pair and compete on leaderboard. Top traders win daily prizes.',
    link: 'https://www.binance.com/en/activity/trading-competition'
  },
  {
    id: '2',
    exchange: 'OKX',
    title: 'New User Sign-Up Bonus',
    prizePool: '$100 Bonus + 5 USDT Rewards',
    deadline: 'Ends 31 Mar 2026',
    description: 'Register and complete KYC. Earn $100 bonus for first deposit and trades.',
    link: 'https://www.okx.com/'
  },
  {
    id: '3',
    exchange: 'Bybit',
    title: 'Copy Trading Campaign',
    prizePool: '$30,000 USDT',
    deadline: 'Ends 25 Feb 2026',
    description: 'Copy top traders and share rewards. New traders get extra bonus commissions.',
    link: 'https://www.bybit.com/'
  },
  {
    id: '4',
    exchange: 'Gate.io',
    title: 'Token Launch Airdrop',
    prizePool: 'Up to 1000 GT Tokens',
    deadline: 'Ends 20 Feb 2026',
    description: 'Complete simple tasks: follow, retweet, invite friends. Claim GT tokens.',
    link: 'https://www.gate.io/'
  },
  {
    id: '5',
    exchange: 'KuCoin',
    title: 'Futures Trading Rebate Program',
    prizePool: 'Up to 40% Rebate',
    deadline: 'Ongoing',
    description: 'Get daily rebates on USDT-M futures trading volume. No volume cap.',
    link: 'https://www.kucoin.com/'
  },
  {
    id: '6',
    exchange: 'Binance',
    title: 'Margin Trading Cashback',
    prizePool: '$25,000 USDT',
    deadline: 'Ends 15 Mar 2026',
    description: 'Trade on margin and earn cashback. Higher leverage = higher rewards.',
    link: 'https://www.binance.com/en/activity/margin-rewards'
  },
  {
    id: '7',
    exchange: 'Bybit',
    title: 'Referral Program Mega Bonus',
    prizePool: '$10,000 USDT',
    deadline: 'Ends 28 Feb 2026',
    description: 'Invite friends and earn commissions. Both you and friend get bonuses.',
    link: 'https://www.bybit.com/invite'
  },
  {
    id: '8',
    exchange: 'OKX',
    title: 'Options Trading Challenge',
    prizePool: '$15,000 USDT',
    deadline: 'Ends 22 Feb 2026',
    description: 'Trade options daily. Best returns share the prize pool. No max winnings.',
    link: 'https://www.okx.com/en-US/trade-derivatives/options'
  },
  {
    id: '9',
    exchange: 'Gate.io',
    title: 'Staking Rewards Boost',
    prizePool: '20% APR (variable)',
    deadline: 'Ongoing',
    description: 'Stake major tokens and earn boosted yields. Flexible or fixed terms.',
    link: 'https://www.gate.io/en/earn'
  },
  {
    id: '10',
    exchange: 'KuCoin',
    title: 'Spot Trading Festival',
    prizePool: '$50,000 USDT + NFTs',
    deadline: 'Ends 28 Feb 2026',
    description: 'Trade any spot pair during festival hours. Leaderboard-based rewards + NFT drops.',
    link: 'https://www.kucoin.com/'
  }
]