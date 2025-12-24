import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Container, Box } from "@mui/material";
import Header from "../components/common/Header";
import OriginalMedicineCard from "../components/comparison/OriginalMedicineCard";
import AlternativeCard from "../components/comparison/AlternativeCard";
import SavingsCalculator from "../components/comparison/SavingsCalculator";
import SimilarityBar from "../components/comparison/SimilarityBar";
import { useMedicine } from "../hooks/useMedicine";
import { medicineService } from "../services/medicine";
import Loader from "../components/common/Loader";

export default function ComparisonPage() {
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);
  const [alternatives, setAlternatives] = useState([]);
  const [loading, setLoading] = useState(true);
  const { saveAlternative, savedAlternatives } = useMedicine();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const med = await medicineService.getById(id);
        setMedicine(med);
        const alts = await medicineService.getAlternatives(id);
        setAlternatives(alts);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <Box>
      <Header
        title="Compare Medicines"
        subtitle="Find the best alternatives for your medication"
      />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {medicine && (
          <>
            <Grid container spacing={4} sx={{ mb: 4 }}>
              <Grid item xs={12} md={6}>
                <OriginalMedicineCard medicine={medicine} />
              </Grid>
              <Grid item xs={12} md={6}>
                {alternatives[0] && (
                  <AlternativeCard
                    medicine={alternatives[0]}
                    savings={medicine.price - alternatives[0].price}
                    isSaved={savedAlternatives.some(
                      (m) => m.id === alternatives[0].id
                    )}
                    onSave={saveAlternative}
                  />
                )}
              </Grid>
            </Grid>
            <SimilarityBar score={0.95} />
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <SavingsCalculator
                  originalPrice={medicine.price}
                  alternativePrice={alternatives[0]?.price || medicine.price}
                />
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
}
