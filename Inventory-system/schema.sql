CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10,2),
    stock INT,
    supplier VARCHAR(100)
);

INSERT INTO products (product_name, category, price, stock, supplier)
VALUES
('Laptop', 'Electronics', 55000, 10, 'Dell'),
('Mouse', 'Accessories', 500, 50, 'Logitech'),
('Keyboard', 'Accessories', 1200, 25, 'HP'),
('Monitor', 'Electronics', 12000, 8, 'Samsung'),
('USB Cable', 'Accessories', 200, 100, 'Boat');