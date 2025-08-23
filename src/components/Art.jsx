import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { featureLists, goodLists } from "../../constants/index.js";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut ",
      })
      .to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#masked-content",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".a-left-leaf", { x: -100 }, 0)
      .to(".a-right-leaf", { x: 100 }, 0);
  });

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          <ul className="space-y-4 will-fade flex flex-col items-center w-[260px] sm:w-auto">
            {goodLists.map((feature, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-2"
              >
                <img src="/images/check.png" alt="check" />
                <p className="w-full text-left">{feature}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade flex flex-col items-center w-[260px] sm:w-auto">
            {featureLists.map((feature, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-2"
              >
                <img src="/images/check.png" alt="check" />
                <p className="w-full text-left">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Pure perfection in every sip.</h2>

          <div id="masked-content">
            <img
              src="/images/a-left-leaf.png"
              alt="l-leaf"
              className="a-left-leaf"
            />
            <img
              src="/images/a-right-leaf.png"
              alt="r-leaf"
              className="a-right-leaf"
            />

            <h3>Crafted with care, served with soul.</h3>
            <p>
              Each glass is not just a cocktail, but a moment curated especially
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Art;
