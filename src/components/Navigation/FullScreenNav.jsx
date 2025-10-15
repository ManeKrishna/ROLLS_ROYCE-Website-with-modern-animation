import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import {  NavBarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {

    
   
    const [navOpen,setNavOpen]= useContext(NavBarContext)
    console.log(navOpen)

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block',
            duration: 0
        })
        // Stairs wipe open - each stair slides right to reveal content
        tl.to('.stairing', {
            xPercent: 100,
            duration: 0.9,
            stagger: {
                amount: 0.2
            }
        }, 0)
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            duration: 0.6,
            stagger: {
                amount: 0.3
            }
        }, 0.4)
        tl.to('.navlink', {
            opacity: 1,
            duration: 0.4
        }, 0.3)
    }

    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            duration: 0.3,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0,
            duration: 0.2
        }, 0)
        // Stairs wipe closed - each stair slides left to cover content
        tl.to('.stairing', {
            xPercent: 0,
            duration: 0.8,
            stagger: {
                amount: 0.3
            }
        }, 0)
        tl.to('.fullscreennav', {
            display: 'none',
            duration: 0
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])
    return (
        <div  className='fullscreennav bg-black hidden z-50  overflow-hidden h-screen w-full absolute '>
            <div className='h-screen w-full fixed  top-0  '>
                <div className='h-full w-full flex '>
                    <div className='stairing h-full bg-black w-1/6'></div>
                    <div className='stairing h-full bg-black w-1/6'></div>
                    <div className='stairing h-full bg-black w-1/6'></div>
                    <div className='stairing h-full bg-black w-1/6'></div>
                    <div className='stairing h-full bg-black w-1/6'></div>
                    <div className='stairing h-full bg-black w-1/6'></div>
                </div>
            </div>
            <div  className='fullNavRef relative'>
                <div className='navlink w-full flex justify-between mr-4' >
                    <div className='p-4'>
                        <img src="https://img.icons8.com/?size=100&id=sLt0JbN60UpO&format=png&color=FFFFFF" alt="check icon" className="lg:w-11 lg:h-11 h-9 w-9" />
                    </div>
                    <div onClick={()=>{setNavOpen(false)}} className='crossX  relative lg:w-30 lg:h-30  w-15 h-15 flex justify-center items-center cursor-pointer '>
                        <div className='cross absolute lg:top-15 top-8 w-full h-[0.1vh] bg-white -rotate-45 '></div>
                        <div className='cross absolute lg:top-15 top-8 w-full h-[0.1vh] bg-white  rotate-45 ' ></div>
                    </div>
                </div>
                <div className='lg:mt-15 mt-30'>
                    <Link to='/models' onClick={()=>{setNavOpen(false)}}><div className='relative link origin-top border-t-[0.1vh] border-white'>
                        <h1 className='font-[font1] text-white uppercase lg:text-[13vh] text-[6vh] text-center '>Models</h1>
                        <div className='moveLink absolute text-black flex bg-orange-600 top-0 '>
                            <div className='moveX flex items-center  border-t-[0.1vh] border-white'>
                                <h2 className='whitespace-nowrap font-[font2] uppercase lg:text-[13vh] text-[6vh] text-center'>Models of Excellence</h2>
                                <img className='lg:h-28 h-15 lg:mx-10 mx-5 rounded-full shrink-0 lg:w-62 w-50 object-cover' src="public/media/model 1.png" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] uppercase lg:text-[13vh] text-[6vh] text-center'>Models of Excellence</h2>
                                <img className='lg:h-28 h-15 lg:mx-10 mx-5 rounded-full shrink-0 lg:w-62 w-50 object-cover' src="public/media/model 2.png" alt="" />
                            </div>
                            <div className='moveX flex items-center  border-t-[0.1vh] border-white'>
                                <h2 className='whitespace-nowrap font-[font2] uppercase lg:text-[13vh] text-[6vh] text-center'>Models of Excellence</h2>
                                <img className='lg:h-28 h-15 lg:mx-10 mx-5 rounded-full shrink-0 lg:w-62 w-50 object-cover' src="public/media/model 1.png" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] uppercase lg:text-[13vh] text-[6vh] text-center'>Models of Excellence</h2>
                                <img className='lg:h-28 h-15 lg:mx-10 mx-5 rounded-full shrink-0 lg:w-62 w-50 object-cover' src="public/media/model 2.png" alt="" />
                            </div>
                        </div>
                    </div></Link>
                    <Link to='/about'onClick={()=>{setNavOpen(false)}} ><div className='relative link origin-top border-t-[0.1vh] border-white'>
                        <h1 className='font-[font1] text-white uppercase lg:text-[13vh] text-[6vh] text-center '>Profile</h1>
                        <div className='moveLink absolute text-black flex bg-orange-600 top-0 '>
                            <div className='moveX flex items-center  border-t-[0.1vh] border-white'>
                                <h2 className='whitespace-nowrap font-[font2] uppercase lg:text-[13vh] text-[6vh] text-center'>The Royal Profile</h2>
                                <img className='lg:h-28 h-15 lg:mx-10 mx-5 rounded-full shrink-0 lg:w-62 w-50 object-cover' src="public/media/model 1.png" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] uppercase lg:text-[13vh] text-[6vh] text-center'>The Royal Profile</h2>
                                <img className='lg:h-28 h-15 lg:mx-10 mx-5 rounded-full shrink-0 lg:w-62 w-50 object-cover' src="public/media/model 2.png" alt="" />
                            </div>
                            <div className='moveX flex items-center  border-t-[0.1vh] border-white'>
                                <h2 className='whitespace-nowrap font-[font2] uppercase lg:text-[13vh] text-[6vh] text-center'>The Royal Profile</h2>
                                <img className='lg:h-28 h-15 lg:mx-10 mx-5 rounded-full shrink-0 lg:w-62 w-50 object-cover' src="public/media/model 1.png" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] uppercase lg:text-[13vh] text-[6vh] text-center'>The Royal Profile</h2>
                                <img className='lg:h-28 h-15 lg:mx-10 mx-5 rounded-full shrink-0 lg:w-62 w-50 object-cover' src="public/media/model 2.png" alt="" />
                            </div>
                        </div>
                    </div></Link>
                    <Link to='/' onClick={()=>{setNavOpen(false)}}><div className='relative link origin-top border-y-[0.1vh] border-white'>
                        <h1 className='font-[font1] text-white uppercase lg:text-[13vh] text-[6vh] text-center '>Boutique</h1>
                        <div className='moveLink absolute text-black flex bg-orange-600 top-0 '>
                            <div className='moveX flex items-center  border-t-[0.1vh] border-white'>
                                <h2 className='whitespace-nowrap font-[font2] uppercase lg:text-[13vh] text-[6vh] text-center'>Boutique of Perfection</h2>
                                <img className='lg:h-28 h-15 lg:mx-10 mx-5 rounded-full shrink-0 lg:w-62 w-50 object-cover' src="public/media/model 1.png" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] uppercase lg:text-[13vh] text-[6vh] text-center'>Boutique of Perfection</h2>
                                <img className='lg:h-28 h-15 lg:mx-10 mx-5 rounded-full shrink-0 lg:w-62 w-50 object-cover' src="public/media/model 2.png" alt="" />
                            </div>
                            <div className='moveX flex items-center  border-t-[0.1vh] border-white'>
                                <h2 className='whitespace-nowrap font-[font2] uppercase lg:text-[13vh] text-[6vh] text-center'>Boutique of Perfection</h2>
                                <img className='lg:h-28 h-15 lg:mx-10 mx-5 rounded-full shrink-0 lg:w-62 w-50 object-cover' src="public/media/model 1.png" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] uppercase lg:text-[13vh] text-[6vh] text-center'>Boutique of Perfection</h2>
                                <img className='lg:h-28 h-15 lg:mx-10 mx-5 rounded-full shrink-0 lg:w-62 w-50 object-cover' src="public/media/model 2.png" alt="" />
                            </div>
                        </div>
                    </div></Link>


                </div>
            </div>


        </div>
    )
}

export default FullScreenNav