import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useState } from "react";
import { IoIosAirplane } from "react-icons/io";
import { IoAirplaneOutline } from "react-icons/io5";
import TabsFour from "../tabs/TabsFour/TabsFour";
import TabsOne from "../tabs/TabsOne/TabsOne";
import TabsThree from "../tabs/TabsThree/TabsThree";
import TabsTwo from "../tabs/TabsTwo/TabsTwo";
import "./AirlinesDetails.css";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));
const airLogo = "https://i.ibb.co/QDKcfdp/airlines.png";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, textAlign: "left" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AirlinesDetails = ({ tabHidden }) => {
  const [clickFlightMode, setClickFlightMode] = useState(false);
  const [clickNormalMode, setClickNormalMode] = useState(true);

  // flight mode and normal mode icon change
  const handleFlightMode = () => {
    setClickFlightMode(!clickFlightMode);
    setClickNormalMode(!clickNormalMode);
  };

  // tabs

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Grid container spacing={0} columns={12}>
          {/* child 01 */}
          <Grid item xs={12} sm={6} md={3} lg={3} sx>
            <Item sx={{ boxShadow: "none" }}>
              <Box className="airlines-logo-area">
                <img src={airLogo} alt="airlines" className="ari-logo" />
                <Typography variant="h3">Biman Bangladesh Airlines</Typography>
                <Typography variant="span">BG 178 | W & BG 671 | E</Typography>

                {/* progress */}
                <Box
                  sx={{
                    textAlign: "center",
                    mt: 5,
                    fontSize: "13px",
                    color: "#a1a1a1",
                  }}
                >
                  <small>5H 35MIN</small>
                  <Box
                    className=""
                    sx={{
                      textAlign: "center",
                      padding: "8px 0",
                    }}
                  >
                    <Box className="progress">
                      <div>
                        <Typography variant="span"></Typography>
                        <Typography variant="span"></Typography>
                        <Typography variant="span"></Typography>
                        <Typography variant="span"></Typography>
                      </div>
                    </Box>
                  </Box>
                  <small>2 STOPS</small>
                </Box>
              </Box>
            </Item>
          </Grid>
          {/* child 02 */}
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Item sx={{ boxShadow: "none" }} className="dac-time-area">
              <Box sx={{ textAlign: "left" }}>
                {clickNormalMode ? (
                  <>
                    <Typography variant="h5">DAC</Typography>
                    <Typography variant="body1">
                      Hazrat Shajalal intl Airport
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography variant="h4">JFK</Typography>
                    <Typography variant="body1">
                      JF kennedy intl Airport
                    </Typography>
                  </>
                )}
                <Typography variant="h6">19:05</Typography>
                <Typography>SUN 4TH JUL 2022</Typography>
                <Box className="refundable-area" sx={{ mt: 8 }}>
                  <Typography variant="span">Refundable </Typography>
                  <Typography variant="span">Class W </Typography>
                </Box>
              </Box>
            </Item>
          </Grid>

          {/* child 03 */}
          <Grid item xs={12} sm={6} md={3} lg={3} sx={{ overflow: "hidden" }}>
            <Item sx={{ boxShadow: "none", height: "100%" }}>
              <Box className="air-btn-wrap">
                <button
                  className="air-btn"
                  onClick={handleFlightMode}
                  style={{ color: "#a1a1a1" }}
                >
                  {clickFlightMode ? <IoAirplaneOutline /> : <IoIosAirplane />}
                </button>
                <button
                  className="air-btn air-btn-2"
                  onClick={handleFlightMode}
                  style={{ color: "#a1a1a1" }}
                >
                  {clickNormalMode ? <IoAirplaneOutline /> : <IoIosAirplane />}
                </button>
              </Box>
            </Item>
          </Grid>
          {/* child 04 */}
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Item sx={{ boxShadow: "none" }} className="dac-time-area">
              <Box sx={{ textAlign: "right" }}>
                {clickFlightMode ? (
                  <>
                    <Typography variant="h4">DAC</Typography>
                    <Typography variant="body1">
                      Hazrat Shajalal intl Airport
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography variant="h5">JFK</Typography>
                    <Typography variant="body1">
                      JF kennedy intl Airport
                    </Typography>
                  </>
                )}

                <Typography variant="h6">12:05</Typography>
                <Typography>MON 6TH JUL 2022</Typography>
                <Box className="baggage-area" sx={{ mt: 8 }}>
                  <Typography variant="span">Baggage: 45 KG </Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>

        {/* Tabs */}
        {tabHidden ? (
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "#ddd",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Tabs
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
                className="tabs-area"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Tab
                  sx={{ textTransform: "uppercase", color: "#333" }}
                  label="FlIGHT DETAILS"
                  disableRipple="false"
                  color="#31cf94"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ textTransform: "uppercase", color: "#333" }}
                  label="FARE SUMMERY"
                  disableRipple="false"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ textTransform: "uppercase", color: "#333" }}
                  label="fare policy"
                  disableRipple="false"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ textTransform: "uppercase", color: "#333" }}
                  label="Baggage"
                  disableRipple="false"
                  {...a11yProps(3)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0} className="tabs-single-box">
              <TabsOne
                clickNormalMode={clickNormalMode}
                clickFlightMode={clickFlightMode}
              />
            </CustomTabPanel>
            <CustomTabPanel
              value={value}
              index={1}
              className="tabs-single-box"
              sx={{ m: 0, p: 0 }}
            >
              <TabsTwo />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2} className="tabs-single-box">
              <TabsThree />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3} className="tabs-single-box">
              <TabsFour />
            </CustomTabPanel>
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

export default AirlinesDetails;
