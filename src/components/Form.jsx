import React, { useState } from "react";
import Card from "./Card";
const Form = (props) => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [email, setEmail] = useState("");

  const addUser = (event) => {
    event.preventDefault();
    if (
      name.trim().length === 0 ||
      place.trim().length === 0 ||
      email.trim().length === 0
    ) {
      confirm("Please fill information completely");
      return;
    }
    const userInfo ={
      name,
      place,
      email,
    }
    props.getUserInfo(userInfo);
    setName("");
    setPlace("");
    setEmail("");
  };

  return (
    <Card>
      <form onSubmit={addUser}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="form-div">
          <label htmlFor="place">Place</label>
          <input
            type="text"
            id="place"
            value={place}
            onChange={(event) => {
              setPlace(event.target.value);
            }}
          />
        </div>

        <div className="form-div">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn">
          AddUser
        </button>
      </form>
    </Card>
  );
};

export default Form;
