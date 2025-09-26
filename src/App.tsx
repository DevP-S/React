import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import Home from "./pages/home";

const App: React.FC = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    // naviga alle pagine in base al pulsante
    switch (newValue) {
      case 0: navigate("/"); break;
      case 1: navigate("/cerca"); break;
      case 2: navigate("/preferiti"); break;
      case 3: navigate("/impostazioni"); break;
    }
  };

  return (
    <div style={{ paddingBottom: "70px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cerca" element={<div>Cerca Page</div>} />
        <Route path="/preferiti" element={<div>Preferiti Page</div>} />
        <Route path="/impostazioni" element={<div>Impostazioni Page</div>} />
      </Routes>

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: "16px 16px 0 0",
          overflow: "hidden"
        }}
        elevation={6}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleChange}
          sx={{
            height: 56,
            backgroundColor: "black",
            "& .Mui-selected, & .MuiBottomNavigationAction-label.Mui-selected": { color: "white" },
            "& .MuiBottomNavigationAction-root": { color: "gray" }
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
          <BottomNavigationAction label="Cerca" icon={<SearchRoundedIcon />} />
          <BottomNavigationAction label="Preferiti" icon={<FavoriteRoundedIcon />} />
          <BottomNavigationAction label="Impostazioni" icon={<SettingsRoundedIcon />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default App;
