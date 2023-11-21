import { Box } from "@mui/material";
import Header from "../components/Landing/Header";
import Section from "../components/Landing/Section";
import Faq from "../components/Landing/FAQ";
import Conversations from "../components/Landing/Conversations";
import Settings from "../components/Landing/Settings";
import CloseIcon from "../components/Landing/CloseIcon";

const Landing = () => {
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
      <Section />
      <Faq />
      <Conversations />
      <Settings />
    </Box>
  );
};

export default Landing;
