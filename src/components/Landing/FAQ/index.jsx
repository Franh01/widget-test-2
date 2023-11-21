import { Box, Typography } from "@mui/material";
import { SX } from "./styles";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const [tl] = useTranslation("landing");
  const faqArray = [
    {
      title: "¿Cómo funciona la cobertura ante Covid-19?",
      url: "https://protegetuviaje.freshdesk.com/support/solutions/articles/72000548222-%C2%BFc%C3%B3mo-funciona-la-cobertura-ante-covid-19-",
    },
    {
      title: "¿Cómo funciona el servicio?",
      url: "https://protegetuviaje.freshdesk.com/support/solutions/articles/72000548226-%C2%BFc%C3%B3mo-funciona-el-seguro-de-viaje-",
    },
    {
      title: "Tengo una emergencia, ¿Cuáles son los teléfonos?",
      url: "https://protegetuviaje.freshdesk.com/support/solutions/articles/72000548221-tengo-una-emergencia-%C2%BFcu%C3%A1les-son-los-tel%C3%A9fonos-de-emergencia-",
    },
    {
      title: "¿Cómo cambio la moneda de pago en mi cotización?",
      url: "https://protegetuviaje.freshdesk.com/support/solutions/articles/72000548216-%C2%BFc%C3%B3mo-cambiar-la-moneda-de-pago-de-mi-cotizaci%C3%B3n-",
    },
    {
      title: "¿Cuáles son los requisitos y documentos de viaje actualizados?",
      url: "https://www.protegetuviaje.com/requisitos-de-viaje/#/",
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
          {tl("frequently_asked_questions")}
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap="8px">
          {faqArray.splice(0, 5).map((q) => {
            return (
              <a
                key={q.title}
                style={{
                  textDecoration: "none",
                }}
                href={q.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography
                  color={"primary"}
                  sx={{
                    fontSize: ".875rem",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "pre",
                    width: "100%",
                    fontWeight: "500",
                    ":hover": {
                      color: "var(--color-main-dark)",
                    },
                  }}
                >
                  {q.title}
                </Typography>
              </a>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Faq;
