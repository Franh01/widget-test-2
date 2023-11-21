import { Box, Typography } from "@mui/material";
import ConversationInput from "./ConversationInput";
import { useTranslation } from "react-i18next";

const StartConversation = () => {
  const [tl] = useTranslation("landing");
  return (
    <Box mb="40px">
      <Typography
        sx={{
          color: "var(--primary-text-color)",
          fontSize: "18px",
          fontWeight: 600,
          mb: "16px",
        }}
      >
        {tl("start_a_conversation")}
      </Typography>
      <ConversationInput />
    </Box>
  );
};

export default StartConversation;
