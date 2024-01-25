import React from "react";
import jishnu from "../assets/1000245964.jpg"

const About = () => {
  return (
    <div name="about" className="w-full h-full bg-[#102b53] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="maw-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="maw-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-16">
          <div className="sm:text-justify  text-4xl px-10 font-bold ml-10 ">
            <p>Hi, I'm Jishnu M, Nice to meet you, Please take a look around. <br /><br /> <br />
              <p className="text-sm text-justify ml-2">Enthusiastic and Highly motivated recent
                graduate with a degree in Computer Science
                Engineering seeking a challenging  position in Full
                Stack Development.Adept at developing and
                deploying complex backend systems, web
                services and databases.Results-driven Full Stack Developer with six months of experience designing and implementing innovative software solutions. 
                Proficient in both front-end and back-end development, I possess a comprehensive skill set that  spans  across various technologies and frameworks. Adept at collaborating with cross-functional teams to drive project success, 
                I bring a passion for  clean code, problem-solving, and continuous learning. Proven track record in delivering high-quality applications and enhancing user experiences.</p>
            </p>
          </div>
          <div>
            {/* <p>
              Enthusiastic and Highly motivated recent
              graduate with a degree in Computer Science
              Engineering seeking a challenging position in Full
              Stack Development. Adept at developing and
              deploying complex backend systems, web
              services and databases.
            </p> */}
            <img className="w-96 h-auto mx-auto hover:scale-44 duration-500" src={jishnu} alt="html" />
          </div>
        </div>

        <div className="maw-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-base font-bold">

          </div>
          <div>
            <p>

            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
