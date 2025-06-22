# Copilot Instructions for Heroes Invest

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
Heroes Invest is a modern investment company website built with Next.js 15, featuring:
- Investment portfolio management
- Market data visualization
- User authentication and profiles
- Multi-language support (i18n)
- MongoDB database with Prisma ORM
- Real-time financial data integration

## Technology Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Prisma ORM
- **Authentication**: NextAuth.js
- **Internationalization**: next-intl
- **UI Components**: Radix UI + shadcn/ui
- **Charts**: Recharts for financial data visualization

## Code Style Guidelines
- Use TypeScript for all files
- Follow Next.js 15 App Router conventions
- Use server components by default, client components only when necessary
- Implement proper error boundaries and loading states
- Use Tailwind CSS for styling with consistent design tokens
- Follow accessibility best practices
- Implement proper SEO optimization

## Investment-Specific Features
- Portfolio tracking and analytics
- Market data integration
- Risk assessment tools
- Investment recommendations
- Financial reporting and statements
- Real-time price updates
- User dashboard with personalized insights

## Security Considerations
- Implement proper authentication flows
- Sanitize all user inputs
- Use environment variables for sensitive data
- Follow OWASP security guidelines
- Implement rate limiting for API endpoints
