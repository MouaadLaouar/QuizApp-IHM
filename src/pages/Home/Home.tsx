import { Style } from "./Home.style";
import { Box, Typography, Button } from "@mui/material";

import useLevel from "../../hooks/useLevel";

export default function Home() {

  const { NextLevel } = useLevel();

  return (
    <Box sx={Style.Box}>
      <Typography variant="h2" sx={Style.text}>
        Welcome to the Quiz App!
      </Typography>
      <Button variant="contained" onClick={NextLevel}>
        Get Started
      </Button>
    </Box>
  );
}
