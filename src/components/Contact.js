import { Box, Typography, Grid, Paper, IconButton } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { useLanguage } from "../contexts/LanguageContext";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import logo from "../images/logo-dauti3.jpg";
import ISO from "../images/logo-iso-standard.jpg";
import AEO from "../images/AEO.jpg";

export default function Contact() {
  const { currentTranslations } = useLanguage();
  return (
    <Box
      id="contact-section"
      sx={{
        padding: { xs: "3rem", sm: "7rem" },
        backgroundColor: "#2C3E50",
      }}
    >
      <Typography
        variant="h4"
        style={{ paddingTop: "20px", marginBottom: "7 0px" }}
        sx={{
          textAlign: "center",
          mb: 5,
          fontWeight: "bold",
          color: "white",
          marginBottom: { xs: "50px", sm: "90px" },
        }}
      >
        {currentTranslations.contactInfo}
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={5}>
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
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "18px", sm: "23px" },
                }}
              >
                {`${currentTranslations.address} 1`}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "16px", sm: "20px" }, mb: 1 }}
            >
              Блаце стоково царинење (1075), патнички (1071)
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "16px", sm: "20px" } }}
            >
              Bllace goods customs (1075), for transportation (1071)
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={5}>
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
                fontSize: { xs: "16px", sm: "20px" },
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
                fontSize: { xs: "16px", sm: "20px" },
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
              sx={{
                marginLeft: "20px",
                marginBottom: "20px",
                fontSize: { xs: "16px", sm: "20px" },
              }}
            >
              dauti.blace@yahoo.com
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      {/* Adress 2 */}
      <Box
        id="contact-section"
        sx={{
          paddingTop: { xs: "2rem", sm: "3rem" },
          backgroundColor: "#2C3E50",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={5}>
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "18px", sm: "23px" },
                  }}
                >
                  {`${currentTranslations.address} 2`}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", sm: "19px" },
                  mb: 1,
                }}
              >
                Деве Баир стоково царинење (2050), патнички (2051)
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "15px", sm: "18px" } }}
              >
                Deve Bair goods customs (2050), for transportation (2051)
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
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
                  fontSize: { xs: "16px", sm: "20px" },
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
                  fontSize: { xs: "16px", sm: "20px" },
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
                sx={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  fontSize: { xs: "16px", sm: "20px" },
                }}
              >
                dauti.devebair@yahoo.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Adress 3 */}
      <Box
        id="contact-section"
        sx={{
          paddingTop: { xs: "2rem", sm: "3rem" },
          backgroundColor: "#2C3E50",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={5}>
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "18px", sm: "23px" },
                  }}
                >
                  {`${currentTranslations.address} 3`}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", sm: "19px" },
                  mb: 1,
                }}
              >
                Скопје стоково царинење (1010), патнички (1010)
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "15px", sm: "18px" } }}
              >
                Skopje goods customs (1010), for transportation (1010)
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
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
                  fontSize: { xs: "16px", sm: "20px" },
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
                  fontSize: { xs: "16px", sm: "20px" },
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
                sx={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  fontSize: { xs: "16px", sm: "20px" },
                }}
              >
                jetonhoxha@dauti-transhped.com.mk
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Adress 4 */}
      <Box
        id="contact-section"
        sx={{
          paddingTop: { xs: "2rem", sm: "3rem" },
          backgroundColor: "#2C3E50",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={5}>
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "18px", sm: "23px" },
                  }}
                >
                  {`${currentTranslations.address} 4`}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", sm: "19px" },
                  mb: 1,
                }}
              >
                Кафасан стоково царинење (5070), патнички (5071)
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "15px", sm: "18px" } }}
              >
                Kafasan goods customs (5070), for transportation (5071)
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
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
                  fontSize: { xs: "16px", sm: "20px" },
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
                  fontSize: { xs: "16px", sm: "20px" },
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
                sx={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  fontSize: { xs: "16px", sm: "20px" },
                }}
              >
                dautikafasan@yahoo.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Adress 5 */}
      <Box
        id="contact-section"
        sx={{
          paddingTop: { xs: "2rem", sm: "3rem" },
          backgroundColor: "#2C3E50",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={5}>
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "18px", sm: "23px" },
                  }}
                >
                  {`${currentTranslations.address} 5`}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", sm: "19px" },
                  mb: 1,
                }}
              >
                Струга стоково царинење (5060)
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "15px", sm: "18px" } }}
              >
                Struga goods customs (2060)
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
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
                  fontSize: { xs: "16px", sm: "20px" },
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
                  fontSize: { xs: "16px", sm: "20px" },
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
                sx={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  fontSize: { xs: "16px", sm: "20px" },
                }}
              >
                dautikafasan@yahoo.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Adress 6 */}
      <Box
        id="contact-section"
        sx={{
          paddingTop: { xs: "2rem", sm: "3rem" },
          backgroundColor: "#2C3E50",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={5}>
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "18px", sm: "23px" },
                  }}
                >
                  {`${currentTranslations.address} 6`}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", sm: "19px" },
                  mb: 1,
                }}
              >
                Богородица стоково царинење (4010), патнички (4015)
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "15px", sm: "18px" } }}
              >
                Bogorodica goods customs (4010), for transportation (4015)
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
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
                  fontSize: { xs: "16px", sm: "20px" },
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
                  fontSize: { xs: "16px", sm: "20px" },
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
                sx={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  fontSize: { xs: "16px", sm: "20px" },
                }}
              >
                dautibogorodica@yahoo.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Adress 7 */}
      <Box
        id="contact-section"
        sx={{
          paddingTop: { xs: "2rem", sm: "3rem" },
          backgroundColor: "#2C3E50",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={5}>
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "18px", sm: "23px" },
                  }}
                >
                  {`${currentTranslations.address} 7`}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", sm: "19px" },
                  mb: 1,
                }}
              >
                Гевгелија стоково царинење (4020)
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "15px", sm: "18px" } }}
              >
                Gevgelija goods customs (4020)
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
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
                  fontSize: { xs: "16px", sm: "20px" },
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
                  fontSize: { xs: "16px", sm: "20px" },
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
                sx={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  fontSize: { xs: "16px", sm: "20px" },
                }}
              >
                dautibogorodica@yahoo.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Adress CV*/}
      <Box
        id="contact-section"
        sx={{
          paddingTop: { xs: "2rem", sm: "3rem" },
          backgroundColor: "#2C3E50",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={5}>
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  gap: 2,
                  flexWrap: "wrap",
                  ml: 6,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "18px", sm: "23px" },
                  }}
                >
                  Правна служба и човечки ресурси
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "18px", sm: "23px" },
                  }}
                >
                  Legal service and Human resources
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "18px", sm: "23px" },
                  }}
                >
                  Shërbimi ligjor dhe burimet njerëzore
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
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
                  marginLeft: "29px",
                  marginTop: "-18px",
                  fontSize: { xs: "16px", sm: "20px" },
                }}
              >
                +389 70 404 948
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
                sx={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  fontSize: { xs: "16px", sm: "20px" },
                }}
              >
                hr@dauti-transhped.com.mk
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 6 }}>
        <IconButton
          color="primary"
          onClick={() =>
            window.open(
              "https://www.facebook.com/search/top/?q=dauti%20transportshped",
              "_blank"
            )
          }
        >
          <Facebook sx={{ fontSize: 50 }} />
        </IconButton>

        <IconButton
          color="secondary"
          onClick={() =>
            window.open(
              " https://www.instagram.com/dauti.transportshped/?hl=en ",
              "_blank"
            )
          }
        >
          <Instagram sx={{ fontSize: 50 }} />
        </IconButton>
        <IconButton
          color="info"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A101225650&keywords=dauti%20transportshped&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=947bb6bd-3010-48a9-beff-cac4e176c7b4&sid=0PN&spellCorrectionEnabled=true",
              "_blank"
            )
          }
        >
          <LinkedIn sx={{ fontSize: 50 }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 1, md: 2 },
          marginTop: { xs: 2, md: 4 },
          marginBottom: { xs: 2, md: -10 },
        }}
      >
        <Box
          component="img"
          src={AEO}
          alt="Photo 2"
          sx={{
            width: { xs: "35%", md: 100 },
            height: { xs: "auto", md: 100 },
            cursor: "pointer",
          }}
          onClick={() => window.open("https://example.com/photo2", "_blank")}
        />
        <Box
          component="img"
          src={ISO}
          alt="Photo 1"
          sx={{
            width: { xs: "35%", md: 100 },
            height: { xs: "auto", md: 100 },
            cursor: "pointer",
          }}
          onClick={() => window.open("https://example.com/photo1", "_blank")}
        />
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: { xs: "120%", md: 500 },
            height: { xs: "auto", md: 100 },
            cursor: "pointer",
          }}
          onClick={() => window.open("https://example.com/photo2", "_blank")}
        />
      </Box>
    </Box>
  );
}
