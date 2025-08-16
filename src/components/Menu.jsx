"use client";

import gsap from "gsap";
import { allCocktails } from "../../constants/index.js";
import { useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Refs for animation targets
  const menuRef = useRef();
  const leftLeafRef = useRef();
  const rightLeafRef = useRef();
  const contentRef = useRef();
  const titleRef = useRef();
  const cocktailImageRef = useRef();
  const detailsHeadingRef = useRef();
  const detailsTextRef = useRef();

  useGSAP(() => {
    if (
      !menuRef.current ||
      !leftLeafRef.current ||
      !rightLeafRef.current ||
      !contentRef.current ||
      !cocktailImageRef.current ||
      !detailsHeadingRef.current ||
      !detailsTextRef.current
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: menuRef.current,
        start: "top center",
      },
      ease: "power1.inOut",
    });

    tl.to(rightLeafRef.current, {
      x: 20,
      y: 10,
      duration: 1,
    })
      .to(
        leftLeafRef.current,
        {
          x: -30,
          duration: 1,
        },
        "<"
      )
      .fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power1.inOut" }
      )
      .fromTo(
        cocktailImageRef.current,
        { opacity: 0, xPercent: -100 },
        { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
      )
      .fromTo(
        detailsHeadingRef.current,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
      )
      .fromTo(
        detailsTextRef.current,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
      );
  }, [currentIndex]);

  const totalCocktails = allCocktails.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset) => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section ref={menuRef} id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaves.png"
        alt="left-leaf"
        ref={leftLeafRef}
        className="m-left-leaves"
      />
      <img
        src="/images/slider-right-leaves.png"
        alt="right-leaf"
        ref={rightLeafRef}
        className="m-right-leaves"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-[#f1edb3] border-[#f1edb3]"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={currentCocktail.image}
            ref={cocktailImageRef}
            className="object-contain"
            alt="Current cocktail image"
          />
        </div>

        <div className="recipe">
          <div className="info" ref={contentRef}>
            <p>Recipe for:</p>
            <p id="title" ref={titleRef}>
              {currentCocktail.name}
            </p>
          </div>

          <div className="details">
            <h2 ref={detailsHeadingRef}>{currentCocktail.title}</h2>
            <p ref={detailsTextRef}>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
