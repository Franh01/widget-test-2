import { Autocomplete, FormControl, Stack, Box } from "@mui/material";
import InputWrapper from "../../../../../../common/InputWrapper";
import { useTranslation } from "react-i18next";

const LanguageAutocomplete = ({ ...props }) => {
  const [tum, i18n] = useTranslation("user_menu");
  const actualLanguage = localStorage.getItem("lang");
  const languages = [
    {
      key: "es",
      name: tum("languages.es"),
    },
    {
      key: "en",
      name: tum("languages.en"),
    },
    {
      key: "pt",
      name: tum("languages.pt"),
    },
  ];

  return (
    <Stack direction={"column"} spacing={1} sx={{ width: "100%" }}>
      <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
        <Autocomplete
          options={languages}
          isOptionEqualToValue={(option, value) => option["value"] === value}
          getOptionLabel={(option) => option["name"]}
          renderInput={(params) => (
            <InputWrapper {...params} placeholder={""} />
          )}
          defaultValue={{
            name: tum(`languages.${actualLanguage}`),
            key: actualLanguage,
          }}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ fontSize: 14, fontFamily: "var(--font-family)" }}
              {...props}
            >
              {option["name"]}
            </Box>
          )}
          onChange={(e, newValue) => {
            props.onChange && props.onChange(newValue);
            i18n.changeLanguage(newValue.key);
            localStorage.setItem("lang", newValue.key);
          }}
        />
      </FormControl>
    </Stack>
  );
};

export default LanguageAutocomplete;
