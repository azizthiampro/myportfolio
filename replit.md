# replit.md

## Overview

This is a modern full-stack web application built as a personal portfolio/website for a data engineer. The application features a React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence through Drizzle ORM. The stack emphasizes modern development practices with TypeScript, component-based architecture using shadcn/ui, and proper separation of concerns between client and server code.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with Vite for development and building
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: shadcn/ui component library based on Radix UI primitives
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod schema validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas shared between client and server
- **Development**: Hot reload with Vite middleware integration

### Data Storage Solutions
- **Primary Database**: PostgreSQL (configured for Neon Database serverless)
- **ORM**: Drizzle ORM with code-first schema definition
- **Migrations**: Drizzle Kit for schema migrations
- **Development Fallback**: In-memory storage implementation for development

## Key Components

### Database Schema
- **Contacts Table**: Stores contact form submissions with fields for name, email, company, subject, message, and timestamps
- **Schema Validation**: Drizzle-Zod integration for automatic schema validation
- **Type Safety**: Full TypeScript inference from database schema to API types

### API Endpoints
- `POST /api/contact`: Submit contact form with validation
- `GET /api/contacts`: Retrieve all contact submissions (admin functionality)

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Personal introduction with call-to-action buttons
- **Skills Section**: Technical expertise showcase with cloud platform focus
- **Experience Timeline**: Career journey visualization
- **Projects Portfolio**: Featured work with code examples
- **Blog Section**: Technical articles and insights
- **Contact Form**: Interactive form with real-time validation
- **Footer**: Links and additional navigation

### UI Component System
- **Design System**: Custom Tailwind configuration with CSS variables for theming
- **Component Library**: Comprehensive shadcn/ui implementation
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA-compliant components with keyboard navigation support

## Data Flow

1. **Client Requests**: React components make API calls using TanStack React Query
2. **API Layer**: Express.js routes handle requests with middleware for logging and error handling
3. **Validation**: Zod schemas validate incoming data on both client and server
4. **Database Operations**: Drizzle ORM executes type-safe database queries
5. **Response Handling**: Structured JSON responses with proper HTTP status codes
6. **Client Updates**: React Query manages cache updates and UI state synchronization

## External Dependencies

### Production Dependencies
- **Database**: Neon Database (PostgreSQL serverless)
- **UI Framework**: Radix UI primitives for accessible components
- **Icons**: Lucide React icons and React Icons
- **Validation**: Zod for schema validation
- **Date Handling**: date-fns for date manipulation
- **Styling**: Tailwind CSS with class-variance-authority for component variants

### Development Dependencies
- **Build Tool**: Vite with React plugin
- **TypeScript**: Strict type checking with path mapping
- **Linting**: ESBuild for server-side bundling
- **Development**: tsx for TypeScript execution in development

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Assets**: Static files served from build output directory

### Environment Configuration
- **Database**: Environment variable `DATABASE_URL` for PostgreSQL connection
- **Development**: Vite dev server with HMR and middleware integration
- **Production**: Express serves static files and API routes from single server

### Development Workflow
- **Hot Reload**: Vite middleware provides instant frontend updates
- **Database Migrations**: Drizzle Kit push command for schema updates
- **Type Safety**: Shared types between frontend and backend prevent runtime errors
- **Error Handling**: Development error overlay and structured error responses

### Deployment Considerations
- **Single Server**: Express serves both API and static frontend files
- **Database**: Ready for PostgreSQL deployment with Drizzle migrations
- **Scalability**: Stateless server design allows for horizontal scaling
- **Monitoring**: Request logging middleware for API endpoint monitoring