# E-commerce Product Management Backend

This is the **TypeScript + Node.js** backend for the E-commerce Product Management System.  
It provides API endpoints for fetching product data, calculating discounted prices and taxes, and handling errors.

## Features

- Fetch product data from Dummy JSON Products API.
- Calculate discounted prices for all products.
- Calculate taxes based on category (standard: 4.75%, groceries: 3%).
- Fully typed with TypeScript.
- Robust error handling and asynchronous operations.

## Tech Stack

- Node.js
- TypeScript
- Axios
- Express
- Middleware for CORS, security, and sanitization

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/pahmadinasabemran1998/e-commerce-backend.git
```
2. Install dependencies:
```bash
npm install
```
3. Set your .env:
```bash
PORT=5000
FRONTEND_URL=http://localhost:5173
```
4. Run the development server:
```bash
npm run dev
```
5. API will be available at http://localhost:5000.

## Frontend Reference
This backend is consumed by the E-commerce Frontend project: [E-Commerce Frontend](https://github.com/pahmadinasabemran1998/e-commerce-frontend).