import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {
  const aboutRef = useRef();
  const titleRef = useRef();
  const topGridRef = useRef();
  const bottomGridRef = useRef();
  const paragraphRef = useRef();
  const reviewFlexRef = useRef();

  useGSAP(() => {
    requestAnimationFrame(() => {
      document.fonts.ready.then(() => {
        if (
          !aboutRef.current ||
          !titleRef.current ||
          !topGridRef.current ||
          !bottomGridRef.current ||
          !paragraphRef.current ||
          !reviewFlexRef.current
        )
          return;

        const titleSplit = SplitText.create(titleRef.current, {
          type: "words",
        });

        const paragraphSplit = new SplitText(paragraphRef.current, {
          type: "lines",
        });

        const scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top center",
          },
        });

        scrollTimeline
          .from(titleSplit.words, {
            opacity: 0,
            duration: 1,
            yPercent: 100,
            ease: "expo.out",
            stagger: 0.02,
          })
          .from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.3,
            ease: "expo.out",
            stagger: 0.04,
            delay: 0.4,
          })
          .fromTo(
            reviewFlexRef.current,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1,
              ease: "power1.inOut",
              stagger: 0.06,
              delay: 0.6,
            }
          )
          .fromTo(
            [...topGridRef.current.children, ...bottomGridRef.current.children],
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1,
              ease: "power1.inOut",
              stagger: 0.04,
              delay: 1,
            },
            "-=0.5"
          );
      });
    });
  }, []);

  return (
    <div id="about" ref={aboutRef}>
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2 ref={titleRef}>
              Where every detail matters <span className="text-white">-</span>
              from uddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p ref={paragraphRef}>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <section className="review-flex-between" ref={reviewFlexRef}>
              <div>
                <p className="star-rate">
                  <img src="/images/star.png" alt="star-img-1" />
                  <img src="/images/star.png" alt="star-img-2" />
                  <img src="/images/star.png" alt="star-img-3" />
                  <img src="/images/star.png" alt="star-img-4" />
                  <img src="/images/star.png" alt="star-img-5" />
                </p>
                <p className="md:text-3xl text-xl font-bold">
                  <span>4.5</span>/5
                </p>
                <p className="text-sm text-white-100">
                  More than +12000 customers
                </p>
              </div>

              <span>
                <img
                  src="/images/line.png"
                  alt="divider line"
                  className="divider"
                />
              </span>

              <span className="linear-gradient users-icons flex-center  -space-x-3">
                <img
                  src="/images/profile1.png"
                  alt="profile 1"
                  className="w-12 h-12"
                />
                <img
                  src="/images/profile2.png"
                  alt="profile 2"
                  className="w-12 h-12"
                />
                <img
                  src="/images/profile3.png"
                  alt="profile 3"
                  className="w-12 h-12"
                />
                <img
                  src="/images/profile4.png"
                  alt="profile 4"
                  className="w-12 h-12"
                />
              </span>
            </section>
          </div>
        </div>
      </div>

      <div className="top-grid" ref={topGridRef}>
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid" ref={bottomGridRef}>
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};
export default About;
