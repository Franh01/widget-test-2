import { Avatar, Box } from "@mui/material";

const Header = () => {
  const agents = [
    "https://media.messagebird.com/v1/media/02bbc509-5f76-4c35-956c-fc989064b30d",
    "https://media.messagebird.com/v1/media/1c7ef7ca-0be8-4b85-9521-697446cb347f",
    "https://media.messagebird.com/v1/media/3911a81a-a74d-4531-94b0-8c1422010a68",
    "https://media.messagebird.com/v1/media/47a072aa-d9c3-45cc-8229-2e8d45e98234",
    "https://media.messagebird.com/v1/media/4b4436e6-63f2-4958-b748-7ada0a7b48b4",
  ];

  return (
    <Box
      component={"header"}
      sx={{
        height: "205px",
        width: "100%",
        background: "#ffa35a",
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
        padding: "40px 32px",
      }}
    >
      <Box
        component={"img"}
        src={"/widget-icon.svg"}
        alt="Logo"
        height={"50px"}
      />
      <Box
        sx={{
          display: "flex",
          width: "150px",
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        {agents.splice(0, 5).map((url, index) => {
          return (
            <Avatar
              src={url}
              key={url}
              sx={{
                height: "45px",
                width: "45px",
                border: "2px solid var(--color-main)",
                position: "absolute",
                zIndex: index,
                left: `calc(-20px * ${-index * 1.3})`,
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Header;
