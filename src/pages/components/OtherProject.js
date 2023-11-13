import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import JavascriptIcon from "@mui/icons-material/Javascript";
import PhpIcon from "@mui/icons-material/Php";
import Link from "@mui/material/Link";

const image = require("../../assets/images/other.jpg");

function OtherProject() {
  return (
    <Card
      sx={{ maxWidth: 345, mx: "auto", bgcolor: "#23232e", color: "white" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            Other Projects
          </Typography>
          <Typography
            variant="body2"
            color="white"
            sx={{ fontWeight: "bold", mb: 0.5 }}
          >
            Projects :
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={1} sx={{ mb: "0" }}>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ mt: 1, fontWeight: "bold" }}
                  align="left"
                >
                  <JavascriptIcon />
                </Typography>
              </Grid>
              <Grid item xs={11} sx={{ mb: "0" }}>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ mt: 1, fontWeight: "bold" }}
                >
                  University E-Learning Website (ReactJS, NodeJS, PostgreSQL)
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={1} sx={{ mb: "0" }}>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ mt: 1, fontWeight: "bold" }}
                >
                  <PhpIcon />
                </Typography>
              </Grid>
              <Grid item xs={11} sx={{ mb: "0" }}>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ mt: 1, fontWeight: "bold" }}
                >
                  Apriori Algorithm Data Mining Web (PHP Native, MySQL)
                </Typography>
              </Grid>
            </Grid>
          </Box>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link
            color="inherit"
            href="https://github.com/Imtiazaki/"
            target="_blank"
          >
        <Button size="small" color="primary">
          GitHub
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default OtherProject;
