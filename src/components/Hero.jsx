import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  const videoRef = useRef();
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const rightLeafRef = useRef();
  const leftLeafRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    if (
      !heroRef.current ||
      !titleRef.current ||
      !subtitleRef.current ||
      !rightLeafRef.current ||
      !leftLeafRef.current
    )
      return;

    document.fonts.ready.then(() => {
      const heroSplit = new SplitText(titleRef.current, {
        type: "chars, words",
      });

      const paragraphSplit = new SplitText(subtitleRef.current, {
        type: "lines",
      });

      heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

      gsap.from(heroSplit.chars, {
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
      });

      gsap.from(paragraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
        delay: 1,
      });
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(rightLeafRef.current, { y: 200 }, 0)
      .to(leftLeafRef.current, { y: -200 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
      <section id="hero" className="noisy" ref={heroRef}>
        <h1 className="title" ref={titleRef}>
          MOJITO
        </h1>

        <img
          src="/images/hero-left-leaves.png"
          alt="left-leaf"
          className="left-leaves"
          ref={leftLeafRef}
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
          ref={rightLeafRef}
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle" ref={subtitleRef}>
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu blends premium ingredients, creative
                flair, and timeless recipes — all crafted to delight your
                senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </div>
    </>
  );
};

export default Hero;
