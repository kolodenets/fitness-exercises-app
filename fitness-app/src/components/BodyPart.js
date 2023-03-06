import React from "react";
import { Stack, Typography } from "@mui/material";

import { bodyIcons } from "../utils/icons";

const BodyPart = ({ item, setBodyPart, bodyPart, setCurrentPage, index }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      borderTop: bodyPart === item ? "4px solid #FF2625" : "",
      background: "#fff",
      borderBottomLeftRadius: "20px",
      width: "270px",
      height: "282px",
      cursor: "pointer",
      gap: "47px",
    }}
    onClick={() => {
      setBodyPart(item);
      setCurrentPage(1);
      window.scrollTo({
        top:
          window.innerWidth < 380
            ? 1300
            : window.innerWidth < 1025
            ? 1250
            : 1800,
        left: 100,
        behavior: "smooth",
      });
    }}
  >
    <img src={bodyIcons[index]} alt="dumbbell" style={{ width: "50px", height: "50px" }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {" "}
      {item === 'waist' ? 'waist & abs' : item}
    </Typography>
  </Stack>
);

export default BodyPart;
