import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-4 w-full" id="stack">
      {/* <h1 className="heading">
        {" "}
        M<span className="text-purple">y</span> Te
        <span className="text-purple">ch </span>sta
        <span className="text-purple">ck</span>
      </h1> */}
      <h1 className=" text-[60px] font-bold md:text-left text-center">
        Overv<span className="text-purple">iew</span> & Ski
        <span className="text-purple">lls</span>.
      </h1>
      <p className="max-w-3xl text-[17px] text-white-200 leading-[30px] mt-5">
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Next.js. I&apos;m a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to
        life!
      </p>

      {/* <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10"> */}
      <div className="w-full mt-12 flex flex-row flex-wrap gap-10 items-center justify-center">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col  justify-center items-center p-3  md:p-5 lg:p-6 gap-2 sm:p-4   hover:scale-125 transition duration-200 ">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className={`lg:w-20 md:w-18 sm:w-16 w-12 bg-white rounded-full md:p-2 sm:p-1 lg:p-3 p-1`}
              />
              {/* <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div> */}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
