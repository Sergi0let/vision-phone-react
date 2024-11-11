import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { animationWithGsap } from "../utils/animation";
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videRef = useRef(null);
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => videRef.current.play(),
    });
    animationWithGsap("#features_title", {
      y: 0,
      opacity: 1,
    });
    animationWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1.inOut",
      },
      { scrub: 5.5 },
    );
    animationWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <section className="common-padding relative h-full overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>
        <div className="overflow-hiddens flex flex-col items-center justify-center">
          <div className="mb-24 mt-32 md:pl-24">
            <h2 className="text-5xl font-semibold lg:text-7xl">
              Forged in titanium
            </h2>

            <div className="flex-center flex-col sm:px-10">
              <div className="relative h-[50vh] w-full">
                <video
                  playsInline
                  id="exploreVideo"
                  className="h-full w-full object-cover"
                  preload="none"
                  autoPlay
                  muted
                  ref={videRef}
                >
                  <source src={exploreVideo} type="video/mp4" />
                </video>
              </div>
              <div className="relative flex w-full flex-col">
                <div className="feature-video-container">
                  <div className="h-[50vh] flex-1 overflow-hidden">
                    <img
                      src={explore1Img}
                      alt="titanium"
                      className="feature-video g_grow"
                    />
                  </div>
                  <div className="h-[50vh] flex-1 overflow-hidden">
                    <img
                      src={explore2Img}
                      alt="titanium2"
                      className="feature-video g_grow"
                    />
                  </div>
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    iphone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecrafts use for missions to
                    Mars
                  </p>
                </div>
                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    Titanium has one of the best strengths-to-weight ratios of
                    any metal, making these our{" "}
                    <span className="text-white">lightest Pro models ever</span>
                    You'll notice the differennce the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Features };
