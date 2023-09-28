import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./Components/Blogs";
import NavBar from "./Components/NavBar";
import Authors from "./Components/Authors";
import Post1 from "./Components/Post1";
import PostDetail from "./Components/PostDetail";
import Contact from "./Components/Contact";
import HaroonPost from "./Components/Haroon/HaroonPost";
import ZohaibPost1 from "./Components/ZohaibPost.js/ZohaibPost1";
import AbbasPost from "./Components/AbbasPost.js/AbbasPost";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#272c3e";

      document.title = "BLOGS - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";

      document.title = "BLOGS - Light Mode";
    }
  };

  return (
    <div>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<Blogs mode={mode} />} />
        </Routes>

        <Routes>
          <Route path="/Authors" element={<Authors mode={mode} />} />
        </Routes>
        <Routes>
          <Route path="/Posts" element={<Post1 mode={mode} />} />
        </Routes>

        <Routes>
          <Route path="/learn" element={<PostDetail mode={mode} />} />
        </Routes>

        <Routes>
          <Route path="/Shahid" element={<Post1 mode={mode} />} />
        </Routes>

        <Routes>
          <Route path="/Contact" element={<Contact mode={mode} />} />
        </Routes>

        <Routes>
          <Route path="/HaroonPost" element={<HaroonPost mode={mode} />} />
        </Routes>

        <Routes>
          <Route path="/Haroon" element={<HaroonPost mode={mode} />} />
        </Routes>

        <Routes>
          <Route path="/ZohaibPost" element={<ZohaibPost1 mode={mode} />} />
        </Routes>

        <Routes>
          <Route path="/AbbasPost" element={<AbbasPost mode={mode} />} />
        </Routes>


      </Router>
    </div>
  );
}

export default App;
