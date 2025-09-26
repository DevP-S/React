import React, { useState, useEffect } from "react";
import { Typography, Switch, FormControlLabel, Box } from "@mui/material";
import { Cloud } from "@mui/icons-material";

const Settings: React.FC = () => {
  // Stati iniziali letti da localStorage
  const [privacy, setPrivacy] = useState<boolean>(() => localStorage.getItem("privacy") === "true");
  const [cloudSave, setCloudSave] = useState<boolean>(() => localStorage.getItem("cloud") === "true");
  const [geoleoca, setGeoLoca] = useState<boolean> (() => localStorage.getItem("geo") === "true");

  // Salvataggio su localStorage quando cambiano gli stati
  useEffect(() => {
    localStorage.setItem("privacy", String(privacy));
  }, [privacy]);

  useEffect(() => {
    localStorage.setItem("cloud", String(cloudSave));
  }, [cloudSave]);

  useEffect(() => {
    localStorage.setItem("cloud", String(geoleoca));
  }, [geoleoca]);

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

      {/* Switch Privacy */}
      <Box sx={{ mt: 3, borderRadius: 2, bgcolor: "#2c2c2e", overflow: "hidden" }}>
        <FormControlLabel
          control={<Switch checked={privacy} onChange={() => setPrivacy(!privacy)} />}
          label="Privacy"
          sx={{ px: 2, py: 1.5, "& .MuiFormControlLabel-label": { color: "white", fontSize: 16 } }}
        />
      </Box>

      {/* Switch Cloud Save */}
      <Box sx={{ mt: 3, borderRadius: 2, bgcolor: "#2c2c2e", overflow: "hidden" }}>
        <FormControlLabel
          control={<Switch checked={cloudSave} onChange={() => setCloudSave(!cloudSave)} />}
          label="Salvataggio Cloud"
          sx={{ px: 2, py: 1.5, "& .MuiFormControlLabel-label": { color: "white", fontSize: 16 } }}
        />
      </Box>
  
      
      {/* Switch Cloud Save */}
      <Box sx={{ mt: 3, borderRadius: 2, bgcolor: "#2c2c2e", overflow: "hidden" }}>
        <FormControlLabel
          control={<Switch checked={geoleoca} onChange={() => setGeoLoca(!geoleoca)} />}
          label="Geolocalizzazione"
          sx={{ px: 2, py: 1.5, "& .MuiFormControlLabel-label": { color: "white", fontSize: 16 } }}
        />
      </Box>
    </Box>

  );
};

export default Settings;
