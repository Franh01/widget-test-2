import { Box } from "@mui/material";
import StartConversation from "./StartConversation";
import Channels from "./Channels";
import { SX } from "./styles";

const Section = () => {
  return (
    <Box component={"section"} sx={SX.section}>
      <Box sx={SX.animatedDiv}>
        <StartConversation />
        <Channels />
      </Box>
    </Box>
  );
};

export default Section;
