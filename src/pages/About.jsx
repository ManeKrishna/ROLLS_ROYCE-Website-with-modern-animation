import React, { useRef } from 'react'
import Logo from '../components/home/Logo'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const About = () => {

  gsap.registerPlugin(ScrollTrigger)
  const ImageDivRef = useRef(null)
  const ImageRef = useRef(null)

  const ImageArray = ['https://airinsight.com/wp-content/uploads/2023/02/52561331130_44379a428b_c.jpg',
    'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/6-5-careers/components/03_graduate_programm/03_GRADUATE_PROGRAM_KENZA_TESTIMONIAL_D.jpg/jcr:content/renditions/cq5dam.web.1920.webp',
    'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/6-5-careers/components/03_graduate_programm/03_GRADUATE_PROGRAM_CARA_TESTIMONIAL_D.jpg/jcr:content/renditions/cq5dam.web.1920.webp',
    'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/6-5-careers/components/03_graduate_programm/03_GRADUATE_PROGRAM_ANOSHAM_TESTIMONIAL_D.jpg/jcr:content/renditions/cq5dam.web.1920.webp',
    'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/6-5-careers/components/05_apprenticeships/02_APPRENTICESHIPS_PROGRAM_ESTEFANIA_TESTIMONIAL_D-min.jpg/jcr:content/renditions/cq5dam.web.1920.webp',
    'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/6-5-careers/components/05_apprenticeships/01_APPRENTICESHIPS_PROGRAM_GEORGE_TESTIMONIAL_D-min.jpg/jcr:content/renditions/cq5dam.web.1920.webp',
    'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/6-5-careers/components/03_graduate_programm/03_GRADUATE_PROGRAM_MATT_TESTIMONIAL_D.jpg/jcr:content/renditions/cq5dam.web.1920.webp',
    'https://www.rolls-roycemotorcars.com/content/dam/rrmc/dealers/prague_rollsroycemotorcars_com/team-bio/rrmc-jindrich-jezdik-prague.jpeg/_jcr_content/renditions/cq5dam.web.1920.jpeg',
    'https://www.rolls-roycemotorcars.com/content/dam/rrmc/dealers/prague_rollsroycemotorcars_com/team-bio/rrmc-vaclav-cvejn-prague.jpeg/_jcr_content/renditions/cq5dam.web.1920.jpeg',]

  useGSAP(function() {
    gsap.to(ImageDivRef.current, {
      scrollTrigger: {
        trigger: ImageDivRef.current,
        start: "top 0%",
        end: "top -48%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        pinType: "transform",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let ImageIndex;
          if (elem.progress < 1) {
            ImageIndex = Math.floor(elem.progress * (ImageArray.length - 1))
          } else {
            ImageIndex = ImageArray.length - 1
          }

          if (ImageRef.current) {
            ImageRef.current.src = ImageArray[ImageIndex]
          }
        }
      }
    })
  })

  return (

    <div className='font-[font2] bg-white'>

      <div className="section1 py-1">  
        {/* Responsive image carousel - hidden on mobile, adjusted positioning on tablets and desktops */}
        <div ref={ImageDivRef} className='hidden md:block absolute md:top-[25vw] lg:top-[20vw] md:left-[25vw] lg:left-[29.90vw] md:h-[35vh] lg:h-[40vh] md:w-[24vh] lg:w-[27vh] rounded-3xl overflow-hidden'>
          <img ref={ImageRef} className='transition-all h-full w-full object-cover' src="https://airinsight.com/wp-content/uploads/2023/02/52561331130_44379a428b_c.jpg" alt="carousel" />
        </div>

        {/* Responsive heading section */}
        <div className='relative mt-[20vh] md:mt-[55vh] px-4 md:px-0'>  
          <div className='text-[12vw] md:text-[7.5vw] text-black justify-center flex items-center uppercase leading-[13vw] md:leading-[8vw] flex-wrap md:flex-nowrap'>
            MASTERING 
            <div className='h-[18vw] w-[18vw] md:h-[11vw] md:w-[12vw] pl-2 md:pl-4 -mt-4 md:-mt-9 overflow-hidden rounded-full'>
              <Logo />
            </div>
            MODERN
          </div>
          <div className='text-[12vw] md:text-[7.5vw] text-black justify-center flex items-center uppercase leading-[13vw] md:leading-[8vw]'>
            LUXURY
          </div>
        </div>

        {/* Responsive description text */}
        <div className='text-black px-6 md:px-10 md:pl-[50%] mt-8 md:mt-4'>
          <p className='text-base md:text-xl lg:text-2xl font-[font1] leading-relaxed'>
            Creation is the meeting point of royalty and modern mastery. Every car is designed as a statement of elegance, power, and individuality. From flawless craftsmanship to cutting-edge innovation, we shape icons that embody prestige in the present and the future. More than machines, our creations are modern crowns—crafted for those who rule with style, vision, and quiet confidence.
          </p>
        </div>
      </div>

      <div className="section2 h-screen">
        
      </div>

    </div>

  )
}

export default About