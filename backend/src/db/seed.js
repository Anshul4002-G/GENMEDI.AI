// backend/src/db/seed.js
const { Pool } = require("pg");
require("dotenv").config();
const bcrypt = require("bcryptjs");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function seedData() {
  try {
    console.log("🌱 Seeding database...\n");

    // Clear existing data
    await pool.query("DELETE FROM saved_alternatives");
    await pool.query("DELETE FROM user_searches");
    await pool.query("DELETE FROM similarity");
    await pool.query("DELETE FROM medicines");
    await pool.query("DELETE FROM users");

    // Add test user
    const hashedPassword = await bcrypt.hash("Test@123", 10);
    await pool.query(
      "INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3)",
      ["Test User", "test@example.com", hashedPassword]
    );

    // Add medicines
    const medicines = [
      {
        brand: "Aspirin",
        generic: "Acetylsalicylic Acid",
        strength: "500mg",
        category: "Pain Relief",
        price: 50,
      },
      {
        brand: "Ibuprofen",
        generic: "Ibuprofen",
        strength: "400mg",
        category: "Pain Relief",
        price: 60,
      },
      {
        brand: "Paracetamol",
        generic: "Paracetamol",
        strength: "500mg",
        category: "Pain Relief",
        price: 40,
      },
      {
        brand: "Crocin",
        generic: "Paracetamol",
        strength: "500mg",
        category: "Pain Relief",
        price: 45,
      },
      {
        brand: "Amoxicillin",
        generic: "Amoxicillin",
        strength: "500mg",
        category: "Antibiotic",
        price: 150,
      },
      {
        brand: "Azithromycin",
        generic: "Azithromycin",
        strength: "500mg",
        category: "Antibiotic",
        price: 120,
      },
      {
        brand: "Augmentin",
        generic: "Amoxicillin+Clavulanic Acid",
        strength: "625mg",
        category: "Antibiotic",
        price: 200,
      },
      {
        brand: "Metformin",
        generic: "Metformin",
        strength: "500mg",
        category: "Diabetes",
        price: 80,
      },
      {
        brand: "Glimepiride",
        generic: "Glimepiride",
        strength: "2mg",
        category: "Diabetes",
        price: 100,
      },
      {
        brand: "Amlodipine",
        generic: "Amlodipine",
        strength: "5mg",
        category: "Hypertension",
        price: 90,
      },
      {
        brand: "Atenolol",
        generic: "Atenolol",
        strength: "50mg",
        category: "Hypertension",
        price: 70,
      },
      {
        brand: "Lisinopril",
        generic: "Lisinopril",
        strength: "10mg",
        category: "Hypertension",
        price: 110,
      },
      {
        brand: "Omeprazole",
        generic: "Omeprazole",
        strength: "20mg",
        category: "Gastric",
        price: 55,
      },
      {
        brand: "Ranitidine",
        generic: "Ranitidine",
        strength: "150mg",
        category: "Gastric",
        price: 50,
      },
      {
        brand: "Cetrizine",
        generic: "Cetrizine",
        strength: "10mg",
        category: "Allergy",
        price: 30,
      },
      {
        brand: "Loratadine",
        generic: "Loratadine",
        strength: "10mg",
        category: "Allergy",
        price: 35,
      },
      {
        brand: "Vitamin C",
        generic: "Ascorbic Acid",
        strength: "500mg",
        category: "Vitamin",
        price: 25,
      },
      {
        brand: "Multivitamin",
        generic: "Multi-Vitamin Complex",
        strength: "1 tablet",
        category: "Vitamin",
        price: 40,
      },
      {
        brand: "Calcium",
        generic: "Calcium Carbonate",
        strength: "500mg",
        category: "Mineral",
        price: 60,
      },
      {
        brand: "Iron",
        generic: "Ferrous Sulfate",
        strength: "325mg",
        category: "Mineral",
        price: 35,
      },
    ];

    const medicineIds = [];
    for (const med of medicines) {
      const result = await pool.query(
        "INSERT INTO medicines (brand_name, generic_name, strength, category, price) VALUES ($1, $2, $3, $4, $5) RETURNING id",
        [med.brand, med.generic, med.strength, med.category, med.price]
      );
      medicineIds.push(result.rows[0].id);
    }

    console.log(`✅ Added ${medicineIds.length} medicines`);

    // Add similarities (alternatives)
    const similarities = [
      { brand_id: medicineIds[0], alt_id: medicineIds[1], score: 0.95 }, // Aspirin <-> Ibuprofen
      { brand_id: medicineIds[1], alt_id: medicineIds[0], score: 0.95 }, // Ibuprofen <-> Aspirin
      { brand_id: medicineIds[2], alt_id: medicineIds[3], score: 0.99 }, // Paracetamol <-> Crocin
      { brand_id: medicineIds[3], alt_id: medicineIds[2], score: 0.99 }, // Crocin <-> Paracetamol
      { brand_id: medicineIds[4], alt_id: medicineIds[5], score: 0.98 }, // Amoxicillin <-> Azithromycin
      { brand_id: medicineIds[5], alt_id: medicineIds[4], score: 0.98 }, // Azithromycin <-> Amoxicillin
      { brand_id: medicineIds[4], alt_id: medicineIds[6], score: 0.92 }, // Amoxicillin <-> Augmentin
      { brand_id: medicineIds[6], alt_id: medicineIds[4], score: 0.92 }, // Augmentin <-> Amoxicillin
      { brand_id: medicineIds[7], alt_id: medicineIds[8], score: 0.85 }, // Metformin <-> Glimepiride
      { brand_id: medicineIds[8], alt_id: medicineIds[7], score: 0.85 }, // Glimepiride <-> Metformin
      { brand_id: medicineIds[9], alt_id: medicineIds[10], score: 0.88 }, // Amlodipine <-> Atenolol
      { brand_id: medicineIds[10], alt_id: medicineIds[9], score: 0.88 }, // Atenolol <-> Amlodipine
      { brand_id: medicineIds[10], alt_id: medicineIds[11], score: 0.8 }, // Atenolol <-> Lisinopril
      { brand_id: medicineIds[11], alt_id: medicineIds[10], score: 0.8 }, // Lisinopril <-> Atenolol
      { brand_id: medicineIds[12], alt_id: medicineIds[13], score: 0.9 }, // Omeprazole <-> Ranitidine
      { brand_id: medicineIds[13], alt_id: medicineIds[12], score: 0.9 }, // Ranitidine <-> Omeprazole
      { brand_id: medicineIds[14], alt_id: medicineIds[15], score: 0.87 }, // Cetrizine <-> Loratadine
      { brand_id: medicineIds[15], alt_id: medicineIds[14], score: 0.87 }, // Loratadine <-> Cetrizine
      { brand_id: medicineIds[16], alt_id: medicineIds[17], score: 0.82 }, // Vitamin C <-> Multivitamin
      { brand_id: medicineIds[17], alt_id: medicineIds[16], score: 0.82 }, // Multivitamin <-> Vitamin C
    ];

    for (const sim of similarities) {
      await pool.query(
        "INSERT INTO similarity (brand_id, alternative_id, similarity_score) VALUES ($1, $2, $3)",
        [sim.brand_id, sim.alt_id, sim.score]
      );
    }

    console.log(`✅ Added ${similarities.length} similarity records`);

    console.log("✅ Added test user: test@example.com");
    console.log("✅ Database seeded successfully!\n");
    console.log("📝 Test Credentials:");
    console.log("Email: test@example.com");
    console.log("Password: Test@123\n");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
}

seedData();
