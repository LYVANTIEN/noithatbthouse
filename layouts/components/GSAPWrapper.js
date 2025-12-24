"use client";

import { gsap } from "@lib/gsap";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import FloatingContact from "@layouts/components/FloatingContact";

const GSAPWrapper = ({ children }) => {
  const main = useRef();
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // fade
      const fadeElements = document.querySelectorAll(".fade");
      fadeElements.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          scrollTrigger: el,
          duration: 0.3,
        });
      });

      // animate
      const elements = document.querySelectorAll(".animate");
      elements.forEach((el) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
          },
        });

        if (el.classList.contains("from-left")) {
          tl.from(el, { opacity: 0, x: -100 });
        } else if (el.classList.contains("from-right")) {
          tl.from(el, { opacity: 0, x: 100 });
        } else {
          tl.from(el, { opacity: 0, y: 100 });
        }
      });

      // background animation
      const animatedBgs = document.querySelectorAll(".bg-theme");
      animatedBgs.forEach((bg) => {
        gsap.to(bg, {
          scrollTrigger: {
            trigger: bg,
            toggleClass: "bg-animate",
            once: true,
          },
        });
      });
    }, main);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      <main ref={main}>{children}</main>
      <FloatingContact />
    </>
  );
};

export default GSAPWrapper;
