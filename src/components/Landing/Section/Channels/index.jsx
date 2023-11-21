import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Channels = () => {
  const [tl] = useTranslation("landing");
  const navigate = useNavigate();
  const channelsArray = [
    {
      name: "WhatsApp",
      color: "#24d366",
      image: "/whatsapp.svg",
    },
    {
      name: "Instagram",
      color: "#dc3175",
      image: "/instagram.svg",
    },
    {
      name: "Facebook Messenger",
      color: "#0084ff",
      image: "/messenger.svg",
    },
    // {
    //   name: "Telegram",
    //   color: "#53abda",
    //   image: "/telegram.svg",
    // },
  ];

  return (
    <Box>
      <Typography
        sx={{
          color: "var(--primary-text-color)",
          fontSize: "18px",
          fontWeight: 600,
          mb: "16px",
        }}
      >
        {tl("select_your_favorite_channel")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          flexDirection: "column",
        }}
      >
        {channelsArray.map((channel, index) => {
          return (
            <Box
              onClick={() => navigate(`/qr/${channel.name}`)}
              key={channel.name}
              sx={{
                display: "flex",
                border: index === 0 ? "1px solid #0089ff" : "1px solid #d9e1ec",
                borderRadius: "4px",
                padding: "8px",
                cursor: "pointer",
                ":hover": {
                  background: channel.color,
                  color: "#fff",
                  border: `1px solid ${channel.color}`,
                },
                alignItems: "center",
              }}
            >
              <Box
                component={"img"}
                src={channel.image}
                sx={{
                  background: channel.color,
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                  marginRight: "8px",
                  padding: "4px",
                  borderRadius: "4px",
                }}
              />
              <Typography fontWeight={500} fontSize={"14px"}>
                {channel.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Channels;
