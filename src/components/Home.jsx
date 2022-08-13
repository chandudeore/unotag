import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <button>
          <Link to="/view">View</Link>
        </button>
        <button>
          <Link to="/create">Create</Link>
        </button>
      </div>
    </div>
  );
}
