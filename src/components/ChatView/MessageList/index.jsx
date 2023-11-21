import { Box } from "@mui/material";
import Message from "./Message";
import { SX } from "./styles";
import { useEffect, useRef } from "react";

const messages = [
  {
    id: 1,
    direction: "outbound",
    text: "Hola!",
    date: new Date("2023-11-15T08:30:00"),
    status: "delivered",
  },
  {
    id: 2,
    direction: "inbound",
    text: "¡Hola! ¿Cómo estás?",
    date: new Date("2023-11-15T09:15:00"),
    status: "delivered",
  },
  {
    id: 3,
    direction: "outbound",
    text: "Estoy bien, gracias. ¿Y tú?",
    date: new Date("2023-11-15T10:00:00"),
    status: "delivered",
  },
  {
    id: 4,
    direction: "inbound",
    text: "Todo bien por acá también. ¿Qué has estado haciendo?",
    date: new Date("2023-11-15T11:30:00"),
    status: "delivered",
  },
  {
    id: 5,
    direction: "outbound",
    text: "Nada especial, trabajando en algunos proyectos. ¿Y tú?",
    date: new Date("2023-11-15T12:15:00"),
    status: "delivered",
  },
  {
    id: 6,
    direction: "inbound",
    text: "¡Eso suena interesante! Yo estoy planeando un pequeño viaje para el fin de semana.",
    date: new Date("2023-11-15T13:00:00"),
    status: "delivered",
  },
  {
    id: 7,
    direction: "outbound",
    text: "¡Qué emocionante! ¿A dónde planeas ir?",
    date: new Date("2023-11-15T14:30:00"),
    status: "delivered",
  },
  {
    id: 8,
    direction: "inbound",
    text: "Estoy pensando en ir a la playa. Necesito un poco de sol y relajación.",
    date: new Date("2023-11-15T15:45:00"),
    status: "delivered",
  },
  {
    id: 9,
    direction: "outbound",
    text: "Suena maravilloso. ¡Espero que tengas un buen tiempo!",
    date: new Date("2023-11-15T16:30:00"),
    status: "delivered",
  },
  {
    id: 10,
    direction: "inbound",
    text: "Gracias, ¡definitivamente lo haré! ¿Tienes algún plan interesante para el fin de semana?",
    date: new Date("2023-11-15T17:15:00"),
    status: "delivered",
  },
];
const MessageList = () => {
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <Box sx={SX.mainContainer}>
      <Box sx={SX.messagesContainer}>
        {messages.map((message, index) => {
          return (
            <Message
              key={message.id}
              message={message}
              ref={index === messages.length - 1 ? lastMessageRef : null}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default MessageList;
