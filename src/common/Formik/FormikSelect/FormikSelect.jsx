import { useField } from "formik";
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    className: "importantOverflowY",
    style: {
      transform: "translate3d(0, 0, 0)",
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const FormikSelect = ({
  label,
  options,
  optionValue,
  optionName,
  ...props
}) => {
  const [field, meta] = useField(props);
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
        <Select
          size="small"
          fullWidth
          labelId={`${props.name}-label`}
          id={props.name}
          displayEmpty
          MenuProps={MenuProps}
          input={<OutlinedInput />}
          {...field}
          {...props}
        >
          <MenuItem disabled value="">
            <em>{props.placeholder}</em>
          </MenuItem>
          {options.map((option, index) => (
            <MenuItem key={index} value={option[optionValue]}>
              {option[optionName]}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>
          {meta.touched && meta.error ? meta.error : ""}
        </FormHelperText>
      </FormControl>
    </Stack>
  );
};

export default FormikSelect;
