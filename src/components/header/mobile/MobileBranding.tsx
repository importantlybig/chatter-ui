import { Typography } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import router from "../../Routes";
import { authenticatedVar } from "../../../constants/authenticated";
import { useReactiveVar } from "@apollo/client";

const MobileBranding = () => {
  const authenticated = useReactiveVar(authenticatedVar);

  return (
    <>
      <ForumIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        onClick={
          authenticated
            ? () => router.navigate("/")
            : () => router.navigate("/login")
        }
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
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

export default MobileBranding;
