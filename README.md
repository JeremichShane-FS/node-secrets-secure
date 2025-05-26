# Node Secrets Secure - Proper Secrets Management

## Overview

This application demonstrates proper secrets management using environment variables that are **NOT** stored in the repository.

## Required Environment Variables

This application requires the following environment variables to function:

- `DATABASE_PASSWORD` - Password for database connection
- `API_KEY` - API key for external service authentication
- `JWT_SECRET` - Secret key for JWT token signing
- `PORT` - Port number for the server (optional, defaults to 3000)
- `DB_HOST` - Database host address
- `DB_NAME` - Database name
- `ENCRYPTION_KEY` - Key for data encryption

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/JeremichShane-FS/node-secrets-secure.git
cd node-secrets-secure
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

Edit `.env` file with your actual values:

```
DATABASE_PASSWORD=your_actual_password
API_KEY=your_actual_api_key
JWT_SECRET=your_actual_jwt_secret
PORT=3000
DB_HOST=localhost
DB_NAME=myapp_database
ENCRYPTION_KEY=your_encryption_key
```

### 4. Run the application

```bash
npm start
```

## Security Benefits

- ✅ Secrets are not exposed in source code
- ✅ Secrets are not stored in version control
- ✅ Each environment can have different values
- ✅ Accidental exposure is prevented
- ✅ Follows security best practices

## What happens without .env?

If you run this application without creating a `.env` file, it will:

1. Display error messages listing missing variables
2. Exit gracefully with instructions
3. Prevent the application from starting with incomplete configuration
   ```

   ```

### Step 3.7: Update package.json

```json
{
  "name": "node-secrets-secure",
  "version": "1.0.0",
  "type": "module",
  "description": "Secure Node.js application with proper secrets management",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "node app.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "dotenv": "^16.0.3"
  }
}
```
