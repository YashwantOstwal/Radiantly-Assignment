import {motion,useAnimation } from 'framer-motion'

export default function MagicOnHover({title,clusterCloudOf4}) {
  const animateText = useAnimation();
  const animateCluster = useAnimation();
  const handleMouseEnter = ()=>{
    animateText.start({y:"0",opacity:0,transition:{
      opacity:{duration:0.3,ease:'easeOut'},
    }});
    animateCluster.start({y:"0",opacity:1,transition:{
      y:{duration:0.3}
    }});
  }

  const handleMouseLeave = ()=>{
    animateText.start({y:"2.3vw",opacity:1,transition:{
      ease:'easeOut',duration:0.3
    }
    })
    animateCluster.start({y:'2.3vw',opacity:0,transition:{
      y:{duration:0.3}
    }})
  }
  return (
    <div className = 'flex justify-center overflow-hidden'>
      <motion.div className = 'w-4/5 border-y border-neutral-100/20 anton-regular text-[5vw] text-white bg-black flex justify-center'
        onMouseEnter = {handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
          <div className = 'relative flex justify-center '>
              <motion.div className = 'uppercase text-nowrap'
                initial = {{y:"2.3vw"}} animate = {animateText}
                  >{title}</motion.div>
              <motion.div className = 'absolute inset-0'
                initial = {{y:'2.3vw',opacity:0}} animate = {animateCluster}
                >
                  <ClusterCloud clusterCloudOf4 = {clusterCloudOf4}/>
              </motion.div>
          </div>

      </motion.div>
    </div>
  )
}
function ClusterCloud({clusterCloudOf4}){
  return (
    <div className = 'h-full'>
      <span className = {`poppins-medium text-[1vw] text-black bg-[#BBBDFA] text-nowrap  absolute px-2 rounded-full top-[33%] left-[5%]`} >{clusterCloudOf4[0]}</span>
      <span className = {`poppins-medium text-[1vw] text-black bg-[#BBBDFA] text-nowrap absolute px-2 rounded-full top-[10%] right-[30%]`} >{clusterCloudOf4[1]}</span>
      <span className = {`poppins-medium text-[1vw] text-black bg-[#BBBDFA] text-nowrap absolute px-2 rounded-full bottom-[32%] left-[30%]`} >{clusterCloudOf4[2]}</span>
    <span className = {`poppins-medium text-[1vw] text-black bg-[#BBBDFA] text-nowrap absolute px-2 rounded-full right-[5%] bottom-[10%]`} >{clusterCloudOf4[3]}</span>
    </div>
  );
}
