import React from "react";
import website from "../assets/website.jpg";
import bms from "../assets/jakob-owens-CiUR8zISX60-unsplash.jpg";
import som from "../assets/rahul-chakraborty-xsGxhtAsfSA-unsplash.jpg";
import ec from "../assets/mike-petrucci-c9FQyqIECds-unsplash.jpg";
import port from "../assets/thought-catalog-505eectW54k-unsplash.jpg";
import ev from "../assets/chuttersnap-xJLsHl0hIik-unsplash.jpg";
import res from "../assets/jason-leung-poI7DelFiVA-unsplash.jpg";
import block from "../assets/priscilla-du-preez-9mmyKMBBIy4-unsplash.jpg";
import seller from "../assets/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg";
import sm from "../assets/jakob-owens-WUmb_eBrpjs-unsplash.jpg";
import po from "../assets/domenico-loia-hGV2TfOh0ns-unsplash.jpg";
import food from "../assets/dan-gold-E6HjQaB7UEA-unsplash.jpg";
import mv from "../assets/alex-litvin-MAYsdoYpGuk-unsplash.jpg";


const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-full text-gray-300 bg-[#102b53] py-6"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600">
            Projects
          </p>
          <p className="py-3 ">Check out some of my recent projects</p>
        </div>
        <div className="maw-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">

          <div>
            <h2 className=" font-bold " >Ecommerce Web Application&nbsp;:</h2>
            <h3 className="font-bold" >Description: A digital marketplace, streaming the
              online exchange of goods and services.</h3>
            <p className=" text-justify">Roles: Design, Implementation, Support <br />
              Tools: Visual Studio, GitBash <br />
              Created a new user registration and login
              webpage using HTML and CSS
              and Developed a sign-in logic where the credentials
              entered are matching with the credentials
              stored in the database
              and Developed a sign-up mechanism where the
              new user credentials entered are getting stored
              in the database
              and Developed a logic where the buyer can view
              only product catalog page and they can add the
              items into the cart
              and Developed a seller logic where they can add the
              product configurations of their own products
              and Designed and created the cart items page
              and Developed authentication logic and validations
              like email validation using regex
              and Branding using CSS
            </p><br />
          </div>
          <div className="my-14" >
            <img src={seller} className="items-center h-100 w-100 hover:scale-110 duration-500" />
          </div>
        </div><br />

        <div className="maw-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">

          <div>
            <h2 className=" font-bold " >Simple Social Login Integration&nbsp;:</h2>
            <h3 className="font-bold" >Description: A digital marketplace, streaming the
              online exchange of goods and services.</h3>
            <p className=" text-justify">Roles: Design, Implementation, Support <br />
              Description: Social Media Platform
              Roles: Design, Implementation, Support <br />
              Tools: Visual Studio, GitBash <br />
              Created a new user registration and login
              webpage using HTML and CSS
              • Developed a sign-in logic where the
              credentials entered are matching with the
              credentials stored in the db 
              • Developed a sign-up mechanism where the
              new user credentials entered are getting
              stored in the db 
              • Developed a page where the user can
              upload the images and the text content
              they wish to post 
              • Developed a logic where the images user
              post is stored in the database in the form
              of base64 format 
              • Designed a homepage where the user can
              view posts of images uploaded by others.
            </p><br />
          </div>
          <div className="my-14">
            <img src={sm} className="items-center h-100 w-100 hover:scale-110 duration-500" />
          </div>
        </div><br />

       

        <div className="maw-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <h2 className=" font-bold " >Block Chain based System for EV Charging Stations&nbsp;:</h2>
            <h3 className="font-bold" >Description: A Website for the users to book a slot in the Electric Vehicle Charging station and the data is secured using Blockchain technology </h3>
            <p className=" text-justify">Roles: Design, Implementation, Support <br />
            Tools: Visual Studio, GitBash <br />The objectives of implementing a blockchain-based system for EV (Electric Vehicle) charging stations are multifaceted and aim to address several challenges in the existing EV charging infrastructure.Electric Vehicle [EV] charging system thus
            helps the user to book a slot and ensure
            security using Blockchain technology.
            </p><br />
          </div>

          <div>
            <img src={block} className="items-center h-100 w-100 hover:scale-110 duration-500" />
          </div>
        </div><br />


        <div className="maw-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <h2 className=" font-bold " >Restaurant Management System and Chatbot&nbsp;:</h2>
            <h3 className="font-bold" >Description: Process of ordering food from a restaurant
              through a web page and also consist of a
              chatbot to assist the use </h3>
            <p className=" text-justify">Roles: Design, Implementation, Support <br />
              Tools: Visual Studio, GitBash <br />
              In the dynamic landscape of the restaurant industry, the implementation of a robust Restaurant Management System (RMS) is imperative. The RMS aims to revolutionize the way eateries manage their operations by addressing key challenges. At its core, the system optimizes order management, providing a seamless experience for both customers and staff through features like digital order placement, modification, and real-time tracking.
            </p><br />
          </div>

          <div>
            <img src={food} className="items-center h-100 w-100 hover:scale-110 duration-500" />
          </div>
        </div><br />

        <div className="maw-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <h2 className=" font-bold " >Personal Portfolio&nbsp;:</h2>
            <h3 className="font-bold" >Description: It includes personal websites, GitHub repositories, and a showcase of my completed projects </h3>
            <p className=" text-justify">Roles: Design, Implementation, Support <br />
              Tools: Visual Studio, GitBash <br />
              The objective of creating a personal portfolio is to present a comprehensive and compelling representation of oneself, showcasing skills, experiences, and achievements in a manner that resonates with potential employers, clients, or collaborators. 
            </p><br />
          </div>

          <div>
            <img src={po} className="items-center h-100 w-100 hover:scale-110 duration-500" />
          </div>
        </div><br />
        <div className="maw-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <h2 className=" font-bold " >Clone of Book My Show&nbsp;:</h2>
            <h3 className="font-bold" >Description:It a clone website of BookMyShow that is developed using HTML,CSS and Javascript</h3>
            <p className=" text-justify">Roles: Design, Implementation, Support <br />
              Tools: Visual Studio, GitBash <br />Developing a comprehensive online platform for booking and managing tickets for various entertainment events, including movies, concerts, plays, and sports.
            </p><br />
          </div>

          <div>
            <img src={mv} className="items-center h-100 w-100 hover:scale-110 duration-500" />
          </div>
        </div><br /><br /><br /><br />


        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600">
            Project Code
          </p>
          <p className="py-3 ">Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${ec})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100  text-center ">
              <span className=" font-bold text-white tracking-wider text-base">
                Ecommerce Web Application
              </span>

              <div className="pt-8 text-center">
                <a href="https://github.com/jishnucz">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white 
                  text-gray-700 font-bold text-lg
                  "
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${som})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold text-white tracking-wider text-base">
                Simple Social Login Integration
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/jishnucz">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white 
                  text-gray-700 font-bold text-lg
                  "
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ev})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center ">
              <span className=" font-bold text-white tracking-wider text-base">
                Block Chain based System for EV Charging Stations
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/jishnucz">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white 
                  text-gray-700 font-bold text-lg
                  "
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${port})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" font-bold text-white tracking-wider text-base">
                My Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/jishnucz/PORTFOLIO">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white 
                  text-gray-700 font-bold text-lg
                  "
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${res})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-base font-bold text-white tracking-wider">
                Restaurant Management System and Chatbot
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/jishnucz">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white 
                  text-gray-700 font-bold text-lg
                  "
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${bms})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-base font-bold text-white tracking-wider">
                Clone of Book My Show
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/jishnucz">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white 
                  text-gray-700 font-bold text-lg
                  "
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </div>

  );
};

export default Projects;
