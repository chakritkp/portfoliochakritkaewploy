import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { UilHtml5Alt } from "@iconscout/react-unicons";
import { UilCss3Simple } from "@iconscout/react-unicons";
import JavaScript from "../assets/javascript.png";
import Tailwindcss from "../assets/Tailwindcss.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import mongo from "../assets/mongo.png";
import { UilReact } from "@iconscout/react-unicons";
import ReduxToolkit from '../assets/reduxtoolkit.png'
import Firebase from '../assets/firebase.png'
import colmaracademyimg from "../assets/colmaracademy.jpg";
import reactassessment from "../assets/reactassessment.png";
import finalproject from "../assets/finalprojectjsd.png";
import myProject from '../assets/productlist.png'

const Project = () => {
  return (
    <section
      className="text-center h-screen flex flex-col justify-center items-center"
      id="Project"
    >
      <h1 className="text-center text-3xl font-bold my-10">PROJECT</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1.5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-[24rem] lg:w-[36rem]"
      >
        <SwiperSlide className="px-5">
          <Card className="max-w-[24rem] overflow-hidden mb-5">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none mb-5 h-[150px] lg:h-[200px]"
            >
              <a
                href="https://colmaracademy07chakritguy.vercel.app/"
                target="_blank"
              >
                <img src={colmaracademyimg} alt="colmaracademyimg" />
              </a>
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                <h2 className="text-xl font-bold">Colmar Academy</h2>
                <h2 className="text-xl font-bold mb-2">Codecademy</h2>
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="my-3 text-base font-medium text-justify px-5 h-[100px] overflow-auto"
              >
                Create a website Colmar Academy with HTML and CSS
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center -space-x-3 gap-5">
                <Tooltip>
                  <UilHtml5Alt className="m-auto" size="2rem" color="#61DAFB" />
                </Tooltip>
                <Tooltip>
                  <UilCss3Simple
                    className="m-auto"
                    size="2rem"
                    color="#61DAFB"
                  />
                </Tooltip>
              </div>
            </CardFooter>
          </Card>
        </SwiperSlide>

        <SwiperSlide className="px-5">
          <Card className="max-w-[24rem] overflow-hidden mb-5">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none mb-5 h-[150px] lg:h-[200px]"
            >
              <a
                href="https://reactassessment07chakritguy.vercel.app/"
                target="_blank"
              >
                <img src={reactassessment} alt="reactassessment" />
              </a>
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                <h2 className="text-xl font-bold">Generation Thailand</h2>
                <h2 className="text-xl font-bold mb-2">React-Assessment</h2>
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="my-3 text-base font-medium text-justify px-5 h-[100px] overflow-auto"
              >
                Connect APILinks to an external site. by RESTful method,
                utilizing AXIOS library to CREATE, DELETE, SELECT data from API
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center -space-x-3 gap-5">
                <Tooltip>
                  <UilCss3Simple
                    className="m-auto"
                    size="2rem"
                    color="#61DAFB"
                  />
                </Tooltip>
                <Tooltip>
                  <img src={JavaScript} alt="" className="w-[2rem]" />
                </Tooltip>
                <Tooltip>
                  <UilReact className="m-auto" size="2rem" color="#61DAFB" />
                </Tooltip>
              </div>
            </CardFooter>
          </Card>
        </SwiperSlide>

        <SwiperSlide className="px-5">
          <Card className="max-w-[24rem] overflow-hidden mb-5">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none mb-5 h-[150px] lg:h-[200px]"
            >
              <a href="https://grootclub.vercel.app/" target="_blank">
                <img
                  src={finalproject}
                  alt="finalproject"
                  className="h-[150px] lg:h-[200px]"
                />
              </a>
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                <h2 className="text-xl font-bold">Generation Thailand</h2>
                <h2 className="text-xl font-bold mb-2">Final Project Groupt</h2>
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="my-3 text-base font-medium text-justify px-5 h-[100px] overflow-auto"
              >
                Create a stadium booking website with React.js Node.js Tailwind
                and MongoDB
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center -space-x-3 gap-5">
                <Tooltip>
                  <img src={Tailwindcss} alt="" className="w-[2rem]" />
                </Tooltip>
                <Tooltip>
                  <img src={JavaScript} alt="" className="w-[2rem]" />
                </Tooltip>
                <Tooltip>
                  <UilReact className="m-auto" size="2rem" color="#61DAFB" />
                </Tooltip>
                <Tooltip>
                  <img src={nodejs} alt="" className="w-[2rem]" />
                </Tooltip>
                <Tooltip>
                  <img src={expressjs} alt="" className="w-[2rem]" />
                </Tooltip>
                <Tooltip>
                  <img src={mongo} alt="" className="w-[2rem]" />
                </Tooltip>
              </div>
            </CardFooter>
          </Card>
        </SwiperSlide>

        <SwiperSlide className="px-5">
          <Card className="max-w-[24rem] overflow-hidden mb-5">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none mb-5 h-[150px] lg:h-[200px]"
            >
              <a
                href="https://myproject-8bf16.web.app/"
                target="_blank"
              >
                <img src={myProject} alt="myProject" />
              </a>
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                <h2 className="text-xl font-bold">Productlist</h2>
                <h2 className="text-xl font-bold mb-2">My Project</h2>
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="my-3 text-base font-medium text-justify px-5 h-[100px] overflow-auto"
              >
                
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center -space-x-3 gap-5">
                <Tooltip>
                  <img src={JavaScript} alt="" className="w-[2rem]" />
                </Tooltip>
                <Tooltip>
                  <img src={Tailwindcss} alt="" className="w-[2rem]" />
                </Tooltip>
                <Tooltip>
                  <UilReact className="m-auto" size="2rem" color="#61DAFB" />
                </Tooltip>
                <Tooltip>
                  <img src={ReduxToolkit} alt="" className="w-[2rem]" />
                </Tooltip>
                <Tooltip>
                  <img src={nodejs} alt="" className="w-[2rem]" />
                </Tooltip>
                <Tooltip>
                  <img src={expressjs} alt="" className="w-[2rem]" />
                </Tooltip>
                <Tooltip>
                  <img src={mongo} alt="" className="w-[2rem]" />
                </Tooltip>
                <Tooltip>
                  <img src={Firebase} alt="" className="w-[2rem]" />
                </Tooltip>
              </div>
            </CardFooter>
          </Card>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Project;
