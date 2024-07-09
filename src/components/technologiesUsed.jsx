import React, { useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import MagicOnHover from './magicOnHover'
export default function TechnologiesUsed() {
  const [show,setShow] = useState(false);
  const [onClick,setOnClick] = useState(false);

  function handleClick(){
    setShow(prevState=>!prevState);
    setOnClick(prevState=>!prevState);
    }

  const variants = {
    opacity0:{opacity:0,y:"10px"},
    opacity1:{opacity:1,y:"0px",transition:{delay:0.2,duration:0.3}}
  }
  return (
    <div className = 'max-md:hidden'>
        <div className = {`z-20 fixed bottom-9 left-0 ${show && "w-[90%] h-[70%]"} max-w-[550px] px-9 `}>
          <div className = 'flex flex-col-reverse h-full gap-4'>
            <button onClick =  {handleClick} className = ' relative backdrop-blur-sm px-3 rounded-full w-fit text-black py-2 anton-sc uppercase text-base border border-white/50'><motion.div className = 'absolute -z-10 inset-0 rounded-full bg-[#BBBDFA] opacity-65'
              initial = {{width:"0%"}}
              animate = {onClick?{width:"100%"}:{width:"0%"}}
              transition = {{duration:0.5}}/>Technologies Used</button>

            <AnimatePresence>
              {show && 
              <>
                <motion.div variants = {variants} initial = "opacity0" animate = "opacity1" exit = "opacity0" className = 'h-[80%] bg-black border-black border-4 rounded-xl pl-4 pr-3 py-2'>
                <div className = 'h-full overflow-y-scroll'>
                  <MagicOnHover title = "ReactJS" clusterCloudOf4={['Components','Hooks','Functions','Props'] } />
                  <MagicOnHover title = "Tailwind CSS" clusterCloudOf4={['Flexbox','Grid','Typography','Responsivity'] } />
                  <MagicOnHover title = "Axios" clusterCloudOf4={['MCQ\'s','the-trivia-api.com/v2/questions/','Api integration','asynchronous'] } />
                  <MagicOnHover title = "Framer motion" clusterCloudOf4={['motion','translation','animate','whileHover'] } />
                </div>
                </motion.div>
              </>}
            </AnimatePresence>
          </div>
        </div>
        {show && 
          <motion.div className = 'fixed inset-0 z-10 backdrop-blur-sm backdrop-sepia'
          initial = {{opacity:0}} 
          animate = {{opacity:1}}
          />}
  </div>)
          
}

