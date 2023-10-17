import React, { useRef } from "react";
import { CSSRulePlugin } from "gsap/all";
import gsap, { CSSPlugin } from "gsap";

export default function Image() {
  gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
  let container = useRef(null);
  let image = useRef(null);
  const imageReveal = CSSRulePlugin.getRule(".image__container:after");
  const tl = gsap.timeline({
    defaults: {
      ease: "power2.inOut",
    },
  });

  const reveal = () => {
    tl.to(container, 0, { css: { visibility: "visible" } })
      .to(imageReveal, {
        width: "0%",
        duration: 1.5,
      })
      .from(
        image,
        {
          duration: 1.6,
          scale: 1.4,
        },
        "-=1.5"
      );
  };
  return (
    <div className="image">
      <div className="image__container" ref={(el) => (container = el)}>
        <img
          ref={(el) => (image = el)}
          className="image__asset"
          src="https://images.pexels.com/photos/6794581/pexels-photo-6794581.jpeg"
          alt=""
          loading="lazy"
          onLoad={reveal}
        />
      </div>
    </div>
  );
}
