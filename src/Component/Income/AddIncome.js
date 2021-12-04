import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import DateTimePicker from 'react-datetime-picker';
import SmallViewIncm from '../SmallViewAddItem/SmallViewIncm';
import { ContextApi } from '../../ContextApi/ContextApi';
import { Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddIncome.css';

const AddIncome=({handleShowIncome, handleCloseIncome, showIncome})=>{
  const [dateValue, setDateValue] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const[listOfSmallViewIncm, setListOfSmallViewIncm]= useContext(ContextApi).listOfSmallViewIncm;
  const deleteItem = useContext(ContextApi).deleteItem;
  const[id, setId]=useState(0);


  const onSubmit = (data, evt) => {
    data.date= dateValue.toLocaleDateString();

    
    console.log(new Date(data.date).getDate(), 'SDC');
    
    data.id=id;
    setId(id+1);
    setResult(data);
    let newList = [data, ...listOfSmallViewIncm];
    setListOfSmallViewIncm(newList);
    evt.target.reset();
  }

  

  return (
    <Modal show={showIncome} onHide={handleCloseIncome} className="model-add-income">
      <Modal.Header className="model-header d-block" >
          <Modal.Title className="model-heading d-block">Income Discription</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex row model-add-income">
          <div className="incm-list col-6">
            {listOfSmallViewIncm.map((i, idx)=> <SmallViewIncm key={idx} incmResult={i} deleteItem={deleteItem}/> )}
          </div>          
          <form onSubmit={handleSubmit(onSubmit)} className="form-add-income col-6 d-flex flex-column justify-content-around align-items-sm-end p-5" >
              <div>
                <label>Income Source: </label>
                <input type="text" {...register("incomeSource")} placeholder="Income Source" className="p-1"/>
              </div>
              <div>
                <label>Income (Rs.):</label>
                <input type="number" {...register("income")} placeholder="Income (Rs.)" className="p-1"/>
              </div>
              <DateTimePicker format="dd-MM-y" name="date" value={dateValue} onChange={(value)=>{ setDateValue(value)}} clearIcon=""/>
              <input type="submit" />
          </form>                                             
      </Modal.Body>
      <Modal.Footer className="model-footer">
          <Button variant="secondary" onClick={handleCloseIncome}>
              Close
          </Button>
      </Modal.Footer>
    </Modal>
    
  );
}

export default AddIncome;
