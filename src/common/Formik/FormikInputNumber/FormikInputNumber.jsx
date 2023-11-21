import { useField } from "formik";
import { Box, Stack, TextField, Typography } from "@mui/material";

const FormikInputNumber = ({ label, ...props }) => {
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
      <Box sx={{ width: "60%" }}>
        <TextField
          size="small"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          fullWidth
          hiddenLabel
          error={meta.touched && meta.error ? true : false}
          helperText={meta.touched && meta.error ? meta.error : ""}
          {...field}
          {...props}
        />
      </Box>
    </Stack>
  );
};

export default FormikInputNumber;
