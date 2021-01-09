import React, { useState, useEffect } from "react";

const EachFlag = (props) => {
  const [country, setCountry] = useState([]);
  const [url, setUrl] = useState(props.match.url);

  const flagsApi = async () => {
    const api = await fetch(`https://restcountries.eu/rest/v2/name${url}`);
    const data = await api.json();
    setCountry(data[0]);
  };

  useEffect(() => {
    flagsApi();
  }, []);

  const {name, flag, nativeName, population,region, 
    
    subRegion,capital, topLevelDomain, languages } = country;
    const x =  country.currencies
    console.log(JSON.stringify(x));
    
    

  return (
    <div className="each-flag-container">
      <div className="each-flag-image">
        <img src={flag} alt={name+ '-' + 'flag'}/>
      </div>
      {/* information part */}
      <div className="each-flag-information">
      <div className="each-flag-column-1">
      <p className="each-name">{name}</p>
        <p className="each-native">{nativeName}</p>
        <p className="each-population">{population}</p>
        <p className="each-region">{region}</p>
        <p className="each-sub-region">{subRegion}</p>
        <p className="each-capital">{capital}</p>
      </div>
      <div className="each-flag-column-2">
        <p className="each-domain">{topLevelDomain}</p>
         


      </div>
      <div className="each-flag-borders"></div>
      </div>
    </div>
  );
};

export default EachFlag;
