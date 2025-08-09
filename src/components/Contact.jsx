import gsap from "gsap";
import { openingHours, socials } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Contact = () => {
  const contactRef = useRef();
  const titleRef = useRef();
  const contextRef = useRef();
  const rightLeafRef = useRef();
  const leftLeafRef = useRef();
  const imageDrinkRef = useRef();

  useGSAP(() => {
    if (
      !contactRef.current ||
      !titleRef.current ||
      !contextRef.current ||
      !rightLeafRef.current ||
      !leftLeafRef.current ||
      !imageDrinkRef.current
    )
      return;

    document.fonts.ready.then(() => {
      const titleSplit = SplitText.create(titleRef.current, { type: "words" });

      const headingElements = contextRef.current.querySelectorAll("h3");
      const paragraphElements = contextRef.current.querySelectorAll("p");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top center",
        },
        ease: "power1.inOut",
      });

      timeline
        .from(titleSplit.words, {
          opacity: 0,
          yPercent: 100,
          stagger: 0.02,
        })
        .fromTo(
          [headingElements, paragraphElements],
          { opacity: 0 },
          {
            opacity: 1,
            yPercent: 100,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1,
          }
        )
        .to(rightLeafRef.current, {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        })
        .to(imageDrinkRef.current, {
          y: "15",
          x: "15",
          duration: 1.3,
          ease: "power1.inOut",
        })
        .to(
          leftLeafRef.current,
          {
            y: "50",
            duration: 1,
            ease: "power1.inOut",
          },
          "<"
        );
    });
  }, []);

  return (
    <footer id="contact" ref={contactRef}>
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
        ref={rightLeafRef}
      />
      <img
        src="/images/footer-left-leaves.png"
        alt="leaf-left"
        id="f-left-leaves"
        ref={leftLeafRef}
      />
      <img
        src="/images/footer-drinks.png"
        alt="drinks"
        className="drink-img"
        ref={imageDrinkRef}
      />

      <div className="content" ref={contextRef}>
        <h2 ref={titleRef}>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>
            <a href="tel:+385559876543">+ 38 (555) 987-6543</a>
          </p>
          <p>
            <a href="mailto:hello@jsmcocktail.com">hello@jsmcocktail.com</a>
          </p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <p key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.alt} />
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
