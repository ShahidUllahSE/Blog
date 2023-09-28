import React, { useState } from "react";
import { Link } from "react-router-dom";

function HaroonPost(props) {
  const [count, setcount] = useState(0);

  const handleInc = () => {
    setcount(count + 1);
  };

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#272c3e" : "white",
  };
  return (
    <div>
      <section className="text-gray-600 body-font" style={myStyle}>
        <div
          className="container px-5 py-24 mx-auto flex flex-wrap"
          style={myStyle}
        >
          <h2
            className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5"
            style={myStyle}
          >
            AI deep Learner
          </h2>

          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-base">
              {" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in justo et tortor convallis lacinia. Fusce sit amet sodales
                urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam in justo et tortor convallis lacinia. Fusce sit amet
                sodales urna. Sed vel ex id quam tincidunt suscipit vel eu
                elit.Sed vel ex id quam tincidunt suscipit vel eu elit.
              </p>{" "}
              Taxidermy bushwick celiac master cleanse microdosing seitan.
              Fashion axe four dollar toast truffaut, direct trade kombucha
              brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki
              drinking vinegar tacos.
            </p>
            <div className="flex md:mt-4 mt-6">
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded"
                onClick={handleInc}
              >
                Like{count}
              </button>
              <Link
                className="text-indigo-500 inline-flex items-center ml-4"
                to={"/learn"}
              >
                See Details
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="flex items-center justify-center ">
              <span>
                {" "}
                <strong> dated: </strong> 25 Sep 2023{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HaroonPost;
