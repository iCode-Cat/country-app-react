import React, { useEffect, useState } from "react";
import SingleFlag from "../Components/SingleFlag";

const Flags = () => {
  const [country, setCountry] = useState([]);
  const [input, setInput] = useState([]);

  const flagsApi = async () => {
    const api = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await api.json();
    setCountry(data);
    setInput(data);
  };

  const searchHandler = (e) => {
    const value = e.target.value;
    const filter = country.filter((c) => {
      return c.name.toLowerCase().includes(value.toLowerCase());
    });
    setInput(filter);
  };

  useEffect(() => {
    flagsApi();
  }, []);

  return (
    <div className="main-container">
     <div className="input-container">
     <input className="input" placeholder='Search for a country' type="search" onChange={searchHandler} />
     <div className="input region"> Filter by Region</div>
      
     </div>
     <div className="flags">
      {input.map((input) => {
        return <SingleFlag key={Math.random() * 19999} input={input} />;
      })}
    </div>
    </div>
  );
};

export default Flags;
