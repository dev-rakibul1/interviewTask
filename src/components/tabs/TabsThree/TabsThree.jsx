import { Box, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React from "react";
import "./TabsThree.css";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const TabsThree = () => {
  return (
    <>
      <Box>
        <Grid container spacing={0} columns={12}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Item sx={{ boxShadow: "none", height: "100%" }}>
              <Box className="">
                <button className="airlines-tabs-btn">Cancellation</button>
                <p className="airlines-tabs-para">
                  Refund Amount = Paid Amount Airlines cancellation fee
                </p>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Item sx={{ boxShadow: "none", height: "100%" }}>
              <Box className="">
                <button className="airlines-tabs-btn">Void</button>
                <p className="airlines-tabs-para">
                  Refund Amount = Paid Amount Airlines cancellation fee
                </p>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={0} columns={12}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Item sx={{ boxShadow: "none", height: "100%" }}>
              <Box className="">
                <button className="airlines-tabs-btn">Re-issue</button>
                <p className="airlines-tabs-para">
                  Refund Amount = Paid Amount Airlines cancellation fee
                </p>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Item sx={{ boxShadow: "none", height: "100%" }}>
              <Box className="">
                <button className="airlines-tabs-btn">Refund</button>
                <p className="airlines-tabs-para">
                  Refund Amount = Paid Amount Airlines cancellation fee
                </p>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TabsThree;
