import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SingleFlag = ({ input }) => {
  const [countryName, setCountryName] = useState();

    const {flag, name, population, region,capital} = input;
  console.log(input);
  return (
    <div className="flag-container country">
      <NavLink to={{ pathname: "/" + name }}>
        <div className="single-flag" onClick={() => {setCountryName(name);}} >
          <div className="country-flag-container"><img className="country-flag" src={flag} alt={name.toLowerCase() + "-" + 'flag'}/></div>
          <div className="country-information">
          <h1 className="country-name">{name}</h1>
          <div className="country-gap">
          <p className="country-population"> <strong>Population:</strong> {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          <p className="country-region"><strong>Region:</strong> {region}</p>
          <p className="country-capital"><strong>Capital:</strong> {capital}</p>
          </div>
         </div>

        </div>
      </NavLink>
    </div>
  );
};

export default SingleFlag;
