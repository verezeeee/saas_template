# Next.js SaaS Template

A modern, full-stack SaaS template built with Next.js 13+, TypeScript, Tailwind CSS, and MongoDB.

## Features

- 🔐 Authentication system with protected routes
- 🌙 Dark mode support
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔄 API routes with MongoDB integration
- 🛡️ TypeScript for type safety
- 🚀 Next.js App Router
- 📊 Dashboard layout
- 🔒 Middleware for route protection

## Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── header.tsx        # Header component
│   ├── main-nav.tsx      # Navigation component
│   ├── providers.tsx     # App providers
│   └── theme-toggle.tsx  # Theme switcher
├── lib/                  # Utility functions
│   ├── auth.ts          # Authentication utilities
│   ├── axios.ts         # Axios instance
│   ├── db.ts            # Database connection
│   └── utils.ts         # Helper functions
├── models/              # MongoDB models
│   └── User.ts         # User model
└── middleware.ts       # Next.js middleware
```

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- MongoDB database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd saas_template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

## API Routes

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/users/[id]` - Get user by ID
- `PUT /api/users/[id]` - Update user
- `DELETE /api/users/[id]` - Delete user

## Authentication

The template uses NextAuth.js for authentication. Protected routes are wrapped in the dashboard layout and require authentication to access.

## Styling

- Tailwind CSS for utility-first styling
- Dark mode support with theme toggle
- Responsive design out of the box

## Database

- MongoDB integration using Mongoose
- Connection pooling for optimal performance
- Models defined in `src/models/`

## Development

### Adding New Features

1. Create new components in `src/components/`
2. Add new API routes in `src/app/api/`
3. Create new pages in `src/app/`
4. Define new models in `src/models/`

### Best Practices

- Use TypeScript for type safety
- Follow the file structure convention
- Implement error handling in API routes
- Use environment variables for sensitive data

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the repository or contact the maintainers.
