export const SX = {
  section: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
  },
  animatedDiv: {
    margin: "0 16px 8px",
    background: "#ffffff",
    border: "1px solid #f1f2f8",
    boxShadow: "1px 1px 10px 0px #b1b1b1",
    "@keyframes slide": {
      "0%": {
        transform: "translateY(40px)",
      },
      "100%": {
        transform: "translateY(0px)",
      },
    },
    animation: "slide 0.6s ease",
    padding: "24px 16px",
    borderRadius: "4px",
  },
};
