const express = require("express");
const medicineService = require("../services/medicineService");
const { authenticate } = require("../config/auth");

const router = express.Router();

// GET /api/medicines/categories
router.get("/categories", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT DISTINCT category FROM medicines WHERE category IS NOT NULL ORDER BY category"
    );
    res.json(result.rows.map((r) => r.category));
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/medicines/by-category/:category
router.get("/by-category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const medicines = await medicineService.search(category);
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/medicines/comparison/:id
router.get("/comparison/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const medicine = await medicineService.getById(id);
    const alternatives = await medicineService.getAlternatives(id);

    res.json({
      original: medicine,
      alternatives,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
