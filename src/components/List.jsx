import React from "react";
import Card from "./Card";

const List = (props) => {
  return (
    <>
    {
      props.userInfo.length> 0 ? (<>    {props.userInfo.map((info) => {
        return (
          <Card css={"card-mt"} key={info.email}>
            <div className="list">
              <p>Name : {info.name}</p>
              <p>Place : {info.place}</p>
              <p>Email : {info.email}</p>
            </div>
          </Card>
        );
      })}</>) : (<>
       <Card css={"card-mt"} >
        <p>Add new User!!!</p>
        </Card></>)
    } 
  
    </>
  );
};

export default List;
