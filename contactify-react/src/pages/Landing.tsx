import { Typography } from "@mui/material";
import { useUser } from "../hooks/useUser";

function Landing() {
  return (
    <>
      <Typography variant="h1">Contactify app</Typography>
      <Typography>Login to see your contacts</Typography>
    </>
  )
}

export default Landing