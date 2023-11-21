import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { IconButton, Typography } from "@mui/material";
import { useState } from "react";
import NotificationSoundSwitch from "./NotificationSoundSwitch";
import LanguageSelector from "./LanguageSelector";
import Button from "../../../../common/Button";
import { useTranslation } from "react-i18next";

const BottomDrawer = () => {
  const [open, setOpen] = useState();
  const [tum] = useTranslation("user_menu");

  return (
    <Box>
      <IconButton
        sx={{
          padding: "0",
        }}
        onClick={() => setOpen(!open)}
      >
        <SettingsOutlinedIcon />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="bottom">
        <Box
          sx={{
            padding: "32px 16px 16px",
          }}
        >
          <Typography fontWeight={500} fontSize={"24px"} mb={"32px"}>
            {tum("widget_settings")}
          </Typography>
          <LanguageSelector />
          <NotificationSoundSwitch />
          <Button
            text={tum("save_settings")}
            variant={"contained"}
            sx={{
              width: "100%",
              color: "#fff",
              fontWeight: "700",
              textTransform: "none",
              mt: "40px",
              fontSize: "14px",
            }}
            onClick={() => setOpen(false)}
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default BottomDrawer;
