import React, { useContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { NavBarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    

    const [navOpen,setNavOpen] = useContext(NavBarContext)
    const location = useLocation()
    const currentPath = location.pathname;

    let logosrc;
    if (currentPath === '/about' || currentPath === '/models') {
        logosrc = "https://img.icons8.com/?size=100&id=sLt0JbN60UpO&format=png&color=000000"
    }
    else{
        logosrc = "https://img.icons8.com/?size=100&id=sLt0JbN60UpO&format=png&color=FFFFFF"
    }

    const NavBarRef = useRef(null)
    return (
        <div className='z-4 fixed top-0 w-full h-17 flex justify-between items-start'>

            <Link to='/' ><div className='logo p-4'>
                <img src={logosrc} alt="check icon" className="lg:w-11 lg:h-11 h-9 w-9 " />
            </div>
            </Link>

            <div onClick={()=>{setNavOpen(true)}}  onMouseEnter={() => {
                NavBarRef.current.style.height = "100%"
            }}
                onMouseLeave={() => {
                    NavBarRef.current.style.height = "0%"
                }}
                className='lg:h-[6vh] h-[5vh] group w-[16vw] relative'>
                <div className='h-full w-full bg-black flex justify-center items-center'>
                    <div className='flex flex-col gap-1.5'>
                        <div className='lg:w-16 w-10 group-hover:bg-black z-40 h-[0.2vh] bg-white rounded'></div>
                        <div className='lg:w-12 w-7 group-hover:bg-black z-40 h-[0.2vh] bg-white rounded'></div>
                    </div>
                </div>
                <div ref={NavBarRef} className='transition-all z-30 w-full bg-orange-600 flex items-center justify-center top-0 absolute h-0'>
                </div>
            </div>

        </div>
    )
}

export default Navbar