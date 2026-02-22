import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  tag = "p",
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontsLoaded(true));
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      if (animationCompletedRef.current) return;

      const timer = setTimeout(() => {
        const el = ref.current;

        if (el._rbsplitInstance) {
          el._rbsplitInstance.revert();
          el._rbsplitInstance = null;
        }

        const splitInstance = new GSAPSplitText(el, {
          type: splitType,
          smartWrap: true,
          onSplit: (self) => {
            const targets = self.chars || self.words || self.lines;

            return gsap.fromTo(
              targets,
              { ...from },
              {
                ...to,
                duration,
                ease,
                stagger: delay / 1000,
                scrollTrigger: {
                  trigger: el,
                  start: "top 80%",
                  once: true,
                },
                onComplete: () => {
                  animationCompletedRef.current = true;
                },
              }
            );
          },
        });

        el._rbsplitInstance = splitInstance;
      }, 150); // 🔥 delay prevents layout jump

      return () => clearTimeout(timer);
    },
    { dependencies: [text, fontsLoaded], scope: ref }
  );

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        overflow: "hidden",
        display: "block",
      }}
    >
      {text}
    </Tag>
  );
};

export default SplitText;