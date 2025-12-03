# Hushh - Privacy-Preserving User Data Vault

A fully interactive, clickable website prototype built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Futuristic Design**: Neon purple-blue gradients with dark glassmorphism
- 🔒 **Vault System**: Interactive vault with door animation
- 💰 **Offers & Rewards**: View and accept brand offers
- 💳 **Wallet**: Manage HUSHH coin balance and withdrawals
- 📊 **Brand Value Score**: Track your data's value to brands
- ⚙️ **Settings**: Complete settings and privacy controls

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /landing          # Landing page
  /onboarding       # Onboarding flow (7 steps)
  /dashboard        # Main dashboard
  /vault            # Vault page with door animation
  /vault/[category] # Category detail pages
  /offers           # Offers list
  /offers/[id]      # Offer detail page
  /permissions      # Permission requests
  /wallet           # Wallet page
  /wallet/withdraw  # Withdrawal flow
  /score            # Brand Value Score
  /settings         # Settings page
/components
  /navigation       # Global navigation bar
/lib
  utils.ts          # Utility functions
```

## Pages Overview

### Landing Page (`/landing`)
- Hero section with animations
- What is Hushh explanation
- How data vault works
- HUSHH coin explanation
- What brands see/don't see
- Call-to-action sections

### Onboarding (`/onboarding`)
- 7-step onboarding flow
- Welcome screen
- Profile creation
- Wallet connection
- Data source connections
- Vault creation animation

### Dashboard (`/dashboard`)
- Brand Value Score display
- Earnings summary
- Pending offers preview
- Vault preview
- Suggested offers

### Vault (`/vault`)
- Interactive vault door animation
- Category grid (Spending, Loyalty, Fitness, Social, Interests, Identity)
- Click to unlock and view categories

### Offers (`/offers`)
- List of all offers
- Offer status (pending, accepted, rejected)
- Reward amounts
- Match reasons

### Wallet (`/wallet`)
- HUSHH balance display
- Earnings chart
- Transaction history
- Withdrawal functionality

### Score (`/score`)
- Large neon score circle
- Score breakdown by factors
- Tips to improve score

### Settings (`/settings`)
- Profile management
- Privacy settings
- Notification preferences
- Biometric authentication
- Delete vault option

## Design System

### Colors
- Primary: Purple (#8B5CF6)
- Secondary: Blue (#3B82F6)
- Accent: Pink (#EC4899)
- Background: Dark (#0A0A0F)

### Components
- Glass morphism cards with backdrop blur
- Neon glowing borders and shadows
- Smooth animations and transitions
- Responsive design (mobile & desktop)

## Navigation

- **Desktop**: Top navigation bar
- **Mobile**: Bottom navigation bar
- Navigation automatically hides on landing and onboarding pages

## Notes

- This is a UI/UX prototype only - no backend logic is implemented
- All interactions are client-side only
- Data is mock/placeholder data
- Animations use Framer Motion for smooth transitions

## License

This project is a prototype for demonstration purposes.

