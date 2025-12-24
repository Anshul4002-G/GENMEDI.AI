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
} from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import { useMedicine } from "../../hooks/useMedicine";

export default function RecentSearches() {
  const { recentSearches } = useMedicine();

  if (!recentSearches || recentSearches.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Card>
          <CardContent>
            <Typography color="textSecondary">
              No recent searches yet
            </Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mb: 4 }}>
      <Card>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <HistoryIcon sx={{ mr: 1, color: "#1976d2" }} />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Recent Searches
            </Typography>
          </Box>
          <List>
            {recentSearches.slice(0, 5).map((search, index) => (
              <ListItem
                key={index}
                sx={{
                  cursor: "pointer",
                  "&:hover": { background: "#f5f5f5" },
                }}
              >
                <ListItemText primary={search} secondary="Recently searched" />
                <Button variant="text" color="primary">
                  View
                </Button>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}
