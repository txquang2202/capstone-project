# Description

This is a boilerplate for Node.js project with TypeScript, Express, Prisma, GraphQL, PostgreSQL, and Docker.

# Installation

## 1. Setup .env

```bash
cp .env.example .env
```

## 2. Setup with Docker

Download Docker at [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

Run this command to build docker environment.

```bash
docker-compose up --build -d
```

## Run

### 1. Install Node.js

Go to [https://nodejs.org/en/](https://nodejs.org/en/) and download the install

### 2. Install dependencies

```bash
yarn install
```

### 3. Start the project

```bash
# Run in development mode
yarn dev

# Run in production mode
yarn build
yarn start
```

### 4. Sync schema with database

```bash
yarn migrate:init
```

### 5. Seed

```bash
yarn seed
```
