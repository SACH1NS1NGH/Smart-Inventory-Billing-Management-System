# Smart Inventory Management System

A simple DBMS-based Inventory Management System built using **Node.js**, **Express.js**, **MySQL**, **HTML**, and **Bootstrap**.

This project demonstrates basic database connectivity, REST APIs, CRUD operations, and inventory management functionality.

---

# Features

- View Products
- Add Products
- Delete Products
- MySQL Database Integration
- REST API Backend
- Responsive Frontend using Bootstrap
- Inventory Tracking

---

# Technologies Used

- Node.js
- Express.js
- MySQL
- HTML5
- Bootstrap 5
- JavaScript

---

# Project Structure

```text
inventory-system/
│
├── server.js
├── index.html
├── schema.sql
├── package.json
└── README.md
```

---

# Setup Instructions

## 1. Install Node.js

Download and install Node.js:

https://nodejs.org/

---

## 2. Install XAMPP

Download XAMPP:

https://www.apachefriends.org/

Start:
- Apache
- MySQL

---

## 3. Create Database

Open:

http://localhost/phpmyadmin

Create database:

```sql
CREATE DATABASE inventory_system;
```

---

## 4. Import SQL File

Open SQL tab and run contents of:

```text
schema.sql
```

---

## 5. Install Dependencies

Open terminal inside project folder and run:

```bash
npm install express mysql2 cors nodemon
```

---

## 6. Run Backend Server

```bash
node server.js
```

Expected output:

```text
MySQL Connected
Server Running On Port 5000
```

---

## 7. Open Frontend

Open:

```text
index.html
```

OR use VS Code Live Server extension.

---

# API Endpoints

## Get Products

```http
GET /products
```

---

## Add Product

```http
POST /products
```

---

## Delete Product

```http
DELETE /products/:id
```

---

# Sample Database Records

| Product | Category | Price |
|---|---|---|
| Laptop | Electronics | 55000 |
| Mouse | Accessories | 500 |
| Keyboard | Accessories | 1200 |

---

# DBMS Concepts Used

- Relational Database
- CRUD Operations
- SQL Queries
- Primary Keys
- Database Connectivity
- REST APIs

---

# Future Improvements

- Authentication System
- Dashboard Analytics
- Billing Module
- Search Functionality
- Product Update Feature

---

# Author

Sachin Singh

---

# Resume Description

Developed a DBMS-based Inventory Management System using Node.js, Express.js, MySQL, HTML, and Bootstrap implementing CRUD operations, REST APIs, and relational database concepts.
