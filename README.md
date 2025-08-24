# Gencidev Backend Developer Technical Test

A simple CRUD notes app with JWT authentication

## Tech Stack

- **Framework**: ExpressJs
- **Language**: Javascript
- **Database**: PostgreSQL with Prisma ORM
- **Dev Tools**: Nodemon

## Project Structure

```
be-technical-test-gencidev/
├── prisma/                # Prisma schema & migration files
├── src/
│   ├── controllers/       # Controllers for handling requests
│   ├── lib/               # Reusable helper functions
│   ├── middleware/        # Authentication middleware
│   ├── routes/            # API route definitions
│   ├── validators/        # Request validation logic
│   ├── app.js             # Express app configuration (middleware, routes, etc.)
│   └── index.js           # Application entry point (server bootstrap)
```


## Key Features

### Authentication System
- JWT-based authentication

### Notes Management
- Get, create, update, and delete notes with JWT auth middleware

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Setup database & run migrations:
```bash
npx prisma migrate dev --name init
```

3. Run development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to run the application.

You can also se the API Documentation here : 
<a href="https://documenter.getpostman.com/view/28586929/2sB3BLkTbu">Backend Test Gencidev API Documentation</a>
