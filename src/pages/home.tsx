import React, { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

const Home: React.FC = () => {
  // Stati dei campi
  const [name, setName] = useState("Mario Rossi");
  const [email, setEmail] = useState("mario@example.com");
  const [phone, setPhone] = useState("+39 123 456 789");
  const [street, setStreet] = useState("Via Roma 123");
  const [city, setCity] = useState("Milano");
  const [zip, setZip] = useState("20100");

  // Stato privacy
  const [privacyEnabled, setPrivacyEnabled] = useState(false);

  // Legge lo stato privacy da localStorage
  useEffect(() => {
    const privacy = localStorage.getItem("privacy") === "true";
    setPrivacyEnabled(privacy);
  }, []);

  const cellStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "15px 20px",
    borderBottom: "1px solid #2c2c2e",
    width: "100%",
    boxSizing: "border-box",
  };

  const iconContainer: React.CSSProperties = {
    backgroundColor: "#2c2c2e",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "15px",
    flexShrink: 0,
  };

  const inputStyle = (width: string): React.CSSProperties => ({
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#fff",
    textAlign: "left" as const,
    width: width,
    fontSize: "14px",
    marginLeft: "10px",
  });

  const socialButtonStyle: React.CSSProperties = {
    backgroundColor: "#2c2c2e",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 10px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1c1c1e",
        color: "#fff",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        padding: 0,
        margin: 0,
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "#2c2c2e",
          margin: "20px auto",
        }}
      ></div>

      <h1 style={{ padding: "0 20px 10px 20px", fontSize: "28px" }}>
        Account
      </h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Nome */}
        <div style={cellStyle}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainer}>
              <PersonIcon style={{ color: "#fff" }} />
            </div>
            <span>Nome</span>
          </div>
          <input
            type="text"
            value={privacyEnabled ? "*****" : name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle("25%")}
            disabled={privacyEnabled}
          />
        </div>

        {/* Email */}
        <div style={cellStyle}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainer}>
              <EmailIcon style={{ color: "#fff" }} />
            </div>
            <span>Email</span>
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle("50%")}
          />
        </div>

        {/* Telefono */}
        <div style={cellStyle}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainer}>
              <PhoneIcon style={{ color: "#fff" }} />
            </div>
            <span>Telefono</span>
          </div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle("50%")}
          />
        </div>

        {/* Indirizzo */}
        <div style={cellStyle}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainer}>
              <HomeIcon style={{ color: "#fff" }} />
            </div>
            <span>Via</span>
          </div>
          <input
            type="text"
            value={privacyEnabled ? "*****" : street}
            onChange={(e) => setStreet(e.target.value)}
            style={inputStyle("40%")}
            disabled={privacyEnabled}
          />
        </div>

        <div style={cellStyle}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainer}>
              <HomeIcon style={{ color: "#fff" }} />
            </div>
            <span>Città</span>
          </div>
          <input
            type="text"
            value={privacyEnabled ? "*****" : city}
            onChange={(e) => setCity(e.target.value)}
            style={inputStyle("30%")}
            disabled={privacyEnabled}
          />
        </div>

        <div style={cellStyle}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainer}>
              <HomeIcon style={{ color: "#fff" }} />
            </div>
            <span>CAP</span>
          </div>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            style={inputStyle("15%")}
          />
        </div>
      </div>

      {/* Sezione Social */}
      <div
        style={{
          marginTop: "30px",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Collega i tuoi social
        </h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={socialButtonStyle}>
            <FacebookIcon style={{ color: "#3b5998" }} />
          </div>
          <div style={socialButtonStyle}>
            <GoogleIcon style={{ color: "#db4437" }} />
          </div>
          <div style={socialButtonStyle}>
            <TwitterIcon style={{ color: "#1da1f2" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
