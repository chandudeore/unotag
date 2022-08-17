import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import "../style/Create.css";

export default function Create() {
  const data = {
    fname: "",
    lname: "",
    email: "",
    dateOfBirth: "",
    description: "",
  };
  const [deal, setDeal] = useState(data);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeal({ ...deal, [name]: value });
  };
  const userCollectionRef = collection(db, "user");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(userCollectionRef, deal);
      navigate("/view");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-label">
            <label htmlFor="fname">First-Name &nbsp;</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your First Name"
              name="fname"
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="form-label">
            <label htmlFor="lname">Last-Name &nbsp;</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="lname"
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="form-label">
            <label htmlFor="email">Email &nbsp;</label>
            <br />
            <input
              type="email"
              onChange={handleChange}
              placeholder="Enter Your Email"
              name="email"
              required
            />
          </div>
          <br />
          <div className="form-label">
            <label htmlFor="dob">Date-Of-Birth &nbsp;</label>
            <br />
            <input type="date" name="dateOfBirth" onChange={handleChange} />
          </div>
          <br />
          <div className="form-label">
            <label htmlFor="description">Description &nbsp;</label>
            <br />
            <textarea
              name="description"
              onChange={handleChange}
              required
              placeholder="Intro About Yourself"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="link2">
              Save
            </button>
          </div>
        </form>
      </div>
      {/* Back to Home Page Link */}
      <div>
        <Link to={"/"} className="btn2">
          Home
        </Link>
      </div>
    </>
  );
}
