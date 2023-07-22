import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import ScrollTrigger from "gsap/dist/ScrollTrigger";

export function useGsap() {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 2,
  });
  lenis.on("scroll", e => {});
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(time => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return { gsap, ScrollTrigger };
}
