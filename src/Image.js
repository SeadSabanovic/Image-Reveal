import React, { useRef } from "react";
import { CSSRulePlugin } from "gsap/all";
import gsap, { CSSPlugin } from "gsap";
import asset from "./asset1.jpeg";

export default function Image() {
  gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
  const container = useRef(null);
  const image = useRef(null);
  const imageReveal = CSSRulePlugin.getRule(".image__container:after");
  const tl = gsap.timeline({
    defaults: {
      ease: "power2.inOut",
    },
  });

  const reveal = () => {
    console.log("image loaded");
    console.log(tl);
    console.log(container);
    console.log(image);
    console.log(imageReveal);

    tl.to(container.current, { duration: 0, css: { visibility: "visible" } })
      .to(imageReveal, {
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
