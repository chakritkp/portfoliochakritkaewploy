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
            <p className="text-base font-medium text-justify">
              Hi, my name is Chakrit Kaewploy but you can call me Guy. I've
              transitioned my career to become a Software Developer. I was
              previously employed at the New Economy Academy (NEA) where I was
              responsible for overseeing the procurement for corporate websites
              and e-learning platforms as a civil service assistant for 3 years.
              Later, I joined the Junior Software Developer program through
              Generation Thailand. Now, I'm excited to start my career as a
              software developer!
            </p>
          </article>
        </div>

      </div>
    </section>
  );
};

export default Hero;
