import React from 'react';
import aboutSectionImg from "../assets/aboutSectionImg.png"
import dottedRows from "../assets/aboutSection-dottedrows.png"

const About = () => {
  return (
    <div id="#about" className="mt-5  mb-5 lg:p-20 md:p-12 sm:py-6 w-full flex flex-col items-center relative bg-bluegrey-50  dark:bg-slate-900 shadow-lg">
      <h2 className='font-bold text-3xl'>About us</h2>
      <img src={dottedRows} loading='lazy' alt='' className='absolute  bottom-0 right-2 sm:hidden md:hidden'/>
      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col lg:mb-16 justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 sm:my-6 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 dark:text-slate-500 lg:w-[95%]">
              HireZ was born out of a common struggle: finding the perfect team 
              of video editors, scriptwriters, and thumbnail designers. Just imagine a group
              YouTubers, tech enthusiasts, and creative minds discussing the hassle of scouting 
              for the ideal collaborators.

              So, we came up with a solution: a platform where YouTubers can easily discover and 
              connect with top-notch video editors, skilled scriptwriters, and talented thumbnail 
              designers and more.  

               </p>
              <p className="text-base font-medium text-richblack-300 dark:text-slate-500 lg:w-[95%]">
                Think of it like a tailored matchmaking service for your YouTube projects. 
                Our mission is to be the go-to hub where creators find the precise talents they need, 
                ensuring every video is a masterpiece. It's like having a dedicated team for your YouTube channel, 
                ready to bring your content vision to life! 🎬✨

              </p>
            </div>

            <div>
              <img
                src={aboutSectionImg}
                alt="img about"
                loading='lazy'
                className=" shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
           
        </div>
      </section>
       
    </div>
  );
};

export default About;
