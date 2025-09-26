import React, { useState } from "react";
import { Box, TextField, List, ListItem, ListItemText, Divider, Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState("");
  
  // Esempio dati fittizi
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ];

  // Filtra i risultati in base alla query
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#1c1c1e",
        color: "white",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        p: 2,
      }}
    >
      {/* Titolo */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Cerca
      </Typography>

      {/* Barra di ricerca */}
      <TextField
        variant="outlined"
        placeholder="Cerca..."
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          startAdornment: <SearchRoundedIcon sx={{ color: "gray", mr: 1 }} />,
          sx: {
            backgroundColor: "#2c2c2e",
            borderRadius: "12px",
            color: "white",
            "& input": { color: "white" },
          },
        }}
      />

      {/* Lista dei risultati */}
      <List sx={{ mt: 2, bgcolor: "#2c2c2e", borderRadius: 2, overflow: "hidden" }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem button>
                <ListItemText primary={item} sx={{ color: "white" }} />
              </ListItem>
              {index < filteredItems.length - 1 && <Divider sx={{ bgcolor: "#3a3a3c" }} />}
            </React.Fragment>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="Nessun risultato" sx={{ color: "gray" }} />
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default SearchPage;
