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

  return (
    <div className="each-flag-container">
      <h1>{country.name}</h1>
    </div>
  );
};

export default EachFlag;
