import { Box, Typography } from "@mui/material";
import LanguageAutocomplete from "./LanguageAutocomplete";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const [tum] = useTranslation("user_menu");
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "16px",
          color: "var(--primary-text-color)",
          mb: "12px",
        }}
      >
        {tum("select_language")}
      </Typography>
      <LanguageAutocomplete />
    </Box>
  );
};

export default LanguageSelector;
