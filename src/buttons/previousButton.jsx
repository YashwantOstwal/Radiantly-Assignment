import { useRecoilState } from "recoil";
import { qnNumberAtom } from "../atoms";
import {motion} from 'framer-motion'
export default function PreviousButton() {
    const [qnNumber,setQnNumber] = useRecoilState(qnNumberAtom);
    const isGreaterThanOne = qnNumber>1
    return <motion.button 
                onClick = {()=>isGreaterThanOne && setQnNumber(qnNumber-1)} 
                key = {qnNumber}
                className = {`border-r-4 border-b-4 border-l border-t cursor-grab border-[#1F1634] py-2 px-2 ${isGreaterThanOne && "opacity:50"} rounded-lg`}
                initial = {{opacity:0,y:'50px'}}
                animate = {{opacity:1,y:'0px',transition:{delay:0.2,duration:0.3}}}
                whileHover = {{scale:0.95}}
            >
                Previous
            </motion.button>
    }