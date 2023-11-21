import { Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

//Contexts
import { useSnackContext } from "./context/SnackContext";

import Snacks from "./common/Snacks";

import { Box } from "@mui/material";

import { useWidgetContext } from "./context/WidgetContext";
import WidgetButton from "./components/WidgetButton";

function App() {
  const { snackInfo, closeSnack } = useSnackContext();
  const { isWidgetOpen } = useWidgetContext();
  const cookies = new Cookies(null, { path: "/" });

  cookies.set(
    "session",
    "eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJakV5TVRJeE1pSXNJbVZ0WVdsc0lqb2labkpoYm1OcGMyTnZRRzF2ZG1sbmIyOHVZMjl0SWl3aWRYTmxjbDlwWkNJNklqRXlNVEl4TWpFaUxDSnBZWFFpT2pFMk9Ua3dNak15TlROOS5pd1Y0aU9lRkhodFFYSHY5V3JKdDVpZDAtSkFObERyQkM5UE5TNjg0QjZZIiwiYWxnIjoiSFMyNTYifQ"
  );

  return (
    <Box
      sx={{
        maxWidth: "400px",
        minHeight: "100vh",
        borderRadius: "8px",
        overflow: "hidden",
        background: "transparent",
        position: "relative",
      }}
    >
      <WidgetButton />
      <Snacks
        message={snackInfo.message}
        severity={snackInfo.severity}
        open={snackInfo.isOpen}
        closeSnack={closeSnack}
      />

      {isWidgetOpen && <Outlet />}
    </Box>
  );
}

export default App;
