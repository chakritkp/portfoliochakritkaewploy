import React from "react";
import { UilHtml5Alt } from "@iconscout/react-unicons";
import { UilCss3Simple } from "@iconscout/react-unicons";
import { UilReact } from "@iconscout/react-unicons";
import Nodejs from "../assets/nodejs.png";
import Express from "../assets/expressjs.png";
import Javascript from "../assets/javascript.png";
import Typescript from "../assets/typescript.png";
import Tailwind from "../assets/Tailwindcss.png";
import NESTJS from "../assets/icons8-nestjs-96.png";
import Mui from "../assets/mui.png";
import Docker from "../assets/docker.png";

const Skill = () => {
  return (
    <section
      className="text-center h-screen flex justify-center items-center"
      id="Skill"
    >
      <div>
        <h2 className="text-3xl font-bold mb-10">SKILLS</h2>

        <h2 className="text-xl font-bold mb-2">TECHNICAL SKILLS</h2>

        <div className="flex gap-3 flex-wrap justify-center">
          {/* <div className="flex flex-col justify-center items-center">
            <UilHtml5Alt className="m-auto" size="4rem" color="#61DAFB" />
            <p className="text-base font-medium">HTML5</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <UilCss3Simple className="m-auto" size="4rem" color="#61DAFB" />
            <p className="text-base font-medium">CSS</p>
          </div> */}

          <div className="flex flex-col justify-center items-center">
            <img src={Javascript} alt="" className="w-[4rem]" />
            <p className="text-base font-medium">JAVASCRIPT</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={Typescript} alt="" className="w-[4rem]" />
            <p className="text-base font-medium">TYPESCRIPT</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <UilReact className="m-auto" size="4rem" color="#61DAFB" />
            <p className="text-base font-medium">REACTJS</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={Tailwind} alt="" className="w-[4rem]" />
            <p className="text-base font-medium">TAILWIND</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={Mui} alt="" className="w-[4rem]" />
            <p className="text-base font-medium">MUI</p>
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <div className="flex flex-col justify-center items-center">
            <img src={Nodejs} className="w-[4rem]" alt="" />
            <p className="text-base font-medium">NODE</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Express} className="w-[4rem]" alt="" />
            <p className="text-base font-medium">EXPRESS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={NESTJS} className="w-[4rem]" alt="" />
            <p className="text-base font-medium">NEST</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Docker} className="w-[4rem]" alt="" />
            <p className="text-base font-medium">DOCKER</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
