import { useEffect, useState } from "react";
import heroBg from "../assets/herobg.png";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full min-h-screen mx-auto overflow-hidden"
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Akarshak</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A 3rd year college student passionate about building{" "}
            <br className="sm:block hidden" />
            modern websites, user interfaces, and creative web projects.
          </p>
        </div>
      </div>

      {/* 3D model only on desktop/tablet */}
      {!isMobile ? (
        <div className="w-full h-[300px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
          <ComputersCanvas />
        </div>
      ) : (
        <div className="w-full h-[200px]" /> // optional spacer for mobile
      )}

      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
