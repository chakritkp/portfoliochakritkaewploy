import React from "react";

import { UilHtml5Alt } from "@iconscout/react-unicons";
import { UilCss3Simple } from "@iconscout/react-unicons";
import JavaScript from "../assets/javascript.png";
import { UilReact } from "@iconscout/react-unicons";
import colmaracademyimg from "../assets/colmaracademy.jpg";
import reactassessment from "../assets/reactassessment.png";

const Project = () => {
  return (
    <section
      className="text-center h-screen flex justify-center items-center"
      id="Project"
    >
      <div>
        <h1 className="text-center text-3xl font-bold mb-10">PROJECT</h1>

        <div className="flex mx-3 mb-5">
          <div className="rounded-full w-2/3 mx-auto">
            <a
              href="https://colmaracademy07chakritguy.vercel.app/"
              target="_blank"
            >
              <img
                className="w-fit rounded-lg"
                src={colmaracademyimg}
                alt="colmaracademyimg"
              />
            </a>
          </div>

          <div className="w-1/3 mx-auto">
            <h3 className="text-lg font-semibold px-5 pb-5">Colmar Academy</h3>
            <div className="flex justify-center">
              <UilHtml5Alt size="3rem" color="#61DAFB" />
              <UilCss3Simple size="3rem" color="#61DAFB" />
            </div>
          </div>
        </div>

        <a
          href="https://reactassessment07chakritguy.vercel.app/"
          target="_blank"
        >
          <div className="flex mx-3">
            <div className="rounded-full w-2/3 mx-auto">
              <img
                className="w-fit rounded-lg"
                src={reactassessment}
                alt="colmaracademyimg"
              />
            </div>

            <div className="w-1/3 mx-auto">
              <h3 className="text-lg font-semibold px-5 ">
                Generation Thailand
              </h3>
              <h3 className="text-lg font-semibold px-5 pb-5">
                React - Assessment
              </h3>
              <div className="flex justify-center flex-wrap">
                <UilCss3Simple size="3rem" color="#61DAFB" />
                <img src={JavaScript} alt="" className="w-[3rem]" />
                <UilReact size="3rem" color="#61DAFB" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Project;
