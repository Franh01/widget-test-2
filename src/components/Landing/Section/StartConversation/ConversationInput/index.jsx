import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Input = styled(TextField)(
  () => `
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;    
    div: {
      border: 1px solid #d9e1ec;
      
    }
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
      border-radius: 4px;
    }
  
    & fieldset {
      border: solid 1px #707070;
    }
  `
);

const ConversationInput = () => {
  const [tl] = useTranslation("landing");
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <Input
      placeholder={tl("hi_id_like_to")}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <Button
              disabled={value === ""}
              variant="contained"
              color="secondary"
              sx={{
                minWidth: "32px",
                padding: "7px",
              }}
              onClick={() => navigate("chat")}
            >
              <Box component={"img"} src="/send-icon.svg" />
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default ConversationInput;
