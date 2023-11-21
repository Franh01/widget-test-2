import { Box, Button } from "@mui/material";
import { useWidgetContext } from "../../context/WidgetContext";

const WidgetButton = () => {
  const { changeWidgetState, isWidgetOpen } = useWidgetContext();
  return (
    <Button
      onClick={changeWidgetState}
      sx={{
        position: "fixed",
        bottom: 1,
        right: 1,
        zIndex: 1,
        display: isWidgetOpen && "none",
        width: "64px",
        height: "64px",
        borderRadius: "100px",
      }}
      color="primary"
      variant="contained"
    >
      <Box component={"img"} src="/widget-icon.svg" alt="widget icon" />
    </Button>
  );
};

export default WidgetButton;
