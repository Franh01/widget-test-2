import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import { SX } from "./styles";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import { useEffect, useRef, useState } from "react";
import EmojiSelector from "./EmojiSelector";
import { useTranslation } from "react-i18next";

const Input = styled(TextField)(
  () => `   
    display: flex;
    flex-wrap: wrap;   
    
    & input {      
      height: 48px;
      box-sizing: border-box;
      padding: 14px;
      width: 0;
      min-width: 30px;
      flex-grow: 1;      
      margin: 0;
      outline: 0;
      font-size: 14px;      
      font-family: var(--font-family);
      
    }
  `
);

const MessageInput = () => {
  const [tc] = useTranslation("chat");
  const [showEmojis, setShowEmojis] = useState(false);
  const [message, setMessage] = useState("");
  const [clickInside, setClickInside] = useState(false);

  const boxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        boxRef.current &&
        !boxRef.current.contains(event.target) &&
        !clickInside
      ) {
        setShowEmojis(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [boxRef, clickInside]);

  const addEmoji = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji.emoji);
  };

  return (
    <Box sx={SX.mainContainer}>
      <Box
        ref={boxRef}
        sx={{
          position: "absolute",
          zIndex: 2000,
          bottom: "48px",
          right: "0px",
          width: "100%",
          display: !showEmojis ? "none" : null,
        }}
      >
        <EmojiSelector height={350} onClick={(e) => addEmoji(e)} />
      </Box>
      <Input
        placeholder={tc("type_your_message")}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Box
                sx={{
                  display: "flex",
                  gap: "4px",
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    minWidth: "32px",
                    padding: "6px",
                    background: "#f1f3f8",
                    ":hover": {
                      "& > svg": {
                        color: "#fff",
                        transition: "200ms",
                      },
                    },
                  }}
                  onClick={() => {
                    setShowEmojis(!showEmojis);
                  }}
                  onMouseOver={() => setClickInside(true)}
                  onMouseLeave={() => setClickInside(false)}
                >
                  <SentimentSatisfiedAltOutlinedIcon
                    sx={{
                      color: "#444",
                      transition: "200ms",
                    }}
                  />
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    minWidth: "32px",
                    padding: "6px",
                    background: "#f1f3f8",
                    ":hover": {
                      "& > svg": {
                        color: "#fff",
                        transition: "200ms",
                      },
                    },
                  }}
                >
                  <AttachFileOutlinedIcon
                    sx={{
                      color: "#444",
                      transition: "200ms",
                      transform: "rotate(45deg)",
                    }}
                  />
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    minWidth: "38px",
                    padding: "6px",
                  }}
                >
                  <Box component={"img"} src="/send-icon.svg" />
                </Button>
              </Box>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default MessageInput;
