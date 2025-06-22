# Heroes Invest - Professional Investment Management Platform

A modern investment company website built with Next.js 15, featuring portfolio management, market data visualization, user authentication, and multi-language support.

## 🚀 Features

- **Modern Investment Platform**: Professional portfolio management and tracking
- **Real-time Market Data**: Live market data integration and visualization
- **User Authentication**: Secure authentication with NextAuth.js (Google OAuth + Credentials)
- **Database Integration**: MongoDB with Prisma ORM
- **Multi-language Support**: Internationalization ready (i18n)
- **Responsive Design**: Modern UI built with Tailwind CSS and Radix UI components
- **Investment Analytics**: Portfolio performance tracking and analytics
- **Transaction Management**: Buy/sell orders and transaction history

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Prisma ORM
- **Authentication**: NextAuth.js v5
- **Internationalization**: next-intl
- **UI Components**: Radix UI + shadcn/ui
- **Charts**: Recharts for financial data visualization
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18+ 
- MongoDB database (local or cloud)
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd heroes2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Copy `.env.local` and update the values:
   ```bash
   # Database
   DATABASE_URL="mongodb://localhost:27017/heroes-invest"
   
   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret-key-change-this-in-production"
   
   # Auth Providers (optional)
   GOOGLE_CLIENT_ID=""
   GOOGLE_CLIENT_SECRET=""
   
   # App Configuration
   NODE_ENV="development"
   DEFAULT_LOCALE="en"
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Push database schema (for development)
   npx prisma db push
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗃️ Database Schema

The application uses MongoDB with the following main models:

- **User**: User accounts and profiles
- **Portfolio**: Investment portfolios
- **Asset**: Financial instruments (stocks, bonds, ETFs, etc.)
- **Holding**: Portfolio holdings
- **Transaction**: Buy/sell transactions
- **MarketData**: Real-time market data

## 🔐 Authentication

- **Credentials**: Email/password authentication
- **Google OAuth**: Sign in with Google
- **Protected Routes**: Automatic redirection for authenticated routes

## 🌍 Internationalization

Supports multiple languages:
- English (en) - Default
- Spanish (es)
- French (fr)
- German (de)

## 📱 Pages

- **Home** (`/`): Landing page with features and company info
- **Sign In** (`/auth/signin`): User authentication
- **Dashboard** (`/dashboard`): Investment portfolio overview
- **Portfolio** (`/portfolio`): Detailed portfolio management
- **Transactions** (`/transactions`): Transaction history
- **Market Data** (`/market`): Real-time market information

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Database Commands

- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema changes to database
- `npx prisma studio` - Open Prisma Studio database browser

## 🚀 Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Set up production environment variables**

3. **Deploy to your preferred platform** (Vercel, Netlify, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@heroesinvest.com or create an issue in the repository.

---

**Heroes Invest** - Building wealth through professional investment management 🚀
