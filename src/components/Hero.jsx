import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 768 ? smallHeroVideo : heroVideo,
  );

  const handleSetVideoSrc = () => {
    if (window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      duration: 1,
      delay: 0.5,
    });

    gsap.to(".btn-cta", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1.5,
    });
  });

  useEffect(() => {
    window.addEventListener("resize", handleSetVideoSrc);

    return () => {
      window.removeEventListener("resize", handleSetVideoSrc);
    };
  }, []);

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 flex-col">
        <p className="hero-title">Iphone 15pro</p>
        <div className="w-9/12 md:w-10/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source type="video/mp4" src={videoSrc} />
          </video>
        </div>
      </div>
      <div className="btn-cta flex translate-y-20 flex-col items-center opacity-0">
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p>From $499/month or sale your kidney</p>
      </div>
    </section>
  );
};

export { Hero };
