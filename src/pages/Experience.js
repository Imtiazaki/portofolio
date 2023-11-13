import React from "react";
import Box from "@mui/material/Box";
import "../style/Pages.css";
import MovingText from "react-moving-text";
import Grid from "@mui/material/Grid";
import Diskominfo from "./components/Diskominfo";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import Sitama from "./components/Sitama";
import OtherProject from "./components/OtherProject";

const image = require("../assets/exp.jpg");
const astro = require("../assets/astro.png");

function Experience() {
  const [counter, setCounter] = React.useState(3);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ mb: "0" }}>
          <MovingText
            type="slideInFromBottom"
            duration="5000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <img src={astro} className="exp-astro" alt="Astro" />
          </MovingText>
          <Typography sx={{ color: "white", mx: "auto" }} align="center">
            <TypeAnimation
              sequence={[
                "Total of 6 Months Internship and 5 Projects so far...",
                1000,
              ]}
              wrapper="span"
              speed={25}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <MovingText
            type="slideInFromBottom"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <Diskominfo />
          </MovingText>
        </Grid>
        <Grid item xs={4}>
          {counter < 3 ? (
            <MovingText
              type="slideInFromBottom"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <OtherProject />
            </MovingText>
          ) : null}
        </Grid>
        <Grid item xs={4}>
          {counter < 2 ? (
            <MovingText
              type="slideInFromBottom"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <Sitama />
            </MovingText>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <img src={image} className="exp-absolute" alt="Earth" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Experience;
