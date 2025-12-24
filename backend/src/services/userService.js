const pool = require("../config/database");

class UserService {
  async getSearchHistory(userId, limit = 10) {
    const result = await pool.query(
      "SELECT * FROM user_searches WHERE user_id = $1 ORDER BY created_at DESC LIMIT $2",
      [userId, limit]
    );
    return result.rows;
  }

  async saveSearch(userId, query, medicineId) {
    const result = await pool.query(
      "INSERT INTO user_searches (user_id, query, medicine_id) VALUES ($1, $2, $3) RETURNING *",
      [userId, query, medicineId]
    );
    return result.rows[0];
  }

  async getSavedAlternatives(userId) {
    const result = await pool.query(
      `SELECT sa.id, sa.savings, sa.created_at,
              m1.id as brand_id, m1.brand_name, m1.price as brand_price,
              m2.id as alternative_id, m2.brand_name as alternative_name, m2.price as alternative_price
       FROM saved_alternatives sa
       JOIN medicines m1 ON sa.brand_id = m1.id
       JOIN medicines m2 ON sa.alternative_id = m2.id
       WHERE sa.user_id = $1
       ORDER BY sa.created_at DESC`,
      [userId]
    );
    return result.rows;
  }

  async saveAlternative(userId, brandId, alternativeId, savings) {
    const result = await pool.query(
      "INSERT INTO saved_alternatives (user_id, brand_id, alternative_id, savings) VALUES ($1, $2, $3, $4) RETURNING *",
      [userId, brandId, alternativeId, savings]
    );
    return result.rows[0];
  }

  async removeSavedAlternative(userId, alternativeId) {
    const result = await pool.query(
      "DELETE FROM saved_alternatives WHERE id = $1 AND user_id = $2 RETURNING id",
      [alternativeId, userId]
    );
    return result.rows.length > 0;
  }

  async getStats(userId) {
    const searchesResult = await pool.query(
      "SELECT COUNT(*) as count FROM user_searches WHERE user_id = $1",
      [userId]
    );

    const savingsResult = await pool.query(
      "SELECT SUM(savings) as total_savings FROM saved_alternatives WHERE user_id = $1",
      [userId]
    );

    return {
      totalSearches: parseInt(searchesResult.rows[0].count),
      totalSavings: parseFloat(savingsResult.rows[0].total_savings || 0),
    };
  }
}

module.exports = new UserService();
