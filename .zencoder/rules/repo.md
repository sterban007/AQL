---
description: Repository Information Overview
alwaysApply: true
---

# Sirius Website Information

## Summary
A React-based multilingual website for Sirius, a technology solutions provider. The website includes pages for Home, About, Services, and Contact with a form that submits data to Supabase. The site supports both English and Arabic languages with RTL/LTR switching.

## Structure
- **src/**: Source code containing React components, pages, and application logic
  - **components/**: Reusable UI components (Header, Footer)
  - **contexts/**: React contexts including LanguageContext for internationalization
  - **lib/**: Utility libraries including Supabase client configuration
  - **pages/**: Main page components (Home, About, Services, Contact)
  - **assets/**: Static assets used in the application
- **public/**: Static files served directly (videos, images)
- **dist/**: Production build output

## Language & Runtime
**Language**: TypeScript/JavaScript
**Version**: TypeScript ~5.9.3
**Framework**: React 19.1.1
**Build System**: Vite 7.1.14 (rolldown-vite)
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- react: ^19.1.1
- react-dom: ^19.1.1
- react-router-dom: ^7.9.3
- @supabase/supabase-js: ^2.75.0

**Development Dependencies**:
- typescript: ~5.9.3
- @vitejs/plugin-react: ^5.0.4
- eslint: ^9.36.0
- vite: npm:rolldown-vite@7.1.14

## Build & Installation
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Database Integration
**Provider**: Supabase
**Configuration**: Environment variables in .env file
- VITE_SUPABASE_URL: Supabase project URL
- VITE_SUPABASE_ANON_KEY: Supabase anonymous API key

**Schema**: 
- contacts table with fields for first_name, last_name, email, position, country, city, and created_at
- Row Level Security (RLS) enabled with policies for public insert and authenticated select

## Internationalization
**Languages**: English (default), Arabic
**Implementation**: Custom React context (LanguageContext)
**Features**:
- Language toggle between English and Arabic
- RTL/LTR direction switching
- Translations stored in context for all UI text
- Persists language preference in localStorage

## Main Entry Points
**Application Entry**: src/main.tsx
**Routing**: React Router in src/App.tsx with routes for:
- / (Home)
- /about (About)
- /services (Services)
- /contact (Contact)

## Key Features
**Contact Form**: Integrated with Supabase for data storage
**Multilingual Support**: Complete English and Arabic translations
**Responsive Design**: Adapts to different screen sizes
**Video Assets**: Includes video content for enhanced user experience