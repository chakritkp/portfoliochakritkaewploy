import React from "react";
import { UilHtml5Alt } from "@iconscout/react-unicons";
import { UilCss3Simple } from "@iconscout/react-unicons";
import { UilReact } from "@iconscout/react-unicons";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import JavaScript from "../assets/javascript.png";
import Tailwindcss from "../assets/Tailwindcss.png";

const Skill = () => {
  return (
    <section
      className="text-center h-screen flex justify-center items-center"
      id="Skill"
    >
      <div>
        <h2 className="text-3xl font-bold mb-10">SKILL</h2>

        <h2 className="text-xl font-bold mb-2">FRONTEND</h2>

        <div className="flex gap-3 justify-center">
          <div className="flex flex-col justify-center items-center">
            <UilHtml5Alt className="m-auto" size="4rem" color="#61DAFB" />
            <p className="text-base font-medium">HTML5</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <UilCss3Simple className="m-auto" size="4rem" color="#61DAFB" />
            <p className="text-base font-medium">CSS</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={Tailwindcss} alt="" className="w-[4rem]" />
            <p className="text-base font-medium">CSS</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={JavaScript} alt="" className="w-[4rem]" />
            <p className="text-base font-medium">JAVASCRIPT</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <UilReact className="m-auto" size="4rem" color="#61DAFB" />
            <p className="text-base font-medium">REACT</p>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2 pt-10">BACKEND</h2>

        <div className="flex gap-3 justify-center">
          <div className="flex flex-col justify-center items-center">
            <img src={nodejs} alt="" />
            <p className="text-base font-medium">NODE.JS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={expressjs} alt="" />
            <p className="text-base font-medium">EXPRESS.JS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
