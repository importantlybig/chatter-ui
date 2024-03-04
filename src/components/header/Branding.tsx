import { Typography } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import router from "../Routes";
import { authenticatedVar } from "../../constants/authenticated";
import { useReactiveVar } from "@apollo/client";

const Branding = () => {
  const authenticated = useReactiveVar(authenticatedVar);

  return (
    <>
      <ForumIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={authenticated ? () => router.navigate("/") : () => router.navigate("/login")}
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          cursor: "pointer",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        CHATTER
      </Typography>
    </>
  );
};

export default Branding;
