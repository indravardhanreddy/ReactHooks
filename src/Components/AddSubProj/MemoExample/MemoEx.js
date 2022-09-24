import React, { useEffect, useState } from 'react';

const MemoEx = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let urlLink= "https://jsonplaceholder.typicode.com/comments"
        fetch(urlLink).then((response) =>
          response.json().then((json) => setData(json))
        );
      }, []);

      

      const findLongestName = (comments)=>{
        if(!comments) return null;

      let longestName="";
      for ( let i=0; i<comments.length;i++){
        let currentName= comments[i].name;
        if(currentName.length > longestName.length){
            longestName= currentName;
        }
      }
      console.log("computed bro")
      return longestName;
    }
  return (
    <div>{findLongestName(data)}</div>
  )
}

export default MemoEx