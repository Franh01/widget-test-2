import { Avatar, Box, Typography } from "@mui/material";
import moment from "moment/moment";
import { SX } from "./styles";
import { forwardRef } from "react";

const Message = forwardRef(function Message({ message }, ref) {
  const directions = ["outbound", "inbound"];
  const { direction, text, date, status } = message;
  const OutboundMessage = () => {
    return (
      <Box
        ref={ref}
        sx={SX.outboundMainContainer}
        name="outbound_main_container"
      >
        <Box sx={SX.outboundDate} name="outbound_date">
          {moment(date).format("LT")}
        </Box>
        <Box sx={SX.outboundContentContainer}>
          <Typography sx={SX.outboundText}>{text}</Typography>

          {status === "delivered" && (
            <Box component={"img"} src="/delivered.svg" />
          )}
        </Box>
      </Box>
    );
  };

  const InboundMessage = () => {
    return (
      <Box ref={ref} sx={SX.inboundMainContainer}>
        <Box sx={SX.inboundDate}>{moment(date).format("LT")}</Box>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          {text}
        </Typography>
        <Avatar src={"/Icono-app.svg"} sx={SX.inboundAvatar} />
      </Box>
    );
  };
  return direction === directions[0] ? <OutboundMessage /> : <InboundMessage />;
});

export default Message;
