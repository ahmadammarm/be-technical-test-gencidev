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

2. Configure Environment Variable: Copy the file `.env.example` to `.env` and adjust it to your configuration:

```sh
cp .env.example .env
```

```
PORT=3000
DATABASE_URL="postgresql://[USERNAME]:[PASSWORD]@localhost:5432/gencidev?schema=public"
JWT_SECRET=
```
- Config your postgres connection with your own postgres username and password
- You can generate your JWT secret key in <a href="https://jwtsecrets.com/#generator">here</a>


3. Setup database & run migrations:
```bash
npx prisma migrate dev --name init
```

4. Run development server:
```bash
npm start
```

Server will run at: [http://localhost:3000](http://localhost:3000)

You can also se the API Documentation here : 
<a href="https://documenter.getpostman.com/view/28586929/2sB3BLkTbu">Backend Test Gencidev API Documentation</a>
