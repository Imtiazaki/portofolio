import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MovingText from "react-moving-text";

export default function SkillList() {
  return (
    <div className="skill-list">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} textAlign="center">
          <Grid item xs={6}>
            <MovingText
              type="slideInFromRight"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  bgcolor: "#90d4d6",
                  color: "white",
                }}
                subheader={
                  <ListSubheader
                    sx={{ bgcolor: "#90d4d6", color: "white" }}
                    component="div"
                    id="nested-list-subheader"
                  >
                    Frontend
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#61e8ed" }}>
                      <i class="fa-brands fa-react"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="ReactJS" secondary="Intermediate" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#1a7543" }}>
                      <i class="fa-brands fa-vuejs"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="VueJS" secondary="Beginner" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#396cb3" }}>
                      <i class="fa-brands fa-css3-alt"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="CSS" secondary="Intermediate" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#603894" }}>
                      <i class="fa-brands fa-bootstrap"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Bootstrap" secondary="Intermediate" />
                </ListItem>{" "}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#2254ba" }}>
                      <i class="fa-brands fa-uikit"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Material UI"
                    secondary="Intermediate"
                  />
                </ListItem>
              </List>
            </MovingText>
          </Grid>
          <Grid item xs={6}>
            <MovingText
              type="slideInFromLeft"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  bgcolor: "#b590d6",
                  color: "white",
                }}
                subheader={
                  <ListSubheader
                    sx={{ bgcolor: "#b590d6", color: "white" }}
                    component="div"
                    id="nested-list-subheader"
                  >
                    Backend
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#75a2fa" }}>
                      <i class="fa-solid fa-cube"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="ExpressJS" secondary="Intermediate" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#09de3b" }}>
                      <i class="fa-brands fa-node-js"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="NodeJS" secondary="Intermediate" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#395473" }}>
                      <i class="fa-brands fa-php"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="PHP Native" secondary="Intermediate" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#1a324d" }}>
                      <i class="fa-solid fa-table"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="PostgreSQL" secondary="Intermediate" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#f09148" }}>
                      <i class="fa-solid fa-database"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="MySQL" secondary="Intermediate" />
                </ListItem>
              </List>
            </MovingText>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
