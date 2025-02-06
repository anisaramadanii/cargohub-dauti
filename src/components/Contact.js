// import { Box, Typography, Grid, Paper } from "@mui/material";
// import { Phone, Email, LocationOn } from "@mui/icons-material";

// export default function Contact() {
//   return (
//     <Box
//       id="contact-section"
//       sx={{ padding: "7rem", backgroundColor: "#1A237E" }}
//     >
//       <Typography
//         variant="h4"
//         sx={{ textAlign: "center", mb: 5, fontWeight: "bold", color: "white", marginBottom: "90px" }}
//       >
//         Contact Information
//       </Typography>

//       <Grid container spacing={3} justifyContent="center">
//         {/* Korniza e parë për adresën */}
//         <Grid item xs={12} md={5}>
//           <Paper
//             elevation={3}
//             sx={{
//               padding: "0.2rem",
//               backgroundColor: "white",
//               color: "black",
//               height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               textAlign: "center",
//               justifyContent: "center",
//             }}
//           >
//             {/* Ikona dhe Adresa në një rresht */}
//             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <LocationOn sx={{ color: "#1565c0", fontSize: 40, mr: 1 }} />
//               <Typography
//                 variant="h6"
//                 sx={{ fontWeight: "bold", fontSize: "23px" }}
//               >
//                 Adress 1
//               </Typography>
//             </Box>

//             {/* Tekstet poshtë në mes */}
//             <Typography variant="body1" sx={{ fontSize: "20px", mb: 1 }}>
//               Блаце стоково царинење (1075), патнички (1071)
//             </Typography>
//             <Typography variant="body1" sx={{ fontSize: "20px" }}>
//               Bllace goods customs (1075), for transportation (1071)
//             </Typography>
//           </Paper>
//         </Grid>

//         {/* Korniza e dytë për kontaktet */}
//         <Grid item xs={12} md={5}>
//           <Paper
//             elevation={3}
//             sx={{
//               padding: "0.2rem",
//               height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "flex-start",
//               gap: "10px",
//             }}
//           >
//             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <Phone
//                 sx={{
//                   color: "#1565c0",
//                   fontSize: 35,
//                   mr: 2,
//                   marginLeft: "20px",
//                   marginTop: "10px",
//                 }}
//               />
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontWeight: "bold",
//                   marginLeft: "4px",
//                   marginTop: "10px",
//                 }}
//               >
//                 Telefon
//               </Typography>
//             </Box>
//             <Typography
//               variant="body1"
//               sx={{
//                 mb: 1,
//                 marginLeft: "20px",
//                 marginBottom: "20px",
//                 marginTop: "-15px",
//                 fontSize: "20px",
//               }}
//             >
//               +389 70 568-879
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 mb: 1,
//                 marginLeft: "20px",
//                 marginTop: "-18px",
//                 fontSize: "20px",
//               }}
//             >
//               +389 70 991-595
//             </Typography>

//             <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
//               <Email
//                 sx={{
//                   color: "#1565c0",
//                   fontSize: 35,
//                   mr: 2,
//                   marginLeft: "20px",
//                   marginTop: "-30px",
//                 }}
//               />
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontWeight: "bold",
//                   marginLeft: "4px",
//                   marginTop: "-30px",
//                 }}
//               >
//                 E-mail
//               </Typography>
//             </Box>
//             <Typography
//               variant="body1"
//               style={{
//                 marginLeft: "20px",
//                 marginBottom: "20px",
//                 fontSize: "20px",
//               }}
//             >
//               dauti.blace@yahoo.com
//             </Typography>
//           </Paper>
//         </Grid>
//       </Grid>
import { Box, Typography, Grid, Paper } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

