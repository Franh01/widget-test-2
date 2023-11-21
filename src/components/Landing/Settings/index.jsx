import { Box } from "@mui/material";

import { SX } from "./styles";
import BottomDrawer from "./Drawer";

const Settings = () => {
  return (
    <Box sx={SX.mainContainer}>
      <BottomDrawer />
      {/* <Typography
        sx={{
          color: "#687992",
          textTransform: "none",
          fontSize: "14px",
        }}
      >
        Powered by{" "}
        <a
          href="https://movigoo.com/feelsocial"
          target="_blank"
          rel="noreferrer"
        >
          FeelSocial
        </a>
      </Typography> */}
    </Box>
  );
};

export default Settings;
