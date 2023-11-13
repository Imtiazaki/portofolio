import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AboutMe from "./Aboutme";
import Experience from "./Experience";
import { useState } from "react";
import Education from "./Education";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "@mui/material/Link";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const logo = require("../assets/logo.png");

export default function Dashboard() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [pages, setPages] = useState("AboutMe");

  const ExperienceHandler = () => {
    setPages("Experience");
  };

  const EduHandler = () => {
    setPages("Education");
  };
  const AboutHandler = () => {
    setPages("AboutMe");
  };
  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: "black" }}>
        <Container maxWidth="xxl">
          <Toolbar disableGutters>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About Me</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About Me</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About Me</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={AboutHandler}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                About Me
              </Button>
              <Button
                onClick={ExperienceHandler}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Experience
              </Button>
              <Button
                onClick={EduHandler}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Education
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Contact Option">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Contact Me
                  </Typography>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >

                  <MenuItem key="contact" onClick={handleCloseUserMenu}>
                  <Link
                  color="inherit"
                  href="mailto:imtiazakidrmwn@gmail.com"
                  target="_blank"
                >
                    <Button
                      variant="outlined"
                      color="warning"
                      sx={{ width: 150 }}
                      textAlign="center"
                      startIcon={<EmailIcon />}
                    >
                      Email
                    </Button>
                    </Link>
                  </MenuItem>
                <MenuItem key="contact" onClick={handleCloseUserMenu}>
                <Link
                  color="inherit"
                  href="https://wa.me/6285714844740"
                  target="_blank"
                >
                  <Button
                    variant="outlined"
                    color="success"
                    sx={{ width: 150 }}
                    textAlign="center"
                    startIcon={<WhatsAppIcon />}
                  >
                    WhatsApp
                  </Button>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {(() => {
        switch (pages) {
          case "AboutMe":
            return <AboutMe />;
          case "Experience":
            return <Experience />;
          case "Education":
            return <Education />;
          default:
            return null;
        }
      })()}
    </div>
  );
}
