const express = require("express");
const pool = require("../config/database");
const { authenticate } = require("../config/auth");

const router = express.Router();

// GET /api/medicines - Get all medicines
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM medicines ORDER BY brand_name LIMIT 50"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching medicines:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/medicines/search - Search medicines
router.get("/search", async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.json([]);

    const searchTerm = `%${q}%`;
    const result = await pool.query(
      "SELECT * FROM medicines WHERE brand_name ILIKE $1 OR generic_name ILIKE $1 LIMIT 20",
      [searchTerm]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/medicines/:id - Get single medicine
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM medicines WHERE id = $1", [
      id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Medicine not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching medicine:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/medicines/:id/alternatives - Get alternatives for a medicine
router.get("/:id/alternatives", async (req, res) => {
  try {
    const { id } = req.params;

    // Get alternatives from similarity table
    const result = await pool.query(
      `SELECT m.*, s.similarity_score 
       FROM similarity s
       JOIN medicines m ON s.alternative_id = m.id
       WHERE s.brand_id = $1
       ORDER BY s.similarity_score DESC`,
      [id]
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching alternatives:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/medicines - Create new medicine (Admin only)
router.post("/", authenticate, async (req, res) => {
  try {
    const {
      brandName,
      genericName,
      strength,
      category,
      composition,
      manufacturer,
      price,
      country,
      approvedBy,
    } = req.body;

    const result = await pool.query(
      "INSERT INTO medicines (brand_name, generic_name, strength, category, composition, manufacturer, price, country, approved_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        brandName,
        genericName,
        strength,
        category,
        composition,
        manufacturer,
        price,
        country || "IN",
        approvedBy,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating medicine:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
