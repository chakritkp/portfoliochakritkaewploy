import React from "react";
import Profileimg from "../assets/386864020_599299545535922_5474428551062761694_n.jpg";
import Contact from "./Contact";

const Hero = () => {
  return (
    <section
      id="Hero"
      className="h-screen flex justify-center items-center pt-[70px]"
    >
      <div className="lg:flex justify-center items-center gap-5">

        <div className="mx-auto w-60 lg:w-72 mb-5">
          {/* <img className='w-fit rounded-lg' src={Profileimg} alt="Profile" /> */}
          <img className="w-fit rounded-lg" src={Profileimg} alt="Profile" />
          <Contact />
        </div>

        <div>
          <article className="m-auto min-w-[300px] max-w-[500px] flex flex-col lg:items-start">
            <h2 className="text-center text-3xl font-bold mb-3">SUMMARY</h2>
            <p className="px-5 text-base font-medium text-justify overflow-auto h-[180px] lg:px-0 lg:overflow-hidden lg:h-full">
            Hello, I'm Chakrit Kaewploy, a Software Developer. Previously, I worked as a civil servant at NEA under the Ministry of Commerce, overseeing procurement projects for the NEA and E-Academy websites for four years. Following that, I was selected to join the 5th edition of the Junior Software Developer program, a boot camp designed for career changers aspiring to become Software Developers. The program focused on teaching the MERN Stack, and participants were required to complete a project before graduating.
            <br/>
            In my project, I was responsible for the User system, developing features for Login, Register, and Update functionalities on both the Frontend and Backend. Currently, I am actively seeking opportunities in Frontend Development and Fullstack Development. In the future, I plan to further enhance my skills and pursue a career as a Mobile Developer.
            </p>
          </article>
        </div>

      </div>
    </section>
  );
};

export default Hero;
