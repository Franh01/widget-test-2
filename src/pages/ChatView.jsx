import { Box } from "@mui/material";
import Header from "../components/ChatView/Header";
import MessageList from "../components/ChatView/MessageList";
import MessageInput from "../components/ChatView/MessageInput";

const ChatView = () => {
  return (
    <Box
      component={"main"}
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflowY: "hidden",
      }}
    >
      <Header />
      <MessageList />
      <MessageInput />
    </Box>
  );
};

export default ChatView;
