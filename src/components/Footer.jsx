import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div className="">
          <p className="text-xs font-semibold text-gray">
            More ways to shop{" "}
            <span className="text-blue underline">Find an Apple Store{""}</span>
            or <span className="text-blue underline">other retailers</span>near
            you.
          </p>
          <p className="text-xs font-semibold text-gray">
            Or call 00 1234 5678{" "}
          </p>
        </div>
        <div className="my-5 h-[1px] w-full bg-neutral-700" />
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-xs font-semibold text-gray">
            Copyright © 2021 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, index) => (
              <p className="text-xs font-semibold text-gray">
                {link}{" "}
                {index !== footerLinks.length - 1 ? (
                  <span className="mx-2"> | </span>
                ) : (
                  ""
                )}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
