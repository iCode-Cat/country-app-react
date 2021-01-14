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
    
    subregion,capital, topLevelDomain, languages, borders, currencies } = country;
    
    
    if(country.currencies) {
      console.log(country.currencies.map((all) => {console.log(all);}));
      console.log(languages);
      console.log(country);
    }
    

  return (
    <div className="article">
    <button onClick={()=>{ props.history.push('/')}}>Back</button>
      <div className="each-flag-container">
      <div className="each-flag-image">
        <img src={flag} alt={name+ '-' + 'flag'}/>
      </div>
      {/* information part */}
     
      <div className="each-flag-information">
      <p className="each-name">{name}</p>
      <div className="each-flag-column-1">
     
        <p className="each-native"><strong>Native Name:</strong>{nativeName}</p>
        <p className="each-population"><strong>Population:</strong>{population}</p>
        <p className="each-region"><strong>Region:</strong>{region}</p>
        <p className="each-sub-region"><strong>Sub Region:</strong>{subregion}</p>
        <p className="each-capital"><strong>Capital:</strong>{capital}</p>
      </div>
      <div className="each-flag-column-2">
        <p className="each-domain"><strong>Top Level Domain:</strong>{topLevelDomain}</p>
        { country.currencies ? <p className="each-currencies"><strong>Currencies:</strong>{country.currencies.map((all)=>{return <span>{all.code}</span>})} </p>: ''}
       { languages ? <p className="each-languages"><strong>Languages:</strong>{languages.map((all)=>{return <span>{all.name}</span>})}</p> : ''}

      </div>
      <div className="each-flag-borders"><strong>Border Countries:</strong>{borders}</div>
      </div>
    </div>
    </div>
  );
};

export default EachFlag;
