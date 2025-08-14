import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useLanguage } from "../contexts/LanguageContext";
import logo from "../images/logo.jpg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { handleLanguageChange, currentTranslations } = useLanguage();

  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setDrawerOpen(false);
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
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        MK
      </Button>
      <Box
        sx={{
          width: "1px",
          height: "20px",
          backgroundColor: "#31589cff",
        }}
      />
      <Button
        onClick={() => handleLanguageChange("AL")}
        sx={{
          color: { xs: "#1860b1fb", sm: "#CADCFC" },
          minWidth: "auto",
          padding: "4px 8px",
          fontSize: "16px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        AL
      </Button>
      <Box
        sx={{
          width: "1px",
          height: "20px",
          backgroundColor: "#31589cff",
        }}
      />
      <Button
        onClick={() => handleLanguageChange("EN")}
        sx={{
          color: { xs: "#1860b1fb", sm: "#CADCFC" },
          minWidth: "auto",
          padding: "4px 8px",
          fontSize: "16px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
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
      sx={{
        top: 0,
        width: "100%",
        zIndex: 1300,
      }}
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
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "20px",
            flexGrow: 1,
          }}
        >
          <Link
            to="/home"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Button
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: { xs: "#1860b1fb", sm: "#CADCFC" },
                textTransform: "none",
              }}
            >
              {currentTranslations.home}
            </Button>
          </Link>

          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: { xs: "#1860b1fb", sm: "#CADCFC" },
                textTransform: "none",
              }}
            >
              {currentTranslations.about}
            </Button>
          </Link>
          <Link
            to="/careers"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: { xs: "#1860b1fb", sm: "#CADCFC" },
                textTransform: "none",
              }}
            >
              {currentTranslations.activities}
            </Button>
          </Link>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: { xs: "#1860b1fb", sm: "#CADCFC" },
                textTransform: "none",
              }}
            >
              {currentTranslations.contact}
            </Button>
          </Link>

          <LanguageSelector />
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClick={() => handleNavClick("/home")}
      >
        <Box
          sx={{
            width: "200px",
            paddingTop: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: "15px",
          }}
          role="presentation"
        >
          <List>
            <ListItem sx={{ padding: "10px 0" }}>
              <Link
                to="/home"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  color="inherit"
                  sx={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    width: "100%",
                  }}
                  onClick={toggleDrawer}
                >
                  {currentTranslations.home}
                </Button>
              </Link>
            </ListItem>
            <ListItem sx={{ padding: "10px 0" }}>
              <Link
                to="/about"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  color="inherit"
                  sx={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    width: "100%",
                  }}
                  onClick={toggleDrawer}
                >
                  {currentTranslations.about}
                </Button>
              </Link>
            </ListItem>
            <ListItem sx={{ padding: "10px 0" }}>
              <Link
                to="/careers"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  color="inherit"
                  sx={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    width: "100%",
                  }}
                  onClick={toggleDrawer}
                >
                  {currentTranslations.activities}
                </Button>
              </Link>
            </ListItem>
            <ListItem sx={{ padding: "10px 0" }}>
              <Link
                to="/contact"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  color="inherit"
                  sx={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    width: "100%",
                  }}
                  onClick={toggleDrawer}
                >
                  {currentTranslations.contact}
                </Button>
              </Link>
            </ListItem>

            <ListItem sx={{ padding: "5px 0" }}>
              <Box sx={{ marginTop: "1px" }}>
                <LanguageSelector />
              </Box>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
