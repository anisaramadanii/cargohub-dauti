import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography, Button, CircularProgress, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../images/logo.jpg";
import director from "../images/director.jpg";
import director2 from "../images/director2.jpg";



  
export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const translatedJobs = response.data.slice(0, 6).map((job) => {
          let description;
          switch (job.id) {
            case 1:
              description =
                "Logistics Coordinator: Manage daily shipment operations, route planning, and ensure cost optimization.";
              break;
            case 2:
              description =
                "Freight Forwarding Specialist: Coordinate international movement of goods and ensure customs compliance.";
              break;
            case 3:
              description =
                "Fleet Manager: Oversee vehicle fleet maintenance and ensure operational efficiency.";
              break;
            case 4:
              description =
                "Customer Service Representative - Logistics: Support clients during the shipping process and resolve issues.";
              break;
            case 5:
              description =
                "Warehouse Supervisor: Manage daily warehouse operations, inventory, and team coordination.";
              break;
            case 6:
              description =
                "Route Optimization Analyst: Analyze delivery routes to improve cost and time efficiency.";
              break;
            default:
              description = "No description available.";
          }

          return {
            ...job,
            title: `Position ${job.id}`,
            body: description,
          };
        });
        setJobs(translatedJobs);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (jobs.length === 0 && !showBanner) {
      setShowBanner(true);
    }
  }, [jobs, showBanner]);

  const handleApplyNow = () => {
    navigate("/your-information");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        borderRadius: "8px",
        transition: "all 0.3s ease",
        textAlign: "center",
        height: "100%",
        minHeight: "300px",
      }}
    >
      <hr
        style={{ marginBottom: "100px", marginTop: "-65px", width: "100%" }}
      />
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          paddingTop: "15px",
          fontWeight: "bold",
          paddingBottom: "50px",
          fontSize: { xs: "24px", md: "32px" },
        }}
      >
        Available Job Positions
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : jobs.length > 0 ? (
        <Grid container spacing={4} justifyContent="center">
          {jobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    border: "1px solid blue",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt="Job Image"
                    sx={{
                      borderRadius: "8px",
                      width: "100px",
                      height: "100px",
                      marginBottom: "10px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    style={{ color: "#00246B" }}
                    sx={{ fontWeight: "bold" }}
                  >
                    {job.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      marginBottom: "1rem",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 4,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {job.body}
                  </Typography>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#B22222" }}
                    sx={{ marginTop: "1rem" }}
                    onClick={handleApplyNow}
                  >
                    Apply Now
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          No job positions available currently.
        </Typography>
      )}

      {showBanner &&
        (location.pathname === "/" || location.pathname === "/careers") && (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgb(37, 51, 69)",
              color: "white",
              textAlign: { xs: "center", md: "left" },
              marginTop: "50px",
              borderRadius: "10px",
              padding: "30px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            <Box sx={{ mb: { xs: "10px", md: "0" } }}>
              <img
                src={director}
                alt="Job banner"
                style={{
                  borderRadius: "10px",
                  width: "170px",
                  height: "170px",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "19px",
                }}
              >
                Irfan Ramadani
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 2,
                paddingLeft: { md: "20px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Looking for new career opportunities?
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: "5px", fontWeight: "bold" }}
              >
                Contact us at{" "}
                <strong
                  style={{
                    color: "rgba(93, 158, 233, 0.86)",
                    textDecoration: "underline",
                    textDecorationColor: "white",
                    textDecorationThickness: "2px",
                    fontSize: "18px",
                  }}
                >
                  +389 70-245-233
                </strong>{" "}
                for more job positions.
              </Typography>
            </Box>
          </Box>
        )}

      {showBanner &&
        (location.pathname === "/" || location.pathname === "/careers") && (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgb(37, 51, 69)",
              color: "white",
              textAlign: { xs: "center", md: "left" },
              marginTop: "50px",
              borderRadius: "10px",
              padding: "30px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            <Box sx={{ mb: { xs: "10px", md: "0" } }}>
              <img
                src={director2}
                alt="Job banner"
                style={{
                  borderRadius: "10px",
                  width: "170px",
                  height: "170px",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "19px",
                }}
              >
                Daim Ramadani
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 2,
                paddingLeft: { md: "20px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Looking for new career opportunities?
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: "5px", fontWeight: "bold" }}
              >
                Contact us at{" "}
                <strong
                  style={{
                    color: "rgba(93, 158, 233, 0.86)",
                    textDecoration: "underline",
                    textDecorationColor: "white",
                    textDecorationThickness: "2px",
                    fontSize: "18px",
                  }}
                >
                  +389 70-226-780
                </strong>{" "}
                for more job positions.
              </Typography>
            </Box>
          </Box>
        )}
    </Box>
  );
}
