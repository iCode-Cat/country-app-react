import React, { useEffect, useState } from "react";
import SingleFlag from "../Components/SingleFlag";

const Flags = () => {
  const [country, setCountry] = useState([]);
  const [input, setInput] = useState([]);
  const [filter , setFilter] = useState(false);
  const [regions, setRegions ] = useState(['AFRICA' , 'AMERICAS' , 'ASIA' , 'EUROPE' ,  'OCEANIA'  ])


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


  const regionHandler = () => {
    setFilter(!filter)
    setInput(country);
  }

 

  const filterRegion = (region) => {
    const filterRegion = country.filter((c) => {return c.region.toUpperCase().includes(region)});
    setInput(filterRegion);
  }

  useEffect(() => {
    flagsApi();
  }, []);

  return (
    <div className="main-container">
     <div className="input-container">
     <input className="input" placeholder='Search for a country' type="search" onChange={searchHandler} />
   <div className="region-container">
   <div onClick={regionHandler} className={`input region ${filter && 'active'}`} > Filter by Region</div>
     <div className={`region-options ${filter && 'display'}`}><ul>
     {regions.map((region) => {return <li onClick={(e)=>{filterRegion(e.target.innerHTML)}}>{region}</li>})}
     </ul></div>
   </div>
      
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
