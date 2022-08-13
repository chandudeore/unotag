import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";

export default function Create() {
  const data = {
    fname: "",
    lname: "",
    email: "",
    dateOfBirth: "",
    description: "",
  };
  const [deal, setDeal] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeal({ ...deal, [name]: value });
  };
  const handleCollectionRef = collection(db, "user");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await addDoc(handleCollectionRef, deal);
      console.log(deal);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First-Name</label>
          <br />
          <input type="text" placeholder="Enter Your First Name" name="fname" />
          <br />
          <label htmlFor="lname">Last-Name</label>
          <br />
          <input type="text" placeholder="Enter Your Last Name" name="lname" />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" placeholder="Enter Your Email" name="email" />
          <br />
          <label htmlFor="dob">Date-Of-Birth</label>
          <br />
          <input type="date" name="dateOfBirth" />
          <br />
          <label htmlFor="description">Short-Description-About-Yourself</label>
          <br />
          <textarea name="description"></textarea>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
      {/* Back to Home Page Link */}
      <div>
        <Link to={"/"}>Home</Link>
      </div>
    </>
  );
}
