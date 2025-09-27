import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import Home from "./pages/home";
import Settings from "./pages/settings";
import SearchPage from "./pages/search";
import Login from "./pages/login";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Sincronizza value della BottomNavigation con il path
  const getValueFromPath = (path: string) => {
    switch (path) {
      case "/home": return 0;
      case "/cerca": return 1;
      case "/preferiti": return 2;
      case "/impostazioni": return 3;
      default: return 0;
    }
  };

  const [value, setValue] = useState(getValueFromPath(location.pathname));

  useEffect(() => {
    setValue(getValueFromPath(location.pathname));
  }, [location.pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (!isLoggedIn) return;

    switch (newValue) {
      case 0: navigate("/home"); break;
      case 1: navigate("/cerca"); break;
      case 2: navigate("/preferiti"); break;
      case 3: navigate("/impostazioni"); break;
    }
  };

  return (
    <div style={{ paddingBottom: isLoggedIn ? "70px" : "0" }}>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <Login
                onLogin={() => setIsLoggedIn(true)}
                onRegister={() => alert("Registrazione non implementata")}
              />
            )
          }
        />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
        <Route path="/cerca" element={isLoggedIn ? <SearchPage /> : <Navigate to="/" />} />
        <Route path="/preferiti" element={isLoggedIn ? <div>Preferiti Page</div> : <Navigate to="/" />} />
        <Route path="/impostazioni" element={isLoggedIn ? <Settings /> : <Navigate to="/" />} />
      </Routes>

      {isLoggedIn && (
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
      )}
    </div>
  );
};

export default App;
