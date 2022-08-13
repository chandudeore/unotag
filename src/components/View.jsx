import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function View() {
  const getData = () => {
    const data = JSON.parse(localStorage.getItem("user"));
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div></div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
