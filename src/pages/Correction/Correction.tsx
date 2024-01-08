import { answers, questions } from "../../data";
import NoteCalc from "../../utils/NoteCalc";

import { Style } from "./Correction.style";
import { Box, Typography, Button } from "@mui/material";

interface CorrectionProps {
    handleClick: () => void;
}

export default function Correction({ handleClick }: CorrectionProps) {
  const Exam = JSON.parse(sessionStorage.getItem("ALGO-ANS") || "[]");

  const Note = NoteCalc(Exam, answers);

  const showUserAnswer = (Qst: number) => {
    const correctAnswer = Exam[Qst].indexOf(true);
    return questions[Qst].options[correctAnswer];
  };

  const showAnswer = (Qst: number) => {
    const correctAnswer = answers[Qst].indexOf(true);
    return questions[Qst].options[correctAnswer];
  };

  return (
    <Box sx={Style.Box}>
      <Typography>Votre Note est : {Note * 2} / 20</Typography>
      <Box sx={Style.Correction}>
        {questions.map((item) => (
          <Box sx={Style.question} key={item.id}>
            <Typography sx={Style.Qst}>
              {`${item.id}\\`} {item.question}
            </Typography>
            <Typography>
              your answer is : {showUserAnswer(item.id - 1)}
            </Typography>
            <Typography>
              the correct answer is : {showAnswer(item.id - 1)}
            </Typography>
          </Box>
        ))}
        <Button variant="contained" onClick={handleClick}>Ask for 2nd Correction</Button>
      </Box>
    </Box>
  );
}
