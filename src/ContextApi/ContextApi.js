import React, { createContext, useState } from "react";

export const ContextApi = createContext();

export const CountContextApp = (props) => {
  const[listOfSmallViewExp, setListOfSmallViewExp]= useState([]);
  const[listOfSmallViewIncm, setListOfSmallViewIncm]= useState([]);

  const deleteItem=(id)=>{
    let newExpList = listOfSmallViewExp.filter(item=>item.id!==id);
    setListOfSmallViewExp(newExpList);
    let newIncmList = listOfSmallViewIncm.filter(item=>item.id!==id);
    setListOfSmallViewIncm(newIncmList);
  }

  const filter = (filterOption)=>{
      if (filterOption==="day"){
      }
      if(filterOption==="month"){
        setListOfSmallViewExp(listOfSmallViewExp.filter(i=>  new Date(i.date).getDate()==="month" )) 
        
      }
      if(filterOption==="year"){
        
      }

  }


  const obj = {
    listOfSmallViewExp: [listOfSmallViewExp, setListOfSmallViewExp],
    listOfSmallViewIncm: [listOfSmallViewIncm, setListOfSmallViewIncm],
    deleteItem: deleteItem,
    filter: filter,
  };

  return (
    <ContextApi.Provider value={obj}>{props.children}</ContextApi.Provider>
  );
};

