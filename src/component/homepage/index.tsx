import React from "react";
import { Heading } from "../shared/typography";

const CDashboard = () => {
  return (
    <section className="homepage">
      <div>
        <div className="space__details">
          <Heading.Five
            classname="text-center"
            text="SO, YOU WANT TO TRAVEL TO"
          />
          <Heading.One classname="text-center" text="Space" />
          <p className="text-center">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div>
        <button className="btn btn-explore">Explore</button>
      </div>
    </section>
  );
};

export default CDashboard;
