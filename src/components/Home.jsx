import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

export default function Home() {
  return (
    <div>
      <div className="menu">
        <button className="btn">
          <Link to="/view" className="link">
            View
          </Link>
        </button>
        <button className="btn">
          <Link to="/create" className="link">
            Create
          </Link>
        </button>
      </div>
    </div>
  );
}
