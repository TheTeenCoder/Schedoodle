import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav>
      <ol className="flex justify-center space-x-4 underline">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/app">App</Link>
        </li>
        <li>
          <Link to="/about">Home</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
