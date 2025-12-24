const express = require("express");
const pool = require("../config/database");
const { authenticate } = require("../config/auth");

const router = express.Router();

// GET /api/users/searches - Get user's recent searches
router.get("/searches", authenticate, async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM user_searches WHERE user_id = $1 ORDER BY created_at DESC LIMIT 10",
      [req.userId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching searches:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/users/searches - Save search
router.post("/searches", authenticate, async (req, res) => {
  try {
    const { query, medicineId } = req.body;
    const result = await pool.query(
      "INSERT INTO user_searches (user_id, query, medicine_id) VALUES ($1, $2, $3) RETURNING *",
      [req.userId, query, medicineId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error saving search:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/users/alternatives - Get saved alternatives
router.get("/alternatives", authenticate, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT sa.*, m.* FROM saved_alternatives sa
       JOIN medicines m ON sa.alternative_id = m.id
       WHERE sa.user_id = $1
       ORDER BY sa.created_at DESC`,
      [req.userId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching alternatives:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/users/alternatives - Save alternative
router.post("/alternatives", authenticate, async (req, res) => {
  try {
    const { brandMedicineId, alternativeId, savings } = req.body;
    const result = await pool.query(
      "INSERT INTO saved_alternatives (user_id, brand_id, alternative_id, savings) VALUES ($1, $2, $3, $4) RETURNING *",
      [req.userId, brandMedicineId, alternativeId, savings]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error saving alternative:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /api/users/alternatives/:id - Delete saved alternative
router.delete("/alternatives/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(
      "DELETE FROM saved_alternatives WHERE id = $1 AND user_id = $2",
      [id, req.userId]
    );
    res.json({ message: "Alternative removed" });
  } catch (error) {
    console.error("Error deleting alternative:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
