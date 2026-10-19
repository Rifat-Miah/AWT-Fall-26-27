# Product Management API

## Student Details
Name: Rifat Miah
Student ID: 23-53510-3
Section: E

## Project Description
A NestJS REST API for managing Products and Employees, built with PostgreSQL and TypeORM.

## Setup Instructions
1. Clone the repository and navigate to the project folder.
2. Run `pnpm install` (or `npm install`).
3. Copy `.env.example` to `.env` and fill in your PostgreSQL credentials.
4. Run database migrations: `pnpm run migration:run`
5. Start the application: `pnpm run start:dev`
6. The API will run on `http://localhost:5001`.

## Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /products | Create a product |
| GET | /products | Get all products |
| GET | /products/:id | Get product by ID |
| PATCH | /products/:id | Update product |
| DELETE | /products/:id | Delete product |

### Employees
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /employees | Create an employee |
| GET | /employees | Get all employees |
| GET | /employees/:id | Get employee by ID |
| PATCH | /employees/:id | Update employee |
| DELETE | /employees/:id | Delete employee |