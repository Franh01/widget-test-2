import { Box } from "@mui/material";
import Logo from "/Icono-app.svg";
import Arrow from "/arrow.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box
      component={"header"}
      sx={{
        height: "80px",
        width: "100%",
        background: "#ffa35a",
        display: "flex",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        padding: "20px 28px 20px 16px",
        gap: "10px",
        "@keyframes shrink": {
          "0%": {
            height: "205px",
          },
          "100%": {
            height: "80px",
          },
        },
        animation: "shrink 0.6s ease",
        position: "fixed",
        borderRadius: "8px 8px 0px 0px",
        top: "0",
        zIndex: "2",
      }}
    >
      <Box
        onClick={() => navigate("/")}
        component={"img"}
        src={Arrow}
        alt="Logo"
        sx={{
          cursor: "pointer",
          width: "16px",
        }}
      />

      <Box component={"img"} src={Logo} alt="Logo" width={"40px"} />
    </Box>
  );
};

export default Header;
