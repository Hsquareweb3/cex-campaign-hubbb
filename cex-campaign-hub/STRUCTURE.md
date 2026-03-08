# CEX Campaign Hub - Project Structure

## Frontend Layout
```
cex-campaign-hub/
├── app/
│   ├── globals.css           # Global Tailwind styles
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Main dashboard page
├── components/
│   ├── ui/
│   │   ├── badge.tsx         # Exchange badge component
│   │   ├── button.tsx        # CTA button with neon-green
│   │   ├── card.tsx          # Campaign card container
│   │   └── input.tsx         # Search input field
│   └── campaign-card.tsx     # Campaign card wrapper
├── lib/
│   ├── campaigns.ts          # Campaign data (10 real campaigns)
│   └── utils.ts              # Utility functions (cn)
├── package.json              # Dependencies
├── tailwind.config.ts        # Dark theme + neon accents
├── next.config.mjs           # Next.js configuration
├── tsconfig.json             # TypeScript config
└── postcss.config.mjs        # PostCSS/Tailwind setup
```

## Key Files
- **app/page.tsx** - Main page with filters and grid
- **lib/campaigns.ts** - 10 hardcoded campaigns (Binance, OKX, Bybit, Gate.io, KuCoin)
- **components/campaign-card.tsx** - Individual campaign card with Participate button
- **app/globals.css** - Dark theme (black bg, neon green text)