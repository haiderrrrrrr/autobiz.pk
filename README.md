# AutoBiz.pk

A responsive business website for AutoBiz.pk, an AI-powered WhatsApp automation service built for small and medium-sized businesses. The site presents the service offer, customer communication problem, automation solution, feature set, workflow steps, pricing plans, business benefits, trust signals, and WhatsApp contact flow.

## Live App

https://autobiz-pk.vercel.app

## Features

- Landing page for an AI-powered WhatsApp automation service.
- Hero section with service positioning, key benefits, and conversion actions.
- Problem section focused on repetitive queries, slow responses, missed leads, and manual workload.
- Solution section explaining AI responses, workflow automation, and WhatsApp Business integration.
- Feature cards for smart responses, automation workflows, order and booking handling, analytics, and integration.
- Step-by-step onboarding flow for connecting WhatsApp, configuring workflows, activating automation, and monitoring performance.
- Pricing section with Starter, Business, and Premium monthly plans.
- Trust section for SME industries such as retail, e-commerce, services, healthcare, and food businesses.
- WhatsApp call-to-action for direct service inquiries.
- Responsive dark-mode interface using reusable React components.

## Service Flow

| Step | Description |
| --- | --- |
| Connect WhatsApp | Link the business WhatsApp channel with AutoBiz.pk |
| Configure Workflows | Define responses, order flows, booking flows, FAQs, and business rules |
| Activate Automation | Let the AI assistant handle repetitive customer conversations |
| Monitor Results | Track response efficiency, engagement, and operational improvements |

## Tech Stack

| Part | Tech |
| --- | --- |
| Framework | React |
| Build Tool | Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn-style component structure |
| Icons | Lucide React |
| Deployment | Vercel |

## Project Structure

```text
.
|-- public/
|   |-- hero-automation.webp        # Hero dashboard visual
|   `-- solution-ai.webp            # AI solution visual
|-- src/
|   |-- components/
|   |   |-- autobiz/                # AutoBiz.pk page sections
|   |   `-- ui/                     # Reusable UI components
|   |-- lib/                        # Utility helpers
|   |-- App.tsx                     # Page composition
|   |-- index.css                   # Global styles
|   `-- main.tsx                    # React entry point
|-- package.json                    # Scripts and dependencies
|-- vite.config.ts                  # Vite configuration
`-- README.md
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the local Vite development server |
| `npm run build` | Runs TypeScript build checks and creates the production bundle |
| `npm run typecheck` | Runs TypeScript validation without emitting files |
| `npm run preview` | Serves the production build locally |

## Deployment

The site is deployed on Vercel:

```text
https://autobiz-pk.vercel.app
```

The current deployment is already configured. Local README and metadata updates do not require changing the Vercel project.
