"use client";

import { FaGithub, FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-16">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-14 sm:gap-12 mt-1">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center  w-[80vw]"
            key={item.id}
          >
            <PinContainer title={""} href={item.link}>
              <div className="relative sm:w-[570px] flex items-center justify-center sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 w-[90%] h-full rotate-6 "
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center gap-2">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border  rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img
                        src={icon}
                        alt="icon5"
                        className="p-[3px] w-20 object-contain bg-[#eee] rounded-full"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center cursor-pointer">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    <a href={item.git} target="_blank">
                      <FaGithub size={35} />
                    </a>
                  </p>
                  {/* <FaLocationArrow className="ms-3" color="#CBACF9" /> */}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
