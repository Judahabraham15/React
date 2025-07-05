import React from "react";
import { useState } from "react";

const Password = () => {
  const [showpassword, setshowPassword] = useState(false);
  const handleChange = () => {
    setshowPassword((prev) => !prev);
    setTimeout(() => {
      setshowPassword(false);
    }, 2000);
  };
  return (
    <div>
      <input
        type={showpassword ? "text" : "password"}
        placeholder="Enter password"
      />

      <input type="checkbox" checked={showpassword} onChange={handleChange} />
    </div>
  );
};

export default Password;
