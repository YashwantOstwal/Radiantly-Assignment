import { useRecoilValue } from 'recoil';
import {qnNumberAtom} from './atoms.jsx'
import MCQTemplate from './components/mcqTemplate.jsx';
import NextButton from './buttons/nextButton.jsx';
import PreviousButton from './buttons/previousButton.jsx';
import PromptResultsButton from './buttons/promptResultsButton.jsx';
import usefetchQuestions from './customHooks/usefetchQuestions.jsx';
import TopBar from './components/topBar.jsx';
import TechnologiesUsed from './components/technologiesUsed.jsx';


export default function App() {
  const questions = usefetchQuestions();
  const qnNumber = useRecoilValue(qnNumberAtom);
  return (
    <div className = 'bg-neutral-100 h-screen'>
      <div className = 'flex flex-col gap-10 text-[2.7vh] poppins-medium overflow-y-auto'>
          <TopBar/>
          <MCQTemplate qn = {questions[qnNumber-1]}/>
        <div className = 'py-5 flex justify-center gap-4 flex-wrap'>
          <PreviousButton/>
          <NextButton/>
          <PromptResultsButton questions = {questions}/>
        </div>
      </div>
      <TechnologiesUsed/>
    </div>
  )
}


