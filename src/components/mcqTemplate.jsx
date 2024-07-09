import {Info} from '../assets/svgComponents.jsx'
import {motion} from 'framer-motion'
import { useReducer} from 'react'
import {inReviewMode, qnNumberAtom} from '../atoms.jsx'
import { useRecoilValue } from 'recoil';

export let selectedAnswers = {};
export default function MCQTemplate({qn}) {
  const qnNumber = useRecoilValue(qnNumberAtom)
  return (
    <>
        <div className = 'px-3'>
            <div className = 'flex justify-between items-center'>
                <span>Question {qnNumber} of 10</span>
                <div className = 'flex gap-2'>
                    <Info/>
                </div>
            </div>
            <div className = 'py-4'>
              {qn?.question?.text}
            </div>
              <Options options = {qn && [...qn.incorrectAnswers,qn.correctAnswer]} qn={qn}/>
        </div>
    </>
  )
}
function Options({options,qn}){
  const qnNumber  = useRecoilValue(qnNumberAtom)
  const [ignored, forceUpdate] = useReducer(x=>++x,0);
  const inReview = useRecoilValue(inReviewMode)
  function handleClick(option){
    selectedAnswers[`answer${qnNumber}`] = option
    forceUpdate();
  } 
  return (
    <div className = 'gap-4 grid lg:grid-cols-2 max-lg:grid-rows-4 px-5 '>
    {options?.map((option)=>
      <motion.button 
        key = {option} 
        className= {`border border-[#1F1634] relative py-[2%] text-center rounded-md text-wrap ${inReview && option == qn.correctAnswer && "bg-[#13ed6a]"} ${inReview && option == selectedAnswers[`answer${qnNumber}`] && qn.correctAnswer != selectedAnswers[`answer${qnNumber}`] ? "bg-[#e61717]":''} ${!inReview && selectedAnswers[`answer${qnNumber}`] ==option && "bg-[#13ed6a]"}`}
        initial={{boxShadow: "6px 6px 0 rgba(31, 22, 52,1)"}}
        whileHover = {!inReview && {scale:0.96}}
        onClick = {()=>{!inReview && handleClick(option)}} 
      >
        {option}
      </motion.button>
  )}
    </div>
  );
}
