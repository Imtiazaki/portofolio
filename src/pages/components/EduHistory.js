import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../style/Pages.css";
import Typography from "@mui/material/Typography";
import MovingText from "react-moving-text";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const images = [
  require("../../assets/education/budiluhur.jpg"),
  require("../../assets/education/course.jpg"),
  require("../../assets/education/udemy.jpg"),
];

function EduHistory() {
  /*   const [open, setOpen] = React.useState(false);
  const [certificate, setCertificate] = React.useState(4);
  const handleOne = () => {
    setOpen(true);
    setCertificate(4)
  }
  const handleTwo = () => {
    setOpen(true);
    setCertificate(5)
  }
  const handleThree = () => {
    setOpen(true);
    setCertificate(6)
  }
  const handleClose = () => setOpen(false); */
  const [counter, setCounter] = React.useState(3);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  return (
    <div>
      {/*       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
      {counter < 3 ? (
      <MovingText
        type="slideInFromTop"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <Grid item xs={12}>
          <div className="edu-budi">
            <Box component="div">
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <div className="edu-budi-text">
                    <Typography variant="h5">
                      Universitas Budi Luhur (2019 - 2023)
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                      "As a student at one of the famous IT universities
                      in Jakarta, I studied with focus and tried to maintain my
                      GPA. Although I faced many challenges and unfortunate
                      events, I'm still able to graduate with the distinction of
                      a <span className="high-light"> Magna Cum Laude</span>{" "}
                      degree and a satisfying
                      <span className="high-light"> GPA score of 3.76</span>."
                    </Typography>
                    {/*                   <div className="cert-button">
                    <Button variant="text" onClick={handleOpen}>View certificate</Button>
                  </div> */}
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <img src={images[0]} className="edu-budi-image" alt="Me" />
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Grid>
      </MovingText>) : null } 
      {counter < 2 ? (
      <MovingText
        type="unfold"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <Grid item xs={12}>
          <div className="edu-course">
            <Box component="div">
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <div className="edu-course-text">
                    <Typography variant="h5">
                      Javascript Fullstack Developer by Course-Net (2023)
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                      "Dissatisfied with what I have learned in college, I
                      wanted to learn more details about programming and the
                      career that I will pursue in the future. I decided to take
                      a course so I could learn more about web development,
                      especially JavaScript. In the end, I'm one of two people
                      who graduated from my course with an{" "}
                      <span class="high-light-black">
                        Overall High Score of 84
                      </span>{" "}
                      and a <span class="high-light-black">Grade of B+</span>,
                      and they kindly enough honored me with{" "}
                      <span class="high-light-black">
                        "Best Participant." Honorary Title
                      </span>
                      ."
                    </Typography>
                    {/*                   <Button variant="text">View certificate</Button> */}
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <img
                      src={images[1]}
                      className="edu-course-image"
                      alt="Still Me"
                    />
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Grid>
      </MovingText> ) : null }
      {counter < 1 ? (
      <MovingText
        type="slideInFromBottom"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
      <Grid item xs={12}>
        <div className="edu-udemy">
          <Box component="div">
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <div className="edu-udemy-text">
                  <Typography variant="h5">
                    Full Stack Web Development with React JS, Angular and NodeJS
                    by Oak Academy (2023)
                  </Typography>
                  <Typography sx={{ mt: 1 }}>
                    "It's harder to learn online because nobody really teaches
                    you, but my coach from Course-Net gave me the advice to
                    learn one-by-one what I want to understand; do not try to
                    learn everything at once; it'll only confuse me. So I've
                    learned part of it, but I will definitely come back to learn
                    more."
                  </Typography>
                  {/*                   <Button variant="text">View certificate</Button> */}
                </div>
              </Grid>
              <Grid item xs={5}>
                <div>
                  <img
                    src={images[2]}
                    className="edu-udemy-image"
                    alt="Still Me"
                  />
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Grid>
      </MovingText>) : null }
    </div>
  );
}

export default EduHistory;
