import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText, ScrambleTextPlugin } from "gsap/all";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const Home = () => {
  const headerRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const splitHeader = SplitText.create(headerRef.current, {
      type: "chars",
      mask: "chars",
    });

    const splitP = SplitText.create(pRef.current, {
      type: "lines",
      mask: "lines",
    });

    const tl = gsap.timeline({
      repeat: 12,
      repeatDelay: 1,
      yoyo: true,
    });

    tl.from(splitHeader.chars, {
      filter: "blur(6px)",
      y: "-15%",
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      scrambleText: {
        text: "#",
        speed: 0.15,
      },
      stagger: {
        each: 0.3,
        from: "left",
      },
      ease: "power2.out",
    })
      .from(splitP.lines, {
        filter: "blur(10px)",
        delay: 0.55,
        opacity: 0,
        scale: 0.95,
        y: "100%",
        duration: 0.55,
        ease: "power1.out",
      })
      .to(splitHeader.chars, {
        opacity: 1,
        y: "0%",
        duration: 0.2,
      });

    return () => {
      tl.kill();
      splitHeader.revert();
      splitP.revert();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-[90vw] gap-6 bg-[#0a0a0c]">
      <h1
        ref={headerRef}
        className="text-center text-[clamp(2rem,12rem,5vw)] text-[#f5f5f5] tracking-[6px] font-[Space_Mono] leading-[1.2]"
      >
        YNDS
      </h1>
      <p
        ref={pRef}
        className="text-center text-[clamp(1rem,8rem,3vw)] text-[#cac9d4] font-manrope font-normal leading-[1.5]"
      >
        Why Not Design Studio
      </p>
    </div>
  );
};

export default Home;
