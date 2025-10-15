
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {

const currentPathe = useLocation().pathname


const StairParentRef = useRef(null)
const PageRef = useRef(null)

  useGSAP(function(){

    const timeLine = gsap.timeline()
    timeLine.to(StairParentRef.current, {
      display: "block",
    })
    timeLine.from(".stair", {
      y: "-100%",
      stagger:{
        amount: -0.25,
      }   
       
    })
    timeLine.to(".stair", {
      y: "100%",
      stagger:{
        amount: -0.25,
      }  
    })
    timeLine.to(StairParentRef.current, {
      display: "none",
    })
    timeLine.to(".stair", {
      y: "0%",   
    })

    gsap.from(PageRef.current, {
      delay: 1.2,
      opacity: 0,
      scale: 1.5,
    })
  }, [currentPathe])

  return (
    <div >
      <div ref={StairParentRef} className='h-screen w-full fixed z-20 top-0  '>
        <div className='h-full w-full flex '>
          <div className='stair h-full bg-black w-1/6'></div>
          <div className='stair h-full bg-black w-1/6'></div>
          <div className='stair h-full bg-black w-1/6'></div>
          <div className='stair h-full bg-black w-1/6'></div>
          <div className='stair h-full bg-black w-1/6'></div>
          <div className='stair h-full bg-black w-1/6'></div>
        </div>
     </div>
     <div ref={PageRef} >
        {props.children}
      </div>
    </div>
  )
}

export default Stairs