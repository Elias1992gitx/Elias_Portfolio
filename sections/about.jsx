import Image from 'next/image'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsMenuAppFill } from 'react-icons/bs'
import { FaBlackTie, FaUserCheck } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { IoPerson } from 'react-icons/io5'
import eliasabout from '../public/images/eliasabout.jpg'

const About = () => {
  const [isAbout, setIsAbout] = useState(false)

  const aboutRef = useRef()
  const profile2Ref = useRef()
  const aboutInfoRef = useRef()

  useEffect(() => {
    if (aboutRef.current) {
      const getScreenWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth

      const aboutObserver = new IntersectionObserver(
        ([aboutEntry]) => {
          setIsAbout(aboutEntry.isIntersecting)
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? '-100px' : '-300px'}`,
        }
      )

      aboutObserver.observe(aboutRef.current)

      if (isAbout) {
        profile2Ref.current.classList.add('slide-in')
        aboutInfoRef.current.classList.add('slide-in')
      } else {
        profile2Ref.current.classList.remove('slide-in')
        aboutInfoRef.current.classList.remove('slide-in')
      }
    }
  }, [isAbout, aboutRef])

  return (
    <Fragment>
      <section
        className="shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden"
        id="about"
        ref={aboutRef}
      >
        <h2 className="text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3">
          <FaUserCheck /> About me
        </h2>
        <div className="pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]">
          <div>
            <Image
              alt="about image"
              className={
                'mt-4 shadow-zinc-300 dark:shadow-zinc-700 shadow-sm transition-all duration-700 translate-x-[-900px] bg-blue-200 m-auto bg-cover bg-no-repeat rounded-lg object-contain'
              }
              height={800}
              ref={profile2Ref}
              src={eliasabout}
              width={450}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              fetchpriority="high" // Corrected attribute
            />
          </div>
          <div
            className="text-lg translate-x-[900px] opacity-0 transition-all duration-700 md:mt-0 md:w-[80%] text-center md:text-left rounded"
            ref={aboutInfoRef}
          >
            <p className="text-2xl text-center md:text-left font-semibold text-red-800 dark:text-[#07d0e5]">
              Elias Chane
            </p>
            <p className="text-center md:text-left text-red-800 dark:text-[#07d0e5] mt-1">
              Full-Stack Developer
            </p>
            <div className="mt-5 justify-evenly text-justify">
              <p className="text-gray-600 dark:text-gray-300">
                I'm Elias Chane, a Junior Software Engineer with a strong
                foundation in Full-Stack Web Development and a growing expertise
                in Machine Learning. I graduated from Arba Minch University,
                where I honed my skills in creating dynamic web applications and
                exploring innovative AI solutions.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-normal gap-3">
              <div className="bg-[#f4eded] dark:bg-[#312f2f] hover:bg-[#c7c6c6] dark:hover:bg-[#333333] hover:scale-105 rounded-lg w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2">
                <div className="flex gap-3 items-center">
                  <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">
                    Location
                  </p>
                  <p>
                    <ImLocation />
                  </p>
                </div>
                <p className="text-center md:text-left text-[#0b0c0c] dark:text-[#07d0e5]">
                  Addis Ababa, Ethiopia
                </p>
              </div>
              <div className="bg-[#f4eded] dark:bg-[#312f2f] hover:bg-[#c7c6c6] dark:hover:bg-[#333333] hover:scale-105 rounded-lg w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2">
                <div className="flex gap-2 items-center">
                  <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">
                    Age
                  </p>
                  <p>
                    <IoPerson />
                  </p>
                </div>
                <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">
                  24
                </p>
              </div>
              <div className="bg-[#f4eded] dark:bg-[#312f2f] hover:bg-[#c7c6c6] dark:hover:bg-[#333333] hover:scale-105 rounded-lg w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2">
                <div className="flex gap-3 items-center">
                  <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">
                    Experience
                  </p>
                  <p>
                    <FaBlackTie />
                  </p>
                </div>
                <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">
                  1 Year
                </p>
              </div>
              <div className="bg-[#f4eded] dark:bg-[#312f2f] hover:bg-[#c7c6c6] dark:hover:bg-[#333333] hover:scale-105 rounded-lg w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2">
                <div className="flex gap-3 items-center">
                  <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">
                    Projects
                  </p>
                  <p>
                    <BsMenuAppFill />
                  </p>
                </div>
                <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">
                  {'>'} 20
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default About
