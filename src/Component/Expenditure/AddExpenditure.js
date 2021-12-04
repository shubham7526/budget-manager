import React, {useState, useContext} from 'react';
import { useForm } from "react-hook-form";
import DateTimePicker from 'react-datetime-picker';
import SmallViewExp from '../SmallViewAddItem/SmallViewExp';
import { ContextApi } from '../../ContextApi/ContextApi';
import { Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddExpenditure.css';

const AddExpenditure=({handleShowExpenditure, handleCloseExpenditure, showExpenditure})=>{

  const [dateValue, setDateValue] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const[id, setId]=useState(0);
  const[listOfSmallViewExp, setListOfSmallViewExp]= useContext(ContextApi).listOfSmallViewExp;
  const deleteItem = useContext(ContextApi).deleteItem;

  const onSubmit = (data, evt) => {
      data.date= dateValue.toLocaleDateString();
      
      data.id=id;
      setId(id+1);
      setResult(data);
      let newList = [data, ...listOfSmallViewExp];
      setListOfSmallViewExp(newList);
      evt.target.reset();
  }


  console.log(listOfSmallViewExp)

  return (
    <Modal show={showExpenditure} onHide={handleCloseExpenditure} className="model-add-expenditure">
        <Modal.Header className="model-header d-block" >
            <Modal.Title className="model-heading d-block">Expense Discription</Modal.Title>
        </Modal.Header>
        <Modal.Body className="model-add-expenditure d-flex row">
            <div className="exp-list col-6">
            {listOfSmallViewExp.map((i, idx)=> <SmallViewExp key={idx} expResult={i} deleteItem={deleteItem}/> )}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-add-income col-6 d-flex flex-column justify-content-around align-items-sm-end p-3" >
            
            <div>
                <label>Product/Services: </label>
                <input {...register("product")} placeholder="Product/Services" />
              </div>
              <div>
                <label>Quantity:</label>
                <input type="number" {...register("quantity")} placeholder="Quantity" />
              </div>
              <div>
                <label>Total Price:</label>
                <input type="number" {...register("totalPrice")} placeholder="Total Price" />
              </div>
              <DateTimePicker format="dd-MM-y" name="date" value={dateValue} onChange={(value)=>{ setDateValue(value)}} clearIcon=""/>
              <input type="submit" />
            </form>
        </Modal.Body>
        <Modal.Footer className="model-footer">
            <Button variant="primary" onClick={handleCloseExpenditure}> Close </Button>
        </Modal.Footer>
    </Modal>
  );
}

export default AddExpenditure;
