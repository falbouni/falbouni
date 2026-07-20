"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Keep native scrolling on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}