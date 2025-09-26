import React, { useState, useEffect } from "react";
import { Typography, Switch, FormControlLabel, Box, Divider } from "@mui/material";

const Settings: React.FC = () => {
  const [privacy, setPrivacy] = useState<boolean>(() => {
    return localStorage.getItem("privacy") === "true";
  });

  useEffect(() => {
    localStorage.setItem("privacy", String(privacy));
  }, [privacy]);

  return (
    <Box
      sx={{
        p: 2,
        minHeight: "100vh",
        backgroundColor: "#1c1c1e",
        color: "white",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Impostazioni
      </Typography>

      <Box sx={{ mt: 3, borderRadius: 2, bgcolor: "#2c2c2e", overflow: "hidden" }}>
        <FormControlLabel
          control={<Switch checked={privacy} onChange={() => setPrivacy(!privacy)} />}
          label="Privacy"
          sx={{ px: 2, py: 1.5, "& .MuiFormControlLabel-label": { color: "white", fontSize: 16 } }}
        />
      </Box>
    </Box>
  );
};

export default Settings;
