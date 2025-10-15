
import ModelsCard from '../components/Projects/ModelsCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Models = () => {

  const models = [{
    image1: 'https://wallpapercat.com/w/full/7/5/1/161163-1920x1080-desktop-1080p-rolls-royce-wallpaper.jpg',
    image2: 'https://motionbgs.com/media/5442/rolls-royce-black-badge.jpg'
  }, {
    image1: 'https://mycarheaven.com/wp-content/smush-webp/2024/08/Rolls-Royce-Sweptail-1-1200x800.jpg.webp',
    image2: 'https://news.dupontregistry.com/wp-content/uploads/2025/02/BB-25-FRONT-3-4L-R4-16x9-LORES-scaled.jpg'
  }, {
    image1: 'https://w0.peakpx.com/wallpaper/885/36/HD-wallpaper-rolls-royce-phantom-ewb-rolls-royce-phantom-ewb-rolls-royce-phantom-rolls-royce-cars-2017-cars.jpg',
    image2: 'https://static0.topspeedimages.com/wordpress/wp-content/uploads/2023/01/rolls-royce-wraith.jpg?w=1600&h=900&fit=crop'
  },
  {
    image1: 'https://images.pexels.com/photos/5046305/pexels-photo-5046305.jpeg?cs=srgb&dl=pexels-abdul-rahman-2669315-5046305.jpg&fm=jpg',
    image2: 'https://wallpapers.com/images/featured/rolls-royce-r5vl92b5wzzbzvjz.jpg'
  }
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })


  return (
    <div className='p-3 mb-[100vh]'>
      <div className='pt-[40vh] '>
        <h2 className='font-[font2] lg:text-[10vw] text-[20vw]'>Models</h2>
      </div>
      <div className='lg:-mt-10 mt-0 lol'>
        {models.map((elem, idx) => {
          return (
            <div key={idx} className='hero h-auto md:h-[400px] w-full flex flex-col md:flex-row gap-3 mb-3'>
              <ModelsCard image1={elem.image1} image2={elem.image2} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Models