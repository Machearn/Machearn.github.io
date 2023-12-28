"use client";

import React from "react";
import { TileBackground, TileContent, TileWrapper, Tile } from "./tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkRight,
  WorkLink,
} from "./work";
import Image from "next/image";

const Works: React.FC = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>I developed</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://github.com/machearn/web_server">
                  Multi-thread Async HTTP Server
                </WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/web_server.png"
                alt="web_server"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
              <Image
                src="/web_server_src.png"
                alt="web_server_src"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>I developed</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://github.com/machearn/json_tutorial">
                  Lightweight JSON Parser
                </WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/json.png"
                alt="json"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
              <Image
                src="/json_src.png"
                alt="json_src"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>I developed</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://github.com/machearn/mdbm">
                  B+Tree Database Function Library
                </WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/dbm.png"
                alt="dbm"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
              <Image
                src="/dbm_src.png"
                alt="dbm_src"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
