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
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useLanguage } from "../contexts/LanguageContext";
import logo from "../images/logo.jpg";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesAnchor, setServicesAnchor] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const { handleLanguageChange, currentTranslations } = useLanguage();
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setDrawerOpen(false);
    handleServicesClose();
  };

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const handleServicesOpen = (event) => setServicesAnchor(event.currentTarget);
  const handleServicesClose = () => setServicesAnchor(null);

  const LanguageSelector = () => (
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", fontWeight: "bold" }}>
      {["MK", "AL", "EN"].map((lang, idx) => (
        <React.Fragment key={lang}>
          <Button
            onClick={() => handleLanguageChange(lang)}
            sx={{
              color: { xs: "#1860b1fb", sm: "#CADCFC" },
              minWidth: "auto",
              padding: "4px 8px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {lang}
          </Button>
          {idx < 2 && <Box sx={{ width: "1px", height: "20px", backgroundColor: "#31589cff" }} />}
        </React.Fragment>
      ))}
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#00246B", top: 0, width: "100%", zIndex: 1300 }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, whiteSpace: "nowrap", fontWeight: "bold", fontSize: { xs: "20px", sm: "30px" } }}
          >
            <Link
              to="/"
              style={{ textDecoration: "none", color: "#CADCFC", display: "flex", alignItems: "center" }}
            >
              <img src={logo} alt="Company Logo" style={{ height: "55px", marginRight: "10px" }} />
              {currentTranslations.companyName}
            </Link>
          </Typography>

          {/* MOBILE MENU BUTTON */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "flex-end", alignItems: "center", gap: "20px", flexGrow: 1 }}>
            {[
              { label: currentTranslations.home, path: "/home" },
              { label: currentTranslations.about, path: "/about" },
              { label: currentTranslations.services, path: null, submenu: [
                  { label: currentTranslations.transport, path: "/transport" },
                  { label: currentTranslations.spedition, path: "/spedition" },
                  { label: currentTranslations.activities, path: "/careers" },
                ]
              },
              { label: currentTranslations.contact, path: "/contact" },
            ].map((item) =>
              item.submenu ? (
                <React.Fragment key={item.label}>
                  <Button
                    onClick={handleServicesOpen}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{ fontSize: "20px", fontWeight: "bold", color: "#CADCFC", textTransform: "none" }}
                  >
                    {item.label}
                  </Button>
                  <Menu
                    anchorEl={servicesAnchor}
                    open={Boolean(servicesAnchor)}
                    onClose={handleServicesClose}
                    PaperProps={{ sx: { backgroundColor: "#111", color: "#fff", mt: 1, px: 2 } }}
                  >
                    {item.submenu.map((sub) => (
                      <MenuItem key={sub.label} onClick={() => handleNavClick(sub.path)} sx={{ fontSize: "17px", fontWeight: "bold" }}>
                        {sub.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ) : (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  sx={{ fontSize: "20px", fontWeight: "bold", color: "#CADCFC", textTransform: "none" }}
                >
                  {item.label}
                </Button>
              )
            )}

            <LanguageSelector />
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          {[
            { label: currentTranslations.home, path: "/home" },
            { label: currentTranslations.about, path: "/about" },
            { label: currentTranslations.services, path: null, submenu: [
                { label: currentTranslations.transport, path: "/transport" },
                { label: currentTranslations.spedition, path: "/spedition" },
                { label: currentTranslations.activities, path: "/careers" },
              ]
            },
            { label: currentTranslations.contact, path: "/contact" },
          ].map((item) =>
            item.submenu ? (
              <React.Fragment key={item.label}>
                <ListItem
                  component="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <ListItemText primary={item.label} />
                  {mobileServicesOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.submenu.map((sub) => (
                      <ListItem
                        key={sub.label}
                        component="button"
                        sx={{ pl: 4 }}
                        onClick={() => handleNavClick(sub.path)}
                      >
                        <ListItemText primary={sub.label} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ) : (
              <ListItem
                key={item.label}
                component="button"
                onClick={() => handleNavClick(item.path)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            )
          )}

          {/* LANGUAGE SELECTOR */}
          <ListItem>
            <LanguageSelector />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
