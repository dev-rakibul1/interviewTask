import { Box, Typography } from "@mui/material";
import React from "react";
import "./AirlinesBalance.css";

const AirlinesBalance = ({ handleTabsHidden, tabHidden }) => {
  return (
    <>
      <Box>
        <Typography variant="h4">1850 TK</Typography>

        <button className="book-now-btn">Booking now</button>
        <button className="hide-details" onClick={() => handleTabsHidden()}>
          {tabHidden ? "Hide details" : "Flight details"}
        </button>
      </Box>
    </>
  );
};

export default AirlinesBalance;
