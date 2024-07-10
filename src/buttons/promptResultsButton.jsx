import { useState } from "react";
import { useSetRecoilState,useRecoilState } from "recoil";
import { inReviewMode, qnNumberAtom } from "../atoms";
import calculateScore from "../utils/calculateScore";
import {motion} from 'framer-motion'

export default function PromptResultsButton({questions}){
    const [showResults,setShowResults] = useState(false)
    const setInReview = useSetRecoilState(inReviewMode);
    const [qnNumber,setQnNumber] = useRecoilState(qnNumberAtom)
    const score = calculateScore(questions);

    function handleSetReviewMode(){
        setShowResults(false);
        setInReview(true);
        setQnNumber(1);
    }
    return(
        <>
            <motion.button 
                className = {`border-r-4 border-b-4 border-l border-t border-[#1F1634] py-2 px-2 cursor-grab rounded-lg`}
                key = {qnNumber}
                onClick = {()=>setShowResults(true)} 
                initial = {{opacity:0,y:'50px'}}
                animate = {{opacity:1,y:'0px',transition:{delay:0.2,duration:0.3}}}
                whileHover = {{scale:0.95}}
            >
                    End Game
            </motion.button>
            {showResults && 
                <div className = 'absolute inset-0 backdrop-blur-sm flex justify-center items-center'>
                    <div className = 'poppins-bold md:w-[50%] w-[80%] aspect-[2/1] bg-white border-4 lg:border-8 border-black rounded-xl flex flex-col justify-center items-center gap-4'>
                        <div className = ''>Score: {score}/10</div>
                        <button className = 'bg-gray-400 px-3 py-2 rounded-full' onClick = {handleSetReviewMode}>Click to Review Answers</button>
                    </div>
                </div>
            }
        </>
    )
} 
