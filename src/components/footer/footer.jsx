import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LogoImage from "../../assets/images/Logo (1).png";
import Upwork from "../../assets/icons/upwork 1.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Github from "../../assets/icons/github2.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Mostaql from "../../assets/icons/Mostaql.svg";
import WhatsApp from "../../assets/icons/whatsapp.svg";
import EmailIcon from "../../assets/icons/email.png";
const Footer = () => {
  const [year, setYear] = useState();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <Box
      component="footer"
      id="contact"
      className="footer black-container"
      textAlign="center"
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        padding="2rem 0 0.5rem"
        gap="1rem"
      >
        <Box>
          <a href="/">
            <img
              width="55px"
              src={LogoImage}
              style={{
                height: "150px", // Makes it match the header height
                width: "auto", // Maintains aspect ratio
                objectFit: "fill", // Ensures it fits without cropping
                borderRadius: "0",

                borderRadius: "30px",

                // No rounding, since it's not needed
                // Prevents spacing issues
              }}
              alt="Aruna's Logo"
            />
          </a>
        </Box>
        <Stack direction="row" alignItems="center" gap="1rem">
          <a
            href="mailto:aruna22062004@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={EmailIcon}
              alt="Email"
              style={{ width: "40px", height: "40px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aruna-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://wa.me/+916369797668?"
            target="_blank"
            rel="noreferrer"
          >
            <img src={WhatsApp} alt="Send me a message" />
          </a>
          <a
            href="https://github.com/Aruna2206/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="GitHub" />
          </a>
        </Stack>
      </Stack>
      <Typography variant="overline" color="var(--white-text)">
        © Copyright {year} - Aruna . All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
