import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function View() {
  const [user, setUser] = useState([]);

  const getData = async () => {
    try {
      await fetch("http://localhost:3001/user")
        .then((res) => res.json())
        .then((res) => setUser(res))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
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
                  <tr key={item.id}>
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
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
