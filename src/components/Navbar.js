import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLanguage } from "../contexts/LanguageContext";
import logo from "../images/logo.jpg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);


  const [servicesAnchor, setServicesAnchor] = useState(null);
  const handleServicesOpen = (event) => setServicesAnchor(event.currentTarget);
  const handleServicesClose = () => setServicesAnchor(null);

  const { handleLanguageChange, currentTranslations } = useLanguage();
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setDrawerOpen(false);
    handleServicesClose();
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const LanguageSelector = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      <Button
        onClick={() => handleLanguageChange("MK")}
        sx={{
          color: { xs: "#1860b1fb", sm: "#CADCFC" },
          minWidth: "auto",
          padding: "4px 8px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        MK
      </Button>
      <Box
        sx={{ width: "1px", height: "20px", backgroundColor: "#31589cff" }}
      />
      <Button
        onClick={() => handleLanguageChange("AL")}
        sx={{
          color: { xs: "#1860b1fb", sm: "#CADCFC" },
          minWidth: "auto",
          padding: "4px 8px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        AL
      </Button>
      <Box
        sx={{ width: "1px", height: "20px", backgroundColor: "#31589cff" }}
      />
      <Button
        onClick={() => handleLanguageChange("EN")}
        sx={{
          color: { xs: "#1860b1fb", sm: "#CADCFC" },
          minWidth: "auto",
          padding: "4px 8px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        EN
      </Button>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "#00246B" }}
      sx={{ top: 0, width: "100%", zIndex: 1300 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            whiteSpace: "nowrap",
            fontWeight: "bold",
            fontSize: { xs: "20px", sm: "30px" },
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#CADCFC",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="Company Logo"
              style={{ height: "55px", marginRight: "10px" }}
            />
            {currentTranslations.companyName}
          </Link>
        </Typography>

        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* DESKTOP MENU */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "20px",
            flexGrow: 1,
          }}
        >
          <Button
            onClick={() => handleNavClick("/home")}
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: { xs: "#1860b1fb", sm: "#CADCFC" },
              textTransform: "none",
            }}
          >
            {currentTranslations.home}
          </Button>

          <Button
            onClick={() => handleNavClick("/about")}
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: { xs: "#1860b1fb", sm: "#CADCFC" },
              textTransform: "none",
            }}
          >
            {currentTranslations.about}
          </Button>

      
          <Button
            onClick={handleServicesOpen}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: { xs: "#1860b1fb", sm: "#CADCFC" },
              textTransform: "none",
            }}
          >
            {currentTranslations.services}
          </Button>

       
          <Menu
            anchorEl={servicesAnchor}
            open={Boolean(servicesAnchor)}
            onClose={handleServicesClose}
            PaperProps={{
              sx: {
                backgroundColor: "#111",
                color: "#fff",
                mt: 1,
                px: 2,
              },
            }}
          >
            <MenuItem
              onClick={() => handleNavClick("/transport")}
              sx={{ fontSize: "17px", fontWeight: "bold" }}
            >
              {currentTranslations.transport}
            </MenuItem>
            <MenuItem
              onClick={() => handleNavClick("/spedition")}
              sx={{ fontSize: "17px", fontWeight: "bold" }}
            >
              {currentTranslations.spedition}
            </MenuItem>
            <MenuItem
              onClick={() => handleNavClick("/careers")}
              sx={{ fontSize: "17px", fontWeight: "bold" }}
            >
              {currentTranslations.activities}
            </MenuItem>
          </Menu>

          <Button
            onClick={() => handleNavClick("/contact")}
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: { xs: "#1860b1fb", sm: "#CADCFC" },
              textTransform: "none",
            }}
          >
            {currentTranslations.contact}
          </Button>

          <LanguageSelector />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
