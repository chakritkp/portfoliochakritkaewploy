import React from "react";
import Profileimg from "../assets/display.jpg";
import Contact from "./Contact";

const Hero = () => {
  return (
    <section
      id="Hero"
      className="h-screen flex justify-center items-center pt-[70px]"
    >
      <div className="lg:flex justify-center items-center gap-5">

        <div className="mx-auto w-60 lg:w-72 mb-5">
          <img className="w-fit rounded-lg" src={Profileimg} alt="Profile" />
          <Contact />
        </div>

        <div>
          <article className="m-auto min-w-[300px] max-w-[500px] flex flex-col lg:items-start">
            <h2 className="text-center text-3xl font-bold mb-3">SUMMARY</h2>
            <p className="px-5 text-base font-medium text-justify overflow-auto h-[180px] lg:px-0 lg:overflow-hidden lg:h-full">
            Hello, my name is Chakrit Kaewploy. I am a career switcher who graduated from Generation Thailand - Junior Software Developer program. I have work experience as a Software Developer at Maholan Company. My technical skills include React.js, useForm, MUI, Nest.js, TypeORM, and SQL. My responsibilities involved gathering requirements from Business Analysts (BAs) to create data entry forms and display information according to specified formats and functions. I developed APIs to retrieve and create necessary data. Currently, I am studying Docker and microservices to further enhance my skills.            </p>
          </article>
        </div>

      </div>
    </section>
  );
};

export default Hero;
