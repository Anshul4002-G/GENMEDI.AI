import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const faqs = [
    {
      q: "How accurate are the medicine alternatives?",
      a: "Our AI analyzes composition, dosage, and uses FDA data to recommend 90%+ similar alternatives with same therapeutic effects.",
    },
    {
      q: "Are these medicines safe to use?",
      a: "Yes, all recommended alternatives are FDA approved and verified. Consult your doctor before switching medicines.",
    },
    {
      q: "Can I save my preferences?",
      a: "Yes, create an account to save your searches, alternatives, and medication history.",
    },
    {
      q: "Is my data secure?",
      a: "We use 256-bit encryption and HIPAA-compliant servers to protect your personal health data.",
    },
    {
      q: "How much can I save?",
      a: "On average, users save 30-80% on medications by switching to recommended alternatives.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
      >
        Frequently Asked Questions
      </Typography>
      <Box>
        {faqs.map((faq, i) => (
          <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 600 }}>{faq.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
