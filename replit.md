# Service Nexus

A professional service marketplace website connecting customers with trusted maintenance professionals in Johannesburg, South Africa.

## Overview

Service Nexus offers plumbing, upholstery & carpet cleaning, and mobile car wash & valet services. The site features WhatsApp integration for quick quote requests and bookings.

## Tech Stack

- **Frontend**: React + Vite, TailwindCSS, shadcn/ui components, wouter for routing
- **Backend**: Express.js (Node), TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: TailwindCSS v4

## Pages

- `/` - Home (hero, services overview, how it works, pricing preview, testimonials, why choose us, service areas, CTA)
- `/services` - Detailed service cards with images for plumbing, upholstery, and car wash
- `/pricing` - Full pricing tables for all services with WhatsApp quote buttons
- `/about` - About page with mission, values, and partner info

## Key Features

- Sticky WhatsApp floating button on all pages
- Pre-filled WhatsApp messages per service type
- Partner logos (ZapClean, Lucky's Plumbing) in footer
- Mobile responsive navigation
- Service area coverage display (Johannesburg metro)

## Project Structure

- `client/src/pages/` - Page components (Home, Services, Pricing, About)
- `client/src/assets/` - Image assets (logos, service photos)
- `server/` - Express backend (routes, storage, db)
- `shared/schema.ts` - Drizzle schema (contact_messages table)

## Database

- `contact_messages` table for storing contact form submissions

## Contact Info

- Email: servicenexus@8conn.co.za
- Phone: 072 576 7964
- WhatsApp: +27 72 576 7964
