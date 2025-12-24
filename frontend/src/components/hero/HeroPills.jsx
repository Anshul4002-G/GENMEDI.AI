import React from "react";
import { Box, Chip, Stack } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function HeroPills() {
  const features = [
    { icon: VerifiedIcon, label: "FDA Approved" },
    { icon: SecurityIcon, label: "Secure & Safe" },
    { icon: SupportAgentIcon, label: "24/7 Support" },
  ];

  return (
    <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap", gap: 1 }}>
      {features.map((feature, i) => (
        <Chip
          key={i}
          icon={<feature.icon />}
          label={feature.label}
          variant="outlined"
          sx={{
            borderColor: "#fff",
            color: "#fff",
            fontSize: "0.9rem",
            "& .MuiChip-icon": { color: "#fff" },
          }}
        />
      ))}
    </Stack>
  );
}
