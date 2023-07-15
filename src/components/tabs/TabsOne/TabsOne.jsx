import { Box, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React from "react";
import "./TabsOne.css";
const airLogo = "https://i.ibb.co/QDKcfdp/airlines.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const TabsOne = ({ clickNormalMode, clickFlightMode }) => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          flexDirection: "column-reverse",
          display: "flex",
          height: "100%",
        }}
      >
        <Grid
          container
          spacing={0}
          columns={12}
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* airlines details */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{
              height: "100%",
            }}
          >
            <Item
              sx={{
                boxShadow: "none",
                height: "100%",
                textAlign: "left",
                color: "#a1a1a1",
              }}
            >
              <Box>
                <img src={airLogo} alt="logo" />
                <Typography variant="h6">Biman Bangladesh Airlines</Typography>
                <Typography variant="span" color="#31cf94">
                  BG 617
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1">Operated by BG</Typography>
                  <Typography variant="body1">Economy G</Typography>
                </Box>
              </Box>
            </Item>
          </Grid>

          {/* airlines balance */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{
              height: "100%",
            }}
          >
            <Item
              sx={{
                boxShadow: "none",
                height: "100%",
                textAlign: "left",
                color: "#a1a1a1",
              }}
            >
              {clickNormalMode ? (
                <Box className="hidden-details-article">
                  <small>Depart</small>
                  <Typography variant="h5">DAC</Typography>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "19px", padding: "7px 0" }}
                    >
                      Dhaka BD | <span style={{ color: "#333" }}>15:00</span>
                    </Typography>
                    <Typography variant="body1">
                      Terminal Hazrat Sahajalal international Airport
                    </Typography>
                    <Typography variant="span" sx={{ fontWeight: "200" }}>
                      Sun, 3rd june 2022
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box className="hidden-details-article">
                  <small>Depart</small>
                  <Typography variant="h5">JFK</Typography>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "19px", padding: "7px 0" }}
                    >
                      Dhaka BD | <span style={{ color: "#333" }}>15:00</span>
                    </Typography>
                    <Typography variant="body1">
                      Terminal Hazrat Sahajalal international Airport
                    </Typography>
                    <Typography variant="span" sx={{ fontWeight: "200" }}>
                      Sun, 3rd june 2022
                    </Typography>
                  </Box>
                </Box>
              )}
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{
              height: "100%",
            }}
          >
            <Item
              sx={{
                boxShadow: "none",
                height: "100%",
                textAlign: "left",
                display: { xs: "none", md: "none", lg: "block" },
              }}
            >
              <Box className="swap-right">
                <Typography variant="span">55 Minutes</Typography>
                <div className="swap-icons"></div>
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{
              height: "100%",
            }}
          >
            <Item sx={{ boxShadow: "none", height: "100%", textAlign: "left" }}>
              <Box className="hidden-details-article">
                <small>Depart</small>
                <Typography variant="h5">DXB</Typography>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "19px", padding: "7px 0" }}
                  >
                    Dhaka BD | <span style={{ color: "#333" }}>15:00</span>
                  </Typography>
                  <Typography variant="body1">
                    Terminal Hazrat Sahajalal international Airport
                  </Typography>
                  <Typography variant="span" sx={{ fontWeight: "200" }}>
                    Sun, 3rd june 2022
                  </Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>

      {/* lines two */}
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          flexDirection: "column-reverse",
          display: "flex",
          height: "100%",
          mt: 4,
        }}
      >
        <Grid
          container
          spacing={0}
          columns={12}
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* airlines details */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{
              height: "100%",
            }}
          >
            <Item
              sx={{
                boxShadow: "none",
                height: "100%",
                textAlign: "left",
                color: "#a1a1a1",
              }}
            >
              <Box>
                <img src={airLogo} alt="logo" />
                <Typography variant="h6">Biman Bangladesh Airlines</Typography>
                <Typography variant="span" color="#31cf94">
                  BG 617
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1">Operated by BG</Typography>
                  <Typography variant="body1">Economy G</Typography>
                </Box>
              </Box>
            </Item>
          </Grid>

          {/* airlines balance */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{
              height: "100%",
            }}
          >
            <Item
              sx={{
                boxShadow: "none",
                height: "100%",
                textAlign: "left",
                color: "#a1a1a1",
              }}
            >
              <Box className="hidden-details-article">
                <small>Depart</small>
                <Typography variant="h5">DAC</Typography>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "19px", padding: "7px 0" }}
                  >
                    Dhaka BD | <span style={{ color: "#333" }}>15:00</span>
                  </Typography>
                  <Typography variant="body1">
                    Terminal Hazrat Sahajalal international Airport
                  </Typography>
                  <Typography variant="span" sx={{ fontWeight: "200" }}>
                    Sun, 3rd june 2022
                  </Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{
              height: "100%",
            }}
          >
            <Item
              sx={{
                boxShadow: "none",
                height: "100%",
                textAlign: "left",
                display: { xs: "none", md: "none", lg: "block" },
              }}
            >
              <Box className="swap-right">
                <Typography variant="span">55 Minutes</Typography>
                <div className="swap-icons"></div>
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{
              height: "100%",
            }}
          >
            <Item sx={{ boxShadow: "none", height: "100%", textAlign: "left" }}>
              {clickFlightMode ? (
                <Box className="hidden-details-article">
                  <small>Depart</small>
                  <Typography variant="h5">DAC</Typography>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "19px", padding: "7px 0" }}
                    >
                      Dhaka BD | <span style={{ color: "#333" }}>15:00</span>
                    </Typography>
                    <Typography variant="body1">
                      Terminal Hazrat Sahajalal international Airport
                    </Typography>
                    <Typography variant="span" sx={{ fontWeight: "200" }}>
                      Sun, 3rd june 2022
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box className="hidden-details-article">
                  <small>Depart</small>
                  <Typography variant="h5">JFK</Typography>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "19px", padding: "7px 0" }}
                    >
                      Dhaka BD | <span style={{ color: "#333" }}>15:00</span>
                    </Typography>
                    <Typography variant="body1">
                      Terminal Hazrat Sahajalal international Airport
                    </Typography>
                    <Typography variant="span" sx={{ fontWeight: "200" }}>
                      Sun, 3rd june 2022
                    </Typography>
                  </Box>
                </Box>
              )}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TabsOne;
