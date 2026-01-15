# Doll Shop API

A RESTful API for managing doll products and shopping carts built with NestJS v11, MongoDB, and Docker Compose.

## Features

- **Product Management**: Full CRUD operations for doll products
- **Shopping Cart**: Add, update, remove items from cart
- **MongoDB Integration**: Using Mongoose ODM
- **Docker Support**: Containerized application with Docker Compose
- **Validation**: Request validation using class-validator
- **TypeScript**: Fully typed codebase

## Tech Stack

- **Framework**: NestJS v11
- **Database**: MongoDB
- **ODM**: Mongoose
- **Container**: Docker & Docker Compose
- **Language**: TypeScript

## Prerequisites

- Node.js 20.x or higher
- Docker and Docker Compose
- npm or yarn

## Getting Started

### Using Docker Compose (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd fin-kwa
```

2. Start the application:
```bash
docker-compose up
```

The API will be available at `http://localhost:3000`

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Copy the environment file:
```bash
cp .env.example .env
```

3. Start MongoDB (if not using Docker):
```bash
# Using Docker
docker run -d -p 27017:27017 --name mongodb mongo:7

# Or use a local MongoDB installation
```

4. Run the application:
```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

## API Endpoints

### Products

- **GET /products** - Get all products
- **GET /products/:id** - Get a product by ID
- **POST /products** - Create a new product
- **PATCH /products/:id** - Update a product
- **DELETE /products/:id** - Delete a product

#### Product Schema
```json
{
  "name": "string",
  "description": "string",
  "price": "number",
  "imageUrl": "string (optional)",
  "stock": "number",
  "isActive": "boolean (optional)"
}
```

### Cart

- **GET /cart/:userId** - Get cart for a user
- **POST /cart** - Add item to cart
- **PATCH /cart/:userId** - Update cart item quantity
- **DELETE /cart/:userId/items/:productId** - Remove item from cart
- **DELETE /cart/:userId** - Clear entire cart

#### Add to Cart
```json
{
  "userId": "string",
  "productId": "string",
  "quantity": "number"
}
```

#### Update Cart Item
```json
{
  "productId": "string",
  "quantity": "number"
}
```

## Example API Requests

### Create a Product
```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Barbie Dreamhouse Doll",
    "description": "Beautiful Barbie doll with dreamhouse accessories",
    "price": 29.99,
    "imageUrl": "https://example.com/barbie.jpg",
    "stock": 50
  }'
```

### Get All Products
```bash
curl http://localhost:3000/products
```

### Add to Cart
```bash
curl -X POST http://localhost:3000/cart \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user123",
    "productId": "product_id_here",
    "quantity": 2
  }'
```

### Get User Cart
```bash
curl http://localhost:3000/cart/user123
```

## Project Structure

```
src/
├── cart/
│   ├── dto/
│   │   ├── add-to-cart.dto.ts
│   │   └── update-cart-item.dto.ts
│   ├── cart.controller.ts
│   ├── cart.module.ts
│   ├── cart.schema.ts
│   └── cart.service.ts
├── products/
│   ├── dto/
│   │   ├── create-product.dto.ts
│   │   └── update-product.dto.ts
│   ├── product.schema.ts
│   ├── products.controller.ts
│   ├── products.module.ts
│   └── products.service.ts
├── app.module.ts
└── main.ts
```

## Scripts

```bash
# Development
npm run start:dev      # Start in watch mode
npm run start:debug    # Start with debugging

# Production
npm run build          # Build the project
npm run start:prod     # Run production build

# Testing
npm run test           # Run tests
npm run test:watch     # Run tests in watch mode
npm run test:cov       # Run tests with coverage

# Linting
npm run lint           # Lint and fix files
npm run format         # Format code with Prettier
```

## Docker Commands

```bash
# Start services
docker-compose up

# Start in detached mode
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild containers
docker-compose up --build
```

## Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/doll-shop
```

## License

MIT