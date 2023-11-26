import React, { useState } from "react";

export default function Todo() {
  var [activity, setActivity] = useState("");
  var [listData, setlistData] = useState([]);
  function addActivity() {
   setlistData((listData)=>{
    var updatedData = [...listData, activity];
    setActivity("")
    return updatedData;
   
   })
  }
  
  function removeActivity(i){
    var updatelistData = listData.filter((elem,id)=>{
      return i!==id;
    }) 
    setlistData(updatelistData)
   }


   function removeAll(){
    setlistData([])
   }

  return (
    <>
      <div className="container">
        <div className="header"> TODO LIST</div>
        <input
          type="text"
          placeholder="Enter Your Activity"
          value={activity}
          onChange={(e) => {
            setActivity(e.target.value);
          }}
        />
        <button onClick={addActivity}>Add Activity</button>
<p className="List-heading">Here is Your List <i class="ri-list-check"></i></p>
{
  listData != [] && listData.map((data,i)=>{
    return( 
      <>
        <p key={i}>
        <div className="listData">{data}</div>
        <div className="btn"><button onClick={()=>removeActivity(i)}>Remove-</button></div>
        </p>
      </>
    )
  })
}
{
  listData.length>=1?<button onClick={removeAll}>Remove All</button>:""
}
      </div>
    </>
  );
}
