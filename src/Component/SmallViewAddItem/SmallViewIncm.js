import React, { useContext } from 'react';
import { ContextApi } from '../../ContextApi/ContextApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SmallViewIncm.css';

const SmallViewIncm=({incmResult})=>{

  const deleteItem = useContext(ContextApi).deleteItem;


    return (
        <div className="d-flex bg-light m-3 justify-content-between small-view-add-item">
            <div>{incmResult.date}</div>
            <div>{incmResult.incomeSource}</div>
            <div>Rs.{incmResult.income}</div>
            <button type="button" class="btn btn-danger" onClick={()=> deleteItem(incmResult.id)}> DEl </button>
    </div>
  );
}

export default SmallViewIncm;
