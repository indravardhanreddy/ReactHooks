import React from "react";
import { useEffect, useState } from "react";

const EffectTutorial = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };
  
  useEffect(() => {
    let urlLink= "https://jsonplaceholder.typicode.com/comments"
    fetch(urlLink).then((response) =>
      response.json().then((json) => setData(json))
    );
  }, []);

  return (
    <>
    <div>
      {data.map(d=>
      <div key={d.id}>
        <div >Email : {d.email}</div>
        <div>Name : {d.name}</div>
      </div>
      )}
      </div>
      <button onClick={handleAdd}>addition</button>
      <div>{count}</div>
    </>
  );
};

export default EffectTutorial;
