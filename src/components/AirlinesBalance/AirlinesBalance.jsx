import { Box, Typography } from "@mui/material";
import React from "react";
import "./AirlinesBalance.css";

const AirlinesBalance = ({ handleTabsHidden }) => {
  return (
    <>
      <Box>
        <Typography variant="h4">1850 TK</Typography>

        <button className="book-now-btn">Booking now</button>
        <button className="hide-details" onClick={() => handleTabsHidden()}>
          Hide Details
        </button>
      </Box>
    </>
  );
};

export default AirlinesBalance;
