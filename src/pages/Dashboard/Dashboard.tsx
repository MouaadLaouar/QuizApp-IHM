
import { Box, Typography } from "@mui/material";
import { Style } from "./Dashboard.style";

/////
import { Card, CardActions, CardContent, Button} from "@mui/material";
import useLevel from "../../hooks/useLevel";

import code from '../../assets/code.svg';



const Exams = [{
  Name: 'Algo',
  icon: code,
  Passed: false,
}];

export default function Dashboard() {
  const { NextLevel } = useLevel();

  const PassExam = () => {
    console.log("jkdf")
    NextLevel();
  }
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
            <Button disabled={!item.Passed}>See the correction</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
