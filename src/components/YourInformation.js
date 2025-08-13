import React, { useState, useEffect } from "react";
import { Typography, Button, TextField, Container, Box } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../contexts/LanguageContext";

const YourInformation = () => {
  const { currentTranslations } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);


  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_3i0ejdf", 
        "template_lrpzmfh", 
        {
          from_name: `${form.name} ${form.surname}`,
          from_email: form.email,
          message: form.message,
          to_email: "anisaramadani071@gmail.com", 
        },
        "Lxb1sATZfpHOVAtu1" 
      )
      .then(() => {
        setIsSent(true);
        setForm({ name: "", surname: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message. Try again later.");
      });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundColor: "transparent",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: "20px", color: "#00246B" }}
          >
            {currentTranslations.yourInformation || "Your Information"}
          </Typography>
          {isSent ? (
            <Typography variant="h6" sx={{ color: "green", marginBottom: "20px" }}>
              {currentTranslations.messageSent}
            </Typography>
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label={currentTranslations.name}
                variant="outlined"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                sx={{
                  marginBottom: "15px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "transparent",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0, 0, 0, 0.23)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976D2",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976D2",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Surname"
                variant="outlined"
                name="surname"
                value={form.surname}
                onChange={handleChange}
                required
                sx={{
                  marginBottom: "15px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "transparent",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0, 0, 0, 0.23)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976D2",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976D2",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                sx={{
                  marginBottom: "15px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "transparent",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0, 0, 0, 0.23)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976D2",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976D2",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                name="message"
                multiline
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                sx={{
                  marginBottom: "20px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "transparent",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0, 0, 0, 0.23)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976D2",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976D2",
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{
                  padding: "10px",
                  fontSize: "16px",
                  backgroundColor: "#1976D2",
                  "&:hover": { backgroundColor: "#1565C0" },
                }}
              >
                Send Message
              </Button>
            </form>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default YourInformation;
