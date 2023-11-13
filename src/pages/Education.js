import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../style/Pages.css";
import Typography from "@mui/material/Typography"; 
import EduHistory from "./components/EduHistory";

const image = require("../assets/edu.png");

function Education() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12}>
            <img src={image} className="edu-astro" alt="Education" />
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <EduHistory/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Education;