export default function Contact() {
  return (
    <Box
      id="contact-section"
      sx={{ padding: "7rem", backgroundColor: "#1A237E" }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 5,
          fontWeight: "bold",
          color: "white",
          marginBottom: "90px",
        }}
      >
        Contact Information
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={5}>
          <Paper
            elevation={3}
            // sx={{
            //   padding: "0.2rem",
            //   backgroundColor: "white",
            //   color: "black",
            //   height: "100%",
            //   display: "flex",
            //   flexDirection: "column",
            //   alignItems: "center",
            //   textAlign: "center",
            //   justifyContent: "center",
            //   "&:hover": {
            //     boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add shadow on hover
            //     transform: "scale(1.05)", // Slight scaling effect
            //     transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
            //   },
            // }}
            sx={{
              padding: "0.2rem",
              backgroundColor: "white",
              color: "black",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              "&:hover": {
                color: "#1565c0",
                transition: "color 0.3s ease",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationOn sx={{ color: "#1565c0", fontSize: 40, mr: 1 }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "23px" }}
              >
                Adress 1
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ fontSize: "20px", mb: 1 }}>
              Блаце стоково царинење (1075), патнички (1071)
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "20px" }}>
              Bllace goods customs (1075), for transportation (1071)
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper
            elevation={3}
            sx={{
              padding: "0.2rem",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Phone
                sx={{
                  color: "#1565c0",
                  fontSize: 35,
                  mr: 2,
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginTop: "10px",
                }}
              >
                Telefon
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                marginLeft: "20px",
                marginBottom: "20px",
                marginTop: "-15px",
                fontSize: "20px",
              }}
            >
              +389 70 568-879
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                marginLeft: "20px",
                marginTop: "-18px",
                fontSize: "20px",
              }}
            >
              +389 70 991-595
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
              <Email
                sx={{
                  color: "#1565c0",
                  fontSize: 35,
                  mr: 2,
                  marginLeft: "20px",
                  marginTop: "-30px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginTop: "-30px",
                }}
              >
                E-mail
              </Typography>
            </Box>
            <Typography
              variant="body1"
              style={{
                marginLeft: "20px",
                marginBottom: "20px",
                fontSize: "20px",
              }}
            >
              dauti.blace@yahoo.com
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      {/* Adresa dyt */}
      <Box
        id="contact-section"
        sx={{ paddingTop: "3rem", backgroundColor: "#1A237E" }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Paper
              sx={{
                padding: "0.2rem",
                backgroundColor: "white",
                color: "black",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                "&:hover": {
                  color: "#1565c0",
                  transition: "color 0.3s ease",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOn sx={{ color: "#1565c0", fontSize: 40, mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: "23px" }}
                >
                  Adress 2
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ fontSize: "19px", mb: 1 }}>
                Деве Баир стоково царинење (2050), патнички (2051)
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "18px" }}>
                Deve Bair goods customs (2050), for transportation (2051)
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                padding: "0.2rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone
                  sx={{
                    color: "#1565c0",
                    fontSize: 35,
                    mr: 2,
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "4px",
                    marginTop: "10px",
                  }}
                >
                  Telefon
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  marginLeft: "20px",
                  marginBottom: "20px",
                  marginTop: "-15px",
                  fontSize: "20px",
                }}
              >
                +389 78 420-261
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  marginLeft: "20px",
                  marginTop: "-18px",
                  fontSize: "20px",
                }}
              >
                +389 71 373-756
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Email
                  sx={{
                    color: "#1565c0",
                    fontSize: 35,
                    mr: 2,
                    marginLeft: "20px",
                    marginTop: "-30px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "4px",
                    marginTop: "-30px",
                  }}
                >
                  E-mail
                </Typography>
              </Box>
              <Typography
                variant="body1"
                style={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  fontSize: "20px",
                }}
              >
                dauti.devebair@yahoo.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* Adresa 3 */}
      <Box
        id="contact-section"
        sx={{ paddingTop: "3rem", backgroundColor: "#1A237E" }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                padding: "0.2rem",
                backgroundColor: "white",
                color: "black",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                "&:hover": {
                  color: "#1565c0",
                  transition: "color 0.3s ease",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOn sx={{ color: "#1565c0", fontSize: 40, mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: "23px" }}
                >
                  Adress 3
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ fontSize: "19px", mb: 1 }}>
                Скопје стоково царинење (1010), патнички (1010)
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "18px" }}>
                Skopje goods customs (1010), for transportation (1010)
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                padding: "0.2rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone
                  sx={{
                    color: "#1565c0",
                    fontSize: 35,
                    mr: 2,
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "4px",
                    marginTop: "10px",
                  }}
                >
                  Telefon
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  marginLeft: "20px",
                  marginBottom: "20px",
                  marginTop: "-15px",
                  fontSize: "20px",
                }}
              >
                +389 70 298-861
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  marginLeft: "20px",
                  marginTop: "-18px",
                  fontSize: "20px",
                }}
              >
                +389 71 322-793
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Email
                  sx={{
                    color: "#1565c0",
                    fontSize: 35,
                    mr: 2,
                    marginLeft: "20px",
                    marginTop: "-30px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "4px",
                    marginTop: "-30px",
                  }}
                >
                  E-mail
                </Typography>
              </Box>
              <Typography
                variant="body1"
                style={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  fontSize: "20px",
                }}
              >
                jetonhoxha@dauti-transhped.com.mk
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* Adresa 4 */}
      <Box
        id="contact-section"
        sx={{ paddingTop: "3rem", backgroundColor: "#1A237E" }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                padding: "0.2rem",
                backgroundColor: "white",
                color: "black",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                "&:hover": {
                  color: "#1565c0",
                  transition: "color 0.3s ease",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOn sx={{ color: "#1565c0", fontSize: 40, mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: "23px" }}
                >
                  Adress 4
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ fontSize: "19px", mb: 1 }}>
                Кафасан стоково царинење (5070), патнички (5071)
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "18px" }}>
                Kafasan goods customs (5070), for transportation (5071)
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                padding: "0.2rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone
                  sx={{
                    color: "#1565c0",
                    fontSize: 35,
                    mr: 2,
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "4px",
                    marginTop: "10px",
                  }}
                >
                  Telefon
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  marginLeft: "20px",
                  marginBottom: "20px",
                  marginTop: "-15px",
                  fontSize: "20px",
                }}
              >
                +389 71 437-411
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  marginLeft: "20px",
                  marginTop: "-18px",
                  fontSize: "20px",
                }}
              >
                +389 72 207 819
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Email
                  sx={{
                    color: "#1565c0",
                    fontSize: 35,
                    mr: 2,
                    marginLeft: "20px",
                    marginTop: "-30px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "4px",
                    marginTop: "-30px",
                  }}
                >
                  E-mail
                </Typography>
              </Box>
              <Typography
                variant="body1"
                style={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  fontSize: "20px",
                }}
              >
                dautikafasan@yahoo.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* Adresa 5 */}
      <Box
        id="contact-section"
        sx={{ paddingTop: "3rem", backgroundColor: "#1A237E" }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                padding: "0.2rem",
                backgroundColor: "white",
                color: "black",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                "&:hover": {
                  color: "#1565c0",
                  transition: "color 0.3s ease",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOn sx={{ color: "#1565c0", fontSize: 40, mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: "23px" }}
                >
                  Adress 5
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ fontSize: "19px", mb: 1 }}>
                Струга стоково царинење (5060)
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "18px" }}>
                Struga goods customs (2060)
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                padding: "0.2rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone
                  sx={{
                    color: "#1565c0",
                    fontSize: 35,
                    mr: 2,
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "4px",
                    marginTop: "10px",
                  }}
                >
                  Telefon
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  marginLeft: "20px",
                  marginBottom: "20px",
                  marginTop: "-15px",
                  fontSize: "20px",
                }}
              >
                +389 72 207-819
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  marginLeft: "25px",
                  marginTop: "-18px",
                  fontSize: "20px",
                }}
              >
                046 789 353
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Email
                  sx={{
                    color: "#1565c0",
                    fontSize: 35,
                    mr: 2,
                    marginLeft: "20px",
                    marginTop: "-30px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "4px",
                    marginTop: "-30px",
                  }}
                >
                  E-mail
                </Typography>
              </Box>
              <Typography
                variant="body1"
                style={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  fontSize: "20px",
                }}
              >
                dautikafasan@yahoo.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* Adresa 6 */}
      <Box
        id="contact-section"
        sx={{ paddingTop: "3rem", backgroundColor: "#1A237E" }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                padding: "0.2rem",
                backgroundColor: "white",
                color: "black",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                "&:hover": {
                  color: "#1565c0",
                  transition: "color 0.3s ease",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOn sx={{ color: "#1565c0", fontSize: 40, mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: "23px" }}
                >
                  Adress 6
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ fontSize: "19px", mb: 1 }}>
                Богородица стоково царинење (4010), патнички (4015)
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "18px" }}>
                Bogorodica goods customs (4010),for transportation (4015)
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                padding: "0.2rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone
                  sx={{
                    color: "#1565c0",
                    fontSize: 35,
                    mr: 2,
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "4px",
                    marginTop: "10px",
                  }}
                >
                  Telefon
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  marginLeft: "25px",
                  marginBottom: "20px",
                  marginTop: "-15px",
                  fontSize: "20px",
                }}
              >
                +389 78 218-412
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  marginLeft: "25px",
                  marginTop: "-18px",
                  fontSize: "20px",
                }}
              >
                +389 70 306 762
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Email
                  sx={{
                    color: "#1565c0",
                    fontSize: 35,
                    mr: 2,
                    marginLeft: "20px",
                    marginTop: "-30px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "4px",
                    marginTop: "-30px",
                  }}
                >
                  E-mail
                </Typography>
              </Box>
              <Typography
                variant="body1"
                style={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  fontSize: "20px",
                }}
              >
                dautibogorodica@yahoo.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* Adresa 7 */}
      <Box
        id="contact-section"
        sx={{ paddingTop: "3rem", backgroundColor: "#1A237E" }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                padding: "0.2rem",
                backgroundColor: "white",
                color: "black",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                "&:hover": {
                  color: "#1565c0",
                  transition: "color 0.3s ease",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOn sx={{ color: "#1565c0", fontSize: 40, mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: "23px" }}
                >
                  Adress 7
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ fontSize: "19px", mb: 1 }}>
                Гевгелија стоково царинење (4020)
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "18px" }}>
                Gevgelija goods customs (4020)
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                padding: "0.2rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone
                  sx={{
                    color: "#1565c0",
                    fontSize: 35,
                    mr: 2,
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "4px",
                    marginTop: "10px",
                  }}
                >
                  Telefon
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  marginLeft: "25px",
                  marginBottom: "20px",
                  marginTop: "-15px",
                  fontSize: "20px",
                }}
              >
                +389 70 306 762
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  marginLeft: "29px",
                  marginTop: "-18px",
                  fontSize: "20px",
                }}
              >
                034 230 225
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Email
                  sx={{
                    color: "#1565c0",
                    fontSize: 35,
                    mr: 2,
                    marginLeft: "20px",
                    marginTop: "-30px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "4px",
                    marginTop: "-30px",
                  }}
                >
                  E-mail
                </Typography>
              </Box>
              <Typography
                variant="body1"
                style={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  fontSize: "20px",
                }}
              >
                dautibogorodica@yahoo.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
