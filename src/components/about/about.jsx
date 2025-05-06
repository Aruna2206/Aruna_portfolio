import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Heading from "../../utils/heading";
import CustomButton from "../../utils/customButton";
import { styled } from "styled-components";
import { data } from "../../data/aboutData";
import CV from "../../assets/CV/Aruna Resume.pdf";
import { motion } from "framer-motion";

const CustomizeStack = styled(Stack)`
  position: relative;
  margin-right: 2rem;
  &::before {
    content: "";
    position: absolute;
    left: -5rem;
    top: -12.5%;
    width: 1px;
    height: 125%;
    background-color: var(--white-text);
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const infoVariant = {
  hidden: {
    transform: "translateX(100%)",
  },
  visible: {
    transform: "translateX(0%)",
    transition: {
      delay: 1.5,
      type: "spring",
      duration: 1,
    },
  },
};

const buttonVariant = {
  hidden: {
    transform: "translateY(100%)",
  },
  visible: {
    transform: "translateY(0%)",
    transition: {
      delay: 1.5,
      type: "spring",
      duration: 1,
    },
  },
};

const sideVariant = {
  hidden: {
    transform: "scale(0)",
  },
  visible: {
    transform: "scale(1)",
    transition: {
      duration: 1,
      type: "spring",
      delay: 1,
    },
  },
};

const handVariants = {
  hidden: {
    rotate: 8,
  },
  visible: {
    rotate: -8,
    transition: {
      repeat: 8,
      repeatType: "reverse",
      duration: 3,
      type: "spring",
      stiffness: 500,
    },
  },
};
const About = () => {
  return (
    <Box className="about container black-container">
      <Heading headerText="About me" id="about" />
      <Stack
        sx={{
          flexDirection: { xs: "column", lg: "row" },
        }}
        justifyContent="space-between"
        marginY={3}
      >
        <Stack
          spacing={5}
          justifyContent="space-between"
          sx={{
            width: { xs: "100%", lg: "60%" },
            alignItems: { xs: "center", sm: "flex-start" },
            overflow: "hidden",
          }}
        >
          <Typography
            component={motion.p}
            variants={infoVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variant="body1"
            sx={{ fontSize: { xs: "16px", lg: "20px" } }}
            className="gray-text"
          >
            <h3>
              Hello, I'm Aruna
              <span
                style={{
                  display: "inline-block",
                  marginLeft: "5px",
                  paddingBottom: "5px",
                  transform: "translateY(-5px)",
                }}
              >
                <motion.span
                  style={{
                    display: "inline-block",
                    transformOrigin: " bottom right ",
                  }}
                  variants={handVariants}
                  whileInView="visible"
                >
                  👋
                </motion.span>
              </span>
            </h3>
            <p>
              Hi, I'm Aruna A, a passionate and detail-oriented Front-End
              Developer with a strong foundation in building responsive,
              user-friendly web interfaces using React.js, HTML, CSS and
              JavaScript. I enjoy transforming ideas into visually appealing and
              interactive digital experiences.
            </p>

            <p>
              I’ve completed certifications and internships that strengthened my
              skills in UI design, component-based architecture and front-end
              optimization. Whether it's crafting modern web layouts or
              integrating APIs with React, I aim to deliver clean, efficient and
              accessible code.
            </p>

            <p>
              I’m always eager to learn new tools and stay updated with the
              latest in web development. Let's build something beautiful
              together!
            </p>
          </Typography>
          <motion.a
            href={CV}
            variants={buttonVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            download="Aruna Resume"
            target="_blank"
            rel="noreferrer"
            style={{ width: "fit-content" }}
          >
            <CustomButton
              beforeWidth="100%"
              beforeBgColorHover="transparent"
              hoverColor="var(--white-text)"
              textColor="black"
              content="Download my CV"
            ></CustomButton>
          </motion.a>
        </Stack>
        <CustomizeStack
          as={motion.div}
          variants={sideVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          sx={{
            display: { xs: "none", lg: "flex" },
            transformOrigin: "center",
          }}
          justifyContent="center"
        >
          <Stack
            spacing={7}
            overflow="hidden"
            sx={{
              display: { xs: "none", lg: "flex" },
            }}
          >
            {data.map((el, index) => {
              let delay = index;
              delay += 2.5;
              return (
                <Stack
                  component={motion.div}
                  initial={{ transform: "translateX(-120%)" }}
                  whileInView={{ transform: "translateX(0%)" }}
                  transition={{ duration: 0.8, type: "spring", delay: delay }}
                  viewport={{ once: true }}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  key={el.id}
                >
                  <Typography
                    variant="body1"
                    fontSize="1rem"
                    className="white-text"
                    fontWeight="bold"
                  >
                    {el.name}:
                  </Typography>
                  <Typography
                    variant="body2"
                    fontSize="1rem"
                    className="gray-text"
                    lineHeight="0"
                  >
                    {el.value}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </CustomizeStack>
      </Stack>
    </Box>
  );
};

export default About;
