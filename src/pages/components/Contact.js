import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ButtonGroup from "@mui/material/ButtonGroup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#23232e",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttons = [
  <Button color="error" startIcon={<EmailIcon />} sx={{ mb: 3 }} key="email">
    Email
  </Button>,
  <Button color="success" startIcon={<WhatsAppIcon />} key="two">
    Whatsapp{" "}
  </Button>,
];

export default function Contact() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign="center">
          <Typography
            sx={{ mb: 1, color: "white" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Contact me at :
          </Typography>
          <Button
            color="error"
            startIcon={<EmailIcon />}
            
            key="email"
            variant="contained"
          >
            Email
          </Button>
          ,
          <Button color="success"  variant="contained" startIcon={<WhatsAppIcon />} key="two">
            Whatsapp{" "}
          </Button>
          ,
        </Box>
      </Modal>
    </div>
  );
}
