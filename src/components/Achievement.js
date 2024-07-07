'use client'
import Image from "next/image";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor"


export default function Achievement({ data }) {
  return (
    <section className="content-block achivement-block py-16 px-6 my-7 bg-silver dark:bg-slate-950">
      <div className="max-w-[1152px] mx-auto flex flex-col lg:flex-row lg:items-center gap-[72px]">
        <div className={`md:w-1/2 flex flex-col`}>
          <h2
            className="text-h2 max-md:text-2xl dark:text-snow"
            dangerouslySetInnerHTML={{ __html: data[0].title }}
          ></h2>
          <div className="text-base mt-4 leading-5 dark:text-snow">
            {data[0].shortdescription}
          </div>
        </div>
        <div className={`lg:w-1/2 flex w-full`}>
          <div className="flex flex-col items-center w-full">
            <div className="grid sm:grid-cols-2 flex-wrap w-full justify-between items-center gap-10">
              {data[0].achievements.map((achievement, i) => {
                return (
                  <div
                    key={"_achievement_" + i}
                    className="achievement flex items-center gap-4"
                  >
                    <div className="flex w-12 h-12 items-center justify-center achievement-icon">
                      <Image
                        className="text-4xl text-primary" src={"/assets/images/achievements/"+achievement.icon}
                        width={80} height={80}
                      ></Image>
                    </div>
                    <div className="mt-4 leading-5">
                      <h3>
                        <CountUp start={0} delay={1} duration={5} end={achievement.count} useIndianSeparators={true} className="text-black">
                             {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                               <span ref={countUpRef} className="text-gray-dark dark:text-snow" />
                                 </VisibilitySensor>
                             )}
                        </CountUp></h3>
                      <span className="text-gray dark:text-snow">{achievement.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
