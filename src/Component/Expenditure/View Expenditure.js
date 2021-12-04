import React, {useContext} from 'react';
import { ContextApi } from '../../ContextApi/ContextApi'
import SmallViewExp from '../SmallViewAddItem/SmallViewExp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewExpenditure.css';

const ViewExpenditure=()=>{

  const[listOfSmallViewExp, setListOfSmallViewExp]= useContext(ContextApi).listOfSmallViewExp;
  return (
        
        <div className="item-list-view-expenditure ">          
          {listOfSmallViewExp.map((i, idx)=> <SmallViewExp key={idx} expResult={i}/> )}        
        </div>
  );
}

export default ViewExpenditure;
