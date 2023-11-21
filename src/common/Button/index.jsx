import { Button as StyledButton } from "@mui/material";

const Button = ({ text, variant, ...props }) => {
  return (
    <StyledButton
      sx={{
        p: "10px 20px",
        textTransform: "none",
        fontWeight: "700",
        borderColor: variant === "outlined" && "var(--text_secondary)",
        color: variant === "outlined" && "var(--text_secondary)",
        width: "95px",
        borderRadius: "5px",
      }}
      variant={variant}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
