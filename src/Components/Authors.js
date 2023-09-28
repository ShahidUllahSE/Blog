import React from "react";
import { Link } from "react-router-dom";
function Authors(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#272c3e" : "white",
  };
  return (
    <>
      <h1 style={myStyle}>
        <strong>Shahid Profile</strong>
      </h1>
      <p style={myStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in justo
        et tortor convallis lacinia. Fusce sit amet sodales urna. Sed vel ex id
        quam tincidunt suscipit vel eu elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam in justo et tortor convallis
        lacinia. Fusce sit amet sodales urna. Sed vel ex id quam tincidunt
        suscipit vel eu elit. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam in justo et tortor convallis lacinia. Fusce sit amet
        sodales urna. Sed vel ex id quam tincidunt suscipit vel eu elit. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam in justo et
        tortor convallis lacinia. Fusce sit amet sodales urna. Sed vel ex id
        quam tincidunt suscipit vel eu elit.
      </p>
      <br />

      <Link
        to="/Shahid"
        className="text-indigo-500 inline-flex items-center ml-4"
        style={myStyle}
      >
        Shahid Ullah
        <svg
          fill="/none"
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
      <br />
      <br />
      <h1 style={myStyle}>
        {" "}
        <strong> Haroon Profile</strong>{" "}
      </h1>
      <p style={myStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in justo
        et tortor convallis lacinia. Fusce sit amet sodales urna. Sed vel ex id
        quam tincidunt suscipit vel eu elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam in justo et tortor convallis
        lacinia. Fusce sit amet sodales urna. Sed vel ex id quam tincidunt
        suscipit vel eu elit. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam in justo et tortor convallis lacinia. Fusce sit amet
        sodales urna. Sed vel ex id quam tincidunt suscipit vel eu elit. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam in justo et
        tortor convallis lacinia. Fusce sit amet sodales urna. Sed vel ex id
        quam tincidunt suscipit vel eu elit.
      </p>

      <br />
      <Link
        to="/Haroon"
        className="text-indigo-500 inline-flex items-center ml-4"
        style={myStyle}
      >
        Muhammad Haroon
        <svg
          fill="/none"
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
    </>

    // <div  style={myStyle}>
    //   <a>Muhammad Haroon</a>
    //   <br/>
    //   <a>Shahid Ullah</a>
    // </div>
  );
}

export default Authors;
