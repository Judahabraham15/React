import React from "react";
import { useState } from "react";
const Profile = () => {
  const [info, setinfo] = useState(({ name: "", age: "" }));
  const handleChange = (e) => {
    const { name, value } = e.target;
    setinfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
  return (
    <div>
      <h1>User Profile</h1>

      <label>
        NAME:
        <input
          type="text"
          name="name"
          value={info.name}
          onChange={handleChange}          
        />
      </label>
      <label>
        AGE:
        <input type="number" name="age" value={info.age} onChange={handleChange} />
      </label>
 
        <h1>Profile Information</h1>
        <p>Name: {info.name}</p>
        <p>Age: {info.age}</p>
     
    </div>
  );
};

export default Profile;
