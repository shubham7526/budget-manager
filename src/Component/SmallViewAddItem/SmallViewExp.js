import React, { useContext } from 'react';
import { ContextApi } from '../../ContextApi/ContextApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SmallViewExp.css';

const SmallViewExp=({expResult:{ product, totalPrice, date, id}})=>{

    const deleteItem = useContext(ContextApi).deleteItem;

    return (
        <div className="d-flex bg-light m-3 justify-content-between small-view-add-item">
            <div>{date}</div>
            <div>{product}</div>
            <div>Rs.{totalPrice}</div>
            <button type="button" class="btn btn-danger" onClick={()=> deleteItem(id)}> <i className="bi bi-trash">Del</i> </button>
    </div>
  );
}

export default SmallViewExp;
