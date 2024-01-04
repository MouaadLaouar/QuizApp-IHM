
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { USER } from "../../Jotai";
import { useAtom } from "jotai";

export default function NavBar() {
  const [user] = useAtom(USER);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#31304D" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            QUIZ APP
          </Typography>
          <Typography variant="h6" component="div" sx={{paddingRight: "10px"}}>
            { user.nom }
          </Typography>
          <Typography variant="h6" component="div" >
            { user.prenom }
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}