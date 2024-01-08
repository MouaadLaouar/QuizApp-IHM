import { useState } from "react";
import { questions } from "../../data";

import { Level, EXAMS } from "../../Jotai";
import { useAtom } from "jotai";

import { Style } from "./Exams.style";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";

export default function Exams() {
  const [LEVEL, setLEVEL] = useAtom(Level);
  
  const [Exams, setExams] = useAtom(EXAMS);

  const [Qst, setQst] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleCheckboxChange = (index: number) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = !newSelectedOptions[index];
    setSelectedOptions(newSelectedOptions);
  };

  const error = selectedOptions.filter((v) => v).length !== 1;

  const handleNext = () => {
    const storedResults = JSON.parse(sessionStorage.getItem("ALGO-ANS") || "[]");
    storedResults.push(selectedOptions);
    sessionStorage.setItem("ALGO-ANS", JSON.stringify(storedResults));

    // Move to the next question
    setQst(Qst + 1);
    // Reset selectedOptions for the new question
    setSelectedOptions(Array(questions[Qst + 1].options.length).fill(false));
  }

  const handleFinish = () => {
    const storedResults = JSON.parse(sessionStorage.getItem("ALGO-ANS") || "[]");
    storedResults.push(selectedOptions);
    sessionStorage.setItem("ALGO-ANS", JSON.stringify(storedResults));

    setLEVEL(LEVEL - 1);
    setExams([{
      ...Exams[0],
      Passed: true,
    }]);
    console.log(Exams)
  }

  return (
    <Box sx={Style.Box}>
      <Box sx={Style.Content}>
        <Typography sx={Style.Qst}>
          {`${Qst + 1}\\`} {questions[Qst].question}
        </Typography>
        <FormControl sx={Style.Group} error={error}>
          <FormGroup>
            {questions[Qst].options.map((item, index) => (
              <FormControlLabel
                key={index}
                label={item}
                control={
                  <Checkbox
                    checked={selectedOptions[index] || false}
                    onChange={() => handleCheckboxChange(index)}
                  />
                }
              />
            ))}
          </FormGroup>
          <FormHelperText>You can pick one answer</FormHelperText>
        </FormControl>
        {Qst === questions.length - 1 ? (
          <Button
            variant="contained"
            onClick={handleFinish}
          >
            Finish
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleNext}
          >
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
}
