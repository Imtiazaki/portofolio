import React from "react";
import Box from "@mui/material/Box";
import "../style/Pages.css";
import Grid from "@mui/material/Grid";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import About from "./components/About";
import SkillList from "./components/Skilllist";

const image = require("../assets/about.png");

function AboutMe() {

  const [alignment, setAlignment] = React.useState("bio");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} textAlign="center" sx={{ mt: 3 }}>
          <ToggleButtonGroup
            color="secondary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            size="large"
          >
            <ToggleButton value="bio" sx={{ color: "white" }}>
              Biography
            </ToggleButton>
            <ToggleButton value="skill" sx={{ color: "white" }}>
              Skill
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={6}>
          { alignment === "bio" ? 
          (<About/>) : (<SkillList/>)}
        </Grid>
        <Grid item xs={6}>
          <img src={image} className="about-image" alt="Me" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutMe;
