import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { SX } from "./styles";
import { useField } from "formik";

const FormikCheckbox = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <Box sx={SX.container}>
      <FormControlLabel
        id={field.name + field.value}
        required={props.required}
        control={<Checkbox />}
        label={label}
        name={props.name}
        {...field}
        {...props}
      />
    </Box>
  );
};

export default FormikCheckbox;
