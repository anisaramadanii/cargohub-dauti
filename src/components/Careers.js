import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography, Button, CircularProgress, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../images/logo.jpg";
import director from "../images/director.jpg";
import director2 from "../images/director2.jpg";
import { useLanguage } from "../contexts/LanguageContext";

export default function Careers() {
  const { currentTranslations } = useLanguage();
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
              description = currentTranslations.job1Desc;
              break;
            case 2:
              description = currentTranslations.job2Desc;
              break;
            case 3:
              description = currentTranslations.job3Desc;
              break;
            case 4:
              description = currentTranslations.job4Desc;
              break;
            case 5:
              description = currentTranslations.job5Desc;
              break;
            case 6:
              description = currentTranslations.job6Desc;
              break;
            default:
              description = currentTranslations.noDescription;
          }
          return {
            ...job,
            title: `${currentTranslations.position} ${job.id}`,
            body: description,
          };
        });
        setJobs(translatedJobs);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, [currentTranslations]);

  useEffect(() => {
    if (jobs.length === 0 && !showBanner) setShowBanner(true);
  }, [jobs, showBanner]);

  const handleApplyNow = () => navigate("/your-information");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <hr
        style={{ marginBottom: "100px", marginTop: "-65px", width: "100%" }}
      />

      {/* Titulli kryesor */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", paddingBottom: "50px" }}
      >
        {currentTranslations.currentOpenings}
      </Typography>

      {/* Kartat e punës */}
      {loading ? (
        <CircularProgress />
      ) : jobs.length > 0 ? (
        <Grid container spacing={4} justifyContent="center">
          {jobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Box
                  sx={{
                    padding: "20px",
                    border: "1px solid blue",
                    borderRadius: "8px",
                    height: "270px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt="Job Image"
                    sx={{
                      width: "100px",
                      height: "100px",
                      marginBottom: "10px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#00246B" }}
                  >
                    {job.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      marginBottom: "1rem",
                      textAlign: "center",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 6,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {job.body}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ marginTop: "auto", backgroundColor: "#B22222" }}
                    onClick={handleApplyNow}
                  >
                    {currentTranslations.applyNow}
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>{currentTranslations.noOpenings}</Typography>
      )}

      {/* Kartat e drejtorëve */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ marginTop: "50px" }}
      >
        {[
          { img: director, name: "Irfan Ramadani", phone: "+389 70-245-233" },
          { img: director2, name: "Daim Ramadani", phone: "+389 70-226-780" },
        ].map((d, idx) => (
          <Grid item xs={12} sm={6} md={6} key={idx}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                backgroundColor: "rgb(37, 51, 69)",
                color: "white",
                borderRadius: "10px",
                padding: "30px",
                height: "100%",
              }}
            >
              <Box
                component="img"
                src={d.img}
                alt={d.name}
                sx={{
                  borderRadius: "10px",
                  width: "170px",
                  height: "170px",
                  marginBottom: { xs: "10px", md: "0" },
                }}
              />
              <Box
                sx={{
                  flex: 2,
                  paddingLeft: { md: "20px" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", fontSize: "19px" }}
                >
                  {d.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginTop: "5px" }}
                >
                  {currentTranslations.lookingForOpportunities}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "5px" }}
                >
                  {currentTranslations.contactForJobs}{" "}
                  <strong style={{ color: "rgba(93, 158, 233, 0.86)" }}>
                    {d.phone}
                  </strong>{" "}
                  {currentTranslations.forMoreJobs}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
