import React, { useRef } from "react";
import gsap from "gsap";
import asset from "./asset1.jpeg";

export default function Image() {
  const container = useRef(null);
  const containerBg = useRef(null);
  const image = useRef(null);
  const tl = gsap.timeline({
    defaults: {
      ease: "power2.inOut",
    },
  });

  const reveal = () => {
    console.log("image loaded");

    tl.to(container.current, { duration: 0, css: { visibility: "visible" } })
      .to(containerBg.current, {
        width: "0%",
        duration: 1.5,
      })
      .from(
        image.current,
        {
          duration: 1.6,
          scale: 1.4,
        },
        "-=1.5"
      );
  };
  return (
    <div className="image">
      <div className="image__container" ref={container}>
        <div className="image__container__bg" ref={containerBg} />
        <img
          ref={image}
          className="image__asset"
          src={asset}
          alt=""
          loading="lazy"
          onLoad={reveal}
        />
      </div>
    </div>
  );
}
