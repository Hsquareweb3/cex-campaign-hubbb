# CEX Campaign Hub

A clean, fast, dark-mode tracker for ongoing crypto exchange campaigns, rewards, and contests.

**Live campaigns from:** Binance, OKX, Bybit, Gate.io, KuCoin

## Features

- **Real-time Campaign Tracking**: Browse 10+ hardcoded campaigns across major CEX platforms
- **Smart Filtering**: Filter by exchange or search by title/keywords
- **Dark Web3 Theme**: Sleek black background with neon green accents
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **One-Click Participation**: Direct links to campaign pages
- **Lightning Fast**: Built with Next.js 15 for optimal performance

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Language**: TypeScript
- **Components**: Shadcn/ui patterns (Card, Badge, Button, Input)

## Project Structure

```
cex-campaign-hub/
├── app/
│   ├── components/
│   │   ├── CampaignCard.tsx        # Individual campaign display
│   │   ├── FilterButtons.tsx       # Exchange filter buttons
│   │   └── SearchInput.tsx         # Search functionality
│   ├── lib/
│   │   ├── campaigns.ts            # Campaign data & types
│   │   └── utils.ts                # Utility functions (cn)
│   ├── globals.css                 # Global styles with dark theme
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Main page with filtering logic
├── public/
├── tailwind.config.ts              # Tailwind config with Web3 colors
├── next.config.js
├── tsconfig.json
└── package.json
```

## Campaign Data

Campaigns are stored in `app/lib/campaigns.ts`. Each campaign includes:
- Exchange name (Binance, OKX, Bybit, Gate.io, KuCoin)
- Title
- Prize pool amount
- Deadline
- Description
- Direct campaign link
- Badge color

To add more campaigns, simply extend the `campaigns` array in `app/lib/campaigns.ts`.

## Styling & Theme

- **Primary Color**: Neon Green (`#39ff14`)
- **Background**: Web3 Black (`#0a0e27`)
- **Secondary Background**: Web3 Dark (`#1a1f3a`)
- **Accent**: Neon Green Dark (`#2bcc0f`)

All theme colors are configurable in `tailwind.config.ts`.

## Responsive Grid

- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns

## Performance

- Server-side rendering where possible
- Client-side filtering with `useMemo` optimization
- Minimal JavaScript bundle
- CSS optimizations via Tailwind purging

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT