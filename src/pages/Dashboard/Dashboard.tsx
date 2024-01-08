import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Style } from "./Dashboard.style";

/////
import { Card, CardActions, CardContent, Button} from "@mui/material";
import useLevel from "../../hooks/useLevel";

// import code from '../../assets/code.svg';

import { EXAMS } from "../../Jotai";
import { useAtom } from "jotai";
import Correction from "../Correction";

export default function Dashboard() {
  const [seeCorrection, setCorrection] = useState(false)
  const [Exams] = useAtom(EXAMS)
  const { NextLevel } = useLevel();

  const PassExam = () => {
    NextLevel();
  }

  const handleClick = () => {
    setCorrection(!seeCorrection);
  }

  if(seeCorrection) return (<Correction handleClick={handleClick} />)

  return (
    <Box sx={Style.Box}>
      {Exams.map((item, index) => (
        <Card key={index} sx={Style.Card}>
          <CardContent sx={Style.CardContent}>
            <img src={item.icon} alt="#" />
            <Typography sx={{ paddingLeft: "10px" }}>{item.Name}</Typography>
          </CardContent>
          <CardActions>
            <Button disabled={item.Passed} onClick={PassExam}>
              Pass the Exam
            </Button>
            <Button disabled={!item.Passed} onClick={handleClick}>See the correction</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
