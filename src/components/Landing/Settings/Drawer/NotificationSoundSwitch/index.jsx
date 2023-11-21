import { Box, Typography } from "@mui/material";
import Switch from "./Switch";
import { useTranslation } from "react-i18next";

const NotificationSoundSwitch = () => {
  const [tum] = useTranslation("user_menu");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alginItems: "center",
        mt: "32px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "16px",
          color: "var(--primary-text-color)",
        }}
      >
        {tum("notification_sounds")}
      </Typography>
      <Switch />
    </Box>
  );
};

export default NotificationSoundSwitch;
