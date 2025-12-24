import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Container,
  Chip,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMedicine } from "../../hooks/useMedicine";

export default function SavedAlternatives() {
  const { savedAlternatives, removeAlternative } = useMedicine();

  if (!savedAlternatives || savedAlternatives.length === 0) {
    return (
      <Container maxWidth="lg">
        <Card>
          <CardContent>
            <Typography color="textSecondary">
              No saved alternatives yet. Search for medicines to save
              alternatives.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Card>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <BookmarkIcon sx={{ mr: 1, color: "#4caf50" }} />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Saved Alternatives
            </Typography>
          </Box>
          <List>
            {savedAlternatives.map((medicine) => (
              <ListItem
                key={medicine.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 2,
                  borderBottom: "1px solid #eee",
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {medicine.brandName}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {medicine.genericName} • ₹{medicine.price}
                  </Typography>
                </Box>
                <Button
                  size="small"
                  startIcon={<DeleteIcon />}
                  onClick={() => removeAlternative(medicine.id)}
                >
                  Remove
                </Button>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}
