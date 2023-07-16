import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import AirlinesBalance from "../components/AirlinesBalance/AirlinesBalance";
import AirlinesDetails from "../components/airlinesDetails/AirlinesDetails";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Airlines() {
  const [tabHidden, setTabHidden] = useState(false);
  const handleTabsHidden = (value) => {
    setTabHidden(!tabHidden);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        flexDirection: "column-reverse",
        display: "flex",
      }}
    >
      <Grid container spacing={0} columns={12} sx={{ height: "100%" }}>
        {/* airlines details */}
        <Grid
          item
          xs={12}
          sm={9}
          md={10}
          lg={10}
          sx={{
            height: "100%",
            border: "1px solid #ddd",
          }}
        >
          <Item sx={{ boxShadow: "none", height: "100%" }}>
            <AirlinesDetails tabHidden={tabHidden} />
          </Item>
        </Grid>

        {/* airlines balance */}
        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          lg={2}
          sx={{
            height: "100%",
            border: "1px solid #ddd",
          }}
        >
          <Item sx={{ boxShadow: "none", height: "100%" }}>
            <AirlinesBalance
              handleTabsHidden={handleTabsHidden}
              tabHidden={tabHidden}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
