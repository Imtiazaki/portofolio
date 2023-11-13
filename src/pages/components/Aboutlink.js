import React from "react";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Download from "./Download";

const styles = {
  color: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
};

const cvUrl = "http://localhost:3000//Imtiazaki-Darmawan-CV.pdf";

function Aboutlink() {
  const downloadCvAtURL = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
  };
  const alternateURL = () => {
    const pdfUrl = "Imtiazaki-Darmawan-CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Imtiazaki-Darmawan-CV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const downloadHandler = (url) => {
    alternateURL();
  };
  return (
    <div>
      <Grid container spacing={0} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={4} textAlign="center">
          <Button
            variant="text"
            onClick={downloadHandler}
            startIcon={<DownloadIcon />}
            size="large"
            sx={{ color: "white" }}
          >
            Download CV
          </Button>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <Link
            color="inherit"
            href="https://github.com/Imtiazaki"
            target="_blank"
          >
            <Button
              variant="text"
              startIcon={<GitHubIcon />}
              size="large"
              sx={{ color: "white" }}
            >
              GitHub
            </Button>
          </Link>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <Link
            color="inherit"
            href="https://linkedin.com/in/imtiazaki-darmawan-126839299"
            target="_blank"
          >
            <Button
              variant="text"
              startIcon={<LinkedInIcon />}
              size="large"
              sx={{ color: "white" }}
            >
              LinkedIn
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Aboutlink;
