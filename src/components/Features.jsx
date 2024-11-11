import { useGSAP } from "@gsap/react";
import React from "react";

const Features = () => {
  useGSAP(() => {}, []);
  return (
    <section className="common-padding relative h-full overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>
      </div>
    </section>
  );
};

export { Features };
