import { selectedAnswers } from "../components/mcqTemplate";
export default function calculateScore(questions){
   let score = 0;
    for(let i=0;i<questions.length;i++){
        if(questions[i].correctAnswer == selectedAnswers[`answer${i+1}`]){
            score++;
        }
    }
    return score;
}