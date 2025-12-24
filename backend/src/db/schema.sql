-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Medicines table
CREATE TABLE medicines (
    id SERIAL PRIMARY KEY,
    brand_name VARCHAR(255) NOT NULL,
    generic_name VARCHAR(255) NOT NULL,
    strength VARCHAR(100),
    category VARCHAR(100),
    composition TEXT,
    manufacturer VARCHAR(255),
    price DECIMAL(10, 2),
    country VARCHAR(2) DEFAULT 'IN',
    approved_by VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Similarity (Alternatives) table - THIS IS THE KEY TABLE
CREATE TABLE similarity (
    id SERIAL PRIMARY KEY,
    brand_id INTEGER NOT NULL REFERENCES medicines(id) ON DELETE CASCADE,
    alternative_id INTEGER NOT NULL REFERENCES medicines(id) ON DELETE CASCADE,
    similarity_score DECIMAL(3, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- User searches table
CREATE TABLE user_searches (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    query VARCHAR(255),
    medicine_id INTEGER REFERENCES medicines(id) ON DELETE
    SET NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Saved alternatives table
CREATE TABLE saved_alternatives (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    brand_id INTEGER NOT NULL REFERENCES medicines(id) ON DELETE CASCADE,
    alternative_id INTEGER NOT NULL REFERENCES medicines(id) ON DELETE CASCADE,
    savings DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Create indexes
CREATE INDEX idx_medicines_brand_name ON medicines(brand_name);
CREATE INDEX idx_medicines_generic_name ON medicines(generic_name);
CREATE INDEX idx_medicines_category ON medicines(category);
CREATE INDEX idx_user_searches_user_id ON user_searches(user_id);
CREATE INDEX idx_saved_alternatives_user_id ON saved_alternatives(user_id);
CREATE INDEX idx_similarity_brand_id ON similarity(brand_id);
CREATE INDEX idx_similarity_alternative_id ON similarity(alternative_id);