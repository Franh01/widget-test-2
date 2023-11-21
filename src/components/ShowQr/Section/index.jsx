import { Box, Typography } from "@mui/material";
import { SX } from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "../../../common/Button";
import QRCode from "qrcode";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Section = ({ channel }) => {
  const [tc] = useTranslation("channels");
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const getUrlBasedOnChannel = () => {
    switch (channel) {
      case "WhatsApp":
        return "https://wa.me/+34651348695";
      case "Instagram":
        return "https://instagram.com/protegetuviaje";
      case "Facebook Messenger":
        return "https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F394127107278538%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink%26source_id%3D1441792%26recurring_notification%3D0";
      case "Telegram":
        return "https://t.me/Protegetuviaje_latam_bot";
      default:
        return "https://web.whatsapp.com/send?phone=+34651348695";
    }
  };

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const options = {
          errorCorrectionLevel: "H",
          width: 248,
        };
        QRCode.toCanvas(canvasRef.current, getUrlBasedOnChannel(), options);
      } catch (error) {
        console.error("Error generating QR Code:", error);
      }
    };

    generateQRCode();
  }, []);

  const Steps = () => {
    const stepsArray = [
      tc("step_1"),
      `${channel} ${tc("step_2")}`,
      tc("step_3"),
    ];
    return (
      <Box
        component={"ol"}
        sx={{
          margin: 0,
          padding: "16px",
        }}
      >
        {stepsArray.map((step) => {
          return (
            <Box
              key={step}
              component={"li"}
              sx={{
                mb: "16px",
                color: "var(--primary-text-color)",
              }}
            >
              <Typography>{step}</Typography>
            </Box>
          );
        })}
      </Box>
    );
  };

  const OpenButton = () => {
    return (
      <a
        href={getUrlBasedOnChannel()}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Button
          variant={"outlined"}
          text={`${tc("open")} ${channel} ${
            channel === "WhatsApp" ? "Web" : ""
          }`}
          sx={{
            width: "auto",
            textTransform: "none",
            mt: "18px",
          }}
          color="secondary"
        />
      </a>
    );
  };

  return (
    <Box component={"section"} sx={SX.section}>
      <Box sx={SX.animatedDiv}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Box
            component={"img"}
            src="/black-arrow.svg"
            alt="go back"
            sx={{
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
          <Typography
            sx={{
              color: "var(--primary-text-color)",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            {tc("connect_to")} {channel}
          </Typography>
        </Box>
        <OpenButton />
        <Box
          component={"canvas"}
          id="canvas"
          ref={canvasRef}
          sx={{
            width: "100% !important",
            height: "auto !important",
          }}
        />
        <Steps />
      </Box>
    </Box>
  );
};

export default Section;
