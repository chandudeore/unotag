import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";

export default function View() {
  const [user, setUser] = useState([]);

  const userCollectionRef = collection(db, "user");

  const getData = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(user);
  return (
    <>
      <div
        style={{
          width: "1000px",
        }}
      >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item) => {
              return (
                <>
                  <tr>
                    <td>
                      {item.fname} {item.lname}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{item.description}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <Link
          to="/"
          style={{
            border: "1px solid gray",
            cursor: "pointer",
            textDecoration: "none",
            color: "#ffffff",
            background: "gray",
            padding: "10px 20px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          Home
        </Link>
      </div>
    </>
  );
}
