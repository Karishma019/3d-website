import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 justify-center items-center">
        <div className="max-w-sm w-full">
          <div className="bg-orange-50 rounded-lg p-4">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.curve(0, 2));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1>Section 1</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            ullam, laborum inventore corrupti veritatis nihil commodi molestias
            corporis odit dicta, ipsam pariatur porro debitis earum ad error
            officia vitae minima.
          </p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1>Section 2</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            ullam, laborum inventore corrupti veritatis nihil commodi molestias
            corporis odit dicta, ipsam pariatur porro debitis earum ad error
            officia vitae minima.
          </p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1>Section 3</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            ullam, laborum inventore corrupti veritatis nihil commodi molestias
            corporis odit dicta, ipsam pariatur porro debitis earum ad error
            officia vitae minima.
          </p>
        </Section>
      </div>
    </Scroll>
  );
};

export default Overlay;
