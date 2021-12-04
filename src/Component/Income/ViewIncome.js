import React, {useState, useContext} from 'react';
import { ContextApi } from '../../ContextApi/ContextApi'
import SmallViewIncm from '../SmallViewAddItem/SmallViewIncm'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewIncome.css';

const ViewIncome=()=>{
  
  const [listOfSmallViewIncm, setListOfSmallViewIncm] = useContext(ContextApi).listOfSmallViewIncm;
  

  return (
    <div className="item-list-view-income ">

      {listOfSmallViewIncm.map((i, idx)=> <SmallViewIncm key={idx} incmResult={i} /> )}

    </div>
  );
}

export default ViewIncome;
