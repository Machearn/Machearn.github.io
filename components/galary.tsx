"use client";

import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Image from "next/image";

const Galary: React.FC = () => (
  <Carousel className="bg-gray-800 py-10 lg:py-20">
    <CarouselItem index={0}>
      <Image
        src="/galary/1.jpg"
        alt="1"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={1}>
      <Image
        src="/galary/2.jpg"
        alt="2"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={2}>
      <Image
        src="/galary/3.jpg"
        alt="3"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={3}>
      <Image
        src="/galary/4.jpg"
        alt="4"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={4}>
      <Image
        src="/galary/5.jpg"
        alt="5"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={5}>
      <Image
        src="/galary/6.jpg"
        alt="6"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={6}>
      <Image
        src="/galary/7.jpg"
        alt="7"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={7}>
      <Image
        src="/galary/8.jpg"
        alt="8"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={8}>
      <Image
        src="/galary/9.jpg"
        alt="9"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={9}>
      <Image
        src="/galary/10.jpg"
        alt="10"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={10}>
      <Image
        src="/galary/11.jpg"
        alt="11"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={11}>
      <Image
        src="/galary/12.jpg"
        alt="12"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={12}>
      <Image
        src="/galary/13.jpg"
        alt="13"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={13}>
      <Image
        src="/galary/14.jpg"
        alt="14"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={14}>
      <Image
        src="/galary/15.jpg"
        alt="15"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
    <CarouselItem index={15}>
      <Image
        src="/galary/16.jpg"
        alt="16"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </CarouselItem>
  </Carousel>
);

export default Galary;
