const pool = require("../config/database");
const cache = require("../utils/caching");

class MedicineService {
  async getAll(limit = 50) {
    const cacheKey = `medicines:all:${limit}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const result = await pool.query(
      "SELECT * FROM medicines ORDER BY brand_name LIMIT $1",
      [limit]
    );

    cache.set(cacheKey, result.rows);
    return result.rows;
  }

  async getById(id) {
    const cacheKey = `medicine:${id}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const result = await pool.query("SELECT * FROM medicines WHERE id = $1", [
      id,
    ]);

    if (result.rows.length === 0) return null;

    cache.set(cacheKey, result.rows[0]);
    return result.rows[0];
  }

  async search(query, limit = 20) {
    const cacheKey = `medicines:search:${query}:${limit}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const searchTerm = `%${query}%`;
    const result = await pool.query(
      `SELECT * FROM medicines 
       WHERE brand_name ILIKE $1 OR generic_name ILIKE $1 OR composition ILIKE $1
       ORDER BY brand_name LIMIT $2`,
      [searchTerm, limit]
    );

    cache.set(cacheKey, result.rows);
    return result.rows;
  }

  async getAlternatives(medicineId) {
    const cacheKey = `alternatives:${medicineId}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const result = await pool.query(
      `SELECT m.*, s.similarity_score 
       FROM similarity s
       JOIN medicines m ON s.alternative_id = m.id
       WHERE s.brand_id = $1
       ORDER BY s.similarity_score DESC`,
      [medicineId]
    );

    cache.set(cacheKey, result.rows);
    return result.rows;
  }

  async create(data) {
    const {
      brandName,
      genericName,
      strength,
      category,
      composition,
      manufacturer,
      price,
      country = "IN",
      approvedBy,
    } = data;

    const result = await pool.query(
      `INSERT INTO medicines 
       (brand_name, generic_name, strength, category, composition, manufacturer, price, country, approved_by) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
       RETURNING *`,
      [
        brandName,
        genericName,
        strength,
        category,
        composition,
        manufacturer,
        price,
        country,
        approvedBy,
      ]
    );

    cache.clear(); // Clear all caches
    return result.rows[0];
  }

  async update(id, data) {
    const fields = [];
    const values = [id];
    let paramIndex = 2;

    Object.keys(data).forEach((key) => {
      if (data[key] !== undefined) {
        fields.push(`${key} = $${paramIndex}`);
        values.push(data[key]);
        paramIndex++;
      }
    });

    if (fields.length === 0) return null;

    const result = await pool.query(
      `UPDATE medicines SET ${fields.join(", ")} WHERE id = $1 RETURNING *`,
      values
    );

    cache.clear();
    return result.rows[0];
  }

  async delete(id) {
    const result = await pool.query(
      "DELETE FROM medicines WHERE id = $1 RETURNING id",
      [id]
    );

    cache.clear();
    return result.rows.length > 0;
  }
}

module.exports = new MedicineService();
