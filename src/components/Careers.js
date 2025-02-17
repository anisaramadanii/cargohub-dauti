// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Grid, Typography, Button, CircularProgress, Box } from "@mui/material";
// import { motion } from "framer-motion";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../images/logo.jpg";
// import director from "../images/director.jpg";

// export default function Careers() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showBanner, setShowBanner] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         const translatedJobs = response.data.slice(0, 6).map((job) => {
//           let description;
//           switch (job.id) {
//             case 1:
//               description =
//                 "Logistics Coordinator: Manage daily shipment operations, route planning, and ensure cost optimization.";
//               break;
//             case 2:
//               description =
//                 "Freight Forwarding Specialist: Coordinate international movement of goods and ensure customs compliance.";
//               break;
//             case 3:
//               description =
//                 "Fleet Manager: Oversee vehicle fleet maintenance and ensure operational efficiency.";
//               break;
//             case 4:
//               description =
//                 "Customer Service Representative - Logistics: Support clients during the shipping process and resolve issues.";
//               break;
//             case 5:
//               description =
//                 "Warehouse Supervisor: Manage daily warehouse operations, inventory, and team coordination.";
//               break;
//             case 6:
//               description =
//                 "Route Optimization Analyst: Analyze delivery routes to improve cost and time efficiency.";
//               break;
//             default:
//               description = "No description available.";
//           }

//           return {
//             ...job,
//             title: `Position ${job.id}`,
//             body: description,
//           };
//         });
//         setJobs(translatedJobs);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   useEffect(() => {
//     if (jobs.length === 0 && !showBanner) {
//       setShowBanner(true);
//     }
//   }, [jobs, showBanner]);

//   const handleApplyNow = () => {
//     navigate("/contact");
//   };

//   return (
//     <div
//       className="careers-container"
//       style={{ padding: "40px", marginTop: "50px", paddingBottom: "50px" }}
//     >
//       <hr
//         style={{ marginBottom: "100px", color: "white", marginTop: "-75px" }}
//       />
//       <Typography
//         variant="h4"
//         gutterBottom
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           marginBottom: "80px",
//           fontWeight: "bold",
//            color: " rgba(29, 39, 51, 0.86)"
//         }}
//       >
//         Available Job Positions
//       </Typography>

//       {loading ? (
//         <CircularProgress />
//       ) : jobs.length > 0 ? (
//         <Grid container spacing={4}>
//           {jobs.map((job) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               key={job.id}
//               sx={{ height: "350px" }}
//             >
//               <motion.div whileHover={{ scale: 1.05 }}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                     padding: "1rem",
//                     border: "1px solid blue",
//                     borderRadius: "8px",
//                     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//                     transition: "all 0.3s ease",
//                     height: "100%",
                    
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={logo}
//                     alt="Job Image"
//                     sx={{
//                       borderRadius: "8px",
//                       border: "px solid black",
//                       width: "100px",
//                       height: "100px",
//                       marginRight: "1rem",
//                     }}
//                   />
//                   <Box>
//                     <Typography
//                       variant="h6"
//                       color="primary"
//                       sx={{ fontWeight: "bold" }}
//                     >
//                       {job.title}
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       style={{ marginBottom: "1rem" }}
//                     >
//                       {job.body}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       <strong>Bonus:</strong> Extra pay for working overtime!
//                     </Typography>
//                     <Button
//                       variant="contained"
//                       color="secondary"
//                       style={{ marginTop: "1rem" }}
//                       onClick={handleApplyNow}
//                     >
//                       Apply Now
//                     </Button>
//                   </Box>
//                 </Box>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       ) : (
//         <Typography variant="body1">
//           No job positions available currently.
//         </Typography>
//       )}

//       {showBanner &&
//         (location.pathname === "/" || location.pathname === "/careers") && (
//           <Box
//             sx={{
//               display: "flex", // Përdorim Flexbox për të pozicionuar elementët
//               alignItems: "center", // Në mënyrë që të gjitha elementet të jenë të qëndruar vertikalisht
//               backgroundColor: " rgb(37, 54, 73)",
//               color: "white",
//               textAlign: "left", // Teksti do jetë i justifikuar majtas

//               marginTop: "20px",
//               marginLeft: "30px",
//               marginRight: "30px",
//               borderRadius: "10px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               animation: "fadeIn 0.5s ease-in-out",
//             }}
//           >
//             {/* Foto në të majtë */}
//             <Box sx={{ flex: 1, marginLeft: "20px" }}>
//               <img
//                 src={director}
//                 alt="Job banner"
//                 style={{
//                   borderRadius: "10px",
//                   width: "170px",
//                   height: "170px",
//                   marginTop: "5px",
//                   paddingLeft: "60px",
//                   paddingBottom: "-15px",
//                 }}
//               />
//             </Box>

//             {/* Teksti në të djathtë */}
//             <Box sx={{ flex: "35%", paddingRight: "18%" }}>
//               <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                 Looking for new career opportunities?
//               </Typography>
//               <Typography
//                 variant="h6"
//                 sx={{ marginTop: "5px", fontWeight: "bold" }}
//               >
//                 Contact us at{" "}
//                 <strong
//                   style={{
//                     color: " rgba(93, 158, 233, 0.86)",
//                     textDecoration: "underline",
//                     textDecorationColor: "white",
//                     textDecorationThickness: "2px",
//                   }}
//                 >
//                   +389 70-245-233
//                 </strong>{" "}
//                 for more job positions.
//               </Typography>
//             </Box>
//           </Box>
//         )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography, Button, CircularProgress, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../images/logo.jpg";
import director from "../images/director.jpg";

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
    navigate("/contact");
  };

  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "50px" },
        marginTop: "50px",
        paddingBottom: "50px",
      }}
    >
        <hr
        style={{ marginBottom: "100px", color: "white", marginTop: "-75px" }}
      />
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          marginBottom: "50px",
          fontWeight: "bold",
          color: "rgba(29, 39, 51, 0.86)",
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
                  <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
                    {job.title}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                    {job.body}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
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
              alignItems: "center",
              backgroundColor: "rgb(37, 54, 73)",
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
            {/* Foto në të majtë për desktop dhe sipër për mobile */}
            <Box sx={{ mb: { xs: "10px", md: "0" } }}>
              <img
                src={director}
                alt="Job banner"
                style={{
                  borderRadius: "10px",
                  width: "150px",
                  height: "150px",
                }}
              />
            </Box>

            {/* Teksti në të djathtë për desktop dhe poshtë për mobile */}
            <Box
              sx={{
                flex: 1,
                paddingLeft: { md: "30px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Looking for new career opportunities?
              </Typography>
              <Typography variant="body1" sx={{ marginTop: "5px", fontWeight: "bold" }}>
                Contact us at{" "}
                <strong
                  style={{
                    color: "rgba(93, 158, 233, 0.86)",
                    textDecoration: "underline",
                    textDecorationColor: "white",
                    textDecorationThickness: "2px",
                  }}
                >
                  +389 70-245-233
                </strong>{" "}
                for more job positions.
              </Typography>
            </Box>
          </Box>
        )}
    </Box>
  );
}
