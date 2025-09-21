# Quran ID - Indonesian Quran Reader

A modern web application for reading and searching the Quran with Indonesian translation support. Built with Next.js and TypeScript for a fast, accessible, and multilingual experience.

## 🌟 Features

- **Multilingual Support**: English and Indonesian interface with i18n
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Built with Chakra UI v3 for beautiful and accessible components
- **Fast Performance**: Server-side rendering with Next.js 15 and React 19
- **Type Safety**: Full TypeScript implementation
- **Dark/Light Mode**: Theme switching support

## 🏗️ Tech Stack

### Frontend

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript 5
- **UI Library**: Chakra UI v3
- **State Management**: TanStack Query (React Query)
- **Internationalization**: react-i18next
- **Icons**: React Icons (Lucide)
- **Styling**: Emotion CSS-in-JS

### Backend

- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **API Integration**: Axios for external Quran API
- **Security**: Helmet.js, CORS
- **Development**: Nodemon, ts-node

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git**

## 🐳 Docker Deployment

The project is fully containerized with Alpine Linux for minimal image sizes and optimal performance.

### Quick Start with Docker

```bash
# Clone the repository
git clone https://github.com/theosakram/quran-id.git
cd quran-id

# Create environment file
cp backend/.env.example backend/.env
# Edit backend/.env with your Quran Foundation API credentials

# Start with Docker Compose (development)
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Environment Setup

Create `backend/.env` file:

```env
QURAN_CLIENT_ID=your_client_id_here
QURAN_CLIENT_SECRET=your_client_secret_here
QURAN_ENDPOINT=https://apis-prelive.quran.foundation/content/api/v4
QURAN_TOKEN_ENDPOINT=https://prelive-oauth2.quran.foundation/oauth2/token
QURAN_PORT=4000
```

### Docker Commands

```bash
# Development (with hot reload)
docker-compose up -d

# Production build
docker-compose -f docker-compose.prod.yml up -d

# Build specific service
docker-compose build backend
docker-compose build frontend

# Scale services
docker-compose up -d --scale backend=2

# View service logs
docker-compose logs backend
docker-compose logs frontend

# Enter container shell
docker-compose exec backend sh
docker-compose exec frontend sh

# Clean up everything
docker-compose down -v --rmi all
```

### Image Sizes (Alpine Linux)

- **Backend**: ~150MB (Node.js + Express.js)
- **Frontend**: ~200MB (Node.js + Next.js)
- **Total**: ~350MB for complete application

### Architecture

```mermaid
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Nginx     │    │  Frontend   │    │   Backend   │
│   (80/443)  ├────┤   (3000)    ├────┤   (4000)    │
│   Alpine    │    │   Alpine    │    │   Alpine    │
└─────────────┘    └─────────────┘    └─────────────┘
```

## 🚀 Getting Started

You can run this project in two ways: using Docker (recommended) or manually with Node.js.

## Docker Setup (Recommended)

The easiest way to get started:

```bash
# Clone the repository
git clone https://github.com/theosakram/quran-id.git
cd quran-id

# Create environment file
cp backend/.env.example backend/.env
# Edit backend/.env with your Quran Foundation API credentials

# Start with Docker Compose
docker-compose up -d

# Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:4000
```

## Manual Setup

If you prefer to run without Docker:

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### 1. Clone and Setup

```bash
git clone https://github.com/theosakram/quran-id.git
cd quran-id
```

### 2. Backend Setup

```bash
cd backend
yarn install
# or npm install

# Create environment file
cp .env.example .env
# Edit .env with your Quran Foundation API credentials
```

Create `backend/.env`:

```env
QURAN_CLIENT_ID=your_client_id_here
QURAN_CLIENT_SECRET=your_client_secret_here
QURAN_ENDPOINT=https://apis-prelive.quran.foundation/content/api/v4
QURAN_TOKEN_ENDPOINT=https://prelive-oauth2.quran.foundation/oauth2/token
QURAN_PORT=4000
```

```bash
# Start backend development server
yarn dev
# or npm run dev
```

### 3. Frontend Setup

```bash
# Open new terminal
cd frontend
yarn install
# or npm install

# Start frontend development server
yarn dev
# or npm run dev
```

### 4. Access Application

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:4000](http://localhost:4000)

## 📁 Project Structure

```text
quran-id/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # Next.js App Router pages
│   │   ├── features/        # Feature-based organization
│   │   │   ├── chapters/    # Chapter feature
│   │   │   │   ├── components/  # Chapter-specific components
│   │   │   │   ├── hooks/       # Chapter-specific hooks
│   │   │   │   ├── services/    # API & server services
│   │   │   │   ├── types.ts     # Chapter types
│   │   │   │   ├── utils.ts     # Chapter utilities
│   │   │   │   └── index.ts     # Public exports
│   │   │   └── i18n/        # Internationalization feature
│   │   │       ├── components/  # Language switcher
│   │   │       ├── translations/ # Translation utilities
│   │   │       ├── I18nProvider.tsx
│   │   │       └── index.ts
│   │   ├── shared/          # Shared/reusable code
│   │   │   ├── components/  # Generic components
│   │   │   │   ├── ui/      # Base UI components
│   │   │   │   ├── layout/  # Layout components
│   │   │   │   └── feedback/ # Loading, Error, Empty states
│   │   │   ├── services/    # Generic services (fetcher)
│   │   │   ├── types/       # Global type definitions
│   │   │   ├── theme/       # Chakra UI theme
│   │   │   └── QueryProvider.tsx
│   │   └── config/          # Configuration
│   │       └── constants.ts # Global constants
│   ├── public/              # Static assets and locales
│   │   └── locales/         # i18n translation files
│   │       ├── en/          # English translations
│   │       └── id/          # Indonesian translations
│   └── package.json
├── backend/                 # Express.js backend API
│   ├── src/
│   │   ├── config/          # Configuration files
│   │   ├── controllers/     # Route controllers
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic services
│   │   ├── types/           # TypeScript types
│   │   ├── utils/           # Utility functions
│   │   ├── validator/       # Input validation
│   │   └── app.ts           # Express app entry point
│   ├── .env                 # Environment variables
│   └── package.json
└── README.md
```

## 🧪 Available Scripts

### Frontend Scripts

```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
```

### Backend Scripts

```bash
yarn dev          # Start development server with nodemon
yarn build        # Compile TypeScript to JavaScript
yarn start        # Start production server
```

## 🌐 API Integration

The application integrates with the [Quran Foundation API](https://apis-prelive.quran.foundation) to fetch chapter information:

- **Base URL**: `https://apis-prelive.quran.foundation/content/api/v4`
- **Authentication**: OAuth2 with client credentials
- **Chapters Endpoint**: `/chapters`
- **Features**: Chapter names, verse counts, revelation information
- **Caching**: Implemented with TanStack Query for optimal performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Quran Foundation API](https://apis-prelive.quran.foundation) for providing the Quran data
- [Chakra UI](https://chakra-ui.com) for the beautiful component library
- [Next.js](https://nextjs.org) for the powerful React framework
- The open-source community for the amazing tools and libraries

## 📞 Contact

### Theophany Sakra Muhammad

- 🐙 GitHub: [@theosakram](https://github.com/theosakram)
- 💼 LinkedIn: [theosakram](https://www.linkedin.com/in/theosakram/)
- 📧 Email: [wyrdhn@gmail.com](mailto:wyrdhn@gmail.com)

**Project Repository**: [quran-id](https://github.com/theosakram/quran-id)
