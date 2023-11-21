import { Box } from "@mui/material";
import Header from "../components/Landing/Header";

import CloseIcon from "../components/Landing/CloseIcon";
import { useParams } from "react-router-dom";
import Section from "../components/ShowQr/Section";

const ShowQr = () => {
  const { channel } = useParams();
  return (
    <Box
      component={"main"}
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <CloseIcon />
      <Header />
      <Section channel={channel} />
    </Box>
  );
};

export default ShowQr;
