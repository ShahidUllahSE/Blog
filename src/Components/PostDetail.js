import React from "react";

function PostDetail(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#272c3e" : "white",
  };
  return (
    <div style={myStyle}>
      <p>
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
    </div>
  );
}

export default PostDetail;
