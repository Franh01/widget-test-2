import Close from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useWidgetContext } from "../../../context/WidgetContext";

const CloseIcon = () => {
  const { changeWidgetState } = useWidgetContext();
  return (
    <IconButton
      onClick={changeWidgetState}
      sx={{
        position: "absolute",
        top: "5px",
        right: "10px",
      }}
    >
      <Close
        sx={{
          color: "#fff",
        }}
      />
    </IconButton>
  );
};

export default CloseIcon;
