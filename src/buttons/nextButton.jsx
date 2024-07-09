import { useRecoilState } from "recoil";
import { qnNumberAtom } from "../atoms";
import {motion} from 'framer-motion'

export default function NextButton() {
    const [qnNumber,setQnNumber] = useRecoilState(qnNumberAtom);
    const isLesserThanTen = qnNumber<10

  return <motion.div
            className = {`border-r-4 border-b-4 border-l border-t border-[#1F1634] cursor-grab py-2 px-2 ${isLesserThanTen && "opacity:50"} rounded-lg`}
            key = {qnNumber}
            onClick = {()=>isLesserThanTen && setQnNumber(qnNumber+1)} 
            initial = {{opacity:0,y:'50px'}}
            animate = {{opacity:1,y:'0px',transition:{delay:0.2,duration:0.3}}}
            whileHover = {{scale:0.95}}
        >
            Save & Next
        </motion.div>
}