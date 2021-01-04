import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SingleFlag = ({ input }) => {
  const [countryName, setCountryName] = useState();

  return (
    <div className="flag-container">
      <NavLink to={{ pathname: "/" + input.name }}>
        <h1
          onClick={() => {
            setCountryName(input.name);
          }}
        >
          {input.name}
        </h1>
      </NavLink>
    </div>
  );
};

export default SingleFlag;
