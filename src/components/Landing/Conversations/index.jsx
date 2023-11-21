import { Avatar, Box, Typography } from "@mui/material";
import { SX } from "./styles";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Conversations = () => {
  const [tl] = useTranslation("landing");
  const navigate = useNavigate();
  const conversationsArray = [
    {
      id: 1,
      lastMessage:
        "Hola hola! Bienvenido! Antes de comenzar la atención, ¿Con quién tengo el gusto?",
      agent: {
        imageUrl:
          "https://media.messagebird.com/v1/media/02bbc509-5f76-4c35-956c-fc989064b30d",
        name: "Agent",
      },
      date: new Date(),
    },
    {
      id: 2,
      lastMessage:
        "Disculpa, para poder continuar con un agente agradeceríamos tu número de contacto... Por lo general se corta la comunicación y así podríamos retomarla. Gracias :)",
      agent: {
        imageUrl:
          "https://media.messagebird.com/v1/media/1c7ef7ca-0be8-4b85-9521-697446cb347f",
        name: "Agent",
      },
      date: new Date(),
    },
  ];

  return (
    <Box component={"section"} sx={SX.section}>
      <Box sx={SX.animatedDiv}>
        <Typography
          sx={{
            color: "var(--primary-text-color)",
            fontSize: "18px",
            fontWeight: 600,
            mb: "16px",
          }}
        >
          {tl("your_conversations")}
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap="18px">
          {conversationsArray.splice(0, 5).map((c) => {
            return (
              <Box
                onClick={() => navigate("chat")}
                key={c.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "flex-start",
                  cursor: "pointer",
                }}
              >
                <Avatar
                  src={c.agent.imageUrl}
                  sx={{
                    width: "36px",
                    height: "36px",
                    mr: "16px",
                  }}
                />
                <Box width={"60%"}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {c.agent.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "pre",
                      width: "100%",
                      fontWeight: "500",
                    }}
                  >
                    {c.lastMessage}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#687992",
                  }}
                >
                  {moment().format("MMM D")}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Conversations;
