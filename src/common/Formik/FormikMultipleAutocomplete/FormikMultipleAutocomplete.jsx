import { useField } from "formik";
import {
  Autocomplete,
  FormControl,
  FormHelperText,
  Stack,
  Typography,
  Box,
  TextField,
  styled,
  Chip,
} from "@mui/material";
import { useEffect, useState } from "react";

const InputWrapper = styled(TextField)(
  ({ theme }) => `
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  
  &:hover {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  }

  & >div{
    padding: 6px !important;

  }
  // &.focused {
  //   border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  //   box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  // }

  & input {
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 27px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
    font-size: 14px;
    font-family: var(--font-family);
  }
  & fieldset {
    border: solid 1px #707070;
  }
`
);

const FormikMultipleAutocomplete = ({
  label,
  options,
  optionValue,
  optionName,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const [displayOptions, setDisplayOptions] = useState(options);

  useEffect(() => {
    const selected = field?.value?.map((opt) => opt[optionValue]);

    const filteredOptions = options.filter(
      (opt) => !selected?.includes(opt[optionValue])
    );

    setDisplayOptions(filteredOptions);
  }, [field.value, options, optionValue]);

  return (
    <Stack direction={"row"} spacing={2} sx={{ width: "100%" }} mb={2}>
      <Stack
        direction={"row"}
        justifyContent={"flex-start"}
        spacing={1}
        sx={{ width: "35%", pt: 1 }}
      >
        <Typography component={"span"} sx={{ fontWeight: 700 }}>
          {label}
        </Typography>
        {props.required && (
          <Typography
            component={"span"}
            sx={{ fontWeight: 700 }}
            color={"error"}
          >
            *
          </Typography>
        )}
      </Stack>

      <FormControl
        sx={{ m: 1, width: "60%", mt: 3 }}
        error={meta.touched && meta.error ? true : false}
      >
        <Autocomplete
          multiple
          renderTags={(value, getTagProps) =>
            value?.map((option, index) => {
              return (
                <Chip
                  key={index}
                  variant="outlined"
                  label={option[optionName]}
                  {...getTagProps({ index })}
                />
              );
            })
          }
          options={displayOptions}
          isOptionEqualToValue={(option, value) =>
            option[optionValue] === value
          }
          getOptionLabel={(option) => option[optionName]}
          renderInput={(params) => <InputWrapper {...params} />}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ fontSize: 14, fontFamily: "var(--font-family)" }}
              {...props}
            >
              {option[optionName]}
            </Box>
          )}
          {...field}
          onChange={(e, newValue) => {
            helpers.setValue(newValue ? newValue : null);
          }}
          value={props.value}
        />
        <FormHelperText>
          {meta.touched && meta.error ? meta.error : ""}
        </FormHelperText>
      </FormControl>
    </Stack>
  );
};

export default FormikMultipleAutocomplete;
