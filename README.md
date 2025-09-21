# Quran ID - Indonesian Quran Reader

A modern web application for reading and searching the Quran with Indonesian translation support. Built with Next.js and TypeScript for a fast, accessible, and multilingual experience.

## 🌟 Features

- **Multilingual Support**: English and Indonesian interface with i18n
- **Chapter Search**: Search through all 114 chapters by name (Arabic, English, Indonesian)
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

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/theosakram/quran-id.git
cd quran-id
```

### 2. Install Dependencies

#### Frontend Setup

```bash
cd frontend
yarn install
# or
npm install
```

#### Backend Setup

```bash
cd backend
yarn install
# or
npm install
```

### 3. Environment Configuration

#### Backend Environment

Create a `.env` file in the `backend` directory:

```env
QURAN_CLIENT_ID=your_client_id_here
QURAN_CLIENT_SECRET=your_client_secret_here
QURAN_ENDPOINT=https://apis-prelive.quran.foundation/content/api/v4
QURAN_TOKEN_ENDPOINT=https://prelive-oauth2.quran.foundation/oauth2/token
QURAN_PORT=4000
```

*Note: You'll need to obtain client credentials from the Quran Foundation API.*

#### Frontend Environment (Optional)

Copy the example environment file and modify as needed:

```bash
cd frontend
cp .env.example .env.local
```

Then edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

*Note: The frontend defaults to `http://localhost:4000` if no environment variable is set.*

### 4. Run the Application

#### Start Backend Server

```bash
cd backend
yarn dev
# or
npm run dev
```

The backend will be available at `http://localhost:4000`

#### Start Frontend Development Server

```bash
cd frontend
yarn dev
# or
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 📁 Project Structure

```
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

## 🎨 Customization

### Adding New Languages

1. Add language constants in `frontend/src/constants/index.ts`
2. Create translation files in `frontend/public/locales/[lang]/`
3. Update the language switcher in the header component
4. Add translations in `frontend/src/utils/surahTranslations.ts`

### Theming

The application uses Chakra UI v3 with a custom theme located in `frontend/src/components/theme/`. You can customize:

- Colors and color palettes
- Typography scales
- Component styles
- Responsive breakpoints

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Quran Foundation API](https://apis-prelive.quran.foundation) for providing the Quran data
- [Chakra UI](https://chakra-ui.com) for the beautiful component library
- [Next.js](https://nextjs.org) for the powerful React framework
- The open-source community for the amazing tools and libraries

## 📞 Contact

**Theophany Sakra Muhammad** - [@theosakram](https://github.com/theosakram)

Project Link: [https://github.com/theosakram/quran-id](https://github.com/theosakram/quran-id)
