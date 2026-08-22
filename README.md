# Temp Cover Short-Term Insurance & Policy Generator

A temporary vehicle insurance quote generator, PDF policy issuer, and transactional notification engine built with Next.js 14 App Router, React 18, Prisma ORM, React PDF, and React Email.

## Overview

`temp-cover` streamlines short-term vehicle insurance quote submissions, generates downloadable PDF policy certificates on the fly (`@react-pdf/renderer`), sends branded email confirmations (React Email, Resend), and persists customer quote records with MongoDB and Prisma ORM.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v14 App Router)
- **Database & ORM**: MongoDB with [Prisma ORM](https://www.prisma.io/) (v5)
- **PDF Generation**: React-PDF (`@react-pdf/renderer`)
- **Email System**: React Email (`@react-email/components`), Resend API (`resend`)
- **Frontend Core**: React 18, TypeScript, SCSS / SASS

## Prerequisites

- Node.js (v18 or higher recommended)
- Package manager (`pnpm` recommended)
- MongoDB database instance
- Resend API key

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="your-mongodb-connection-string"
   RESEND_API_KEY="your-resend-api-key"
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   NEXT_PUBLIC_EMAIL="noreply@example.com"
   ```

3. **Generate Prisma Client**:
   ```bash
   pnpm generate
   ```

4. **Run the Development Server**:
   ```bash
   pnpm dev
   ```

5. **Access the Portal**:
   Open `http://localhost:3000` in your web browser.

## Available Scripts

- `pnpm dev` - Starts the Next.js development server.
- `pnpm generate` - Regenerates Prisma Client models.
- `pnpm studio` - Opens Prisma Studio visual database editor.
- `pnpm dev:email` - Starts the React Email template preview server.
- `pnpm build` - Generates Prisma client and compiles production build.

## Author

Created by [Mehfooz-ur-Rehman](https://github.com/MehfoozurRehman).
