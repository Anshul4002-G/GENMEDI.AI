import React from "react";
import { Alert, Box, Container, Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";

export default function Disclaimer() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Alert severity="warning" icon={<WarningIcon />}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          ⚠️ Important Medical Disclaimer
        </Typography>
        <Typography variant="body2">
          MediCost AI provides medicine alternatives based on composition
          similarity and market data. It is NOT a substitute for professional
          medical advice. Always consult with your doctor or pharmacist before
          switching medicines. We are not responsible for any adverse reactions.
          Use this tool as an informational reference only. Your health and
          safety are our priority.
        </Typography>
      </Alert>
    </Container>
  );
}
