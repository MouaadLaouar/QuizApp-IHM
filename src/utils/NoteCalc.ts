/* eslint-disable @typescript-eslint/no-explicit-any */
const NoteCalc = (Exam: any[], Corrige: any[]) => {
    let result = 0;
    for (let i = 0; i < Exam.length; i++) {
        for (let j = 0; j < Exam[i].length; j++) {
            if (Exam[i][j] === Corrige[i][j] && (Exam[i][j] === true)) {
                result = result + 1;
            }
        }
    }

    return result;
}

export default NoteCalc;