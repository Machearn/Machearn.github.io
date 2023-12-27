"use client";

import React, { useContext, useRef } from "react";
import s from "@/styles/about_me.module.css";
import { ScrollContext } from "@/utils/scroll-observer";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const AboutMe: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const { current: elContainer } = refContainer;

  const numOfPages = 4;
  let progress = 0;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenHeight = window.innerHeight;
    const halfH = screenHeight / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenHeight, scrollY - offsetTop) + halfH,
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }
  return (
    <div ref={refContainer} className="bg-black text-gray-200">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-2xl md:text-4xl lg:text-5xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={s.aboutmeText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            I am a full stack developer.
          </div>
          <span
            className={`${s.aboutmeText} inline-block after:content-['_']`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            I am a proficient in various programming languages like{" "}
            <strong className="text-cyan-200">
              C++, Go, Python, JavaScript
            </strong>{" "}
            and programming tools like{" "}
            <strong className="text-cyan-200">
              React, tailwind css, git, AWS, Docker, Kubernetes.
            </strong>
          </span>
          <span
            className={`${s.aboutmeText} inline-block after:content-['_']`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            My favorite and strongest programming language is{" "}
            <strong className="text-cyan-200">C++.</strong> I have been using
            C++ for more than <strong className="text-cyan-200">6 years</strong>
            , and developed some open source tools under Unix-like systems.
          </span>
          <span
            className={`${s.aboutmeText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 3),
            }}
          >
            During outline, I enjoy immersing myself in the natural world,
            capturing beautiful landscapes with my Nikon Z5.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
