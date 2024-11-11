import * as Sentry from "@sentry/react";
import { Features, Hero, Highlights, Model, Navbar } from "./components";

const App = () => {
  // return (
  //   <button
  //     onClick={() => {
  //       throw new Error("This is your first error!");
  //     }}
  //   >
  //     Break the world
  //   </button>
  // );
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
    </main>
  );
};

export default Sentry.withProfiler(App);
